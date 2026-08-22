import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import MagneticButton from '../motion/MagneticButton'
import useMotionPrefs from '../../hooks/useMotionPrefs'

/**
 * Premium sticky navbar.
 * Top of page  -> clean, near-transparent.
 * After scroll -> frosted white, thin border, subtle shadow.
 *
 * All original routes, the Download App / Book Demo / Partner With Us actions
 * and their behaviour are preserved exactly as before.
 */

const navItems = [
  { label: 'For Restaurants', path: '/for-restaurants' },
  { label: 'For Customers', path: '/for-customers' },
  { label: 'For Riders', path: '/for-riders' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Privacy Policy', path: '/privacy-policy' }
]

const Logo = () => (
  <Link to="/" className="group flex items-center gap-2.5" aria-label="Mangaale home">
    <span className="relative flex h-9 w-9 items-center justify-center rounded-[0.7rem] bg-gradient-to-br from-mangaale-bright to-mangaale-secondary shadow-glow transition-transform duration-300 group-hover:scale-105">
      <span className="text-[17px] font-extrabold leading-none text-white">M</span>
      <span className="absolute inset-0 rounded-[0.7rem] bg-gradient-to-br from-white/35 to-transparent" />
    </span>
    <span className="text-[1.35rem] font-extrabold tracking-tight text-mangaale-text">Mangaale</span>
  </Link>
)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { reduced } = useMotionPrefs()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close the mobile sheet whenever the route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // Lock body scroll behind the full-screen mobile menu
  useEffect(() => {
    if (typeof document === 'undefined') return undefined
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Escape closes the mobile menu
  useEffect(() => {
    if (!isOpen) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  const isActive = (path) => location.pathname === path

  // --- preserved from the original implementation ---
  const handleBookDemo = () => {
    navigate('/contact')
    setIsOpen(false)
  }

  const handleDownload = () => {
    // On the home page scroll to the download section, otherwise go to /download
    if (location.pathname === '/') {
      const element = document.getElementById('download-app-section')
      if (element) {
        element.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' })
        setIsOpen(false)
        return
      }
    }
    navigate('/download')
    setIsOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: isScrolled ? 'rgba(255,255,255,0.82)' : 'rgba(255,255,255,0.55)',
          borderBottomColor: isScrolled ? 'rgba(231,238,236,1)' : 'rgba(231,238,236,0)',
          boxShadow: isScrolled
            ? '0 1px 2px rgba(16,33,43,0.04), 0 10px 30px -18px rgba(16,33,43,0.22)'
            : '0 0 0 rgba(0,0,0,0)'
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{ backdropFilter: 'blur(18px) saturate(160%)', WebkitBackdropFilter: 'blur(18px) saturate(160%)' }}
        className="fixed inset-x-0 top-0 z-50 border-b"
      >
        <div className="m-container">
          <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
            <Logo />

            {/* Desktop nav */}
            <div className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative rounded-lg px-3 py-2 text-[0.9rem] font-semibold transition-colors ${
                    isActive(item.path)
                      ? 'text-mangaale-primary'
                      : 'text-mangaale-text/80 hover:text-mangaale-primary'
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-mangaale-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop actions */}
            <div className="hidden items-center gap-2 lg:flex">
              <button
                type="button"
                onClick={handleDownload}
                className="mangaale-button-ghost px-3 py-2 text-[0.88rem]"
              >
                <Download className="h-4 w-4" />
                Download App
              </button>
              <button
                type="button"
                onClick={handleBookDemo}
                className="mangaale-button-secondary px-4 py-2 text-[0.88rem]"
              >
                Book Demo
              </button>
              <MagneticButton>
                <button
                  type="button"
                  onClick={handleBookDemo}
                  className="mangaale-button-primary px-4 py-2 text-[0.88rem]"
                >
                  Partner With Us
                </button>
              </MagneticButton>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-mangaale-border bg-white/80 text-mangaale-text transition-colors hover:border-mangaale-primary/40 hover:text-mangaale-primary lg:hidden"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-screen mobile navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-white" />
            <motion.div
              initial={{ y: -18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex h-full flex-col overflow-y-auto px-5 pb-8 pt-24"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.045, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between rounded-2xl px-4 py-4 text-[1.05rem] font-bold transition-colors ${
                        isActive(item.path)
                          ? 'bg-mangaale-tint text-mangaale-primary'
                          : 'text-mangaale-text hover:bg-mangaale-tint'
                      }`}
                    >
                      {item.label}
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isActive(item.path) ? 'bg-mangaale-primary' : 'bg-transparent'
                        }`}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.34, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 flex flex-col gap-3 border-t border-mangaale-border pt-6"
              >
                <button type="button" onClick={handleDownload} className="mangaale-button-secondary w-full">
                  <Download className="h-4 w-4" />
                  Download App
                </button>
                <button type="button" onClick={handleBookDemo} className="mangaale-button-secondary w-full">
                  Book Demo
                </button>
                <button type="button" onClick={handleBookDemo} className="mangaale-button-primary w-full">
                  Partner With Us
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
