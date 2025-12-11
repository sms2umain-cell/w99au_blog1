export function Newsletter() {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-500 to-yellow-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <i className="ri-mail-line text-6xl text-black"></i>
        </div>
        
        <h2 className="text-4xl font-bold text-black mb-4">
          Stay Updated with W99AU Live Casino
        </h2>
        
        <p className="text-xl text-black/80 mb-8">
          Get the latest live casino tips, strategies, and exclusive promotions delivered to your inbox
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-black/20"
            required
          />
          <button
            type="submit"
            className="px-8 py-4 bg-black text-yellow-500 font-bold rounded-lg hover:bg-gray-900 transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            Subscribe Now
          </button>
        </form>

        <p className="text-sm text-black/70 mt-4">
          Join 50,000+ players receiving W99AU live casino updates. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}