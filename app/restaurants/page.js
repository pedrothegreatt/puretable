'use client';
import { useState } from 'react';
import Link from 'next/link';

// Reusable StarRating component to avoid code repetition
const StarRating = ({ rating, size = 16, color = 'text-yellow-400' }) => {
  const roundedRating = Math.round(rating);
  return (
    <div className="flex" style={{ height: `${size}px` }}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-${size / 4} h-${size / 4} fill-current ${i < roundedRating ? color : 'text-gray-300'}`}
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
};

// Mock data to populate the UI
const MOCK_RESTAURANTS = [
  {
    restaurant_id: '1',
    name: 'Gjelina',
    is_certified_gf: true,
    cuisine: 'American',
    address: { city: 'Venice' },
    bg_color: '#F9EBEA',
    price_range: '$$$',
    yelp_rating: 4.5,
    app_user_rating: 4.8,
    ai_insight: { grade: 9, reason: 'Highly recommended for diverse and gluten-free options.' }
  },
  {
    restaurant_id: '2',
    name: 'Angelini Osteria',
    is_certified_gf: false,
    cuisine: 'Italian',
    address: { city: 'Beverly Hills' },
    bg_color: '#EAF9F1',
    price_range: '$$$',
    yelp_rating: 4.6,
    app_user_rating: 3.2,
    ai_insight: { grade: 7, reason: 'Limited celiac-friendly options.' }
  },
  {
    restaurant_id: '3',
    name: 'Petit Trois Original',
    is_certified_gf: true,
    cuisine: 'French',
    address: { city: 'Hollywood' },
    bg_color: '#EBF3FA',
    price_range: '$$$',
    yelp_rating: 4.3,
    app_user_rating: 4.9,
    ai_insight: { grade: 8, reason: 'Knowledgeable staff, classic French dishes.' }
  },
  {
    restaurant_id: '4',
    name: 'Redbird - Los Angeles',
    is_certified_gf: true,
    cuisine: 'Contemporary American',
    address: { city: 'Los Angeles' },
    bg_color: '#F4EAF9',
    price_range: '$$$',
    yelp_rating: 4.7,
    app_user_rating: 4.9,
    ai_insight: { grade: 10, reason: 'Exceptional quality and a dedicated kitchen.' }
  }
];

// Helper function to conditionally abbreviate text
const abbreviate = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

const App = () => {
  const [restaurants] = useState(MOCK_RESTAURANTS);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 font-poppins">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        body {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
        {/* Header section */}
        <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
        <nav className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl sm:text-3xl font-bold text-gray-800">
            puretable
          </Link>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-800 transition-colors">Features</a>
            <a href="#about" className="text-gray-600 hover:text-gray-800 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors">Contact</a>
          </div>
        </nav>
      </header>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6 mt-18">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
            What&apos;s Hot?
          </h1>
          <button className="hidden sm:inline-block px-4 py-2 bg-white text-gray-800 font-semibold rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
            Explore All
          </button>
        </div>
        
        <div className="relative">
          <div className="flex overflow-x-auto gap-6 pb-4 -mx-4 px-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.restaurant_id}
                className="flex-none w-[calc(100%-2rem)] sm:w-72 md:w-80 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative h-40 w-full" style={{ backgroundColor: restaurant.bg_color }}>
                  {restaurant.is_certified_gf && (
                    <span className="absolute top-2 left-2 inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-3 h-3 mr-1 text-green-500"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8.99l-9 9z" />
                      </svg>
                      GF
                    </span>
                  )}
                </div>
                
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">{abbreviate(restaurant.name, 20)}</h2>
                  <p className="text-gray-600 text-sm mb-2">{abbreviate(restaurant.cuisine, 15)} &bull; {restaurant.price_range} &bull; {restaurant.address.city}</p>
                  
                  {/* Rating Section */}
                  <div className="relative flex flex-col gap-2">
                    {/* Yelp Rating */}
                    <div className="flex items-center">
                      <StarRating rating={restaurant.yelp_rating} />
                      <span className="text-sm text-gray-500 ml-2">{restaurant.yelp_rating.toFixed(1)} Yelp Rating</span>
                    </div>
                    {/* App User Rating */}
                    <div className="flex items-center">
                      <StarRating rating={restaurant.app_user_rating} color="text-blue-500" />
                      <span className="text-sm text-gray-500 ml-2">{restaurant.app_user_rating.toFixed(1)} User Rating</span>
                    </div>
                     {/* AI Grade Badge */}
                    <div className="absolute right-0 top-0 flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full border-2 border-blue-600 text-blue-600 font-bold text-lg">
                      {restaurant.ai_insight.grade}
                    </div>
                  </div>

                  {/* AI Insights Section */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-600">{restaurant.ai_insight.reason}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Simple non-functional navigation arrow */}
          <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 cursor-pointer hover:bg-gray-200 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
