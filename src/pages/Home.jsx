import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/Home/HeroSection';
import CategorySection from '../components/Home/CategorySection';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import Testimonials from '../components/Home/Testimonials';

const Home = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Category Section */}
      <div className="scroll-mt-16" id="categories">
        <CategorySection />
      </div>
      
      {/* Featured Products Section */}
      <div className="scroll-mt-16" id="featured">
        <FeaturedProducts />
      </div>
      
      {/* Testimonials Section */}
      <div className="scroll-mt-16" id="testimonials">
        <Testimonials />
      </div>
      
      {/* Join Artisan Section */}
      <div className="scroll-mt-16" id="join">
        <JoinArtisanSection />
      </div>
    </div>
  );
};

const JoinArtisanSection = () => {
  return (
    <section className="bg-gradient-to-b from-amber-50 to-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Join Our Community of Artisans
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Are you a craftsperson looking to share your unique creations with the world?
            Join our marketplace and connect with customers who value handmade quality.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/admin-panel/"
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-5 rounded-lg transition-colors duration-200 shadow-md"
            >
              Start Selling Today
            </Link>
            <Link
              to="/artisans"
              className="bg-white hover:bg-gray-50 text-gray-800 font-medium py-2 px-5 rounded-lg border border-gray-300 transition-colors duration-200 shadow-md"
            >
              Meet Our Artisans
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;