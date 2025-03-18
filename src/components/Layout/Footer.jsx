import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import { Send, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
    // Show success message or notification
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Newsletter Section with Amber Background */}
      <div className="bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Stay <span className="text-amber-600">Connected</span></h3>
              <p className="text-gray-600 max-w-md">
                Subscribe to our newsletter to receive updates on new artisans, limited editions, and exclusive offers.
              </p>
            </div>
            <div className="w-full md:w-1/2 max-w-md">
              <form onSubmit={handleSubmit} className="flex">
                <div className="relative flex-grow">
                  <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-l-lg border-2 border-r-0 border-gray-200 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                    required
                  />
                </div>
                <motion.button 
                  type="submit"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-3 rounded-r-lg transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={18} />
                </motion.button>
              </form>
              <p className="text-xs text-gray-500 mt-2">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <motion.div
                className="flex items-center justify-center h-8 w-8 bg-amber-600 text-white rounded-lg overflow-hidden shadow-md mr-2"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="font-bold text-sm">AK</span>
              </motion.div>
              <span className="text-xl font-bold text-gray-900">
                Artisan<span className="text-amber-600">Kart</span>
              </span>
            </div>
            <p className="text-gray-600 mb-6">
              Connecting artisans with customers worldwide, preserving traditional crafts
              while creating sustainable livelihoods.
            </p>
          
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="text-amber-600 mt-1 mr-2" />
                <span className="text-gray-600 text-sm">123 Artisan Street, Craft City, AC 12345</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-amber-600 mr-2" />
                <span className="text-gray-600 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-amber-600 mr-2" />
                <span className="text-gray-600 text-sm">contact@artisankart.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-5 pb-2 border-b border-gray-100">
              Shop
            </h3>
            <ul className="space-y-3">
              {['New Arrivals', 'Best Sellers', 'Featured Artisans', 'Gift Cards', 'Special Offers'].map(item => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-600 hover:text-amber-600 text-sm flex items-center group transition-all duration-300"
                  >
                    <span className="relative overflow-hidden">
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                    </span>
                    <ArrowRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-5 pb-2 border-b border-gray-100">
              Customer Service
            </h3>
            <ul className="space-y-3">
              {[
                'Contact Us', 
                'FAQ', 
                'Shipping & Delivery', 
                'Returns & Refunds', 
                'Order Tracking'
              ].map(item => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-600 hover:text-amber-600 text-sm flex items-center group transition-all duration-300"
                  >
                    <span className="relative overflow-hidden">
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                    </span>
                    <ArrowRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-5 pb-2 border-b border-gray-100">
              Company
            </h3>
            <ul className="space-y-3 mb-6">
              {[
                'About Us', 
                'Our Artisans', 
                'Sustainability', 
                'Careers',
                'Blog'
              ].map(item => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-600 hover:text-amber-600 text-sm flex items-center group transition-all duration-300"
                  >
                    <span className="relative overflow-hidden">
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                    </span>
                    <ArrowRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Connect With Us</h3>
            <div className="flex space-x-3">
              {[
                { icon: <FaFacebook size={18} />, url: "https://facebook.com" },
                { icon: <FaInstagram size={18} />, url: "https://instagram.com" },
                { icon: <FaTwitter size={18} />, url: "https://twitter.com" },
                { icon: <FaPinterest size={18} />, url: "https://pinterest.com" }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-9 w-9 rounded-full bg-gray-100 text-gray-600 hover:bg-amber-600 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} ArtisanKart. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Accessibility', 'Cookie Settings'].map(item => (
                <Link 
                  key={item}
                  to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-500 hover:text-amber-600 text-xs transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;