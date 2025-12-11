import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from '../home/components/Navbar';
import { Footer } from '../home/components/Footer';
import { Newsletter } from '../pokies/components/Newsletter';
import { pokiesArticles } from '../../mocks/pokiesArticles';
import { liveCasinoArticles } from '../../mocks/liveCasinoArticles';
import { sportsArticles } from '../../mocks/sportsArticles';
import { slotsArticles } from '../../mocks/slotsArticles';
import { updateSEO, generateBreadcrumbs, generateArticleSchema } from '../../utils/seo';

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  
  // Find article from all collections
  const allArticles = [...pokiesArticles, ...liveCasinoArticles, ...sportsArticles, ...slotsArticles];
  const article = allArticles.find(a => a.id === id);

  // Determine which article list to use based on the article ID
  let backLink = '/pokies';
  let backText = 'Back to Pokies Blog';
  let sectionName = 'Pokies';
  
  if (pokiesArticles.find(a => a.id === id)) {
    backLink = '/pokies';
    backText = 'Back to Pokies Blog';
    sectionName = 'Pokies';
  } else if (liveCasinoArticles.find(a => a.id === id)) {
    backLink = '/live-casino';
    backText = 'Back to Live Casino';
    sectionName = 'Live Casino';
  } else if (sportsArticles.find(a => a.id === id)) {
    backLink = '/sports';
    backText = 'Back to Sports';
    sectionName = 'Sports Betting';
  } else if (slotsArticles.find(a => a.id === id)) {
    backLink = '/slots';
    backText = 'Back to Slots';
    sectionName = 'Slots';
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (article) {
      // Convert date format for structured data
      const datePublished = new Date(article.date).toISOString();
      
      updateSEO({
        title: `${article.title} | W99AU ${sectionName} Guide Australia 2025`,
        description: article.excerpt || `${article.title} - Expert guide from W99AU Casino Australia. Learn about ${sectionName.toLowerCase()} strategies, tips and insights.`,
        keywords: `${article.title}, W99AU, ${sectionName}, ${article.category}, online casino Australia, casino guide, gaming tips`,
        canonical: `https://w99aud.com/article/${article.id}`,
        ogType: 'article',
        structuredData: {
          breadcrumbs: generateBreadcrumbs([
            { name: 'Home', url: '/' },
            { name: sectionName, url: backLink },
            { name: article.title, url: `/article/${article.id}` }
          ]),
          article: generateArticleSchema({
            title: article.title,
            description: article.excerpt,
            author: article.author,
            datePublished: datePublished,
            dateModified: datePublished,
            image: article.image,
            category: article.category
          })
        }
      });
    }
  }, [id, article, backLink, sectionName]);

  if (!article) {
    return <Navigate to="/" replace />;
  }

  // Get related articles from the same section
  let relatedArticles;
  if (backLink === '/pokies') {
    relatedArticles = pokiesArticles.filter(a => a.id !== article.id && a.categories?.some(cat => article.categories?.includes(cat))).slice(0, 2);
  } else if (backLink === '/live-casino') {
    relatedArticles = liveCasinoArticles.filter(a => a.id !== article.id && a.categories?.some(cat => article.categories?.includes(cat))).slice(0, 2);
  } else if (backLink === '/sports') {
    relatedArticles = sportsArticles.filter(a => a.id !== article.id && a.categories?.some(cat => article.categories?.includes(cat))).slice(0, 2);
  } else if (backLink === '/slots') {
    relatedArticles = slotsArticles.filter(a => a.id !== article.id && a.category === article.category).slice(0, 2);
  }

  // Get categories array (handle both categories and category fields)
  const articleCategories = article.categories || (article.category ? [article.category] : []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      <main className="pt-20">
        {/* Article Header */}
        <header className="bg-gradient-to-br from-yellow-50 via-white to-gray-50 py-16 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-3 text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
              <Link to={backLink} className="hover:text-yellow-600 transition-colors flex items-center gap-1 font-medium">
                <i className="ri-arrow-left-line"></i>
                {backText}
              </Link>
              <span className="text-gray-300">|</span>
              <span className="px-3 py-1 bg-yellow-500 text-black rounded-full font-semibold text-xs">
                {article.category}
              </span>
            </nav>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-yellow-100 rounded-full">
                  <i className="ri-user-line text-yellow-600"></i>
                </div>
                <span className="font-medium">By <strong className="text-gray-900">{article.author}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full">
                  <i className="ri-calendar-line text-blue-600"></i>
                </div>
                <time dateTime={new Date(article.date).toISOString()}>{article.date}</time>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full">
                  <i className="ri-time-line text-green-600"></i>
                </div>
                <span>{article.readTime} read</span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-16">
          <figure className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src={article.image} 
              alt={`${article.title} - W99AU ${sectionName} Guide`}
              className="w-full h-[500px] object-cover object-top"
              title={article.title}
            />
          </figure>
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div 
            className="article-content
              prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:pb-4 prose-h2:border-b-4 prose-h2:border-yellow-400 prose-h2:bg-gradient-to-r prose-h2:from-yellow-50 prose-h2:to-transparent prose-h2:p-6 prose-h2:rounded-xl prose-h2:-mx-6
              prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-gray-800 prose-h3:flex prose-h3:items-center prose-h3:gap-3 prose-h3:before:content-['▸'] prose-h3:before:text-yellow-500 prose-h3:before:text-3xl
              prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-4 prose-h4:text-gray-700 prose-h4:font-semibold prose-h4:bg-gray-50 prose-h4:p-4 prose-h4:rounded-lg prose-h4:border-l-4 prose-h4:border-yellow-500
              prose-p:text-gray-700 prose-p:leading-loose prose-p:mb-6 prose-p:text-lg
              prose-strong:text-gray-900 prose-strong:font-bold prose-strong:bg-yellow-50 prose-strong:px-1 prose-strong:rounded
              prose-ul:my-8 prose-ul:space-y-4 prose-ul:bg-white prose-ul:p-6 prose-ul:rounded-xl prose-ul:shadow-sm prose-ul:border prose-ul:border-gray-100
              prose-li:text-gray-700 prose-li:leading-relaxed prose-li:text-base prose-li:pl-2
              prose-li:marker:text-yellow-500 prose-li:marker:text-xl
              prose-table:border-collapse prose-table:w-full prose-table:my-10 prose-table:shadow-lg prose-table:rounded-xl prose-table:overflow-hidden
              prose-th:bg-gradient-to-r prose-th:from-yellow-500 prose-th:to-yellow-400 prose-th:text-black prose-th:p-4 prose-th:text-left prose-th:font-bold prose-th:border-0
              prose-td:p-4 prose-td:border prose-td:border-gray-200 prose-td:bg-white
              prose-tr:even:bg-gray-50
              prose-a:text-yellow-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:text-yellow-700 hover:prose-a:underline
            "
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Call to Action Box */}
          <aside className="mt-16 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-2xl p-8 text-center shadow-xl">
            <h3 className="text-3xl font-bold text-black mb-4">Ready to Play at <strong>W99AU</strong>?</h3>
            <p className="text-black/80 text-lg mb-6">Join thousands of Australian players enjoying premium <strong className="text-black">{sectionName.toLowerCase()}</strong> games!</p>
            <a href="https://t.ly/w99aublog" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-black text-yellow-500 rounded-full font-bold text-lg hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap">
              <span className="hidden sm:inline">Claim Your AUD 22.99 Bonus Now!</span>
              <span className="sm:hidden">Claim Now</span>
            </a>
          </aside>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t-2 border-gray-200">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <i className="ri-price-tag-3-line text-yellow-500"></i>
                Categories:
              </span>
              {articleCategories.map((cat) => (
                <Link
                  key={cat}
                  to={backLink}
                  className="px-5 py-2 bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-700 rounded-full text-sm font-semibold hover:from-yellow-200 hover:to-yellow-100 transition-all duration-300 border border-yellow-200 whitespace-nowrap"
                >
                  {cat}
                </Link>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <span className="text-sm font-bold text-gray-700 flex items-center gap-2 whitespace-nowrap">
                  <i className="ri-share-line text-yellow-500"></i>
                  Share this article:
                </span>
                <div className="flex gap-3">
                  <button 
                    className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110 shadow-md"
                    aria-label="Share on Facebook"
                  >
                    <i className="ri-facebook-fill text-xl"></i>
                  </button>
                  <button 
                    className="w-12 h-12 flex items-center justify-center bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-all duration-300 hover:scale-110 shadow-md"
                    aria-label="Share on Twitter"
                  >
                    <i className="ri-twitter-fill text-xl"></i>
                  </button>
                  <button 
                    className="w-12 h-12 flex items-center justify-center bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-110 shadow-md"
                    aria-label="Share on Pinterest"
                  >
                    <i className="ri-pinterest-fill text-xl"></i>
                  </button>
                  <button 
                    className="w-12 h-12 flex items-center justify-center bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 hover:scale-110 shadow-md"
                    aria-label="Share on WhatsApp"
                  >
                    <i className="ri-whatsapp-fill text-xl"></i>
                  </button>
                </div>
              </div>
            </div>
          </footer>

          {/* Related Articles */}
          {relatedArticles && relatedArticles.length > 0 && (
            <section className="mt-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Continue Reading</h3>
                <p className="text-gray-600">Explore more <strong className="text-gray-900">W99AU {sectionName}</strong> articles</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    to={`/article/${relatedArticle.id}`}
                    className="group"
                  >
                    <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-yellow-300">
                      <div className="relative h-56 overflow-hidden">
                        <img 
                          src={relatedArticle.image} 
                          alt={`${relatedArticle.title} - W99AU ${sectionName} Guide`}
                          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                          title={relatedArticle.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full whitespace-nowrap">
                            {relatedArticle.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2">
                          {relatedArticle.title}
                        </h4>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                          {relatedArticle.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{relatedArticle.readTime}</span>
                          <span className="text-yellow-600 font-bold group-hover:translate-x-2 transition-transform whitespace-nowrap">
                            Read More →
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>

        {/* Newsletter Section */}
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}