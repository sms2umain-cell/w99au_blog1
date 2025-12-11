import { Link } from 'react-router-dom';
import { pokiesArticles } from '../../../mocks/pokiesArticles';

export function ArticleGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest W99AU Pokies Articles</h2>
          <p className="text-xl text-gray-600">Expert guides and strategies for playing pokies at W99AU</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pokiesArticles.map((article) => (
            <Link 
              key={article.id}
              to={`/article/${article.id}`}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
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
                  <span className="text-sm text-gray-500">{article.author}</span>
                  <span className="text-yellow-600 font-semibold group-hover:translate-x-2 transition-transform whitespace-nowrap">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}