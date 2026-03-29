import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'For Restaurants', path: '/for-restaurants' },
    { label: 'For Customers', path: '/for-customers' },
    { label: 'For Riders', path: '/for-riders' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Privacy Policy', path: '/privacy-policy' }
  ]

  const isActive = (path) => location.pathname === path

  const handleBookDemo = () => {
    navigate('/contact')
  }

  const handleDownload = () => {
    if (location.pathname === '/') {
      const element = document.getElementById('download-app-section')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate('/download')
    }
  }

  return (
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
  )
}

export default Navbar
