
export default function SportsHero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=professional%20sports%20betting%20stadium%20with%20multiple%20sports%20including%20football%20basketball%20cricket%20on%20elegant%20dark%20background%20with%20betting%20odds%20display%20modern%20concept&width=1920&height=1080&seq=w99au043&orientation=landscape"
          alt="W99AU Sports Betting"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full py-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Sports Betting at W99AU
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Bet on AFL, NRL, Cricket, Soccer and more with the best odds in Australia. Experience premium sports betting at W99AU.
        </p>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-3xl mb-2">🏈</div>
            <div className="text-2xl font-bold text-white mb-1">AFL</div>
            <div className="text-sm text-gray-300">Best Odds</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-3xl mb-2">🏉</div>
            <div className="text-2xl font-bold text-white mb-1">NRL</div>
            <div className="text-sm text-gray-300">Live Betting</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-3xl mb-2">🏏</div>
            <div className="text-2xl font-bold text-white mb-1">Cricket</div>
            <div className="text-sm text-gray-300">All Formats</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-3xl mb-2">⚽</div>
            <div className="text-2xl font-bold text-white mb-1">Soccer</div>
            <div className="text-sm text-gray-300">Global Coverage</div>
          </div>
        </div>
      </div>
    </section>
  );
}
