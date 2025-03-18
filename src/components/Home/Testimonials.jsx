import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, User } from 'lucide-react';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Testimonials data without image dependencies
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      text: 'I absolutely love the handwoven basket I purchased! The craftsmanship is incredible, and it\'s clear that a lot of care went into making it. It\'s not just a beautiful piece but also supports traditional artisans.',
      rating: 5,
      product: 'Handwoven Bamboo Basket',
    },
    {
      id: 2,
      name: 'Nikunj Chauhan',
      location: 'Delhi, India',
      text: 'The ceramic vase set exceeded my expectations. Each piece is unique with its own character, and the quality is outstanding. I appreciate being able to connect with the artisan through the platform.',
      rating: 5,
      product: 'Ceramic Vase Collection',
    },
    {
      id: 3,
      name: 'Priya Patel',
      location: 'London, UK',
      text: 'I\'ve been looking for authentic handcrafted items for my home, and this platform has been a revelation. The bamboo tea set I ordered is not only beautiful but also sustainable. Great customer service too!',
      rating: 4,
      product: 'Handcrafted Bamboo Tea Set',
    },
    {
      id: 4,
      name: 'Miguel Rodriguez',
      location: 'Barcelona, Spain',
      text: 'The hand-carved wooden sculpture is a masterpiece. The attention to detail is extraordinary, and it has become the centerpiece of my living room. I\'m already planning my next purchase!',
      rating: 5,
      product: 'Hand-carved Wooden Sculpture',
    },
    {
      id: 5,
      name: 'Aisha Mahmoud',
      location: 'Dubai, UAE',
      text: 'I ordered the handmade leather journal as a gift, and it arrived beautifully packaged with a personalized note. The quality is exceptional, and the recipient was thrilled. Will definitely shop here again.',
      rating: 5,
      product: 'Handmade Leather Journal',
    },
  ];

  // Handle window resize with debouncing to improve performance
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();
    
    // Debounced resize handler
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 250);
    };
    
    window.addEventListener('resize', debouncedResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', debouncedResize);
    };
  }, []);

  // Optimized autoplay with fewer re-renders
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  // Handle manual slide change
  const handleSlideChange = (index) => {
    setActiveSlide(index);
    setAutoplay(false);
    const timeoutId = setTimeout(() => setAutoplay(true), 10000);
    return () => clearTimeout(timeoutId);
  };

  const handlePrev = () => {
    const newIndex = activeSlide === 0 ? testimonials.length - 1 : activeSlide - 1;
    handleSlideChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = (activeSlide + 1) % testimonials.length;
    handleSlideChange(newIndex);
  };

  // Simplified star rating without unnecessary array creation on each render
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          size={18}
          className={i < rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}
        />
      );
    }
    return stars;
  };

  return (
    <section className="py-12 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        {/* Header Section - Simplified without animations */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Customer Stories
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what our customers love about our authentic handcrafted products from artisans around the world
          </p>
        </div>

        {/* Desktop Testimonials Section */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="flex flex-col lg:flex-row max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                    {/* Testimonial Content */}
                    <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between">
                      <div>
                        <div className="mb-3">
                          <Quote size={32} className="text-amber-300" />
                        </div>
                        <p className="text-gray-700 text-lg italic mb-5">{testimonial.text}</p>
                        <div className="flex mb-3">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                      <div className="flex items-center mt-4">
                        <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                          <User size={20} className="text-amber-500" />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                          <p className="text-sm text-gray-500">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>

                    {/* Product Details - Simplified */}
                    <div className="lg:w-1/2 bg-amber-50 p-6 lg:p-8">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Product Purchased</h3>
                      <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
                        <div className="w-16 h-16 rounded-lg bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-2xl text-amber-500 font-bold">
                            {testimonial.product.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-800 font-medium mb-2">{testimonial.product}</h4>
                          <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex items-center text-sm">
                            <span>View Product</span>
                            <ChevronRight size={16} className="ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Navigation Controls - Simplified */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handlePrev}
              className="bg-white hover:bg-amber-50 text-amber-600 p-2 rounded-full shadow-sm mr-5 transition duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeSlide === index ? 'w-6 bg-amber-500' : 'w-2 bg-gray-300 hover:bg-amber-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="bg-white hover:bg-amber-50 text-amber-600 p-2 rounded-full shadow-sm ml-5 transition duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Testimonials Section - Simplified */}
        <div className="md:hidden">
          <div className="bg-white rounded-lg shadow-md p-5 mb-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <Quote size={20} className="text-amber-300" />
              </div>
              <div className="flex">
                {renderStars(testimonials[activeSlide].rating)}
              </div>
            </div>

            <p className="text-gray-700 italic mb-4 text-sm">{testimonials[activeSlide].text}</p>

            <div className="flex items-center mb-3">
              <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                <User size={16} className="text-amber-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-base font-semibold text-gray-800">{testimonials[activeSlide].name}</h3>
                <p className="text-xs text-gray-500">{testimonials[activeSlide].location}</p>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-gray-100">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Product Purchased</h4>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-xl text-amber-500 font-bold">
                    {testimonials[activeSlide].product.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-gray-800 mb-1">{testimonials[activeSlide].product}</p>
                  <button className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-medium py-1 px-2 rounded transition duration-300 flex items-center">
                    <span>View</span>
                    <ChevronRight size={12} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex justify-center">
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeSlide === index ? 'w-5 bg-amber-500' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;