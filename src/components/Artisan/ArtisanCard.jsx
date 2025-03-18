
import React from 'react';
import { FaStar, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const ArtisanCard = ({ artisan }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/artisans/${id}`);
  };
  const {
    id = "1",
    name = "Maya Sharma",
    image = "https://images.unsplash.com/photo-1559582798-678dfc71ccd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    location = "Jaipur, Rajasthan",
    rating = 4.8,
    reviewCount = 127,
    specialty = "Block Printing",
    shortBio = "Third-generation artisan specializing in traditional Rajasthani block printing techniques using natural dyes.",
    featured = true,
    productCount = 24
  } = artisan || {};

  return (
    <div onClick={()=>{handleClick(artisan.id)}} className="relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-10 bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full border border-amber-300">
          Featured Artisan
        </div>
      )}
      
      {/* Wishlist button */}
      <button className="absolute top-4 right-4 z-10 text-gray-200 hover:text-red-500 transition-colors duration-300">
        <FaHeart className="text-xl" />
      </button>
      
      {/* Artisan image with gradient overlay */}
      <div className="relative h-48">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-3 left-4 text-white">
          <div className="flex items-center space-x-1">
            <FaMapMarkerAlt className="text-sm text-red-400" />
            <span className="text-xs">{location}</span>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
          </div>
        </div>
        
        <div className="mb-3">
          <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-md">
            {specialty}
          </span>
          <span className="inline-block ml-2 text-xs text-gray-500">
            {productCount} products
          </span>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {shortBio}
        </p>
        
        <Link 
          to={`/artisans/${id}`}
          className="block w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-center rounded-md transition-colors duration-300"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default ArtisanCard;