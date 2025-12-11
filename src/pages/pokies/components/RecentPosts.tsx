import { Link } from 'react-router-dom';

const recentPosts = [
  {
    id: 'splinkos-weekly-pokies-tournament-jan-2025',
    title: 'SPLINKOS Weekly Pokies Tournament - Win Your Share of $50,000',
    date: 'Jan 15, 2025',
    image: 'https://readdy.ai/api/search-image?query=exciting%20online%20casino%20tournament%20with%20leaderboard%20golden%20trophies%20and%20prize%20money%20on%20clean%20white%20background%20competitive%20gaming%20illustration&width=400&height=300&seq=recent-1&orientation=landscape',
  },
  {
    id: 'new-pokies-providers-splinkos-2025',
    title: 'New Pokies Providers Added to SPLINKOS in 2025',
    date: 'Jan 14, 2025',
    image: 'https://readdy.ai/api/search-image?query=modern%20online%20casino%20game%20providers%20logos%20and%20new%20slot%20machines%20on%20clean%20white%20background%20professional%20gaming%20illustration&width=400&height=300&seq=recent-2&orientation=landscape',
  },
  {
    id: 'pokies-myths-debunked-splinkos-guide',
    title: 'Top 10 Pokies Myths Debunked by SPLINKOS Experts',
    date: 'Jan 13, 2025',
    image: 'https://readdy.ai/api/search-image?query=fact%20versus%20myth%20concept%20with%20slot%20machines%20and%20truth%20symbols%20on%20clean%20white%20background%20educational%20gaming%20illustration&width=400&height=300&seq=recent-3&orientation=landscape',
  },
  {
    id: 'splinkos-vip-pokies-rewards-program',
    title: 'SPLINKOS VIP Pokies Rewards Program - Exclusive Benefits',
    date: 'Jan 12, 2025',
    image: 'https://readdy.ai/api/search-image?query=luxury%20VIP%20casino%20rewards%20program%20with%20golden%20cards%20and%20exclusive%20benefits%20on%20clean%20white%20background%20premium%20gaming%20illustration&width=400&height=300&seq=recent-4&orientation=landscape',
  },
];

export function RecentPosts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Recent SPLINKOS Posts</h2>
            <p className="text-xl text-gray-600">Stay updated with the latest from SPLINKOS</p>
          </div>
          <Link 
            to="/pokies"
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-colors whitespace-nowrap"
          >
            View All Posts
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentPosts.map((post, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <i className="ri-calendar-line text-yellow-500"></i>
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-yellow-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link 
            to="/pokies"
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-colors whitespace-nowrap"
          >
            View All Posts
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
