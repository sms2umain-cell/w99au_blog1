
export function LiveCasinoHero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://readdy.ai/api/search-image?query=luxury%20live%20casino%20studio%20with%20professional%20dealers%20and%20gaming%20tables%20elegant%20casino%20atmosphere%20with%20HD%20cameras%20and%20modern%20lighting%20sophisticated%20gaming%20environment%20with%20gold%20accents&width=1920&height=800&seq=livecasinohero001&orientation=landscape"
          alt="W99AU Live Casino"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-block mb-6">
          <span className="px-4 py-2 bg-yellow-500 text-black text-sm font-bold rounded-full">
            🎰 LIVE CASINO EXPERIENCE
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          W99AU Live Casino
          <span className="block text-yellow-500 mt-2">Real Dealers, Real Wins</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Experience authentic casino action with professional dealers streaming in HD. Play blackjack, roulette, baccarat, and more at W99AU Live Casino.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-yellow-500 mb-2">150+</div>
            <div className="text-sm text-gray-300">Live Tables</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-yellow-500 mb-2">24/7</div>
            <div className="text-sm text-gray-300">Availability</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-yellow-500 mb-2">HD</div>
            <div className="text-sm text-gray-300">Streaming</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-yellow-500 mb-2">99%</div>
            <div className="text-sm text-gray-300">RTP Games</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-3xl text-white"></i>
      </div>
    </section>
  );
}
