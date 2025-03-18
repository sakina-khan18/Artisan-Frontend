import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-amber-50 to-amber-100 text-gray-900 overflow-hidden">
      {/* Static Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-amber-50 to-amber-100"></div>

      {/* Decorative Elements - Reduced number and simplified */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32 flex flex-col items-center text-center">
        {/* Handcrafted Label */}
        <motion.div
          className="bg-amber-500/10 border border-amber-500/20 text-amber-700 px-4 py-1 rounded-full text-sm font-medium mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Handcrafted with passion
        </motion.div>

        {/* Animated Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Discover <span className="text-amber-600">Authentic</span> Handcrafted Treasures
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Supporting local artisans and celebrating traditional craftsmanship.
          Every purchase helps preserve cultural heritage and sustainability.
        </motion.p>

        {/* Buttons with Animations */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Shop Button with Amber Theme */}
          <Link
            to="/shop"
            className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-md transition-all duration-200 hover:shadow-lg"
          >
            Shop Collection
          </Link>

          {/* Artisans Button with Simpler Effect */}
          <Link
            to="/artisans"
            className="bg-white/60 border border-amber-200 text-gray-800 px-8 py-4 text-lg font-semibold rounded-full shadow-sm transition-all duration-200 hover:bg-white/80"
          >
            Meet Artisans
          </Link>
        </motion.div>

        {/* Featured Crafts Pills */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {["Pottery", "Weaving","Textiles", "Jewelry", "Bamboo"].map((craft) => (
            <Link 
              key={craft} 
              to={`/category/${craft.toLowerCase()}`} 
              className="bg-white/30 border border-amber-100 text-gray-700 px-4 py-1 rounded-full text-sm hover:bg-amber-100 transition-colors"
            >
              {craft}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;