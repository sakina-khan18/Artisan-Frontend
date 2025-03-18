import React from 'react';
import Layout from '../components/Layout/Layout';
import ProductCard from '../components/Product/ProductCard';
import { motion } from 'framer-motion';

const Wishlist = () => {
  const wishlistItems = [
    { id: 1, name: 'Handwoven Basket', price: 25, image: '/images/basket.jpg' },
    // Add more items...
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Your Wishlist</h1>
        
        {wishlistItems.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
          >
            {wishlistItems.map((item) => (
              <ProductCard 
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg mb-4">Your wishlist is empty</p>
            <Link 
              to="/shop" 
              className="text-amber-600 hover:text-amber-700 font-medium"
            >
              Start Exploring →
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Wishlist;