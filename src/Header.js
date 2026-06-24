import logo from './drylogo.jpg';

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <div className="flex items-center gap-4">
          <img src={logo} alt="DryMyTearsLogo" className="h-20 w-20 rounded-full object-cover" />
          <span className="text-lg font-semibold tracking-tight text-slate-900">Dry-My-Tears-International</span>
        </div>

        <nav>
          <ul className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-700">
            <li>
              <a href="./" className="transition hover:text-slate-900">
                Home
              </a>
            </li>
            <li>
              <a href="./about" className="transition hover:text-slate-900">
                About
              </a>
            </li>
            <li>
              <a href="./projects" className="transition hover:text-slate-900">
                What-We-Do
              </a>
            </li>
            <li>
              <a href="./services" className="transition hover:text-slate-900">
                Services
              </a>
            </li>
            <li>
              <a href="./services" className="transition hover:text-slate-900">
                
              </a>
            </li>
            <li>
              <a href="./login" className="rounded-full bg-slate-100 px-4 py-2 transition hover:bg-slate-200">
                Contact
              </a>
            </li>
            <li>
              <a href="./signup" className="rounded-full bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-700">
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