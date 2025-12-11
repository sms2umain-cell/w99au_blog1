import { useEffect } from 'react';
import { Navbar } from '../home/components/Navbar';
import { Footer } from '../home/components/Footer';
import { useState } from 'react';
import { updateSEO, generateBreadcrumbs, generateFAQSchema } from '../../utils/seo';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'Getting Started',
      icon: 'ri-rocket-line',
      questions: [
        {
          q: 'How do I create an account at W99AU?',
          a: 'Creating an account is simple! Click the "Sign Up" button, fill in your details including name, email, and password. Verify your email address, and you\'re ready to start playing. The entire process takes less than 2 minutes.'
        },
        {
          q: 'Is W99AU licensed and regulated?',
          a: 'Yes, W99AU operates under a valid gaming license and is fully regulated. We adhere to strict standards for fair gaming, player protection, and responsible gambling. All our games are tested and certified for fairness.'
        },
        {
          q: 'What is the minimum age to play at W99AU?',
          a: 'You must be at least 18 years old to create an account and play at W99AU. We take age verification seriously and may request identification documents to confirm your age.'
        }
      ]
    },
    {
      category: 'Deposits & Withdrawals',
      icon: 'ri-money-dollar-circle-line',
      questions: [
        {
          q: 'What payment methods are accepted?',
          a: 'We accept a wide range of payment methods including bank transfers, credit/debit cards (Visa, Mastercard), e-wallets (PayPal, Skrill, Neteller), and cryptocurrencies (Bitcoin, Ethereum). Choose the method that works best for you.'
        },
        {
          q: 'How long do withdrawals take?',
          a: 'Withdrawal times vary by payment method. E-wallets are typically processed within 24 hours, bank transfers take 3-5 business days, and cryptocurrency withdrawals are usually completed within 1-2 hours. We strive to process all withdrawals as quickly as possible.'
        },
        {
          q: 'Is there a minimum deposit amount?',
          a: 'Yes, the minimum deposit amount is AUD 10 for most payment methods. Some payment methods may have different minimum amounts. Check the cashier section for specific details for your chosen payment method.'
        },
        {
          q: 'Are there any withdrawal fees?',
          a: 'W99AU does not charge any fees for withdrawals. However, your payment provider or bank may charge their own processing fees. We recommend checking with your payment provider for their fee structure.'
        }
      ]
    },
    {
      category: 'Bonuses & Promotions',
      icon: 'ri-gift-line',
      questions: [
        {
          q: 'What is the welcome bonus?',
          a: 'New players receive an exclusive AUD 22.99 welcome bonus upon registration! This bonus can be used to explore our games and potentially win real money. Terms and conditions apply, including wagering requirements.'
        },
        {
          q: 'What are wagering requirements?',
          a: 'Wagering requirements specify how many times you need to play through a bonus before you can withdraw winnings. For example, a 30x wagering requirement on a $20 bonus means you need to wager $600 before withdrawal. Check each promotion\'s terms for specific requirements.'
        },
        {
          q: 'Can I have multiple bonuses at once?',
          a: 'Generally, only one bonus can be active at a time. You must complete the wagering requirements of your current bonus before claiming a new one. Check the specific terms of each promotion for details.'
        }
      ]
    },
    {
      category: 'Games & Gaming',
      icon: 'ri-game-line',
      questions: [
        {
          q: 'How many games are available?',
          a: 'W99AU offers over 2,000 games including pokies, live casino games, table games, sports betting, and slots. We regularly add new games from top providers to keep our selection fresh and exciting.'
        },
        {
          q: 'Can I play games for free?',
          a: 'Yes! Most of our pokies and slots offer a demo mode where you can play for free without risking real money. This is a great way to learn the games and develop strategies before playing with real money.'
        },
        {
          q: 'Are the games fair?',
          a: 'Absolutely! All our games use Random Number Generators (RNG) that are regularly tested and certified by independent auditors. This ensures every spin, deal, or bet outcome is completely random and fair.'
        },
        {
          q: 'Can I play on mobile devices?',
          a: 'Yes! W99AU is fully optimized for mobile devices. You can play all our games on smartphones and tablets using your mobile browser. No app download is required - just visit our website and start playing.'
        }
      ]
    },
    {
      category: 'Account & Security',
      icon: 'ri-shield-check-line',
      questions: [
        {
          q: 'How do I verify my account?',
          a: 'Account verification is simple. Upload a copy of your ID (passport or driver\'s license) and a recent utility bill or bank statement showing your address. This helps us ensure account security and comply with regulations.'
        },
        {
          q: 'Is my personal information safe?',
          a: 'Yes! We use industry-standard SSL encryption to protect all your personal and financial information. Your data is stored securely and never shared with third parties without your consent.'
        },
        {
          q: 'What if I forget my password?',
          a: 'Click the "Forgot Password" link on the login page. Enter your registered email address, and we\'ll send you instructions to reset your password. If you have trouble, contact our support team for assistance.'
        },
        {
          q: 'Can I set deposit limits?',
          a: 'Yes! We support responsible gaming and allow you to set daily, weekly, or monthly deposit limits. You can also set loss limits and session time reminders in your account settings.'
        }
      ]
    },
    {
      category: 'Support',
      icon: 'ri-customer-service-2-line',
      questions: [
        {
          q: 'How can I contact customer support?',
          a: 'Our support team is available 24/7 via live chat, email (support@w99au.com), or through our contact form. Live chat is the fastest way to get help, with average response times under 2 minutes.'
        },
        {
          q: 'What languages does support speak?',
          a: 'Our primary support language is English. We also offer support in several other languages including Mandarin, Cantonese, and Vietnamese to serve our diverse player base.'
        },
        {
          q: 'How quickly will I get a response?',
          a: 'Live chat responses are typically instant. Email inquiries are usually answered within 24 hours. For urgent matters, we recommend using live chat for the fastest assistance.'
        }
      ]
    }
  ];

  // Flatten all FAQs for structured data
  const allFAQs = faqs.flatMap(category => 
    category.questions.map(q => ({
      question: q.q,
      answer: q.a
    }))
  );

  useEffect(() => {
    updateSEO({
      title: 'W99AU Casino FAQ | Frequently Asked Questions Australia 2025',
      description: 'Find answers to frequently asked questions about W99AU Casino Australia. Learn about account creation, deposits, withdrawals, bonuses, games, security, and 24/7 customer support.',
      keywords: 'W99AU FAQ, casino questions, help center, account help, deposit help, withdrawal help, bonus questions, game help, customer support, W99AU help',
      canonical: 'https://w99aud.com/faq',
      ogType: 'website',
      structuredData: {
        breadcrumbs: generateBreadcrumbs([
          { name: 'Home', url: '/' },
          { name: 'FAQ', url: '/faq' }
        ]),
        faq: generateFAQSchema(allFAQs)
      }
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
              Frequently Asked <span className="text-yellow-400">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about <strong className="text-white">W99AU Casino</strong>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <article key={categoryIndex} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <i className={`${category.icon} text-2xl text-black`}></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{category.category}</h2>
              </div>

              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={faqIndex}
                      className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                      itemScope
                      itemProp="mainEntity"
                      itemType="https://schema.org/Question"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <h4 className="text-lg font-semibold text-gray-900 pr-4" itemProp="name">
                          {faq.q}
                        </h4>
                        <i
                          className={`ri-arrow-down-s-line text-2xl text-yellow-500 transition-transform flex-shrink-0 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        ></i>
                      </button>
                      {isOpen && (
                        <div 
                          className="px-6 pb-5 pt-2"
                          itemScope
                          itemProp="acceptedAnswer"
                          itemType="https://schema.org/Answer"
                        >
                          <p className="text-gray-700 leading-relaxed" itemProp="text">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </article>
          ))}

          {/* Still Have Questions */}
          <div className="mt-16 bg-gradient-to-br from-yellow-50 to-white p-10 rounded-3xl border border-yellow-200 text-center">
            <i className="ri-question-answer-line text-5xl text-yellow-500 mb-4"></i>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our <strong className="text-gray-900">support team</strong> is here to help <strong className="text-gray-900">24/7</strong>.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-3 px-8 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}