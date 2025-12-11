import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const formData = new URLSearchParams();
      formData.append('email', email);

      const response = await fetch('FORM_SUBMIT_URL_PLACEHOLDER', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zinc-950 via-black to-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto flex items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-6">
            <i className="ri-mail-line text-3xl text-black"></i>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Subscribe to <span className="text-yellow-400">W99AU</span> Newsletter
          </h2>

          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Get the latest <strong>pokies news</strong>, exclusive bonuses, game reviews, and winning strategies delivered straight to your inbox. Join thousands of <strong>W99AU players</strong> staying ahead of the game.
          </p>

          <form 
            id="newsletter-form"
            data-readdy-form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-colors text-sm"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-all duration-300 font-bold whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
              </button>
            </div>

            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                <p className="text-green-400 text-sm font-semibold">
                  ✓ Successfully subscribed! Check your email for confirmation.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                <p className="text-red-400 text-sm font-semibold">
                  ✗ Please enter a valid email address.
                </p>
              </div>
            )}
          </form>

          <p className="text-white/50 text-xs mt-6">
            By subscribing, you agree to receive marketing emails from W99AU. Unsubscribe anytime.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center space-x-2 text-white/60">
              <i className="ri-shield-check-line text-yellow-400"></i>
              <span className="text-sm">Secure & Private</span>
            </div>
            <div className="flex items-center space-x-2 text-white/60">
              <i className="ri-user-line text-yellow-400"></i>
              <span className="text-sm">50,000+ Subscribers</span>
            </div>
            <div className="flex items-center space-x-2 text-white/60">
              <i className="ri-mail-check-line text-yellow-400"></i>
              <span className="text-sm">Weekly Updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}