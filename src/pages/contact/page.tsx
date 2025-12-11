import { useEffect } from 'react';
import { Navbar } from '../home/components/Navbar';
import { Footer } from '../home/components/Footer';
import { useState } from 'react';
import { updateSEO, generateBreadcrumbs } from '../../utils/seo';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    updateSEO({
      title: 'Contact W99AU Casino | 24/7 Customer Support Australia',
      description: 'Contact W99AU Casino Australia for 24/7 customer support. Live chat, email support, and help center available. Get instant assistance with deposits, withdrawals, bonuses, games and account queries.',
      keywords: 'contact W99AU, customer support, live chat, email support, help center, 24/7 support, casino support Australia, W99AU contact',
      canonical: 'https://w99aud.com/contact',
      ogType: 'website',
      structuredData: generateBreadcrumbs([
        { name: 'Home', url: '/' },
        { name: 'Contact Us', url: '/contact' }
      ])
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact <span className="text-yellow-400">W99AU Casino</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're here to help! Get in touch with our <strong className="text-white">24/7 support team</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Contact Info Cards */}
            <article className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border border-yellow-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-customer-service-2-line text-3xl text-black"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Live Chat</h2>
              <p className="text-gray-700 mb-6">
                Chat with our <strong className="text-gray-900">support team</strong> in real-time. Available <strong className="text-gray-900">24/7</strong> for instant assistance.
              </p>
              <a 
                href="https://t.ly/w99aublog" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-yellow-600 font-semibold hover:text-yellow-700 transition-colors"
              >
                Start Chat <i className="ri-arrow-right-line"></i>
              </a>
            </article>

            <article className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border border-yellow-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-mail-line text-3xl text-black"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Email Support</h2>
              <p className="text-gray-700 mb-6">
                Send us an email and we'll respond within <strong className="text-gray-900">24 hours</strong>.
              </p>
              <a 
                href="mailto:support@w99au.com"
                className="inline-flex items-center gap-2 text-yellow-600 font-semibold hover:text-yellow-700 transition-colors"
              >
                support@w99au.com <i className="ri-arrow-right-line"></i>
              </a>
            </article>

            <article className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border border-yellow-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-question-answer-line text-3xl text-black"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Help Center</h2>
              <p className="text-gray-700 mb-6">
                Browse our comprehensive <strong className="text-gray-900">FAQ</strong> and help articles for quick answers.
              </p>
              <a 
                href="/faq"
                className="inline-flex items-center gap-2 text-yellow-600 font-semibold hover:text-yellow-700 transition-colors"
              >
                Visit Help Center <i className="ri-arrow-right-line"></i>
              </a>
            </article>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all resize-none text-sm"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-4 px-8 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h3>
            <div className="flex items-center justify-center gap-4">
              <a 
                href="https://www.facebook.com/w99auofficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gray-900 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="Follow W99AU on Facebook"
              >
                <i className="ri-facebook-fill text-2xl text-yellow-400 group-hover:text-black transition-colors"></i>
              </a>
              <a 
                href="https://twitter.com/w99au" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gray-900 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="Follow W99AU on Twitter"
              >
                <i className="ri-twitter-x-fill text-2xl text-yellow-400 group-hover:text-black transition-colors"></i>
              </a>
              <a 
                href="https://www.instagram.com/w99au/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gray-900 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="Follow W99AU on Instagram"
              >
                <i className="ri-instagram-fill text-2xl text-yellow-400 group-hover:text-black transition-colors"></i>
              </a>
              <a 
                href="https://t.me/W99AUOFFICIAL" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gray-900 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="Join W99AU on Telegram"
              >
                <i className="ri-telegram-fill text-2xl text-yellow-400 group-hover:text-black transition-colors"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}