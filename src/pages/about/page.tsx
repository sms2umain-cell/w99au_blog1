import { useEffect } from 'react';
import { Navbar } from '../home/components/Navbar';
import { Footer } from '../home/components/Footer';
import { updateSEO, generateBreadcrumbs } from '../../utils/seo';

export default function AboutPage() {
  useEffect(() => {
    updateSEO({
      title: 'About W99AU Casino Australia | Trusted Online Gaming Platform 2025',
      description: 'Learn about W99AU Casino Australia - your trusted online gaming platform since establishment. Discover our mission, values, 500K+ active players, 2000+ games, 98.5% payout rate and commitment to fair gaming and player security.',
      keywords: 'about W99AU, W99AU casino, online casino Australia, trusted casino, fair gaming, secure casino, licensed casino, Australian gaming platform',
      canonical: 'https://w99aud.com/about',
      ogType: 'website',
      structuredData: generateBreadcrumbs([
        { name: 'Home', url: '/' },
        { name: 'About W99AU', url: '/about' }
      ])
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-yellow-400">W99AU Casino</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Australia's Most Trusted <strong className="text-white">Online Casino Platform</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Welcome to <strong className="text-yellow-600">W99AU</strong>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <strong className="text-gray-900">W99AU</strong> is Australia's premier <strong className="text-gray-900">online casino platform</strong>, offering an unparalleled gaming experience with a vast selection of <strong className="text-gray-900">pokies</strong>, <strong className="text-gray-900">live casino games</strong>, <strong className="text-gray-900">sports betting</strong>, and <strong className="text-gray-900">slots</strong>. Since our establishment, we've been committed to providing Australian players with a safe, fair, and entertaining gaming environment.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our platform is built on the principles of <strong className="text-gray-900">transparency</strong>, <strong className="text-gray-900">security</strong>, and <strong className="text-gray-900">player satisfaction</strong>. We hold all necessary licenses and certifications, ensuring that every game is fair and every transaction is secure.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=modern%20luxury%20casino%20interior%20with%20elegant%20gaming%20tables%20golden%20lighting%20and%20sophisticated%20atmosphere%20professional%20photography%20high%20quality&width=600&height=400&seq=about1&orientation=landscape"
                alt="W99AU Casino - Modern Luxury Gaming Interior"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover object-top"
                title="W99AU Casino Gaming Experience"
              />
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <article className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border border-yellow-200 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-shield-check-line text-3xl text-black"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Security First</h3>
                <p className="text-gray-700 leading-relaxed">
                  We use state-of-the-art <strong className="text-gray-900">encryption technology</strong> to protect your personal information and financial transactions. Your <strong className="text-gray-900">safety</strong> is our top priority.
                </p>
              </article>

              <article className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border border-yellow-200 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-trophy-line text-3xl text-black"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fair Gaming</h3>
                <p className="text-gray-700 leading-relaxed">
                  All our games are tested and certified for <strong className="text-gray-900">fairness</strong>. We use <strong className="text-gray-900">Random Number Generators (RNG)</strong> to ensure every outcome is completely random.
                </p>
              </article>

              <article className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border border-yellow-200 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-customer-service-2-line text-3xl text-black"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Support</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our dedicated <strong className="text-gray-900">support team</strong> is available around the clock to assist you with any questions or concerns. We're here to help, anytime.
                </p>
              </article>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 mb-20">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-yellow-400 mb-2">500K+</div>
                <div className="text-gray-300 text-lg">Active Players</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-yellow-400 mb-2">2000+</div>
                <div className="text-gray-300 text-lg">Casino Games</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-yellow-400 mb-2">98.5%</div>
                <div className="text-gray-300 text-lg">Payout Rate</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300 text-lg">Customer Support</div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Choose <strong className="text-yellow-600">W99AU</strong>?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <article className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <i className="ri-vip-crown-line text-2xl text-black"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Exclusive Bonuses</h3>
                  <p className="text-gray-700">Enjoy <strong className="text-gray-900">special rewards</strong>, personalized service, and <strong className="text-gray-900">exclusive bonuses</strong> for our valued players.</p>
                </div>
              </article>

              <article className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <i className="ri-money-dollar-circle-line text-2xl text-black"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Withdrawals</h3>
                  <p className="text-gray-700">Get your winnings quickly with our <strong className="text-gray-900">fast and secure withdrawal</strong> process.</p>
                </div>
              </article>

              <article className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <i className="ri-gift-line text-2xl text-black"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Regular Promotions</h3>
                  <p className="text-gray-700">Take advantage of our daily, weekly, and monthly <strong className="text-gray-900">promotions and bonuses</strong>.</p>
                </div>
              </article>

              <article className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <i className="ri-smartphone-line text-2xl text-black"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile Optimized</h3>
                  <p className="text-gray-700">Play your favorite games anytime, anywhere on any <strong className="text-gray-900">mobile device</strong>.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}