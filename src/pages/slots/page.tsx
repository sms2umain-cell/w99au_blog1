import { useState, useEffect } from 'react';
import { Navbar } from '../home/components/Navbar';
import { Footer } from '../home/components/Footer';
import SlotsHero from './components/SlotsHero';
import FeaturedArticle from './components/FeaturedArticle';
import Newsletter from './components/Newsletter';
import { Link } from 'react-router-dom';
import { slotsArticles } from '../../mocks/slotsArticles';
import { updateSEO, generateBreadcrumbs } from '../../utils/seo';

export default function SlotsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    updateSEO({
      title: 'W99AU Online Slots Australia | Video Slots & Jackpot Games 2025',
      description: 'Play W99AU online slots at W99AU Casino Australia. Discover video slots, classic slots, progressive jackpots and bonus features. 1000+ slot games from top providers with free spins and big wins.',
      keywords: 'W99AU online slots, video slots, classic slots, progressive jackpots, slot games Australia, free spins, bonus features, slot machines, Australian slots, W99AU casino',
      canonical: 'https://w99aud.com/slots',
      ogType: 'website',
      structuredData: generateBreadcrumbs([
        { name: 'Home', url: '/' },
        { name: 'Slots Games', url: '/slots' }
      ])
    });
  }, []);

  // Get unique categories and count articles
  const categories = [
    { name: 'All', count: slotsArticles.length },
    ...Array.from(new Set(slotsArticles.map(article => article.category))).map(category => ({
      name: category,
      count: slotsArticles.filter(article => article.category === category).length
    }))
  ];

  // Filter articles based on selected category
  const filteredArticles = selectedCategory === 'All' 
    ? slotsArticles 
    : slotsArticles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-20">
        <SlotsHero />
        
        {/* Featured Article */}
        <FeaturedArticle article={slotsArticles[0]} />
      </main>
      
      {/* Articles Section with Sidebar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore <strong className="text-yellow-600">W99AU Online Slots</strong> Categories</h2>
            <p className="text-xl text-gray-600">Browse our comprehensive collection of <strong>online slots Australia</strong> articles and guides</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Categories */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <i className="ri-filter-3-line text-yellow-500"></i>
                  Filter by Category
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between group ${
                        selectedCategory === category.name
                          ? 'bg-yellow-500 text-black font-semibold shadow-md'
                          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      <span className="whitespace-nowrap">{category.name}</span>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        selectedCategory === category.name
                          ? 'bg-black text-yellow-500'
                          : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Category Stats */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="text-sm text-gray-600 space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Total Articles:</span>
                      <strong className="text-gray-900">{slotsArticles.length}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Categories:</span>
                      <strong className="text-gray-900">{categories.length - 1}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Content - Article Grid */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-600">
                  Showing <strong className="text-gray-900">{filteredArticles.length}</strong> {selectedCategory !== 'All' && `${selectedCategory}`} article{filteredArticles.length !== 1 ? 's' : ''}
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <Link 
                    key={article.id}
                    to={`/article/${article.id}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={`${article.title} - W99AU Online Slots Guide`}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                        title={article.title}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-full whitespace-nowrap">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <i className="ri-calendar-line"></i>
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <i className="ri-time-line"></i>
                          {article.readTime}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{article.author}</span>
                        <span className="text-yellow-600 font-semibold text-sm group-hover:translate-x-2 transition-transform whitespace-nowrap">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {filteredArticles.length === 0 && (
                <div className="text-center py-16">
                  <i className="ri-file-search-line text-6xl text-gray-300 mb-4"></i>
                  <p className="text-xl text-gray-500">No articles found in this category</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}