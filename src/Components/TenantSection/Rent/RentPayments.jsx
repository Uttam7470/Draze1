import React from "react";
import { FaDownload } from "react-icons/fa";

const TenantRentPayments = () => {
  // Dummy rent payment data
  const rentHistory = [
    {
      month: "July 2025",
      amount: 7500,
      status: "Paid",
      date: "2025-07-01",
      method: "UPI",
    },
    {
      month: "June 2025",
      amount: 7500,
      status: "Paid",
      date: "2025-06-02",
      method: "Credit Card",
    },
    {
      month: "August 2025",
      amount: 7500,
      status: "Unpaid",
      date: null,
      method: null,
    },
  ];

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Rent Payments</h2>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-700 text-xs uppercase">
            <tr>
              <th className="px-4 py-3 text-left">Month</th>
              <th className="px-4 py-3 text-left">Amount</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Payment Date</th>
              <th className="px-4 py-3 text-left">Method</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {rentHistory.map((rent, idx) => (
              <tr
                key={idx}
                className="border-t border-gray-200 hover:bg-gray-50"
              >
                <td className="px-4 py-3">{rent.month}</td>
                <td className="px-4 py-3 text-green-600 font-medium">
                  ₹{rent.amount}
                </td>
                <td
                  className={`px-4 py-3 font-semibold ${
                    rent.status === "Paid" ? "text-blue-600" : "text-red-500"
                  }`}
                >
                  {rent.status}
                </td>
                <td className="px-4 py-3">{rent.date || "—"}</td>
                <td className="px-4 py-3">{rent.method || "—"}</td>
                <td className="px-4 py-3">
                  {rent.status === "Paid" ? (
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-xs">
                      <FaDownload />
                      Receipt
                    </button>
                  ) : (
                    <span className="text-gray-400 text-xs">Unavailable</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TenantRentPayments;
