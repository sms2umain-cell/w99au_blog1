import { useEffect } from 'react';
import { Navbar } from '../home/components/Navbar';
import { Footer } from '../home/components/Footer';
import { updateSEO, generateBreadcrumbs } from '../../utils/seo';

export default function ResponsibleGamingPage() {
  useEffect(() => {
    updateSEO({
      title: 'Responsible Gaming at W99AU Casino Australia | Safe Gaming 2025',
      description: 'W99AU Casino is committed to responsible gaming in Australia. Learn about warning signs, self-assessment tools, deposit limits, self-exclusion, and get help from gambling support organizations. Play safely and responsibly.',
      keywords: 'responsible gaming, safe gambling, gambling help Australia, self-exclusion, deposit limits, gambling addiction, problem gambling, W99AU responsible gaming, gambling support',
      canonical: 'https://w99aud.com/responsible-gaming',
      ogType: 'website',
      structuredData: generateBreadcrumbs([
        { name: 'Home', url: '/' },
        { name: 'Responsible Gaming', url: '/responsible-gaming' }
      ])
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Responsible <span className="text-yellow-400">Gaming</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your <strong className="text-white">safety and wellbeing</strong> are our top priorities
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <article className="mb-16">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At <strong className="text-gray-900">W99AU Casino</strong>, we are committed to promoting <strong className="text-gray-900">responsible gaming</strong> and ensuring that our platform remains a safe and enjoyable environment for all players. We believe that gaming should be entertaining and fun, never a source of problems or distress.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We provide tools and resources to help you maintain control over your gaming activities and recognize when gaming might be becoming a problem.
            </p>
          </article>

          {/* Warning Signs */}
          <article className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <i className="ri-alert-line text-yellow-500"></i>
              Warning Signs of <strong className="text-yellow-600">Problem Gambling</strong>
            </h2>
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border border-red-200">
              <p className="text-gray-700 mb-6">
                Gaming may be becoming a problem if you:
              </p>
              <ul className="space-y-3">
                {[
                  'Spend more time or money gaming than you can afford',
                  'Chase losses by continuing to play to win back money',
                  'Neglect work, school, or family responsibilities',
                  'Borrow money or sell possessions to fund gaming',
                  'Feel anxious, irritable, or restless when not gaming',
                  'Lie to family or friends about your gaming activities',
                  'Use gaming as an escape from problems or negative feelings'
                ].map((sign, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <i className="ri-error-warning-line text-red-500 text-xl flex-shrink-0 mt-0.5"></i>
                    <span className="text-gray-700">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Self-Assessment Tools */}
          <article className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <i className="ri-questionnaire-line text-yellow-500"></i>
              Self-Assessment Tools
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl border border-yellow-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Set Deposit Limits</h3>
                <p className="text-gray-700 mb-4">
                  Control your spending by setting <strong className="text-gray-900">daily, weekly, or monthly deposit limits</strong>.
                </p>
                <a
                  href="https://t.ly/w99aublog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-600 font-semibold hover:text-yellow-700 transition-colors"
                >
                  Set Limits <i className="ri-arrow-right-line"></i>
                </a>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl border border-yellow-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Reality Check</h3>
                <p className="text-gray-700 mb-4">
                  Set reminders to alert you about how long you've been playing.
                </p>
                <a
                  href="https://t.ly/w99aublog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-600 font-semibold hover:text-yellow-700 transition-colors"
                >
                  Enable Alerts <i className="ri-arrow-right-line"></i>
                </a>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl border border-yellow-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Take a Break</h3>
                <p className="text-gray-700 mb-4">
                  Temporarily suspend your account for a period of <strong className="text-gray-900">24 hours to 6 weeks</strong>.
                </p>
                <a
                  href="https://t.ly/w99aublog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-600 font-semibold hover:text-yellow-700 transition-colors"
                >
                  Request Break <i className="ri-arrow-right-line"></i>
                </a>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl border border-yellow-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Self-Exclusion</h3>
                <p className="text-gray-700 mb-4">
                  Permanently or temporarily exclude yourself from gaming for <strong className="text-gray-900">6 months or more</strong>.
                </p>
                <a
                  href="https://t.ly/w99aublog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-600 font-semibold hover:text-yellow-700 transition-colors"
                >
                  Self-Exclude <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </article>

          {/* Tips for Responsible Gaming */}
          <article className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <i className="ri-lightbulb-line text-yellow-500"></i>
              Tips for <strong className="text-yellow-600">Responsible Gaming</strong>
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Set a Budget',
                  desc: 'Only gamble with money you can afford to lose. Never use money meant for bills or essentials.'
                },
                {
                  title: 'Set Time Limits',
                  desc: 'Decide how long you want to play before you start and stick to it.'
                },
                {
                  title: 'Never Chase Losses',
                  desc: 'Accept losses as part of the game. Trying to win back losses often leads to bigger problems.'
                },
                {
                  title: 'Take Regular Breaks',
                  desc: 'Step away from gaming regularly to maintain perspective and avoid fatigue.'
                },
                {
                  title: 'Don\'t Gamble Under Influence',
                  desc: 'Avoid gaming when under the influence of alcohol or drugs, as it impairs judgment.'
                },
                {
                  title: 'Balance Gaming with Other Activities',
                  desc: 'Maintain a healthy balance between gaming and other aspects of your life.'
                }
              ].map((tip, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <i className="ri-check-line text-yellow-500"></i>
                    {tip.title}
                  </h3>
                  <p className="text-gray-700 pl-7">{tip.desc}</p>
                </div>
              ))}
            </div>
          </article>

          {/* Help & Support Organizations */}
          <article className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <i className="ri-hand-heart-line text-yellow-500"></i>
              Get Help &amp; Support
            </h2>
            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border border-yellow-200">
              <p className="text-gray-700 mb-6">
                If you or someone you know has a <strong className="text-gray-900">gambling problem</strong>, help is available. Contact these organizations for confidential support:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <i className="ri-phone-line text-2xl text-yellow-500 flex-shrink-0"></i>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Gambling Help Online</h4>
                    <p className="text-gray-700">24/7 Helpline: <strong className="text-gray-900">1800 858 858</strong></p>
                    <a href="https://www.gamblinghelponline.org.au" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700">
                      www.gamblinghelponline.org.au
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <i className="ri-chat-3-line text-2xl text-yellow-500 flex-shrink-0"></i>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Lifeline Australia</h4>
                    <p className="text-gray-700">Crisis Support: <strong className="text-gray-900">13 11 14</strong></p>
                    <a href="https://www.lifeline.org.au" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700">
                      www.lifeline.org.au
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <i className="ri-global-line text-2xl text-yellow-500 flex-shrink-0"></i>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Gamblers Anonymous</h4>
                    <p className="text-gray-700">Support groups and meetings</p>
                    <a href="https://www.gamblersanonymous.org.au" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700">
                      www.gamblersanonymous.org.au
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Underage Gaming */}
          <article>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <i className="ri-shield-user-line text-yellow-500"></i>
              Underage Gaming Prevention
            </h2>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <p className="text-gray-700 mb-6">
                <strong className="text-gray-900">W99AU</strong> is strictly for players aged <strong className="text-gray-900">18 and over</strong>. We take underage gaming very seriously and have implemented strict measures to prevent minors from accessing our platform.
              </p>
              <ul className="space-y-3">
                {[
                  'Age verification is required for all new accounts',
                  'We may request additional identification documents',
                  'Parents should use parental control software to restrict access',
                  'Report any suspected underage gaming to our support team'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <i className="ri-shield-check-line text-yellow-500 text-xl flex-shrink-0 mt-0.5"></i>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}