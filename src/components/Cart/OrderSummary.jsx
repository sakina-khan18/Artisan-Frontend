import React from 'react';

const OrderSummary = () => {
  // Sample order data - in a real app, this would come from your state management or API
  const orderData = {
    orderId: "ORD-12345-ABCDE",
    orderDate: "March 18, 2025",
    estimatedDelivery: "March 20-24, 2025",
    customer: {
      name: "Satyam Kesarwani",
      email: "satyamkes@example.com",
      phone: "+91-9836428290"
    },
    shippingAddress: {
      street: "123 Main Street",
      city: "Anytown",
      state: "CA",
      zipCode: "12345",
      country: "United States"
    },
    paymentMethod: "Credit Card (ending in 4321)",
    items: [
      {
        id: 1,
        name: "Hand-woven Basket",
        image: "/images/basket.jpg",
        price: 45.99,
        quantity: 1,
        artisan: "Maya Crafts"
      },
      {
        id: 2,
        name: "Ceramic Vase Set",
        image: "/images/vase.jpg",
        price: 89.99,
        quantity: 2,
        artisan: "Pottery Masters"
      }
    ],
    subtotal: 225.97,
    shipping: 12.50,
    tax: 23.85,
    total: 262.32
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Order Confirmation Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Order Confirmed!</h1>
            <p className="text-gray-600 mt-2">Thank you for supporting our artisans.</p>
          </div>

          {/* Order Details */}
          <div className="border-b border-gray-200 pb-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600"><span className="font-medium">Order ID:</span> {orderData.orderId}</p>
                <p className="text-gray-600"><span className="font-medium">Order Date:</span> {orderData.orderDate}</p>
                <p className="text-gray-600"><span className="font-medium">Estimated Delivery:</span> {orderData.estimatedDelivery}</p>
              </div>
              <div>
                <p className="text-gray-600"><span className="font-medium">Email:</span> {orderData.customer.email}</p>
                <p className="text-gray-600"><span className="font-medium">Phone:</span> {orderData.customer.phone}</p>
                <p className="text-gray-600"><span className="font-medium">Payment Method:</span> {orderData.paymentMethod}</p>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="border-b border-gray-200 pb-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Shipping Address</h2>
            <p className="text-gray-600">{orderData.customer.name}</p>
            <p className="text-gray-600">{orderData.shippingAddress.street}</p>
            <p className="text-gray-600">
              {orderData.shippingAddress.city}, {orderData.shippingAddress.state} {orderData.shippingAddress.zipCode}
            </p>
            <p className="text-gray-600">{orderData.shippingAddress.country}</p>
          </div>

          {/* Order Items */}
          <div className="border-b border-gray-200 pb-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Items</h2>
            <div className="space-y-4">
              {orderData.items.map((item) => (
                <div key={item.id} className="flex items-center border-b border-gray-100 pb-4">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                        <p className="text-gray-600 text-sm mt-1">By {item.artisan}</p>
                      </div>
                      <p className="text-gray-800 font-medium">${item.price.toFixed(2)} × {item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="border-b border-gray-200 pb-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="text-gray-600">Subtotal</p>
                <p className="text-gray-800">${orderData.subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Shipping</p>
                <p className="text-gray-800">${orderData.shipping.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Tax</p>
                <p className="text-gray-800">${orderData.tax.toFixed(2)}</p>
              </div>
              <div className="flex justify-between pt-4 border-t border-gray-100">
                <p className="text-lg font-semibold text-gray-800">Total</p>
                <p className="text-lg font-semibold text-gray-800">${orderData.total.toFixed(2)}</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 mb-4 md:mb-0 w-full md:w-auto">
              Track Your Order
            </button>
            <div className="flex space-x-4">
              <button className="border border-gray-300 hover:border-gray-400 text-gray-600 font-medium py-3 px-6 rounded-lg transition duration-300">
                Continue Shopping
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-600 font-medium py-3 px-6 rounded-lg transition duration-300">
                Download Receipt
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;