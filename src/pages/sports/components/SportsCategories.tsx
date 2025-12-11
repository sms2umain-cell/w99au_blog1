import { useState } from 'react';

interface SportsCategoriesProps {
  onCategoryChange: (category: string) => void;
  activeCategory: string;
}

export default function SportsCategories({ onCategoryChange, activeCategory }: SportsCategoriesProps) {
  const categories = [
    { name: 'All Sports', icon: '🏆', count: 8 },
    { name: 'Beginner Guides', icon: '📚', count: 3 },
    { name: 'Sport Strategies', icon: '🎯', count: 4 },
    { name: 'Bonuses & Promotions', icon: '🎁', count: 1 }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Browse Sports Betting Topics
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore expert guides and strategies for all major sports at W99AU
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => onCategoryChange(category.name)}
              className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer border-2 ${
                activeCategory === category.name
                  ? 'bg-gradient-to-br from-yellow-500 to-yellow-600 border-yellow-600 shadow-xl scale-105'
                  : 'bg-white border-gray-200 hover:border-yellow-500 hover:shadow-lg'
              }`}
            >
              <div className="text-5xl mb-4">{category.icon}</div>
              <h3 className={`text-xl font-bold mb-2 ${
                activeCategory === category.name ? 'text-white' : 'text-gray-900'
              }`}>
                {category.name}
              </h3>
              <p className={`text-sm ${
                activeCategory === category.name ? 'text-white/90' : 'text-gray-600'
              }`}>
                {category.count} {category.count === 1 ? 'Article' : 'Articles'}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}