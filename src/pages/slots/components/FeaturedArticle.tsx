import { Link } from 'react-router-dom';

interface FeaturedArticleProps {
  article: {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
  };
}

export default function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-yellow-500 text-black text-sm font-bold rounded-full mb-4 whitespace-nowrap">
            Featured Article
          </span>
          <h2 className="text-4xl font-bold text-gray-900">Must-Read Slots Guide</h2>
        </div>

        <Link 
          to={`/article/${article.id}`}
          className="group block bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-80 md:h-auto overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-yellow-500 text-black text-sm font-bold rounded-full whitespace-nowrap">
                  {article.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                {article.title}
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {article.excerpt}
              </p>

              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-2">
                  <i className="ri-user-line"></i>
                  {article.author}
                </span>
                <span className="flex items-center gap-2">
                  <i className="ri-calendar-line"></i>
                  {article.date}
                </span>
                <span className="flex items-center gap-2">
                  <i className="ri-time-line"></i>
                  {article.readTime}
                </span>
              </div>

              <div className="flex items-center gap-2 text-yellow-600 font-bold text-lg group-hover:gap-4 transition-all">
                <span className="whitespace-nowrap">Read Full Article</span>
                <i className="ri-arrow-right-line text-xl"></i>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}