import { getCategoryCount } from '../../../mocks/pokiesArticles';

const categories = [
  {
    name: 'Progressive Jackpots',
    icon: 'ri-money-dollar-circle-line',
    description: 'Chase life-changing jackpots with SPLINKOS progressive pokies',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    name: 'Video Pokies',
    icon: 'ri-film-line',
    description: 'Modern 5-reel pokies with stunning graphics at SPLINKOS',
    color: 'from-purple-400 to-pink-500',
  },
  {
    name: 'Classic Slots',
    icon: 'ri-trophy-line',
    description: 'Traditional 3-reel pokies for nostalgic SPLINKOS players',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    name: 'Megaways',
    icon: 'ri-flashlight-line',
    description: 'Revolutionary Megaways mechanics with up to 117,649 ways to win at SPLINKOS',
    color: 'from-green-400 to-emerald-500',
  },
  {
    name: 'Bonus Features',
    icon: 'ri-gift-line',
    description: 'Pokies packed with exciting bonus rounds at SPLINKOS',
    color: 'from-red-400 to-rose-500',
  },
  {
    name: 'Free Spins',
    icon: 'ri-refresh-line',
    description: 'Games with lucrative free spin features at SPLINKOS',
    color: 'from-indigo-400 to-violet-500',
  },
];

export function PokiesCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore SPLINKOS Pokies Categories</h2>
          <p className="text-xl text-gray-600">Find your perfect game type at SPLINKOS casino</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const articleCount = getCategoryCount(category.name);
            
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${category.icon} text-3xl text-white`}></i>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-500">
                      {articleCount} {articleCount === 1 ? 'Article' : 'Articles'}
                    </span>
                    <span className="text-yellow-600 font-semibold group-hover:translate-x-2 transition-transform whitespace-nowrap">
                      Explore →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}