import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' }
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-mangaale-accent transition-colors'
      : 'text-mangaale-ink hover:text-mangaale-accent transition-colors'

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0a0b11]/85 backdrop-blur-md border-b border-white/8">
      <div className="mx-auto w-[92%] max-w-7xl px-2 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-mangaale-accent/70 bg-mangaale-accent/10 text-mangaale-accent font-display font-bold">
            M
          </span>
          <span className="font-display text-xl font-bold tracking-wide">Mangaale</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="mangaale-button-primary"
          >
            Book a Demo
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden mangaale-button-secondary px-3"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/8 bg-[#11131d]">
          <div className="mx-auto w-[92%] max-w-7xl px-2 py-5 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `block py-2 ${isActive ? 'text-mangaale-accent' : 'text-mangaale-ink'} text-sm`
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="block mt-2 mangaale-button-primary text-center"
              onClick={() => setOpen(false)}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
