import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
<<<<<<< HEAD
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
=======
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6

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

<<<<<<< HEAD
  // Close the mobile sheet whenever the route changes
=======
  // Close menu on route change
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

<<<<<<< HEAD
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
=======
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'For Restaurants', path: '/for-restaurants' },
    { label: 'For Customers', path: '/for-customers' },
    { label: 'For Riders', path: '/for-riders' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Privacy Policy', path: '/privacy-policy' }
  ]
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6

  const isActive = (path) => location.pathname === path

  // --- preserved from the original implementation ---
  const handleBookDemo = () => {
    navigate('/contact')
  }

  const handleDownload = () => {
<<<<<<< HEAD
    // On the home page scroll to the download section, otherwise go to /download
    if (location.pathname === '/') {
      const element = document.getElementById('download-app-section')
      if (element) {
        element.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' })
        setIsOpen(false)
        return
      }
=======
    if (location.pathname === '/') {
      const element = document.getElementById('download-app-section')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate('/download')
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
    }
    navigate('/download')
    setIsOpen(false)
  }

  return (
<<<<<<< HEAD
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
=======
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.08)]'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="mangaale-container">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-gradient-to-br from-mangaale-primary to-mangaale-secondary rounded-xl flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm">M</span>
            </div>
            <span className="hidden sm:inline font-display text-xl font-extrabold text-mangaale-text">
              Mangaale
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-mangaale-primary bg-mangaale-primary/5'
                    : 'text-mangaale-subtext hover:text-mangaale-text hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              onClick={handleDownload}
              className="px-4 py-2 text-mangaale-primary hover:bg-mangaale-primary/5 rounded-lg text-[13px] font-semibold transition-all duration-200 cursor-pointer"
            >
              Download App
            </button>
            <button
              onClick={handleBookDemo}
              className="px-4 py-2 text-mangaale-primary border border-mangaale-primary/30 rounded-lg text-[13px] font-semibold hover:bg-mangaale-bg-soft transition-all duration-200 cursor-pointer"
            >
              Book Demo
            </button>
            <button
              onClick={handleBookDemo}
              className="px-4 py-2 bg-gradient-to-r from-mangaale-primary to-mangaale-secondary text-white rounded-lg text-[13px] font-semibold hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              Partner With Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-gray-50 rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-mangaale-text" />
            ) : (
              <Menu className="w-5 h-5 text-mangaale-text" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden border-t border-gray-100"
            >
              <div className="flex flex-col gap-1 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-2.5 rounded-lg text-[15px] transition-all duration-200 ${
                      isActive(item.path)
                        ? 'bg-mangaale-primary/5 text-mangaale-primary font-semibold'
                        : 'text-mangaale-text hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-2.5 pt-3 mt-2 border-t border-gray-100">
                  <button
                    onClick={handleDownload}
                    className="w-full px-4 py-2.5 text-mangaale-primary font-semibold border border-mangaale-primary/30 rounded-xl hover:bg-mangaale-bg-soft transition-all duration-200 cursor-pointer text-[15px]"
                  >
                    Download App
                  </button>
                  <button
                    onClick={handleBookDemo}
                    className="w-full px-4 py-2.5 text-mangaale-primary border border-mangaale-primary/30 rounded-xl font-semibold hover:bg-mangaale-bg-soft transition-all duration-200 cursor-pointer text-[15px]"
                  >
                    Book Demo
                  </button>
                  <button
                    onClick={handleBookDemo}
                    className="w-full px-4 py-2.5 bg-gradient-to-r from-mangaale-primary to-mangaale-secondary text-white rounded-xl font-semibold hover:shadow-md transition-all duration-200 cursor-pointer text-[15px]"
                  >
                    Partner With Us
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
  )
}

export default Navbar
