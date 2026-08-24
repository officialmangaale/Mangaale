import { useEffect, useRef } from 'react'
import useMotionPrefs from '../../hooks/useMotionPrefs'

/**
 * Scroll-linked 3D depth for a block of content.
 *
 * As a block scrolls up through the viewport it rises out of the background
 * towards the reader, rests while it is the section being read, then tilts and
 * recedes into the Z axis as it leaves — so scrolling reads as moving through
 * layers rather than sliding a flat page.
 *
 * WHY A SHARED ENGINE INSTEAD OF useScroll PER SECTION
 * ---------------------------------------------------
 * framer-motion's `useScroll({ target })` re-measures its target as you
 * scroll. With a depth wrapper on every section that is ~20 measurements per
 * frame, which is exactly the per-frame layout work this site was just cleaned
 * of. Instead there is one module-level engine here that:
 *
 *   - caches each element's *layout* position once (offsetTop chain and
 *     offsetHeight are unaffected by transforms, so reading them cannot feed
 *     back into the transform we just wrote);
 *   - does ZERO layout reads per frame — a frame is `window.scrollY` plus
 *     arithmetic;
 *   - only processes the two or three blocks an IntersectionObserver says are
 *     near the viewport;
 *   - only schedules a frame when a scroll or resize actually happened.
 *
 * It fails open: nothing is transformed until the engine touches an element,
 * so if it never runs (reduced motion, an error, JS disabled) every block
 * renders exactly as it does today, fully visible.
 *
 * Only `transform` and `opacity` are written — both compositor properties.
 */

/*
 * The visual shrink is carried by translateZ against the perspective, which is
 * what makes it read as depth rather than as a flat scale. At perspective 1400
 * a z of -95 lands at 1400/1495 = 0.936 — inside the 0.93-0.97 the design
 * calls for, so no separate scale factor is needed.
 */
const PRESETS = {
  section: {
    perspective: 1400,
    enterY: 56,
    enterZ: -70,
    enterOpacity: 0.4,
    exitY: -52,
    exitZ: -95,
    exitRotateX: 3.2,
    exitOpacity: 0.6
  },
  /*
   * Gentler: for closing CTAs and anything that should stay readable while it
   * leaves rather than dimming away.
   */
  soft: {
    perspective: 1600,
    enterY: 40,
    enterZ: -52,
    enterOpacity: 0.55,
    exitY: -34,
    exitZ: -62,
    exitRotateX: 2,
    exitOpacity: 0.82
  }
}

/*
 * Mobile keeps the same choreography at roughly half the travel: less Z, less
 * rotation, less drift. Enough to feel layered, not enough to cost frames or
 * to be uncomfortable on a small screen held close to the face.
 */
const MOBILE_DAMPING = 0.55

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v)
const easeOut = (t) => 1 - Math.pow(1 - t, 3)
const smoothstep = (t) => t * t * (3 - 2 * t)
const lerp = (a, b, t) => a + (b - a) * t

const registry = new Map()
const active = new Set()

let observer = null
let frame = 0
let listening = false

/**
 * Layout position of an element in document space.
 *
 * offsetTop/offsetHeight describe the *layout* box, which transforms do not
 * affect — unlike getBoundingClientRect, which returns the transformed box and
 * would feed our own output back in as the next frame's input.
 */
const measure = (el) => {
  let top = 0
  let node = el
  while (node) {
    top += node.offsetTop
    node = node.offsetParent
  }
  return { top, height: el.offsetHeight }
}

