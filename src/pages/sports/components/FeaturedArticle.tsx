import { useNavigate } from 'react-router-dom';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

interface FeaturedArticleProps {
  article: Article;
}

export default function FeaturedArticle({ article }: FeaturedArticleProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/article/${article.id}`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
            Featured Article
          </span>
          <h2 className="text-4xl font-bold text-gray-900">
            Must-Read Sports Betting Guide
          </h2>
        </div>

        <div 
          onClick={handleClick}
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-200"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-[400px] md:h-auto">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-yellow-500 text-black font-bold rounded-full text-sm shadow-lg">
                  {article.category}
                </span>
              </div>
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {article.title}
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {article.excerpt}
              </p>

              <div className="flex items-center gap-6 mb-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <i className="ri-user-line text-yellow-600"></i>
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-calendar-line text-yellow-600"></i>
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-time-line text-yellow-600"></i>
                  <span>{article.readTime}</span>
                </div>
              </div>

              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap w-fit">
                Read Full Article
                <i className="ri-arrow-right-line ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}