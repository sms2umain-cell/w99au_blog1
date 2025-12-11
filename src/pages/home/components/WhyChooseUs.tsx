export function WhyChooseUs() {
  const reasons = [
    {
      number: '01',
      title: 'Trusted & Licensed',
      description: 'Fully licensed and regulated online casino platform operating with complete transparency and fairness for all Australian players'
    },
    {
      number: '02',
      title: 'Fast Transactions',
      description: 'Industry-leading deposit and withdrawal speeds with automated processing ensuring you get your winnings within minutes'
    },
    {
      number: '03',
      title: 'Premium Games',
      description: 'Exclusive collection of over 3000 games from world-class providers including pokies, live casino, and sports betting options'
    },
    {
      number: '04',
      title: 'Mobile Excellence',
      description: 'Optimized mobile platform allowing seamless gaming on any device with full functionality and stunning graphics'
    },
    {
      number: '05',
      title: 'VIP Treatment',
      description: 'Dedicated VIP program with personalized service, exclusive bonuses, higher limits, and priority customer support'
    },
    {
      number: '06',
      title: 'Secure Banking',
      description: 'Multiple secure payment methods with bank-level encryption protecting your financial information and transactions'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Why Choose <span className="text-yellow-400">W99AU</span> Casino?
            </h3>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              As <strong>Australia's premier online casino</strong>, W99AU delivers an unmatched gaming experience with cutting-edge technology, extensive game selection, and unwavering commitment to player satisfaction and security.
            </p>
            <p className="text-white/70 mb-8 leading-relaxed">
              Join thousands of satisfied players who trust W99AU for their <strong>online pokies</strong>, <strong>live casino games</strong>, and <strong>sports betting</strong> needs. Experience the difference with our 24/7 customer support, instant withdrawals, and exclusive promotional offers.
            </p>
            <a 
              href="https://t.ly/w99aublog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-xl hover:shadow-yellow-500/50 items-center space-x-2 whitespace-nowrap cursor-pointer"
            >
              <span>Start Playing Now</span>
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>

          {/* Right Content - Reasons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10 cursor-pointer"
              >
                <div className="text-5xl font-bold text-yellow-400/20 mb-3 group-hover:text-yellow-400/30 transition-colors" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {reason.number}
                </div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {reason.title}
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}