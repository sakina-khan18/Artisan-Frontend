// import { useState } from "react";

// const ArtisanDashboard = () => {
//   const [products, setProducts] = useState([]);
//   const [newProduct, setNewProduct] = useState({ name: "", price: "", image: "" });

//   const handleChange = (e) => {
//     setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
//   };

//   const handleAddProduct = (e) => {
//     e.preventDefault();
//     if (!newProduct.name || !newProduct.price || !newProduct.image) return;
//     setProducts([...products, { ...newProduct, id: products.length + 1 }]);
//     setNewProduct({ name: "", price: "", image: "" });
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-4">Artisan Dashboard</h2>

//       <form onSubmit={handleAddProduct} className="mb-6">
//         <div className="mb-4">
//           <label className="block font-semibold">Product Name</label>
//           <input
//             type="text"
//             name="name"
//             value={newProduct.name}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block font-semibold">Price</label>
//           <input
//             type="number"
//             name="price"
//             value={newProduct.price}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block font-semibold">Image URL</label>
//           <input
//             type="text"
//             name="image"
//             value={newProduct.image}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>
//         <button type="submit" className="bg-blue-600 text-white p-2 rounded font-bold w-full">
//           Add Product
//         </button>
//       </form>

//       <h3 className="text-xl font-bold mb-4">Your Products</h3>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {products.map((product) => (
//           <div key={product.id} className="border p-4 rounded shadow">
//             <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2 rounded" />
//             <h4 className="font-bold">{product.name}</h4>
//             <p className="text-gray-700">${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ArtisanDashboard;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ArtisanDashboard = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [stats, setStats] = useState({
    totalSales: 0,
    totalProducts: 0,
    pendingOrders: 0,
    completedOrders: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [artisanProfile, setArtisanProfile] = useState({
    name: 'Jane Doe',
    shopName: 'Jane\'s Crafts',
    bio: 'Creating handmade crafts since 2010',
    location: 'Portland, OR',
    profileImg: 'https://example.com/profile.jpg',
  });

  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      try {
        // In a real app, these would be API calls
        setTimeout(() => {
          setProducts([
            { id: 1, name: 'Woven Basket', price: 35.99, stock: 12, image: 'basket.jpg', status: 'active' },
            { id: 2, name: 'Ceramic Vase', price: 49.99, stock: 5, image: 'vase.jpg', status: 'active' },
            { id: 3, name: 'Hand-knit Scarf', price: 29.99, stock: 8, image: 'scarf.jpg', status: 'active' },
            { id: 4, name: 'Wooden Cutting Board', price: 54.99, stock: 3, image: 'board.jpg', status: 'draft' },
          ]);
          
          setOrders([
            { id: 101, date: '2025-03-10', total: 85.98, status: 'pending', products: [{ id: 1, quantity: 2, price: 35.99 }], customer: 'Alex Johnson' },
            { id: 102, date: '2025-03-08', total: 49.99, status: 'shipped', products: [{ id: 2, quantity: 1, price: 49.99 }], customer: 'Sam Miller' },
            { id: 103, date: '2025-03-05', total: 114.97, status: 'delivered', products: [{ id: 3, quantity: 1, price: 29.99 }, { id: 1, quantity: 2, price: 35.99 }], customer: 'Taylor Wilson' },
          ]);
          
          setStats({
            totalSales: 1250.94,
            totalProducts: 4,
            pendingOrders: 1,
            completedOrders: 14,
          });
          
          setIsLoading(false);
        }, 800);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderDashboardStats = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm font-medium">Total Sales</h3>
        <p className="text-2xl font-bold">${stats.totalSales.toFixed(2)}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm font-medium">Total Products</h3>
        <p className="text-2xl font-bold">{stats.totalProducts}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm font-medium">Pending Orders</h3>
        <p className="text-2xl font-bold">{stats.pendingOrders}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm font-medium">Completed Orders</h3>
        <p className="text-2xl font-bold">{stats.completedOrders}</p>
      </div>
    </div>
  );

  const renderProductsTab = () => (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Your Products</h2>
        <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Add New Product</button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full object-cover" src={product.image} alt={product.name} />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{product.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${product.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.stock}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    product.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {product.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-2">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderOrdersTab = () => (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${order.total.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                    order.status === 'shipped' ? 'bg-blue-100 text-blue-800' : 
                    'bg-green-100 text-green-800'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderProfileTab = () => (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Your Profile</h2>
      
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full bg-gray-200 mb-4 overflow-hidden">
              <img src={artisanProfile.profileImg} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300">Change Photo</button>
          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="name" 
                type="text" 
                value={artisanProfile.name}
                onChange={(e) => setArtisanProfile({...artisanProfile, name: e.target.value})}
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shopName">Shop Name</label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="shopName" 
                type="text" 
                value={artisanProfile.shopName}
                onChange={(e) => setArtisanProfile({...artisanProfile, shopName: e.target.value})}
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">Location</label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="location" 
                type="text" 
                value={artisanProfile.location}
                onChange={(e) => setArtisanProfile({...artisanProfile, location: e.target.value})}
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">Bio</label>
              <textarea 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32" 
                id="bio"
                value={artisanProfile.bio}
                onChange={(e) => setArtisanProfile({...artisanProfile, bio: e.target.value})}
              />
            </div>
            
            <div className="flex justify-end">
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700" type="button">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Artisan Dashboard</h1>
      
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          {renderDashboardStats()}
          
          <div className="bg-white rounded-lg shadow">
            <div className="border-b">
              <nav className="flex -mb-px">
                <button
                  className={`py-4 px-6 border-b-2 font-medium text-sm ${
                    activeTab === 'products'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => handleTabChange('products')}
                >
                  Products
                </button>
                <button
                  className={`py-4 px-6 border-b-2 font-medium text-sm ${
                    activeTab === 'orders'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => handleTabChange('orders')}
                >
                  Orders
                </button>
                <button
                  className={`py-4 px-6 border-b-2 font-medium text-sm ${
                    activeTab === 'profile'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => handleTabChange('profile')}
                >
                  Your Profile
                </button>
              </nav>
            </div>
            
            <div className="p-4">
              {activeTab === 'products' && renderProductsTab()}
              {activeTab === 'orders' && renderOrdersTab()}
              {activeTab === 'profile' && renderProfileTab()}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ArtisanDashboard;