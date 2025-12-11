
export default function SlotsHero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-32 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full mb-6">
            <i className="ri-vip-crown-fill text-yellow-500"></i>
            <span className="text-yellow-500 font-semibold text-sm whitespace-nowrap">Premium Slots Collection</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            W99AU <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Slots</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover Australia's largest collection of premium online slots. Expert guides, strategies, and tips to maximize your winning potential.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-10">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <div className="text-3xl font-bold text-yellow-500 mb-1">800+</div>
              <div className="text-sm text-gray-400 whitespace-nowrap">Premium Slots</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <div className="text-3xl font-bold text-yellow-500 mb-1">98%</div>
              <div className="text-sm text-gray-400 whitespace-nowrap">Max RTP</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <div className="text-3xl font-bold text-yellow-500 mb-1">$10M+</div>
              <div className="text-sm text-gray-400 whitespace-nowrap">Jackpots</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <div className="text-3xl font-bold text-yellow-500 mb-1">24/7</div>
              <div className="text-sm text-gray-400 whitespace-nowrap">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
