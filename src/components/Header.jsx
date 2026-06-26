import { Link, NavLink } from 'react-router-dom';

function Header() {
  const logoSrc = `${process.env.PUBLIC_URL}/drylogo.jpg`;
  const navLinkClass = ({ isActive }) =>
    `transition ${isActive ? 'font-semibold text-slate-900' : 'text-slate-700 hover:text-slate-900'}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between md:px-8">
        <Link to="/" className="flex items-center gap-4">
          <img src={logoSrc} alt="DryMyTearsLogo" className="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20" />
          <span className="text-lg font-semibold tracking-tight text-slate-900">Dry-My-Tears-International</span>
        </Link>

        <nav>
          <ul className="flex flex-wrap items-center gap-3 text-sm font-medium sm:gap-4">
            <li>
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>About</NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/donate" className={navLinkClass}>Donate</NavLink>
            </li>
            <li>
              <NavLink to="/volunteer" className={navLinkClass}>Volunteer</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            </li>
            <li>
              <a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-700">
                DONATE
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;