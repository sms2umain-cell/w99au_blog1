import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full mb-6">
            <i className="ri-mail-fill text-yellow-500"></i>
            <span className="text-yellow-500 font-semibold text-sm whitespace-nowrap">Stay Updated</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get W99AU Slots Updates
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Subscribe to receive exclusive slot tips, new game releases, and special bonus offers from W99AU
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent backdrop-blur-sm text-base"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-200 shadow-lg hover:shadow-yellow-500/50 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer text-base"
            >
              {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe Now'}
            </button>
          </div>
          
          {status === 'success' && (
            <p className="mt-4 text-green-400 text-center flex items-center justify-center gap-2">
              <i className="ri-checkbox-circle-fill"></i>
              <span>Successfully subscribed to W99AU updates!</span>
            </p>
          )}
          
          <p className="mt-4 text-sm text-gray-400 text-center">
            Join 50,000+ W99AU players receiving exclusive content. Unsubscribe anytime.
          </p>
        </form>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="ri-gift-line text-2xl text-yellow-500"></i>
            </div>
            <h3 className="font-bold text-white mb-2">Exclusive Bonuses</h3>
            <p className="text-sm text-gray-400">Get special W99AU slot bonuses</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="ri-lightbulb-line text-2xl text-yellow-500"></i>
            </div>
            <h3 className="font-bold text-white mb-2">Expert Tips</h3>
            <p className="text-sm text-gray-400">Learn winning strategies</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="ri-notification-line text-2xl text-yellow-500"></i>
            </div>
            <h3 className="font-bold text-white mb-2">New Releases</h3>
            <p className="text-sm text-gray-400">Be first to try new W99AU slots</p>
          </div>
        </div>
      </div>
    </section>
  );
}