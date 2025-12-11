import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    casino: [
      { name: 'Online Pokies', href: '/pokies' },
      { name: 'Live Casino', href: '/live-casino' },
      { name: 'Slots Games', href: '/slots' },
      { name: 'Sports Betting', href: '/sports' }
    ],
    resources: [
      { name: 'Help Center', href: '/faq' },
      { name: 'Responsible Gaming', href: '/responsible-gaming' },
      { name: 'Payment Methods', href: 'https://t.ly/w99aublog', external: true }
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Live Chat', href: 'https://t.ly/w99aublog', external: true },
      { name: 'FAQ', href: '/faq' }
    ],
    company: [
      { name: 'About W99AU', href: '/about' },
      { name: 'Terms & Conditions', href: 'https://t.ly/w99aublog', external: true },
      { name: 'Privacy Policy', href: 'https://t.ly/w99aublog', external: true }
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img 
              src="https://w99aud.com/media/798cdb9ea92763fd4c097.gif" 
              alt="W99AU Casino Logo" 
              className="h-14 w-auto mb-5"
              title="W99AU - Australia's Premier Online Casino"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Australia's premier <strong className="text-white">online casino platform</strong> offering <strong className="text-white">pokies</strong>, <strong className="text-white">live casino</strong>, <strong className="text-white">sports betting</strong> and <strong className="text-white">slots</strong> with 24/7 support.
            </p>
            
            {/* Social Media */}
            <div className="flex items-center gap-3">
              <a 
                href="https://www.facebook.com/w99auofficial" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-yellow-500 rounded-lg transition-all duration-300 group border border-gray-700 hover:border-yellow-500"
                aria-label="Follow W99AU on Facebook"
              >
                <i className="ri-facebook-fill text-lg text-gray-400 group-hover:text-black transition-colors"></i>
              </a>
              <a 
                href="https://www.instagram.com/w99au/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-yellow-500 rounded-lg transition-all duration-300 group border border-gray-700 hover:border-yellow-500"
                aria-label="Follow W99AU on Instagram"
              >
                <i className="ri-instagram-fill text-lg text-gray-400 group-hover:text-black transition-colors"></i>
              </a>
              <a 
                href="https://t.me/W99AUOFFICIAL" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-yellow-500 rounded-lg transition-all duration-300 group border border-gray-700 hover:border-yellow-500"
                aria-label="Join W99AU on Telegram"
              >
                <i className="ri-telegram-fill text-lg text-gray-400 group-hover:text-black transition-colors"></i>
              </a>
            </div>
          </div>

          {/* Casino Games */}
          <div>
            <h4 className="text-white font-bold mb-5 text-base flex items-center gap-2">
              <i className="ri-game-line text-yellow-500"></i>
              Casino Games
            </h4>
            <ul className="space-y-3">
              {footerLinks.casino.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <i className="ri-arrow-right-s-line text-xs opacity-0 group-hover:opacity-100 transition-opacity"></i>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-5 text-base flex items-center gap-2">
              <i className="ri-book-open-line text-yellow-500"></i>
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <i className="ri-arrow-right-s-line text-xs opacity-0 group-hover:opacity-100 transition-opacity"></i>
                      {link.name}
                    </a>
                  ) : (
                    <Link 
                      to={link.href}
                      className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <i className="ri-arrow-right-s-line text-xs opacity-0 group-hover:opacity-100 transition-opacity"></i>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-5 text-base flex items-center gap-2">
              <i className="ri-customer-service-2-line text-yellow-500"></i>
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <i className="ri-arrow-right-s-line text-xs opacity-0 group-hover:opacity-100 transition-opacity"></i>
                      {link.name}
                    </a>
                  ) : (
                    <Link 
                      to={link.href}
                      className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <i className="ri-arrow-right-s-line text-xs opacity-0 group-hover:opacity-100 transition-opacity"></i>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-5 text-base flex items-center gap-2">
              <i className="ri-building-line text-yellow-500"></i>
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <i className="ri-arrow-right-s-line text-xs opacity-0 group-hover:opacity-100 transition-opacity"></i>
                      {link.name}
                    </a>
                  ) : (
                    <Link 
                      to={link.href}
                      className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <i className="ri-arrow-right-s-line text-xs opacity-0 group-hover:opacity-100 transition-opacity"></i>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="border-t border-gray-700 pt-10 mb-10">
          <h4 className="text-white font-semibold mb-5 text-center text-base">Accepted Payment Methods</h4>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="px-5 py-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-yellow-500 transition-colors group">
              <div className="flex items-center gap-2">
                <i className="ri-bank-line text-yellow-500 group-hover:scale-110 transition-transform"></i>
                <span className="text-gray-300 text-sm font-medium whitespace-nowrap">Bank Transfer</span>
              </div>
            </div>
            <div className="px-5 py-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-yellow-500 transition-colors group">
              <div className="flex items-center gap-2">
                <i className="ri-bank-card-line text-yellow-500 group-hover:scale-110 transition-transform"></i>
                <span className="text-gray-300 text-sm font-medium whitespace-nowrap">Credit Card</span>
              </div>
            </div>
            <div className="px-5 py-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-yellow-500 transition-colors group">
              <div className="flex items-center gap-2">
                <i className="ri-wallet-3-line text-yellow-500 group-hover:scale-110 transition-transform"></i>
                <span className="text-gray-300 text-sm font-medium whitespace-nowrap">E-Wallets</span>
              </div>
            </div>
            <div className="px-5 py-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-yellow-500 transition-colors group">
              <div className="flex items-center gap-2">
                <i className="ri-bit-coin-line text-yellow-500 group-hover:scale-110 transition-transform"></i>
                <span className="text-gray-300 text-sm font-medium whitespace-nowrap">Cryptocurrency</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} W99AU. All rights reserved. | <a href="https://readdy.ai/?origin=logo" target="_blank" rel="nofollow noopener noreferrer" className="hover:text-yellow-400 transition-colors">Powered by Readdy</a>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <a href="https://t.ly/w99aublog" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors whitespace-nowrap">Terms & Conditions</a>
              <span className="text-gray-600">|</span>
              <a href="https://t.ly/w99aublog" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors whitespace-nowrap">Privacy Policy</a>
              <span className="text-gray-600">|</span>
              <Link to="/responsible-gaming" className="text-gray-400 hover:text-yellow-400 transition-colors whitespace-nowrap">Responsible Gaming</Link>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
            <div className="flex items-start gap-3 mb-4">
              <i className="ri-information-line text-yellow-500 text-xl flex-shrink-0 mt-1"></i>
              <div>
                <h5 className="text-white font-semibold text-sm mb-2">Responsible Gaming Notice</h5>
                <p className="text-gray-400 text-xs leading-relaxed">
                  18+ only. Gamble responsibly. <strong className="text-white">W99AU</strong> is committed to <strong className="text-white">responsible gaming</strong>. If you feel you may have a gambling problem, please seek help. This website is operated under a valid gaming license. All games are tested for fairness and randomness. Please play within your means and set limits for yourself.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-gray-700">
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <i className="ri-shield-check-line text-yellow-500"></i>
                <span>Licensed & Regulated</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <i className="ri-lock-line text-yellow-500"></i>
                <span>Secure Gaming</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <i className="ri-customer-service-line text-yellow-500"></i>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <i className="ri-verified-badge-line text-yellow-500"></i>
                <span>Fair Play Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}