import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../Product/ProductCard';

const Jewelry = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jewelryProducts, setJewelryProducts] = useState([]);
  const [featuredArtisans, setFeaturedArtisans] = useState([]);

  // Sample data - in a real app, this would come from an API
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setJewelryProducts([
        {
          id: 1,
          name: 'Handcrafted Silver Pendant Necklace',
          image: '/images/pendant.jpg',
          price: 195,
          artisan: 'Silver Craft Studio',
          rating: 4.9,
          featured: true
        },
        {
          id: 2,
          name: 'Gold-Plated Gemstone Earrings',
          image: '/images/earrings.jpg',
          price: 145,
          artisan: 'Gem Artisans',
          rating: 4.7,
          featured: false
        },
        {
          id: 3,
          name: 'Beaded Charm Bracelet',
          image: '/images/bracelet.jpg',
          price: 85,
          artisan: 'Heritage Jewels',
          rating: 4.5,
          featured: true
        },
        {
          id: 4,
          name: 'Hammered Copper Ring Set',
          image: '/api/placeholder/300/300',
          price: 110,
          artisan: 'Silver Craft Studio',
          rating: 4.8,
          featured: false
        },
        {
          id: 5,
          name: 'Traditional Filigree Brooch',
          image: '/api/placeholder/300/300',
          price: 225,
          artisan: 'Gem Artisans',
          rating: 4.6,
          featured: true
        },
        {
          id: 6,
          name: 'Handwoven Pearl Anklet',
          image: '/api/placeholder/300/300',
          price: 95,
          artisan: 'Heritage Jewels',
          rating: 4.7,
          featured: false
        }
      ]);

      setFeaturedArtisans([
        {
          id: 1,
          name: 'Silver Craft Studio',
          image: '/api/placeholder/200/200',
          location: 'Florence, Italy',
          specialty: 'Traditional silver filigree',
          bio: 'Family-owned workshop with three generations of silver artisans creating intricate filigree designs using ancient techniques.',
          productCount: 22
        },
        {
          id: 2,
          name: 'Gem Artisans',
          image: '/api/placeholder/200/200',
          location: 'Jaipur, India',
          specialty: 'Gemstone setting and cutting',
          bio: 'Expert gemologists and jewelry craftspeople who specialize in ethically sourced gemstones and traditional setting techniques.',
          productCount: 16
        },
        {
          id: 3,
          name: 'Heritage Jewels',
          image: '/api/placeholder/200/200',
          location: 'Oaxaca, Mexico',
          specialty: 'Indigenous beadwork and metalsmithing',
          bio: 'Cooperative of indigenous artisans preserving ancestral jewelry-making traditions while supporting local communities.',
          productCount: 18
        }
      ]);

      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const jewelryTechniques = [
    {
      name: 'Filigree',
      description: 'Delicate metalwork using fine threads and beads to create intricate designs, dating back to ancient civilizations.',
      image: '/api/placeholder/400/250'
    },
    {
      name: 'Lost Wax Casting',
      description: 'An ancient technique where a wax model is created, surrounded by molding material, then melted away to leave a cavity for molten metal.',
      image: '/api/placeholder/400/250'
    },
    {
      name: 'Wire Wrapping',
      description: 'A technique where wire is manipulated with hand tools to create intricate designs without soldering.',
      image: '/api/placeholder/400/250'
    }
  ];

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="animate-pulse space-y-8">
            <div className="h-80 bg-purple-200/30 rounded-xl"></div>
            <div className="h-10 w-1/4 bg-purple-200/30 rounded-md"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl h-80 shadow-sm"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Static Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-28 flex flex-col items-center text-center">
          {/* Handcrafted Label */}
          <motion.div
            className="bg-purple-100/20 border border-purple-100/30 text-purple-50 px-4 py-1 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Timeless Elegance
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white"
          >
            The Art of <span className="text-purple-100">Jewelry</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-purple-50/90 max-w-2xl mb-10"
          >
            Discover exquisite handcrafted jewelry from master artisans around the world, 
            each piece embodying generations of tradition, skill, and cultural heritage.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a 
              href="#jewelry-products" 
              className="bg-gradient-to-r from-purple-200 to-purple-100 text-purple-900 px-8 py-4 text-lg font-semibold rounded-full shadow-md transition-all duration-200 hover:shadow-lg"
            >
              Explore Collection
            </a>
            <Link
              to="/artisans?craft=jewelry"
              className="bg-white/20 border border-purple-100/30 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-sm transition-all duration-200 hover:bg-white/30"
            >
              Meet Artisans
            </Link>
          </motion.div>
          
          {/* Featured Techniques Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {jewelryTechniques.map((technique) => (
              <Link
                key={technique.name}
                to={`/techniques/${technique.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white/20 border border-purple-100/30 text-purple-50 px-4 py-1 rounded-full text-sm hover:bg-purple-100/30 transition-colors"
              >
                {technique.name}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Featured Products */}
      <section id="jewelry-products" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-purple-900">Featured Jewelry Pieces</h2>
            <Link to="/shop?category=jewelry" className="flex items-center text-purple-600 hover:text-purple-700 font-medium">
              View All <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jewelryProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jewelry Techniques */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              className="bg-purple-500/10 border border-purple-500/20 text-purple-700 px-4 py-1 rounded-full text-sm font-medium mb-6 inline-block"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Traditional Methods
            </motion.div>
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Jewelry Crafting Techniques</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              From ancient filigree to innovative casting methods, jewelry-making encompasses a rich array of techniques.
              Learn about the methods our artisans use to transform raw materials into wearable art.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {jewelryTechniques.map((technique, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden border border-purple-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <img 
                  src={technique.image} 
                  alt={technique.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-purple-900 mb-2">{technique.name}</h3>
                  <p className="text-gray-700">{technique.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artisans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-purple-900">Meet Our Jewelry Artisans</h2>
            <Link to="/artisans?craft=jewelry" className="flex items-center text-purple-600 hover:text-purple-700 font-medium">
              View All <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArtisans.map((artisan, index) => (
              <motion.div
                key={artisan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-purple-50/50 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-purple-100"
              >
                <div className="relative h-56">
                  <img 
                    src={artisan.image} 
                    alt={artisan.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-purple-900 mb-1">{artisan.name}</h3>
                  <p className="text-purple-600 mb-3">{artisan.location}</p>
                  <p className="text-gray-700 font-medium text-sm mb-2">Specialty: {artisan.specialty}</p>
                  <p className="text-gray-600 mb-4 line-clamp-2">{artisan.bio}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{artisan.productCount} products</span>
                    <Link to={`/artisans/${artisan.id}`} className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                      View Profile
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Box */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-purple-100 rounded-xl p-8 shadow-sm"
          >
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="bg-purple-100/20 p-4 rounded-lg w-full md:w-auto">
                <Info className="w-12 h-12 text-purple-600" strokeWidth={1.5} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">
                  Preserving Jewelry Heritage
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Each jewelry piece embodies centuries of craftsmanship. Our artisans employ 
                      techniques passed down through generations, ensuring traditional 
                      metal and gemstone work thrives in the modern era.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Ethically sourced materials</li>
                      <li>Traditional hand-finishing techniques</li>
                      <li>Authentic cultural design patterns</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      We maintain strict quality standards while encouraging artistic innovation. 
                      Every purchase supports artisanal communities and helps preserve endangered 
                      jewelry-making traditions from around the world.
                    </p>
                    <div className="flex gap-4">
                      <Link
                        to="/sustainability"
                        className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                      >
                        Our Ethical Sourcing Promise
                        <ChevronRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 pt-8 border-t border-purple-100"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {[
                  { label: 'Artisan Workshops', value: '15+' },
                  { label: 'Years of Tradition', value: '200+' },
                  { label: 'Unique Techniques', value: '12' },
                  { label: 'Community Members', value: '320+' }
                ].map((stat, index) => (
                  <div key={index} className="p-4 bg-purple-50/50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-700">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Jewelry;