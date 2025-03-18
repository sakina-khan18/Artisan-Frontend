import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Star,
  ShoppingCart,
  Heart,
  Share,
  Leaf,
  Clock,
  Check,
  AlertCircle,
} from "lucide-react";
import { useParams, Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState(location.state?.product || null);
  const [isLoading, setIsLoading] = useState(!product);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [inWishlist, setInWishlist] = useState(false);
  const navigate = useNavigate();

  // Additional images - in a real app, these would come from your API
  const additionalImages = [
    product?.image,
    "https://images.unsplash.com/photo-1622977608775-5132e2393690?q=80&w=1200",
    "https://images.unsplash.com/photo-1513506212968-811b22414de5?q=80&w=1200",
  ].filter(Boolean);

  // Fetch product if not provided in location state
  useEffect(() => {
    if (!product && id) {
      // In a real app, you would fetch from your API
      // This simulates an API call using the bamboo products data from your original component
      setIsLoading(true);

      setTimeout(() => {
        const bambooProducts = [
          {
            id: 1,
            name: "Handwoven Bamboo Basket Set",
            image:
              "https://images.unsplash.com/photo-1622977608775-5132e2393690",
            price: 125,
            artisan: "Bamboo Weavers",
            rating: 4.8,
            featured: true,
            reviews: 24,
            description:
              "Set of three nesting baskets with intricate diagonal weave pattern. Perfect for storage or display.",
            availability: "In stock",
            discount: null,
            material: "100% Sustainable Bamboo",
            dimensions: 'Large: 12" x 8", Medium: 10" x 6", Small: 8" x 4"',
            weight: "3.2 lbs (total set)",
            care: "Dust with soft cloth. Avoid prolonged exposure to direct sunlight or moisture.",
            artisanId: 1,
          },
          {
            id: 2,
            name: "Bamboo Tea Ceremony Set",
            image:
              "https://images.unsplash.com/photo-1563822249366-3abf78a381ec",
            price: 85,
            artisan: "Green Forest Crafts",
            rating: 4.9,
            featured: false,
            reviews: 36,
            description:
              "Traditional tea tray with matching cups, perfect for serving guests or personal relaxation.",
            availability: "In stock",
            discount: null,
            material: "Naturally Aged Bamboo",
            dimensions: 'Tray: 14" x 10", Cups: 2.5" diameter',
            weight: "2.4 lbs",
            care: "Hand wash only with mild soap. Oil occasionally with food-safe bamboo oil.",
            artisanId: 2,
          },
          {
            id: 3,
            name: "Bamboo Kitchen Utensil Set",
            image:
              "https://images.unsplash.com/photo-1584570411963-93d52476338a",
            price: 60,
            artisan: "Eco Artisans",
            rating: 4.7,
            featured: true,
            reviews: 42,
            description:
              "Set of six cooking utensils including spatula, spoon, and strainer. Heat-resistant and naturally antibacterial.",
            availability: "In stock",
            discount: 10,
            material: "Carbonized Bamboo",
            dimensions: 'Length: 12-14" each',
            weight: "1.8 lbs (total set)",
            care: "Hand wash and dry immediately. Oil occasionally with food-safe bamboo oil.",
            artisanId: 3,
          },
          {
            id: 4,
            name: "Bamboo Wind Chimes",
            image:
              "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d",
            price: 45,
            artisan: "Bamboo Weavers",
            rating: 4.6,
            featured: false,
            reviews: 18,
            description:
              "Melodic wind chimes with five hollow bamboo tubes of varying lengths for gentle natural tones.",
            availability: "Low stock",
            discount: null,
            material: "Aged Natural Bamboo",
            dimensions: 'Height: 24", Width: 6"',
            weight: "0.9 lbs",
            care: "Suitable for covered outdoor use. Bring inside during harsh weather. Oil occasionally for longevity.",
            artisanId: 1,
          },
          {
            id: 5,
            name: "Bamboo Furniture Collection",
            image:
              "https://images.unsplash.com/photo-1616046229478-9901c5536a45",
            price: 295,
            artisan: "Green Forest Crafts",
            rating: 4.8,
            featured: true,
            reviews: 14,
            description:
              "Set including coffee table and two chairs. Lightweight yet durable with beautifully curved details.",
            availability: "Made to order",
            discount: 15,
            material: "Solid Mature Bamboo",
            dimensions: 'Table: 36" x 24" x 18", Chairs: 32" x 22" x 20"',
            weight: "18 lbs (table), 12 lbs (each chair)",
            care: "Indoor use only. Clean with damp cloth and mild soap. Apply bamboo finish twice yearly.",
            artisanId: 2,
          },
          {
            id: 6,
            name: "Bamboo Floor Lamp",
            image:
              "https://images.unsplash.com/photo-1513506212968-811b22414de5",
            price: 150,
            artisan: "Eco Artisans",
            rating: 4.5,
            featured: false,
            reviews: 27,
            description:
              "Standing lamp with steam-bent bamboo frame and natural fiber shade. Creates warm, ambient lighting.",
            availability: "In stock",
            discount: null,
            material: "Steam-bent Moso Bamboo",
            dimensions: 'Height: 60", Base: 14" diameter, Shade: 18" diameter',
            weight: "6.5 lbs",
            care: "Indoor use only. Dust regularly. Keep away from moisture sources.",
            artisanId: 3,
          },
        ];

        const foundProduct = bambooProducts.find((p) => p.id === parseInt(id));
        setProduct(foundProduct || null);
        setIsLoading(false);
      }, 800);
    }
  }, [id, product]);

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-green-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="animate-pulse space-y-8">
            <div className="h-6 w-24 bg-green-200/30 rounded-md mb-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-96 bg-green-200/30 rounded-xl"></div>
              <div className="space-y-4">
                <div className="h-8 w-3/4 bg-green-200/30 rounded-md"></div>
                <div className="h-6 w-1/4 bg-green-200/30 rounded-md"></div>
                <div className="h-4 w-1/3 bg-green-200/30 rounded-md"></div>
                <div className="h-24 bg-green-200/30 rounded-md"></div>
                <div className="h-10 w-full bg-green-200/30 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Product not found
  if (!product) {
    return (
      <div className="min-h-screen bg-green-50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <AlertCircle size={48} className="mx-auto text-red-500 mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            We couldn't find the product you're looking for.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors"
          >
            Return to Products
          </button>
        </div>
      </div>
    );
  }

  const calculateFinalPrice = () => {
    if (product.discount) {
      return product.price * (1 - product.discount / 100);
    }
    return product.price;
  };

  return (
    <div className="min-h-screen bg-green-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-green-600 hover:text-green-700 font-medium"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Shop
          </button>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100 mb-4">
              <img
                src={additionalImages[selectedImage] || product.image}
                alt={product.name}
                className="w-full h-80 object-contain rounded-lg"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {additionalImages.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-white p-2 rounded-lg border cursor-pointer transition-all
                    ${
                      selectedImage === index
                        ? "border-green-500 shadow-md ring-2 ring-green-200"
                        : "border-green-100 hover:border-green-300"
                    }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-16 object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Artisan tag & Rating */}
            <div className="flex items-center justify-between mb-2">
              <Link
                to={`/artisans/${product.artisanId}`}
                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-green-200 transition-colors"
              >
                By {product.artisan}
              </Link>
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Title and Price */}
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {product.name}
            </h1>
            <div className="mb-4">
              {product.discount ? (
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-green-700">
                    ${calculateFinalPrice().toFixed(2)}
                  </span>
                  <span className="ml-2 text-lg text-gray-500 line-through">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="ml-2 bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">
                    {product.discount}% OFF
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-bold text-green-700">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>

            {/* Availability */}
            <div className="flex items-center mb-6">
              {product.availability === "In stock" ? (
                <span className="flex items-center text-green-600">
                  <Check size={16} className="mr-1" />
                  {product.availability}
                </span>
              ) : product.availability === "Low stock" ? (
                <span className="flex items-center text-orange-500">
                  <AlertCircle size={16} className="mr-1" />
                  {product.availability} - Order soon
                </span>
              ) : (
                <span className="flex items-center text-blue-600">
                  <Clock size={16} className="mr-1" />
                  {product.availability} (2-3 weeks)
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Sustainability */}
            <div className="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg mb-6">
              <Leaf size={20} className="text-green-600 mr-2" />
              <span className="text-green-800 text-sm">
                Made from 100% sustainable bamboo, harvested using eco-friendly
                practices
              </span>
            </div>

            {/* Details */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Product Details
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-sm">
                  <p className="text-gray-600">Material:</p>
                  <p className="text-gray-800 font-medium">
                    {product.material}
                  </p>
                </div>
                <div className="text-sm">
                  <p className="text-gray-600">Dimensions:</p>
                  <p className="text-gray-800 font-medium">
                    {product.dimensions}
                  </p>
                </div>
                <div className="text-sm">
                  <p className="text-gray-600">Weight:</p>
                  <p className="text-gray-800 font-medium">{product.weight}</p>
                </div>
                <div className="text-sm">
                  <p className="text-gray-600">Care Instructions:</p>
                  <p className="text-gray-800 font-medium">{product.care}</p>
                </div>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center mb-6">
              <label htmlFor="quantity" className="text-gray-700 mr-4">
                Quantity:
              </label>
              <div className="flex items-center border border-green-200 rounded-lg">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                  }
                  className="px-3 py-2 text-green-600 hover:bg-green-50 rounded-l-lg transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-2 text-gray-800">{quantity}</span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-3 py-2 text-green-600 hover:bg-green-50 rounded-r-lg transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                <ShoppingCart size={20} className="mr-2" />
                Add to Cart
              </button>
              <button
                onClick={() => setInWishlist((prev) => !prev)}
                className="flex items-center justify-center px-6 py-3 rounded-lg border border-green-200 text-green-600 hover:bg-green-50 transition-colors"
              >
                <Heart
                  size={20}
                  className={`mr-2 ${
                    inWishlist ? "fill-red-500 text-red-500" : ""
                  }`}
                />
                {inWishlist ? "In Wishlist" : "Add to Wishlist"}
              </button>
              <button className="flex items-center justify-center px-6 py-3 rounded-lg border border-green-200 text-green-600 hover:bg-green-50 transition-colors">
                <Share size={20} className="mr-2" />
                Share
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
