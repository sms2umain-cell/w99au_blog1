import { useState } from 'react';
import { Link } from 'react-router-dom';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I sign up for W99AU?',
      answer: 'Signing up is quick and easy! Click the "Sign Up" button, fill in your details, verify your account, and you\'ll receive your AUD 22.99 welcome bonus instantly. The entire process takes less than 2 minutes.'
    },
    {
      question: 'How fast are withdrawals at W99AU?',
      answer: 'W99AU offers express withdrawals processed within 5 minutes. Our automated system ensures your winnings reach your account quickly and securely. Most withdrawals are completed instantly during business hours.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept multiple payment methods including bank transfers, credit/debit cards, e-wallets, and cryptocurrency. All transactions are secured with bank-level encryption for your safety.'
    },
    {
      question: 'Is W99AU licensed and safe?',
      answer: 'Yes, W99AU is fully licensed and regulated. We use advanced SSL encryption to protect your data and ensure fair gaming with certified random number generators. Your security is our top priority.'
    },
    {
      question: 'Can I play on mobile devices?',
      answer: 'Absolutely! W99AU is fully optimized for mobile devices. Play your favorite pokies, live casino games, and place sports bets on any smartphone or tablet without downloading an app.'
    },
    {
      question: 'What is the VIP program?',
      answer: 'Our VIP program offers exclusive benefits including higher withdrawal limits, personal account managers, special bonuses, cashback rewards, and invitations to exclusive tournaments and events.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-zinc-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Frequently Asked <span className="text-yellow-400">Questions</span>
            </h3>
            <p className="text-lg text-white/70">
              Get answers to common questions about <strong>W99AU online casino</strong> and our services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-xl overflow-hidden hover:border-yellow-500/50 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer group"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors pr-4">
                    {faq.question}
                  </h4>
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-yellow-500/10 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                    <i className={`ri-${openIndex === index ? 'subtract' : 'add'}-line text-yellow-400 text-xl transition-transform duration-300`}></i>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-white/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/70 mb-4">Still have questions?</p>
            <Link 
              to="/contact"
              className="px-6 py-3 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 flex items-center space-x-2 mx-auto whitespace-nowrap cursor-pointer"
            >
              <i className="ri-customer-service-2-line text-xl"></i>
              <span>Contact Support</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}