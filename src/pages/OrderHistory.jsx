import React from 'react';
import Layout from '../components/Layout/Layout';
import { Calendar, Package, CheckCircle, Clock } from 'lucide-react';

const OrderHistory = () => {
  const orders = [
    {
      id: '#1234',
      date: '2024-03-15',
      status: 'Delivered',
      items: 3,
      total: 95.00
    },
    // Add more orders...
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Order History</h1>
        
        <div className="space-y-6">
          {orders.map(order => (
            <div key={order.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div className="flex items-center space-x-4">
                  <Package size={24} className="text-amber-600" />
                  <div>
                    <h3 className="font-semibold">Order {order.id}</h3>
                    <p className="text-gray-600 text-sm flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  order.status === 'Delivered' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-amber-100 text-amber-700'
                }`}>
                  {order.status}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Items</p>
                  <p className="font-medium">{order.items}</p>
                </div>
                <div>
                  <p className="text-gray-600">Total</p>
                  <p className="font-medium">${order.total.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-gray-600">Payment</p>
                  <p className="font-medium">Credit Card</p>
                </div>
                <div>
                  <p className="text-gray-600">Delivery</p>
                  <p className="font-medium">Standard Shipping</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default OrderHistory;