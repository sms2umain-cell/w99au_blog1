export function Promotions() {
  const promotions = [
    {
      title: 'Welcome Bonus',
      amount: 'AUD 22.99',
      description: 'Sign up now and receive instant welcome bonus to start your winning journey',
      icon: 'ri-gift-line',
      color: 'from-yellow-500 to-orange-500',
      link: 'https://t.ly/w99aublog'
    },
    {
      title: 'VIP Loyalty Rewards',
      amount: 'Up to 20%',
      description: 'Exclusive cashback and rewards for our valued VIP members with special privileges',
      icon: 'ri-vip-crown-line',
      color: 'from-purple-500 to-pink-500',
      link: 'https://t.ly/w99aublog'
    },
    {
      title: 'Share & Invite Bonus',
      amount: 'AUD 50+',
      description: 'Earn unlimited bonuses by inviting friends to join the W99AU community',
      icon: 'ri-user-add-line',
      color: 'from-green-500 to-emerald-500',
      link: 'https://t.ly/w99aublog'
    },
    {
      title: 'Daily Promotions',
      amount: 'Every Day',
      description: 'New promotions daily including free spins, deposit bonuses, and special tournaments',
      icon: 'ri-calendar-check-line',
      color: 'from-red-500 to-rose-500',
      link: 'https://t.ly/w99aublog'
    }
  ];

  return (
    <section id="promotions" className="py-20 bg-gradient-to-b from-zinc-950 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Exclusive <span className="text-yellow-400">Promotions</span>
          </h3>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Take advantage of our generous <strong>casino bonuses</strong> and <strong>promotional offers</strong> designed to maximize your winnings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promotions.map((promo, index) => (
            <a
              key={index}
              href={promo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10 overflow-hidden cursor-pointer"
            >
              {/* Gradient Overlay */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${promo.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>

              <div className="relative">
                {/* Icon */}
                <div className={`w-14 h-14 flex items-center justify-center bg-gradient-to-br ${promo.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${promo.icon} text-2xl text-white`}></i>
                </div>

                {/* Amount */}
                <div className="text-3xl font-bold text-yellow-400 mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {promo.amount}
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-white mb-3">
                  {promo.title}
                </h4>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {promo.description}
                </p>

                {/* CTA */}
                <div className="flex items-center space-x-2 text-yellow-400 font-semibold text-sm group-hover:text-yellow-300 transition-colors whitespace-nowrap">
                  <span>Claim Now</span>
                  <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-white/60 text-sm">
            Terms and conditions apply. Please gamble responsibly.
          </p>
        </div>
      </div>
    </section>
  );
}