import { Link } from 'react-router-dom';

export function Services() {
  const services = [
    {
      title: 'Online Pokies',
      description: 'Thousands of premium pokies from top providers with progressive jackpots and exciting bonus features',
      icon: 'ri-game-line',
      image: 'https://w99aud.com/media/28dc6e412d6769253168e.jpg',
      features: ['3000+ Games', 'Progressive Jackpots', 'Free Spins'],
      link: '/pokies'
    },
    {
      title: 'Live Casino',
      description: 'Real dealers, real-time action with blackjack, roulette, baccarat, and more live casino games',
      icon: 'ri-live-line',
      image: 'https://w99aud.com/media/491ce7b46cb663c6f71a5.jpg',
      features: ['Live Dealers', 'HD Streaming', 'Multiple Tables'],
      link: '/live-casino'
    },
    {
      title: 'Sportsbook',
      description: 'Bet on your favorite sports with competitive odds, live betting, and comprehensive coverage',
      icon: 'ri-football-line',
      image: 'https://w99aud.com/media/28dc6e412d6769253168e.jpg',
      features: ['Live Betting', 'Best Odds', 'All Sports'],
      link: '/sports'
    },
    {
      title: 'Lottery & Poker',
      description: 'Try your luck with lottery draws and compete in exciting poker tournaments with big prizes',
      icon: 'ri-trophy-line',
      image: 'https://w99aud.com/media/491ce7b46cb663c6f71a5.jpg',
      features: ['Daily Draws', 'Tournaments', 'Big Prizes'],
      link: '/slots'
    }
  ];

  return (
    <section id="services" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Our <span className="text-yellow-400">Gaming Services</span>
          </h3>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Explore our comprehensive range of <strong>online casino games</strong> and <strong>betting options</strong> tailored for Australian players
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group relative bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20 cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                <img 
                  src={service.image} 
                  alt={`${service.title} at W99AU`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative p-8">
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${service.icon} text-3xl text-black`}></i>
                </div>

                {/* Content */}
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h4>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center space-x-2 text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors whitespace-nowrap">
                  <span>Play Now</span>
                  <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}