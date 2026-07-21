import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const logoSrc = "/drylogo.jpg";

  // Desktop active styling with a clean pill highlight
  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
      isActive 
        ? 'bg-slate-900 text-white shadow-sm' 
        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
    }`;

  // Mobile active styling with a soft amber/slate tint
  const mobileNavLinkClass = ({ isActive }) =>
    `block py-3 px-4 rounded-xl transition-all text-sm font-medium ${
      isActive 
        ? 'bg-amber-500/10 text-amber-800 font-semibold' 
        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
    }`;

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/donate', label: 'Donate' },
    { to: '/volunteer', label: 'Volunteer' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 sm:gap-4" onClick={() => setIsOpen(false)}>
            <img src={logoSrc} alt="Dry My Tears Logo" className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14 ring-1 ring-slate-200 shadow-sm" />
            <span className="text-sm sm:text-base font-bold tracking-tight text-slate-900">
              Dry My Tears International
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-2 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className={navLinkClass}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggler */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl p-2 text-slate-700 hover:bg-slate-100 focus:outline-none md:hidden"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <nav className="mt-4 border-t border-slate-100 pt-3 md:hidden">
            <ul className="flex flex-col gap-1.5 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;