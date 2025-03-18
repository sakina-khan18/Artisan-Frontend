import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus, FaArrowLeft, FaShoppingBasket, FaGift, FaTags, FaMapMarkerAlt } from 'react-icons/fa';

const Cart = () => {
  // Sample cart data - in a real app, this would come from context/state management
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Handwoven Bamboo Basket",
      price: 45,
      image: "",
      quantity: 1,
      artisan: "Maya Crafts"
    },
    {
      id: 2,
      name: "Blue Pottery Vase",
      price: 78,
      image: "",
      quantity: 2,
      artisan: "Ceramic Creations"
    },
    {
      id: 3,
      name: "Hand-painted Silk Scarf",
      price: 60,
      image: "",
      quantity: 1,
      artisan: "Silk Weavers Collective"
    }
  ]);

  const [subtotal, setSubtotal] = useState(0);
  const shippingCost = 20;
  const taxRate = 0.07; // 7% tax
  
  // Calculate subtotal whenever cart items change
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setSubtotal(total);
  }, [cartItems]);

  // Calculate tax
  const tax = subtotal * taxRate;
  
  // Calculate total
  const total = subtotal + shippingCost + tax;

  // Update item quantity
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 0) return;
    
    if (newQuantity === 0) {
      // Remove item if quantity hits 0
      removeItem(itemId);
      return;
    }
    
    setCartItems(cartItems.map(item => 
      item.id === itemId 
        ? { ...item, quantity: newQuantity } 
        : item
    ));
  };

  // Remove item from cart
  const removeItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="bg-yellow-50 absolute top-0 left-0 right-0 h-40 -z-10"></div>
      <h1 className="text-3xl font-bold mb-2 text-gray-800 flex items-center">
        <FaShoppingBasket className="mr-3 text-yellow-600" />
        Your Shopping Cart
      </h1>
      <p className="text-gray-600 mb-8">{cartItems.reduce((sum, item) => sum + item.quantity, 0)} items in your cart</p>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-lg shadow-md">
          <img 
            src="/images/empty-cart.svg" 
            alt="Empty Cart" 
            className="w-40 h-40 mx-auto mb-6 opacity-60"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/200x200?text=Empty+Cart";
            }}
          />
          <p className="text-2xl text-gray-500 mb-6">Your cart is empty</p>
          <Link to="/shop" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-full transition duration-300 font-medium flex items-center justify-center w-48 mx-auto">
            <FaShoppingBasket className="mr-2" />
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
                <h2 className="font-semibold text-gray-700 flex items-center">
                  <FaShoppingBasket className="mr-2 text-yellow-600" />
                  Shopping Cart
                </h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {cartItems.map(item => (
                  <div key={item.id} className="p-6 hover:bg-gray-50 transition duration-150">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center">
                      <div className="flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-md"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/images/placeholder.jpg";
                          }}
                        />
                      </div>
                      
                      <div className="sm:ml-6 flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <div>
                            <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                            <p className="text-gray-500 text-sm mt-1 flex items-center">
                              <FaMapMarkerAlt className="text-yellow-600 mr-1" size={12} />
                              {item.artisan}
                            </p>
                          </div>
                          <p className="text-lg font-medium text-gray-800 mt-2 sm:mt-0 flex items-center">
                            <FaTags className="text-yellow-600 mr-1" size={14} />
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition"
                            >
                              <FaMinus size={12} />
                            </button>
                            <span className="px-4 py-1 border-l border-r border-gray-300 min-w-[40px] text-center">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition"
                            >
                              <FaPlus size={12} />
                            </button>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <span className="font-medium text-gray-800">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700 transition p-2 hover:bg-red-50 rounded-full"
                              aria-label="Remove item"
                            >
                              <FaTrash size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
                <Link to="/shop" className="flex items-center text-yellow-600 hover:text-yellow-700 font-medium">
                  <FaArrowLeft className="mr-2" size={14} />
                  Continue Shopping
                </Link>
                <button 
                  onClick={() => setCartItems([])}
                  className="text-red-500 hover:text-red-700 font-medium flex items-center"
                >
                  <FaTrash className="mr-1" size={14} />
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-8">
              <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
                <h2 className="font-semibold text-gray-700 flex items-center">
                  <FaGift className="mr-2 text-yellow-600" />
                  Order Summary
                </h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-4 pb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">${shippingCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (7%)</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="h-px bg-gray-200 my-2"></div>
                  <div className="flex justify-between py-2">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-lg">${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link 
                    to="/checkout" 
                    state={{ cartItems: cartItems, subtotal: subtotal }}
                    className="block w-full bg-yellow-600 hover:bg-yellow-700 text-white text-center py-3 rounded-md font-medium transition duration-300 flex items-center justify-center"
                  >
                    <FaShoppingBasket className="mr-2" />
                    Proceed to Checkout
                  </Link>
                </div>
                
                <div className="mt-8 text-sm text-gray-500 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-md">
                  <p className="font-medium text-yellow-800 mb-1 flex items-center">
                    <FaGift className="mr-2 text-yellow-600" />
                    Artisan Direct
                  </p>
                  <p>Your purchase directly supports independent artisans and their communities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;