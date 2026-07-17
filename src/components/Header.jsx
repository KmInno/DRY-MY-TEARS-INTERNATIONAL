import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const logoSrc = `${process.env.PUBLIC_URL}/drylogo.jpg`;

  const navLinkClass = ({ isActive }) =>
    `transition ${isActive ? 'font-semibold text-primary' : 'text-slate-700 hover:text-primary'}`;

  const mobileNavLinkClass = ({ isActive }) =>
    `block py-2.5 px-4 rounded-xl transition ${
      isActive ? 'bg-primary/5 font-semibold text-primary' : 'text-slate-700 hover:bg-slate-50 hover:text-primary'
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
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 sm:gap-4" onClick={() => setIsOpen(false)}>
            <img src={logoSrc} alt="DryMyTearsLogo" className="h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16" />
            <span className="text-base font-semibold tracking-tight text-primary sm:text-lg">
              Dry-My-Tears-International
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className={navLinkClass}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <a
                  href="https://www.paypal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#a60906]"
                >
                  DONATE
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggler */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus:outline-none md:hidden"
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
              <li className="mt-2 px-4">
                <a
                  href="https://www.paypal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-full bg-accent py-2.5 text-center font-semibold text-white transition hover:bg-[#a60906]"
                  onClick={() => setIsOpen(false)}
                >
                  DONATE
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;