import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Pokies Blog', href: '/pokies' },
    { name: 'Live Casino', href: '/live-casino' },
    { name: 'Sports', href: '/sports' },
    { name: 'Slots', href: '/slots' },
    { name: 'About Us', href: '/about' }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-black/80 backdrop-blur-sm'}`}>
      <nav className="container mx-auto px-4 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            {location.pathname === '/' ? (
              <h1>
                <img 
                  src="https://w99aud.com/media/798cdb9ea92763fd4c097.gif" 
                  alt="W99AU - Australia's Premier Online Casino" 
                  className="h-12 w-auto"
                  title="W99AU Casino"
                />
              </h1>
            ) : (
              <img 
                src="https://w99aud.com/media/798cdb9ea92763fd4c097.gif" 
                alt="W99AU - Australia's Premier Online Casino" 
                className="h-12 w-auto"
                title="W99AU Casino"
              />
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`transition-colors duration-200 text-sm font-medium whitespace-nowrap ${
                  isActive(link.href)
                    ? 'text-yellow-400 font-bold'
                    : 'text-white/90 hover:text-yellow-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <a href="https://t.ly/w99aublog" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-200 shadow-lg hover:shadow-yellow-500/50 text-sm whitespace-nowrap">
              <span>Sign Up</span>
            </a>
            <a href="https://t.ly/w99aublog" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center space-x-2 px-5 py-2.5 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-200 text-sm whitespace-nowrap">
              <span>Login</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-4 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`transition-colors duration-200 text-sm font-medium ${
                    isActive(link.href)
                      ? 'text-yellow-400 font-bold'
                      : 'text-white/90 hover:text-yellow-400'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/10">
                <a href="https://t.ly/w99aublog" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-200 text-sm whitespace-nowrap">
                  Sign Up
                </a>
                <a href="https://t.ly/w99aublog" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-200 text-sm whitespace-nowrap">
                  Login
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}