import { useState } from "react";

const AdminDashboard = () => {
  const [artisans, setArtisans] = useState([
    { id: 1, name: "Satyam Kesarwani", verified: false },
    { id: 2, name: "sarafaraj Nasardi", verified: true },
  ]);
  const [sales, setSales] = useState([
    { id: 1, product: "Handwoven Scarf", amount: 25 },
    { id: 2, product: "Bamboo Basket", amount: 40 },
  ]);

  const verifyArtisan = (id) => {
    setArtisans(
      artisans.map((artisan) =>
        artisan.id === id ? { ...artisan, verified: true } : artisan
      )
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Artisan Verification</h3>
        <ul>
          {artisans.map((artisan) => (
            <li
              key={artisan.id}
              className="flex justify-between items-center p-2 border rounded mb-2"
            >
              <span>{artisan.name} {artisan.verified ? "✔️ Verified" : "❌ Not Verified"}</span>
              {!artisan.verified && (
                <button
                  className="bg-green-600 text-white px-4 py-1 rounded"
                  onClick={() => verifyArtisan(artisan.id)}
                >
                  Verify
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-2">Sales Overview</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Product</th>
              <th className="border p-2">Amount ($)</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr key={sale.id} className="text-center">
                <td className="border p-2">{sale.product}</td>
                <td className="border p-2">${sale.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;