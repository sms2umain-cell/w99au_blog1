import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://readdy.ai/api/search-image?query=luxury%20modern%20casino%20interior%20with%20golden%20slot%20machines%20elegant%20lighting%20sophisticated%20gaming%20atmosphere%20professional%20photography%20high%20quality%20cinematic&width=1920&height=1080&seq=hero-bg-1&orientation=landscape"
          alt="W99AU Online Casino - Premium Gaming Experience"
          className="w-full h-full object-cover object-top opacity-30"
          title="W99AU Casino Gaming Floor"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block">Welcome to</span>
          <span className="block text-yellow-400 mt-2">W99AU Casino</span>
        </h1>

        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full mb-6 backdrop-blur-sm">
            <i className="ri-trophy-line text-yellow-400 text-lg"></i>
            <span className="text-yellow-400 text-sm font-semibold">Australia's #1 Online Casino Platform</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              WIN BIG
            </span>
            <br />
            <span className="text-white">
              Play Smart, Win Fast
            </span>
          </h2>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the thrill of <strong>online pokies</strong>, <strong>live casino</strong>, and <strong>sportsbook</strong> with instant deposits, fast withdrawals, and 24/7 customer support
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href="https://t.ly/w99aublog" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/50 text-lg flex items-center space-x-2 whitespace-nowrap cursor-pointer transform hover:scale-105"
            >
              <span>Join Now & Get AUD 22.99</span>
              <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
            </a>
            <Link 
              to="/pokies"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-300 text-lg flex items-center space-x-2 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-play-circle-line text-xl"></i>
              <span>Explore Games</span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-400 mb-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>24/7</div>
              <div className="text-sm text-white/80">Customer Support</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-400 mb-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>&lt;5min</div>
              <div className="text-sm text-white/80">Fast Withdrawals</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-400 mb-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>1000+</div>
              <div className="text-sm text-white/80">Casino Games</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-400 mb-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>100%</div>
              <div className="text-sm text-white/80">Secure & Licensed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-white/60 text-3xl"></i>
      </div>
    </section>
  );
}