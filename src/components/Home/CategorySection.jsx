import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Scissors, 
  PenTool, 
  Palette, 
  Brush, 
  Leaf, 
  Feather,
  ChevronRight,
  Shirt,
  Wand2, 
  Gem,
  Diamond,
  Crown
} from "lucide-react";

// SVG Pattern backgrounds instead of images
const PatternBackground = memo(({ pattern, color }) => {
  // Different SVG patterns for each category
  const patterns = {
    weaving: (
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <pattern id="weaving-pattern" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="scale(2) rotate(0)">
          <rect x="0" y="0" width="100%" height="100%" fill={`${color}50`} />
          <path d="M0 10h20M10 0v20" stroke={`${color}90`} strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#weaving-pattern)`} />
        <rect width="100%" height="100%" fill={`${color}20`} />
      </svg>
    ),
    pottery: (
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <pattern id="pottery-pattern" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="scale(2) rotate(45)">
          <rect x="0" y="0" width="100%" height="100%" fill={`${color}50`} />
          <circle cx="10" cy="10" r="2" fill={`${color}90`} />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#pottery-pattern)`} />
        <rect width="100%" height="100%" fill={`${color}20`} />
      </svg>
    ),
    bamboo: (
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <pattern id="bamboo-pattern" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="scale(2) rotate(0)">
          <rect x="0" y="0" width="100%" height="100%" fill={`${color}50`} />
          <path d="M0 5h20M0 15h20" stroke={`${color}90`} strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#bamboo-pattern)`} />
        <rect width="100%" height="100%" fill={`${color}20`} />
      </svg>
    ),
    textiles: (
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <pattern id="textiles-pattern" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="scale(2) rotate(30)">
          <rect x="0" y="0" width="100%" height="100%" fill={`${color}50`} />
          <path d="M0 0L20 20M20 0L0 20" stroke={`${color}90`} strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#textiles-pattern)`} />
        <rect width="100%" height="100%" fill={`${color}20`} />
      </svg>
    ),
    jewelry: (
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <pattern id="jewelry-pattern" patternUnits="userSpaceOnUse" width="30" height="30" patternTransform="scale(1.5) rotate(0)">
          <rect x="0" y="0" width="100%" height="100%" fill={`${color}50`} />
          <path d="M15 5L25 15L15 25L5 15z" fill="none" stroke={`${color}90`} strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#jewelry-pattern)`} />
        <rect width="100%" height="100%" fill={`${color}20`} />
      </svg>
    )
  };

  return patterns[pattern] || patterns.weaving;
});

// Category theme data
const categoryThemes = {
  Weaving: {
    primaryIcon: <Scissors size={28} />,
    secondaryIcon: <PenTool size={20} />,
    pattern: "weaving",
    color: "#f59e0b", // amber-500
    bgLight: "bg-amber-50",
    bgDark: "bg-amber-100",
    accentBg: "bg-amber-500",
    accentText: "text-amber-600",
    accentHover: "group-hover:text-amber-700",
    buttonBg: "bg-amber-100 group-hover/btn:bg-amber-600"
  },
  Pottery: {
    primaryIcon: <Palette size={28} />,
    secondaryIcon: <Brush size={20} />,
    pattern: "pottery",
    color: "#ec4899", // pink-500
    bgLight: "bg-pink-50",
    bgDark: "bg-pink-100",
    accentBg: "bg-pink-500",
    accentText: "text-pink-600",
    accentHover: "group-hover:text-pink-700",
    buttonBg: "bg-pink-100 group-hover/btn:bg-pink-600"
  },
  "Bamboo Crafts": {
    primaryIcon: <Leaf size={28} />,
    secondaryIcon: <Feather size={20} />,
    pattern: "bamboo",
    color: "#10b981", // emerald-500
    bgLight: "bg-emerald-50",
    bgDark: "bg-emerald-100",
    accentBg: "bg-emerald-500",
    accentText: "text-emerald-600",
    accentHover: "group-hover:text-emerald-700",
    buttonBg: "bg-emerald-100 group-hover/btn:bg-emerald-600"
  },
  Textiles: {
    primaryIcon: <Shirt size={28} />,
    secondaryIcon: <Wand2 size={20} />, // Changed from Needle to Wand2
    pattern: "textiles",
    color: "#6366f1", // indigo-500
    bgLight: "bg-indigo-50",
    bgDark: "bg-indigo-100",
    accentBg: "bg-indigo-500",
    accentText: "text-indigo-600",
    accentHover: "group-hover:text-indigo-700",
    buttonBg: "bg-indigo-100 group-hover/btn:bg-indigo-600"
  },
  Jewelry: {
    primaryIcon: <Gem size={28} />,
    secondaryIcon: <Diamond size={20} />,
    pattern: "jewelry",
    color: "#8b5cf6", // violet-500
    bgLight: "bg-violet-50",
    bgDark: "bg-violet-100",
    accentBg: "bg-violet-500",
    accentText: "text-violet-600",
    accentHover: "group-hover:text-violet-700",
    buttonBg: "bg-violet-100 group-hover/btn:bg-violet-600"
  }
};

