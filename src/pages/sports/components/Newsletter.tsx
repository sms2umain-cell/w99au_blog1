import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://readdy.ai/api/form/submit/w99au-sports-newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ email }).toString(),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="text-6xl mb-6">📬</div>
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Get Sports Betting Tips & Updates
        </h2>
        <p className="text-xl text-black/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Subscribe to W99AU Sports Newsletter for expert betting tips, odds updates, and exclusive promotions delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto" data-readdy-form id="w99au-sports-newsletter">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50 text-base"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe Now'}
            </button>
          </div>

          {status === 'success' && (
            <p className="mt-4 text-black font-semibold">
              ✓ Successfully subscribed to W99AU Sports Newsletter!
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-red-900 font-semibold">
              ✗ Subscription failed. Please try again.
            </p>
          )}
        </form>

        <p className="mt-6 text-sm text-black/80">
          Join 10,000+ sports bettors receiving expert tips from W99AU
        </p>
      </div>
    </section>
  );
}