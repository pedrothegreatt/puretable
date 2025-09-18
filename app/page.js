"use client";

import Image from 'next/image';
import { memo } from 'react';
import FindRest from './Images/find-rest.png';
import NightOut from './Images/Night-out.png';
import Sunny from './Images/sunny-patio.png';
import aihelper from './Images/ai-helper.png';
import ReadReview from './Images/read-reviews.png';
import Beachimage from './Images/beach-image.png';

const App = memo(() => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-green-100 font-['Poppins',sans-serif]">


      {/* Header section */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
        <nav className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl sm:text-3xl font-bold text-gray-800">
            puretable
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-800 transition-colors">Features</a>
            <a href="#about" className="text-gray-600 hover:text-gray-800 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

   

  {/* Hero section */}
  <section className="relative min-h-screen flex items-center justify-center px-6">
    <div className="relative z-10 container mx-auto text-center">
      <h1 className="lg:text-6xl max-w-4xl mx-auto font-bold text-gray-800 mb-4 leading-tight">
        Celiac dining made simple
      </h1>
      <p className="sm:text-xl text-gray-700 mb-7 max-w-3xl mx-auto leading-relaxed">
        An AI platform to enhance restaurant experiences for those with Celiac.
      </p>

      <button className="px-8 sm:px-12 py-4 sm:py-3 mb-12 text-lg sm:text-xl font-semibold text-white bg-gradient-to-r from-[#177a3dc1] to-[#1a3052] rounded-full shadow-xl transition-all duration-300 hover:bg-green-700 hover:shadow-2xl transform hover:scale-105 active:scale-95">
        Get Started Today
      </button>
    </div>
  </section>



  {/* Why PureTable Section */}
  <div className="container py-6 px-6 mb-10 bg-gradient-to-r from-[#ffffff] via-[#e6ede3] to-[#e2f4e0] rounded-3xl p-8 sm:p-16 border border-white/30 shadow-2xl max-w-7xl mx-auto">
    <div className="space-y-12">
      <h2 className="text-6xl sm:text-8xl font-bold text-gray-800 text-center mt-10 mb-8">
        Why PureTable?
      </h2>

      {/* Dine with Confidence Section */}
  <section className=" px-6">
  <div className="bg-gradient-to-r from-[#ffffff] via-[#e6ede3] to-[#e2f4e0] rounded-3xl p-8 sm:p-16 max-w-7xl mx-auto flex items-center gap-8">
    {/* Left Side: Text Content */}
    <div className="flex-1 text-center max-w-sm">
      <h2 className="text-3xl font-bold mb-4 text-[#1a202c]">Dine with Confidence</h2>
      <p className="text-lg text-gray-700">
        Don&apos;t let the burden of research keep you from trying new places. Dine without doubts! Spend more time enjoying your meals and less time stressing about them.
      </p>
    </div>
    {/* Right Side: Image Container */}
    <div className="flex-1 flex justify-end">
      <Image src={Sunny} alt="Gluten-Free" className="w-full max-w-4xl rounded-4xl shadow-lg" priority />
    </div>
  </div>
  </section>

{/* Explore New Places Section */}
  <section className=" px-6">
  <div className="bg-gradient-to-l from-[#ffffff] via-[#e6ede3] to-[#e2f4e0] rounded-3xl p-8 sm:p-16 max-w-7xl mx-auto flex items-center gap-8">
    
    {/* Image Container (now on the left) */}
    <div className="flex-1 flex justify-end">
      <Image src={Beachimage} alt="Gluten-Free" className="w-full max-w-4xl rounded-4xl shadow-lg" loading="lazy" />
    </div>

    {/* Text Content (now on the right) */}
    <div className="flex-1 text-center max-w-sm">
      <h2 className="text-3xl font-bold mb-4 text-[#1a202c]">Explore New Places</h2>
      <p className="text-lg text-gray-700">
        Discover new places to eat and enjoy your meals without the worry of cross-contamination.
      </p>
    </div>
  </div>
</section>

{/* Build Community Section */}
<section className=" px-6">
  <div className="bg-gradient-to-r from-[#ffffff] via-[#e6ede3] to-[#e2f4e0] rounded-3xl p-8 sm:p-16 max-w-7xl mx-auto flex items-center gap-8">
    {/* Left Side: Text Content */}
    <div className="flex-1 text-center max-w-sm">
      <h2 className="text-3xl font-bold mb-4 text-[#1a202c]">Build Community</h2>
      <p className="text-lg text-gray-700">
      Enjoy a community of people who understand your needs with insights to help you dine with confidence.
      </p>
    </div>
    {/* Right Side: Image Container */}
    <div className="flex-1 flex justify-end">
      <Image src={NightOut} alt="Gluten-Free" className="w-full max-w-4xl rounded-4xl shadow-lg" loading="lazy" />
    </div>
  </div>
  </section>
  </div>
  </div>


  {/* How it works Section - Translucent Container */}
<section className="py-20 px-6">
  <div className="bg-gradient-to-r from-[#ffffff] via-[#e6ede3] to-[#e2f4e0] rounded-3xl p-8 sm:p-16 border border-white/30 shadow-2xl max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-gray-800 text-center mt-5 mb-20 max-w-5xl mx-auto">
      PureTable combines advanced AI technology with user reviews to help you decide the safest options for you and others, without the endless research.
    </h2>
    
    {/* 4 Images Grid with Text Overlays */}
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 mb-5">
      {/* Image 1: Find Restaurant */}
      <div className="relative group">
        <Image 
          src={FindRest} 
          alt="Find Gluten-Free Restaurants" 
          className="w-full h-120 object-cover rounded-2xl shadow-lg"
          loading="lazy"
        />
        {/* Always visible overlay */}
        <div className="absolute inset-0 flex flex-col items-left justify-start rounded-2xl p-4">
          <div className="relative">
            <div className="absolute inset-0 bg-[#3a422a11] backdrop-blur-md rounded-lg -m-2"></div>
            <div className="relative z-10">
              <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-1">Find Restaurants</h3>
              <p className="text-white/90 text-sm sm:text-base lg:text-lg">Expansive list of options</p>
            </div>
          </div>
        </div>
      </div>
      {/* Image 2: Read Reviews */}
      <div className="relative group">
        <Image 
          src={ReadReview} 
          alt="Find Gluten-Free Restaurants" 
          className="w-full h-120 object-cover rounded-2xl shadow-lg"
          loading="lazy"
        />
        {/* Always visible overlay */}
        <div className="absolute inset-0 flex flex-col items-left justify-start rounded-2xl p-4">
          <div className="relative">
            <div className="absolute inset-0 bg-[#3a422a11] backdrop-blur-md rounded-lg -m-2"></div>
            <div className="relative z-10">
              <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-1">Read Reviews</h3>
              <p className="text-white/90 text-sm sm:text-base lg:text-lg">Active Community</p>
            </div>
          </div>
        </div>
      </div>
      {/* Image 3: AI Helper */}
      <div className="relative group">
        <Image 
          src={aihelper} 
          alt="Find Gluten-Free Restaurants" 
          className="w-full h-120 object-cover rounded-2xl shadow-lg"
          loading="lazy"
        />
        {/* Always visible overlay */}
        <div className="absolute inset-0 flex flex-col items-left justify-start rounded-2xl p-4">
          <div className="relative">
            <div className="absolute inset-0 bg-[#3a422a11] backdrop-blur-md rounded-lg -m-2"></div>
            <div className="relative z-10">
              <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-1">Get AI Support</h3>
              <p className="text-white/90 text-sm sm:text-base lg:text-lg">Research made easy</p>
            </div>
          </div>
        </div>
      </div>
      
    </div> 
  </div>
</section>

{/* How it works Section - Further Explained */}
<section className="py-10 px-6">
        <div className="container mx-auto">
            <div className="bg-gradient-to-b from-[#ffffff] via-[#e6ede3] to-[#e3f6e651] rounded-3xl p-8 sm:p-12 border border-white/50 shadow-2xl max-w-5xl mx-auto">
            <div className="space-y-12">
              <h2 className="text-5xl font-bold text-gray-800 text-center mb-10">How it works</h2>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#177a3d47] to-green-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-700">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-10">Search & Discover</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Enter your location and dietary preferences. Our AI instantly scans thousands of restaurants to find the safest options for you.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#177a3d47] to-green-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-700">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Review & Verify</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Read detailed reviews from other celiacs, view safety protocols, and see verified gluten-free menu items with complete ingredient lists.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#177a3d47] to-green-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-700">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Dine with Confidence</h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-15">
                    Make reservations directly through our platform, communicate your needs clearly to restaurants, and enjoy worry-free dining experiences.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* CTA section - Translucent */}
      <section id="contact" className="py-20 mb-10 mt-10 px-6">
        <div className="container mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              Ready to Dine Safely?
            </h2>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
              Join thousands of celiacs who trust PureTable for their dining adventures. Start exploring safe restaurants in your area today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#177a3db2] to-[#1a3052] rounded-full shadow-xl transition-all duration-300 hover:bg-green-700 hover:shadow-2xl transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 text-lg font-semibold text-green-700 bg-white/70 rounded-full shadow-lg transition-all duration-300 hover:bg-white hover:shadow-xl transform hover:scale-105">
                Learn More
              </button>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-white/20">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">puretable</h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Making dining safe and enjoyable for everyone with celiac disease.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Support</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">About Us</a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 PureTable. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
});




export default App;

App.displayName = 'App';