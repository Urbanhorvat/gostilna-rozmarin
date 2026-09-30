import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Domov' },
  { to: '/gostilna', label: 'Gostilna' },
  { to: '/pice', label: 'Pice' },
  { to: '/jedilni-list', label: 'Jedilni list' },
  { to: '/apartmaji', label: 'Apartmaji' },
  { to: '/wellness', label: 'Wellness' },
  { to: '/galerija', label: 'Galerija' },
  { to: '/dozivetja', label: 'Doživetja' },
  { to: '/cenik', label: 'Cenik' },
  { to: '/kontakt', label: 'Kontakt' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [heroParallax, setHeroParallax] = useState(1);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 60);
      if (isHome && scrollY < window.innerHeight) {
        setHeroParallax(1 + scrollY * 0.00015);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  useEffect(() => {
    setHeroParallax(1);
  }, [location.pathname]);

  const closeMobile = () => setIsMobileOpen(false);

  const navBgClass = isHome
    ? isScrolled
      ? 'bg-background-50/95 backdrop-blur-md'
      : 'bg-transparent'
    : 'bg-background-50/95 backdrop-blur-md';

  const logoTextClass = isHome && !isScrolled ? 'text-background-50' : 'text-foreground-900';

  const desktopLinkBase = isHome && !isScrolled
    ? 'text-background-50/85 hover:text-background-50'
    : 'text-foreground-600 hover:text-primary-600';

  const desktopLinkActive = isHome && !isScrolled
    ? 'text-background-50 bg-background-50/15'
    : 'text-primary-600 bg-primary-50';

  const hamburgerClass = isHome && !isScrolled
    ? 'text-background-50 hover:bg-background-50/10'
    : 'text-foreground-900 hover:bg-background-200';

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBgClass}`}>
        <div className="w-full px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              onClick={closeMobile}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <img
                src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/6ab9892fcc8aa62497f57b22af60116d.png"
                alt="Picerija Rožmarin"
                className="h-9 md:h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const active = isActive(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={closeMobile}
                    className={`relative px-3 lg:px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                      active ? desktopLinkActive : desktopLinkBase
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-current"></span>
                    )}
                  </Link>
                );
              })}
              <Link
                to="/kontakt"
                onClick={closeMobile}
                className="ml-2 px-5 py-2.5 rounded-full bg-accent-500 text-background-50 font-semibold text-sm whitespace-nowrap hover:bg-accent-600 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <i className="ri-calendar-check-line mr-1.5"></i>
                Rezerviraj
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors cursor-pointer ${hamburgerClass}`}
              aria-label="Meni"
            >
              <i className={`text-xl transition-transform duration-300 ${isMobileOpen ? 'ri-close-line rotate-90' : 'ri-menu-line'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-400 overflow-hidden ${
            isMobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          } bg-background-50 border-t border-background-200`}
        >
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeMobile}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors cursor-pointer ${
                    active
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-foreground-700 hover:text-primary-600 hover:bg-primary-50/50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/kontakt"
              onClick={closeMobile}
              className="mt-2 px-4 py-3 rounded-full bg-accent-500 text-background-50 font-semibold text-center hover:bg-accent-600 active:scale-95 transition-all cursor-pointer"
            >
              <i className="ri-calendar-check-line mr-2"></i>
              Rezerviraj
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Parallax Image — only on home, only when scrolled */}
      {isHome && isScrolled && (
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <img
            src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/3da97481e91e7d23148dee790e23750e.png"
            alt=""
            className="w-full h-full object-cover opacity-30"
            style={{ transform: `scale(${heroParallax})` }}
          />
        </div>
      )}
    </>
  );
}