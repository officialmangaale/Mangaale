import { useRef, useState } from 'react'
import { motion, useInView, useTransform } from 'framer-motion'
import { Bike, Store, User } from 'lucide-react'
import Reveal from '../motion/Reveal'
import ScrollDepth from '../motion/ScrollDepth'
import usePointerParallax from '../../hooks/usePointerParallax'
import useMotionPrefs from '../../hooks/useMotionPrefs'

/**
 * "One Platform. Everyone Connected." — the signature interactive section.
 *
 * A central Mangaale core with three orbiting roles. SVG paths connect them and
 * small light particles travel those paths to represent orders, notifications
 * and delivery requests moving through the platform.
 *
 * The particles are SMIL (`<animateMotion>`), which runs on the main thread and
 * cannot be composited away, so they are mounted only while the stage is on
 * screen. They used to tick for the whole session no matter where the visitor
 * had scrolled to.
 */

const NODES = [
  {
    id: 'restaurant',
    label: 'Restaurant',
    Icon: Store,
    blurb: 'Receives the order instantly, manages the menu and tracks performance from one dashboard.',
    position: 'left-1/2 top-0 -translate-x-1/2',
    tooltip: 'top-full mt-3 left-1/2 -translate-x-1/2',
    depth: 0.6
  },
  {
    id: 'customer',
    label: 'Customer',
    Icon: User,
    blurb: 'Browses nearby restaurants, orders in seconds and follows delivery live.',
    position: 'bottom-[6%] left-0',
    tooltip: 'bottom-full mb-3 left-0',
    depth: 0.85
  },
  {
    id: 'rider',
    label: 'Rider',
    Icon: Bike,
    blurb: 'Accepts nearby tasks, follows an optimised route and tracks earnings per trip.',
    position: 'bottom-[6%] right-0',
    tooltip: 'bottom-full mb-3 right-0',
    depth: 0.85
  }
]

/* Percentage coordinates shared by the SVG lines and the node placement */
const CORE = { x: 50, y: 50 }
const POINTS = {
  restaurant: { x: 50, y: 8 },
  customer: { x: 12, y: 90 },
  rider: { x: 88, y: 90 }
}

const ConnectionLines = ({ animate }) => (
  <svg
    className="absolute inset-0 h-full w-full"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    {Object.values(POINTS).map((p, i) => {
      const d = `M ${p.x} ${p.y} L ${CORE.x} ${CORE.y}`
      return (
        <g key={i}>
          {/*
            Solid stroke rather than a gradient: an objectBoundingBox gradient
            collapses on a perfectly vertical path (zero-width bounding box),
            which made the Restaurant -> core line disappear entirely.
          */}
          <path
            d={d}
            stroke="#0CB79D"
            strokeOpacity="0.4"
            strokeWidth="1.5"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
          {animate && (
            <circle r="0.9" fill="#0CB79D">
              <animateMotion dur={`${2.6 + i * 0.7}s`} repeatCount="indefinite" path={d} />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                dur={`${2.6 + i * 0.7}s`}
                repeatCount="indefinite"
              />
            </circle>
          )}
          {/* return path particle — order flowing back out */}
          {animate && (
            <circle r="0.65" fill="#10C9AA" opacity="0.8">
              <animateMotion
                dur={`${3.4 + i * 0.6}s`}
                repeatCount="indefinite"
                path={`M ${CORE.x} ${CORE.y} L ${p.x} ${p.y}`}
                begin={`${0.9 + i * 0.4}s`}
              />
            </circle>
          )}
        </g>
      )
    })}
  </svg>
)

