import React from 'react';
import { FaStar, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const ProductCard = ({ product }) => {

  const navigate = useNavigate();

  // Default values if props aren't provided
  const {
    id = "1",
    name = "Block Printed Bedsheet",
    price = 2500,
    image = "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    discount = 0,
    rating = 4.5,
    reviewCount = 48,
    isNew = false,
    inStock = true
  } = product || {};

  const discountedPrice = price - (price * discount / 100);

  // Function to handle click event
  const cli = (id) => {
    navigate(`/product/${id}`);
  }

  return (
    <div onClick={()=>{cli(product.id)}} className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Product Badge (New or Discount) */}
      {isNew && (
        <div className="absolute top-3 left-3 z-10 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
          New Arrival
        </div>
      )}
      {discount > 0 && (
        <div className="absolute top-3 left-3 z-10 bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
          {discount}% Off
        </div>
      )}
      
      {/* Wishlist button */}
      <button className="absolute top-3 right-3 z-10 h-8 w-8 flex items-center justify-center rounded-full bg-white bg-opacity-70 text-gray-400 hover:text-red-500 transition-colors">
        <FaHeart />
      </button>
      
      {/* Product Image */}
      <Link to={`/product/${id}`} className="block overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </Link>
      
      {/* Product Info */}
      <div className="p-4">
        <Link to={`/product/${id}`} className="block">
          <h3 className="text-sm font-medium text-gray-800 mb-1 hover:text-indigo-600 transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            <FaStar className="h-3.5 w-3.5 text-yellow-400" />
            <span className="ml-1 text-xs font-medium">{rating}</span>
          </div>
          <span className="mx-1.5 text-xs text-gray-500">·</span>
          <span className="text-xs text-gray-500">{reviewCount} reviews</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            {discount > 0 ? (
              <div className="flex items-center">
                <span className="font-medium text-gray-900">₹{discountedPrice.toFixed(0)}</span>
                <span className="ml-2 text-xs text-gray-500 line-through">₹{price}</span>
              </div>
            ) : (
              <span className="font-medium text-gray-900">₹{price}</span>
            )}
          </div>
          
          {/* Add to Cart button */}
          <button 
            className={`p-2 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors ${!inStock && 'opacity-50 cursor-not-allowed'}`}
            disabled={!inStock}
          >
            <FaShoppingCart className="h-4 w-4" />
          </button>
        </div>
        
        {/* Stock Status */}
        {!inStock && (
          <div className="mt-2 text-xs text-red-500">Out of Stock</div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;