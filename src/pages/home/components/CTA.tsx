
export function CTA() {
  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl mx-auto mb-8 shadow-xl shadow-yellow-500/30">
            <i className="ri-rocket-line text-4xl text-black"></i>
          </div>

          {/* Heading */}
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Ready to Start Your <span className="text-yellow-400">Winning Journey</span>?
          </h3>

          {/* Description */}
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of players at <strong>W99AU</strong> and experience the thrill of <strong>online pokies</strong>, <strong>live casino</strong>, and <strong>sports betting</strong> with exclusive bonuses and instant withdrawals
          </p>

          {/* CTA Button - Only one button now */}
          <div className="flex items-center justify-center mb-8">
            <a href="https://t.ly/w99aublog" target="_blank" rel="noopener noreferrer" className="group px-10 py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/50 text-lg flex items-center space-x-2 whitespace-nowrap cursor-pointer transform hover:scale-105">
              <span>Sign Up & Get AUD 22.99</span>
              <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
            <div className="flex items-center space-x-2">
              <i className="ri-shield-check-line text-green-400"></i>
              <span>Licensed & Secure</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-time-line text-yellow-400"></i>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-flashlight-line text-red-400"></i>
              <span>Instant Withdrawals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
