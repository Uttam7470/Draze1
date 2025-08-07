import React from "react";
import { FaWallet } from "react-icons/fa";

const collectionsData = [
  {
    id: 1,
    tenant: "Rohit Sharma",
    property: "Green Valley PG, Room 101",
    date: "2025-08-01",
    amount: 8000,
    status: "Paid",
  },
  {
    id: 2,
    tenant: "Priya Verma",
    property: "Sunrise Apartments, Flat B-202",
    date: "2025-08-03",
    amount: 12000,
    status: "Unpaid",
  },
  {
    id: 3,
    tenant: "Amit Chauhan",
    property: "Metro Villa Hostel, Bed 12",
    date: "2025-08-05",
    amount: 7000,
    status: "Paid",
  },
  {
    id: 4,
    tenant: "Sneha Reddy",
    property: "Royal PG, Room 304",
    date: "2025-07-28",
    amount: 8500,
    status: "Paid",
  },
];

const Collections = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <FaWallet /> Collections
      </h2>
      <p className="mb-4 text-gray-600">
        Track and manage rent and other payments collected from tenants here.
      </p>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Tenant</th>
              <th className="px-4 py-2">Property</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {collectionsData.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{item.date}</td>
                <td className="px-4 py-2">{item.tenant}</td>
                <td className="px-4 py-2">{item.property}</td>
                <td className="px-4 py-2">₹{item.amount}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-white text-xs ${
                      item.status === "Paid" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
            {collectionsData.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No collections yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Collections;
