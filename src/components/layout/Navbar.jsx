import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

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
    setIsOpen(false)
  }

  const handleDownload = () => {
    // If on home page, scroll to section, otherwise navigate to download page
    if (location.pathname === '/') {
      const element = document.getElementById('download-app-section')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      }
    } else {
      navigate('/download')
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg backdrop-blur-sm'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-mangaale-primary to-mangaale-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="hidden sm:inline font-bold text-xl text-mangaale-text">
              Mangaale
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-mangaale-primary'
                    : 'text-mangaale-text hover:text-mangaale-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={handleDownload}
              className="px-4 py-2 text-mangaale-primary hover:text-mangaale-secondary font-medium transition-colors cursor-pointer"
            >
              Download App
            </button>
            <button 
              onClick={handleBookDemo}
              className="px-4 py-2 text-mangaale-primary border-2 border-mangaale-primary rounded-lg font-medium hover:bg-mangaale-bg-soft transition-colors cursor-pointer"
            >
              Book Demo
            </button>
            <button 
              onClick={handleBookDemo}
              className="px-4 py-2 bg-gradient-to-r from-mangaale-primary to-mangaale-secondary text-white rounded-lg font-medium hover:shadow-lg transition-all cursor-pointer"
            >
              Partner With Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-mangaale-bg-soft rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-mangaale-text" />
            ) : (
              <Menu className="w-6 h-6 text-mangaale-text" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 border-t border-mangaale-bg-soft"
          >
            <div className="flex flex-col gap-3 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-mangaale-bg-soft text-mangaale-primary font-medium'
                      : 'text-mangaale-text hover:bg-mangaale-bg-soft'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-2">
                <button 
                  onClick={handleDownload}
                  className="w-full px-4 py-2 text-mangaale-primary font-medium border-2 border-mangaale-primary rounded-lg hover:bg-mangaale-bg-soft transition-colors cursor-pointer"
                >
                  Download App
                </button>
                <button 
                  onClick={handleBookDemo}
                  className="w-full px-4 py-2 text-mangaale-primary border-2 border-mangaale-primary rounded-lg font-medium hover:bg-mangaale-bg-soft transition-colors cursor-pointer"
                >
                  Book Demo
                </button>
                <button 
                  onClick={handleBookDemo}
                  className="w-full px-4 py-2 bg-gradient-to-r from-mangaale-primary to-mangaale-secondary text-white rounded-lg font-medium hover:shadow-lg transition-all cursor-pointer"
                >
                  Partner With Us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
