import { Link } from 'react-router-dom'
import { ArrowRight, Download } from 'lucide-react'
import ScrollDepth from '../motion/ScrollDepth'
import MagneticButton from '../motion/MagneticButton'
import useMotionPrefs from '../../hooks/useMotionPrefs'

/**
 * Closing CTA on a deep turquoise gradient with a very slow animated mesh.
 * Both actions point at existing routes (/download and /contact).
 */
const FinalCTASection = () => {
  const { reduced } = useMotionPrefs()

  return (
    <section className="w-full px-5 pb-16 pt-4 sm:px-6 lg:px-8 lg:pb-24">
      {/* The closing CTA uses the softer depth preset: it still rides the same
          layered motion, but it stays legible on the way out instead of dimming
          away like an ordinary mid-page section. */}
      <ScrollDepth className="mx-auto max-w-7xl" variant="soft">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-mangaale-primary via-mangaale-secondary to-mangaale-deep px-6 py-14 text-center sm:px-10 sm:py-16 lg:rounded-[2.5rem] lg:py-24">
          {/* animated abstract mesh */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <svg
              className="absolute inset-0 h-full w-full opacity-[0.28]"
              viewBox="0 0 1200 600"
              preserveAspectRatio="xMidYMid slice"
            >
              <g fill="none" stroke="#FFFFFF" strokeWidth="1.2">
                <path d="M-100 460 C 200 340, 420 520, 700 380 S 1120 240, 1360 340">
                  {!reduced && (
                    <animate
                      attributeName="d"
                      dur="18s"
                      repeatCount="indefinite"
                      values="
                        M-100 460 C 200 340, 420 520, 700 380 S 1120 240, 1360 340;
                        M-100 420 C 220 480, 460 340, 700 440 S 1100 380, 1360 300;
                        M-100 460 C 200 340, 420 520, 700 380 S 1120 240, 1360 340"
                    />
                  )}
                </path>
                <path d="M-100 300 C 240 200, 480 400, 760 260 S 1140 160, 1360 220" opacity="0.7">
                  {!reduced && (
                    <animate
                      attributeName="d"
                      dur="22s"
                      repeatCount="indefinite"
                      values="
                        M-100 300 C 240 200, 480 400, 760 260 S 1140 160, 1360 220;
                        M-100 340 C 260 380, 500 240, 760 320 S 1120 260, 1360 180;
                        M-100 300 C 240 200, 480 400, 760 260 S 1140 160, 1360 220"
                    />
                  )}
                </path>
                <path d="M-100 560 C 260 480, 520 620, 800 500 S 1160 420, 1360 480" opacity="0.5" />
              </g>
            </svg>

            {/* corner glows */}
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-[1.9rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[2.6rem] lg:text-[3.2rem]">
              Ready to Experience Mangaale?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[1rem] leading-relaxed text-white/85 sm:text-[1.1rem]">
              Order locally, grow locally and support the businesses around you.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <MagneticButton className="w-full sm:w-auto">
                <Link
                  to="/download"
                  className="mangaale-button group w-full bg-white px-7 py-3.5 text-[1rem] text-mangaale-primary shadow-lift hover:-translate-y-0.5 sm:w-auto"
                >
                  <Download className="h-[18px] w-[18px]" />
                  Download App
                </Link>
              </MagneticButton>

              <Link
                to="/contact"
                className="mangaale-button group w-full border-2 border-white/70 px-7 py-3.5 text-[1rem] text-white hover:-translate-y-0.5 hover:border-white hover:bg-white/10 sm:w-auto"
              >
                Partner With Us
                <ArrowRight className="btn-arrow h-[18px] w-[18px]" />
              </Link>
            </div>
          </div>
        </div>
      </ScrollDepth>
    </section>
  )
}

export default FinalCTASection
