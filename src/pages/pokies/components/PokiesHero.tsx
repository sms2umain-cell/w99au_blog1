export function PokiesHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(250, 204, 21, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <nav className="flex justify-center items-center space-x-2 text-sm text-white/60 mb-6">
            <a href="/" className="hover:text-yellow-400 transition-colors cursor-pointer">Home</a>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-yellow-400">Pokies Blog</span>
          </nav>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            SPLINKOS <span className="text-yellow-400">Pokies</span> Blog
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
            Your ultimate guide to <strong>online pokies in Australia</strong>. Discover expert reviews, winning strategies, and the latest <strong>SPLINKOS pokies games</strong> from top providers.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">3000+</div>
              <div className="text-white/70 text-sm">Pokies Games</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-white/70 text-sm">Expert Articles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-white/70 text-sm">Game Providers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl"></div>
    </section>
  );
}