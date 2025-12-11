export function Features() {
  const features = [
    {
      icon: 'ri-flashlight-line',
      title: 'Instant Deposits',
      description: 'Auto deposit system for immediate gaming access with multiple payment methods'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Fast Withdrawals',
      description: 'Express withdrawal processing within 5 minutes to your preferred account'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: '24/7 Support',
      description: 'Round-the-clock customer service team ready to assist you anytime'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Secure Platform',
      description: 'Bank-level encryption and licensed operations for complete peace of mind'
    },
    {
      icon: 'ri-gift-line',
      title: 'Exclusive Bonuses',
      description: 'Welcome bonus, VIP rewards, and daily promotions for all members'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile Optimized',
      description: 'Seamless gaming experience on any device, anywhere, anytime'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Why <span className="text-yellow-400">W99AU</span> Stands Out
          </h3>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Experience the ultimate <strong>online casino platform</strong> with unmatched features designed for Australian players
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10 cursor-pointer"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className={`${feature.icon} text-2xl text-black`}></i>
              </div>
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                {feature.title}
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}