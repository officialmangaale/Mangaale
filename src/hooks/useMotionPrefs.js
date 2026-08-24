import { useSyncExternalStore } from 'react'
import { useReducedMotion } from 'framer-motion'

const QUERIES = {
  /* Parallax / magnetic / tilt effects need a real mouse, not just a wide screen. */
  isDesktop: '(min-width: 1024px) and (hover: hover) and (pointer: fine)',
  /* These two mirror the Tailwind `md` and `lg` breakpoints used in the markup. */
  isMediumViewport: '(min-width: 768px)',
  isLargeViewport: '(min-width: 1024px)'
}

const KEYS = Object.keys(QUERIES)

const SERVER_SNAPSHOT = { isDesktop: false, isMediumViewport: false, isLargeViewport: false }

/*
 * One shared media-query store for the whole app.
 *
 * ~19 components call this hook. Giving each of them its own matchMedia
 * objects and listeners meant dozens of duplicate subscriptions all computing
 * the same three booleans. There is now a single set of listeners, and every
 * consumer reads the same cached snapshot — so a breakpoint change costs one
 * evaluation rather than one per component.
 */
const store = {
  mediaQueryLists: null,
  snapshot: SERVER_SNAPSHOT,
  listeners: new Set()
}

const readSnapshot = () => {
  const next = {}
  for (const key of KEYS) next[key] = store.mediaQueryLists[key].matches
  return next
}

const isSameSnapshot = (a, b) => KEYS.every((key) => a[key] === b[key])

const init = () => {
  if (store.mediaQueryLists) return
  store.mediaQueryLists = {}
  for (const key of KEYS) store.mediaQueryLists[key] = window.matchMedia(QUERIES[key])
  store.snapshot = readSnapshot()
}

const handleChange = () => {
  const next = readSnapshot()
  // useSyncExternalStore requires a referentially stable snapshot, so only
  // swap the object when a value genuinely changed.
  if (isSameSnapshot(store.snapshot, next)) return
  store.snapshot = next
  for (const listener of store.listeners) listener()
}

const subscribe = (listener) => {
  if (typeof window === 'undefined' || !window.matchMedia) return () => {}

  init()
  store.listeners.add(listener)

  if (store.listeners.size === 1) {
    for (const key of KEYS) {
      const mql = store.mediaQueryLists[key]
      // Safari < 14 only supports addListener
      if (mql.addEventListener) mql.addEventListener('change', handleChange)
      else mql.addListener(handleChange)
    }
    // Catch anything that changed between module load and the first subscribe.
    handleChange()
  }

  return () => {
    store.listeners.delete(listener)
    if (store.listeners.size > 0) return
    for (const key of KEYS) {
      const mql = store.mediaQueryLists[key]
      if (mql.removeEventListener) mql.removeEventListener('change', handleChange)
      else mql.removeListener(handleChange)
    }
  }
}

const getSnapshot = () => {
  if (typeof window === 'undefined' || !window.matchMedia) return SERVER_SNAPSHOT
  init()
  return store.snapshot
}

/**
 * Central switchboard for "how much motion is allowed right now".
 *
 * - `reduced`           : user asked for reduced motion (OS level)
 * - `isDesktop`         : pointer is fine + viewport is wide enough for parallax
 * - `isMediumViewport`  : viewport >= Tailwind `md`
 * - `isLargeViewport`   : viewport >= Tailwind `lg`
 * - `allowPointerMotion`: mouse-tracking / magnetic / tilt effects are OK
 *
 * Everything decorative should gate on these instead of assuming a desktop
 * mouse exists. Functionality never depends on them.
 *
 * The viewport flags exist so a component shipping two different layouts can
 * mount only the one that is actually visible. `hidden lg:block` + `lg:hidden`
 * keeps BOTH trees mounted and running — timers, scroll subscriptions and
 * framer-motion animations all keep ticking inside the display:none branch.
 * See HowItWorksSection and PopularRestaurantsSection.
 *
 * The flags are read synchronously on first render rather than starting at
 * `false`, so a desktop visitor renders the desktop branch on the very first
 * paint instead of flashing the mobile one.
 */
const useMotionPrefs = () => {
  const reduced = useReducedMotion()
  const { isDesktop, isMediumViewport, isLargeViewport } = useSyncExternalStore(
    subscribe,
    getSnapshot,
    () => SERVER_SNAPSHOT
  )

  return {
    reduced: Boolean(reduced),
    isDesktop,
    isMediumViewport,
    isLargeViewport,
    allowPointerMotion: isDesktop && !reduced
  }
}

export default useMotionPrefs