const EcosystemSection = () => {
  const stageRef = useRef(null)
  const { x, y } = usePointerParallax(stageRef, { stiffness: 70, damping: 22 })
  const { reduced, allowPointerMotion } = useMotionPrefs()
  const [hovered, setHovered] = useState(null)
  const stageInView = useInView(stageRef, { amount: 0.15 })

  const rotateY = useTransform(x, [-0.5, 0.5], reduced ? [0, 0] : [6, -6])
  const rotateX = useTransform(y, [-0.5, 0.5], reduced ? [0, 0] : [-5, 5])

  return (
    <section className="m-section relative w-full overflow-hidden bg-gradient-to-b from-mangaale-tint/70 via-white to-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mangaale-primary/8 blur-[130px]"
      />

      <ScrollDepth className="m-container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">The Mangaale Network</p>
          <h2 className="section-title mt-5">
            One Platform.
            <br />
            <span className="text-gradient-brand">Everyone Connected.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[1rem] leading-relaxed text-mangaale-subtext sm:text-[1.08rem]">
            Connecting restaurants, customers and riders through one seamless local delivery
            ecosystem.
          </p>
        </Reveal>

        {/* ---- interactive stage ---- */}
        <Reveal delay={0.1} className="mt-14 lg:mt-20">
          <div
            ref={stageRef}
            className="perspective-1000 relative mx-auto aspect-[4/3.4] w-full max-w-[300px] sm:max-w-[460px] lg:aspect-[16/9] lg:max-w-[860px]"
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="relative h-full w-full"
            >
              <ConnectionLines animate={!reduced && stageInView} />

              {/* --- central Mangaale core --- */}
              <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  {/* pulse rings */}
                  {!reduced && (
                    <>
                      <span className="absolute inset-0 rounded-[1.6rem] bg-mangaale-primary/30 animate-pulse-ring" />
                      <span
                        className="absolute inset-0 rounded-[1.6rem] bg-mangaale-primary/20 animate-pulse-ring"
                        style={{ animationDelay: '1.5s' }}
                      />
                    </>
                  )}
                  <div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-[1.6rem] bg-gradient-to-br from-mangaale-bright via-mangaale-primary to-mangaale-secondary shadow-glow-lg sm:h-[96px] sm:w-[96px] lg:h-[110px] lg:w-[110px]">
                    <span className="text-[2rem] font-extrabold leading-none text-white sm:text-[2.5rem] lg:text-[2.9rem]">
                      M
                    </span>
                    <span className="absolute inset-0 rounded-[1.6rem] bg-gradient-to-br from-white/35 to-transparent" />
                  </div>
                  <p className="mx-auto mt-3 w-fit whitespace-nowrap rounded-lg bg-white/90 px-2 py-0.5 text-center text-[0.8rem] font-extrabold tracking-tight text-mangaale-text shadow-soft backdrop-blur sm:text-[0.9rem]">
                    Mangaale
                  </p>
                </div>
              </div>

              {/* --- role nodes --- */}
              {NODES.map((node) => {
                const point = POINTS[node.id]
                return (
                  <NodeChip
                    key={node.id}
                    node={node}
                    point={point}
                    x={x}
                    y={y}
                    active={hovered === node.id}
                    reduced={reduced}
                    onEnter={() => allowPointerMotion && setHovered(node.id)}
                    onLeave={() => setHovered(null)}
                  />
                )
              })}
            </motion.div>
          </div>
        </Reveal>

        {/* Role descriptions — always visible, so the content never depends on hover */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:mt-10">
          {NODES.map((node, i) => (
            <Reveal key={node.id} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-mangaale-border bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-mangaale-primary/35 hover:shadow-card">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-mangaale-tint">
                  <node.Icon className="h-5 w-5 text-mangaale-primary" />
                </span>
                <h3 className="mt-3.5 text-[1.05rem] font-extrabold text-mangaale-text">{node.label}</h3>
                <p className="mt-1.5 text-[0.9rem] leading-relaxed text-mangaale-subtext">{node.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </ScrollDepth>
    </section>
  )
}

/* A single orbiting role node with its hover tooltip */
const NodeChip = ({ node, point, x, y, active, reduced, onEnter, onLeave }) => {
  const tx = useTransform(x, (v) => v * node.depth * -22)
  const ty = useTransform(y, (v) => v * node.depth * -16)

  return (
    <motion.div
      style={{
        left: `${point.x}%`,
        top: `${point.y}%`,
        x: tx,
        y: ty
      }}
      className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
    >
      <div className="relative">
        <div
          className={`flex flex-col items-center gap-2 transition-transform duration-300 ${
            active ? 'scale-105' : ''
          }`}
        >
          <div
            className={`flex h-[54px] w-[54px] items-center justify-center rounded-2xl border bg-white shadow-card transition-colors duration-300 sm:h-[64px] sm:w-[64px] ${
              active ? 'border-mangaale-primary' : 'border-mangaale-border'
            } ${reduced ? '' : 'animate-float-soft'}`}
            style={reduced ? undefined : { animationDelay: `${node.depth}s` }}
          >
            <node.Icon className="h-6 w-6 text-mangaale-primary sm:h-7 sm:w-7" />
          </div>
          <span className="whitespace-nowrap rounded-lg bg-white/90 px-2 py-0.5 text-[0.72rem] font-bold text-mangaale-text shadow-soft backdrop-blur sm:text-[0.8rem]">
            {node.label}
          </span>
        </div>

        {/* hover tooltip (desktop pointer only) */}
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute z-40 hidden w-[210px] rounded-xl border border-mangaale-border bg-white p-3 shadow-lift lg:block ${node.tooltip}`}
          >
            <p className="text-[0.82rem] font-bold text-mangaale-text">{node.label}</p>
            <p className="mt-1 text-[0.78rem] leading-snug text-mangaale-subtext">{node.blurb}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default EcosystemSection