// Memoized category card for performance
const CategoryCard = memo(({ category, onClick }) => {
  const { name, description } = category;
  
  // Get theme or use default
  const theme = categoryThemes[name] || categoryThemes.Weaving;

  return (
    <div
      className="flex-shrink-0 w-64 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-40 overflow-hidden">
        {/* Pattern background instead of image */}
        <PatternBackground pattern={theme.pattern} color={theme.color} />
        
        {/* Main icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`${theme.accentBg} bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center`}>
            <div className={`${theme.bgLight} p-3 rounded-full ${theme.accentText}`}>
              {theme.primaryIcon}
            </div>
          </div>
        </div>
        
        {/* Secondary decorative elements */}
        <div className="absolute top-4 right-4">
          <div className={`${theme.bgDark} p-2 rounded-full ${theme.accentText}`}>
            {theme.secondaryIcon}
          </div>
        </div>
        
        <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className={`w-6 h-1 ${theme.accentBg} rounded-full mr-2`}></div>
          <h3 className={`text-lg font-bold text-gray-800 ${theme.accentHover} transition-colors`}>
            {name}
          </h3>
        </div>
        
        <p className="text-gray-600 mb-4 text-xs leading-relaxed line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between w-full group/btn">
          <span className={`text-sm font-medium ${theme.accentText} group-hover:text-white transition-colors`}>
            Explore
          </span>
          <span className={`w-6 h-6 rounded-full flex items-center justify-center ${theme.buttonBg} group-hover:text-white transition-all`}>
            <ChevronRight className="h-3 w-3 transform group-hover:translate-x-0.5 transition-transform duration-300" />
          </span>
        </div>
      </div>
    </div>
  );
});

const CategorySection = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: "Weaving",
      description: "Traditional handwoven textiles and fabrics crafted with authentic techniques passed down through generations."
    },
    {
      id: 2,
      name: "Pottery",
      description: "Handcrafted ceramic art and functional pottery shaped with precision and artistic expression by skilled artisans."
    },
    {
      id: 3,
      name: "Bamboo",
      description: "Sustainable bamboo products and decorative items that blend functionality with traditional craftsmanship."
    },
    {
      id: 4,
      name: "Textiles",
      description: "Exquisite hand-loomed fabrics and garments featuring intricate patterns and natural dyes from regional textile traditions."
    },
    {
      id: 5,
      name: "Jewelry",
      description: "Handcrafted ornaments and accessories featuring traditional metalwork, gemstones, and culturally significant designs."
    }
  ];

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${categoryName.toLowerCase().replace(' ', '-')}`);
  };

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center mb-3">
            <Crown className="text-amber-500 mr-2" size={20} />
            <span className="text-amber-600 font-medium text-sm tracking-wider uppercase">Artisan Treasures</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-3">
            Explore Our Craft Categories
          </h2>
          
          <p className="text-gray-600 text-center max-w-2xl mb-4 text-sm">
            Discover handmade treasures created by skilled craftspeople using traditional techniques.
          </p>
          
          <div className="w-12 h-1 bg-amber-500 rounded-full"></div>
        </div>
        
        {/* Scrollable row of categories */}
        <div className="relative">
          {/* Optional scroll indicators */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 bg-gradient-to-r from-gray-50 to-transparent h-full z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 bg-gradient-to-l from-gray-50 to-transparent h-full z-10 pointer-events-none"></div>
          
          {/* Scrollable container */}
          <div className="flex overflow-x-auto pb-6 gap-6 px-2">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={() => handleCategoryClick(category.name)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(CategorySection);