const update = () => {
  frame = 0
  if (active.size === 0) return

  const viewport = window.innerHeight
  if (!viewport) return

  const scrollY = window.scrollY

  for (const el of active) {
    const entry = registry.get(el)
    if (!entry) continue

    const { preset, damping, box } = entry
    const top = box.top - scrollY
    const bottom = top + box.height

    /*
     * Arrival: 0 when the block's top edge is at the bottom of the viewport,
     * 1 by the time that edge is a fifth of the way up it.
     */
    const enter = clamp01((viewport - top) / (viewport * 0.8))

    /*
     * Departure, gated on BOTH edges so a tall block is not already receding
     * while most of it is still being read:
     *   byBottom - its bottom edge has climbed into the upper viewport
     *   byTop    - its top edge has passed the top of the viewport
     * Taking the smaller of the two means whichever happens last wins.
     */
    const exitSpan = viewport * 0.85
    const byBottom = exitSpan - bottom
    const byTop = viewport * 0.12 - top
    const exit = clamp01(Math.min(byBottom, byTop) / exitSpan)

    const e = easeOut(enter)
    const x = smoothstep(exit)

    const y = (preset.enterY * (1 - e) + preset.exitY * x) * damping
    const z = (preset.enterZ * (1 - e) + preset.exitZ * x) * damping
    const rotateX = preset.exitRotateX * x * damping
    const opacity = lerp(preset.enterOpacity, 1, e) * lerp(1, preset.exitOpacity, x)

    el.style.transform =
      'perspective(' + preset.perspective + 'px) ' +
      'translate3d(0, ' + y.toFixed(2) + 'px, ' + z.toFixed(2) + 'px) ' +
      'rotateX(' + rotateX.toFixed(3) + 'deg)'
    el.style.opacity = opacity.toFixed(3)
  }
}

const requestUpdate = () => {
  if (frame || active.size === 0) return
  frame = requestAnimationFrame(update)
}

const reset = (el) => {
  el.style.transform = ''
  el.style.opacity = ''
  el.style.willChange = ''
}

const remeasureAll = () => {
  for (const [el, entry] of registry) entry.box = measure(el)
  requestUpdate()
}

const handleIntersect = (records) => {
  for (const record of records) {
    const el = record.target
    const entry = registry.get(el)
    if (!entry) continue

    if (record.isIntersecting) {
      /*
       * Re-measure on the way in: cheap, rare, and it absorbs any layout shift
       * from content above (late webfonts, a breakpoint swap) without needing
       * a separate watcher for it.
       */
      entry.box = measure(el)
      el.style.willChange = 'transform, opacity'
      active.add(el)
      requestUpdate()
    } else if (active.delete(el)) {
      /*
       * Leave the last written transform in place rather than snapping back to
       * identity — the block is off screen either way, and dropping willChange
       * releases its compositor layer.
       */
      el.style.willChange = ''
    }
  }
}

const ensureListening = () => {
  if (listening || typeof window === 'undefined') return
  listening = true

  window.addEventListener('scroll', requestUpdate, { passive: true })
  window.addEventListener('resize', remeasureAll)
  window.addEventListener('orientationchange', remeasureAll)

  /* Webfonts land after first paint and reflow everything below them. */
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(remeasureAll).catch(() => {})
  }
}

const register = (el, presetName, damping) => {
  if (typeof window === 'undefined' || !window.IntersectionObserver) return

  ensureListening()

  if (!observer) {
    observer = new IntersectionObserver(handleIntersect, {
      /*
       * Start driving a block before it is visible, so it is already on its way
       * in by the time it appears, and keep driving it a little past the top.
       */
      rootMargin: '35% 0px 35% 0px'
    })
  }

  registry.set(el, {
    preset: PRESETS[presetName] || PRESETS.section,
    damping,
    box: measure(el)
  })
  observer.observe(el)
}

const unregister = (el) => {
  if (!registry.has(el)) return
  if (observer) observer.unobserve(el)
  registry.delete(el)
  active.delete(el)
  reset(el)
}

/**
 * Wraps a block of content in scroll-linked depth.
 *
 * `className` and `as` are passed straight through, so this can replace an
 * existing wrapper element in place: it adds no DOM node and changes no layout.
 *
 * @param {'section'|'soft'} variant depth strength
 * @param {string} as element to render (default 'div')
 */
const ScrollDepth = ({
  children,
  className = '',
  as: Tag = 'div',
  variant = 'section',
  id,
  ...rest
}) => {
  const ref = useRef(null)
  const { reduced, isMediumViewport } = useMotionPrefs()

  useEffect(() => {
    const el = ref.current
    if (!el || reduced) return undefined

    register(el, variant, isMediumViewport ? 1 : MOBILE_DAMPING)
    return () => unregister(el)
  }, [reduced, variant, isMediumViewport])

  return (
    <Tag ref={ref} id={id} className={className} {...rest}>
      {children}
    </Tag>
  )
}

export default ScrollDepth
