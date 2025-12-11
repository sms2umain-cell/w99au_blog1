import { Link } from 'react-router-dom';
import { pokiesArticles } from '../../../mocks/pokiesArticles';

export function FeaturedArticle() {
  const featuredArticle = pokiesArticles[0];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-yellow-500 text-black text-sm font-bold rounded-full mb-4">
            FEATURED ARTICLE
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Must-Read W99AU Guide</h2>
        </div>

        <Link 
          to={`/article/${featuredArticle.id}`}
          className="group block bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-96 lg:h-auto overflow-hidden">
              <img 
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="px-4 py-2 bg-yellow-500 text-black text-sm font-semibold rounded-full">
                  {featuredArticle.category}
                </span>
              </div>
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 group-hover:text-yellow-600 transition-colors">
                {featuredArticle.title}
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {featuredArticle.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <i className="ri-user-line text-yellow-500"></i>
                  <span>{featuredArticle.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-calendar-line text-yellow-500"></i>
                  <span>{featuredArticle.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-time-line text-yellow-500"></i>
                  <span>{featuredArticle.readTime} read</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-yellow-600 font-bold text-lg group-hover:gap-4 transition-all whitespace-nowrap">
                Read Full Article
                <i className="ri-arrow-right-line text-2xl"></i>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}