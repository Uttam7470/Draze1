import React, { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";

const Dues = () => {
  const [filterMonth, setFilterMonth] = useState("All");
  const [filterStatus, setFilterStatus] = useState("Pending");

  // Sample due data (expanded)
  const dues = [
    {
      id: 1,
      tenant: "Amit Sharma",
      property: "Flat 201, Green Residency",
      amount: "₹8,000",
      dueDate: "Aug 5, 2025",
      status: "Pending",
    },
    {
      id: 2,
      tenant: "Priya Singh",
      property: "PG Room 2A, Sunshine PG",
      amount: "₹6,500",
      dueDate: "Jul 30, 2025",
      status: "Paid",
    },
    {
      id: 3,
      tenant: "Ravi Mehra",
      property: "Room 101, Lotus Hostel",
      amount: "₹5,000",
      dueDate: "Aug 1, 2025",
      status: "Pending",
    },
    {
      id: 4,
      tenant: "Sneha Kapoor",
      property: "Flat 5B, Ocean Residency",
      amount: "₹9,500",
      dueDate: "Jul 28, 2025",
      status: "Paid",
    },
    {
      id: 5,
      tenant: "Karan Verma",
      property: "Villa 3, Lake View",
      amount: "₹12,000",
      dueDate: "Aug 3, 2025",
      status: "Pending",
    },
    {
      id: 6,
      tenant: "Neha Agarwal",
      property: "Flat 402, Sky Heights",
      amount: "₹7,800",
      dueDate: "Jul 25, 2025",
      status: "Paid",
    },
    {
      id: 7,
      tenant: "Manoj Kumar",
      property: "Room 11B, Galaxy PG",
      amount: "₹6,000",
      dueDate: "Aug 4, 2025",
      status: "Pending",
    },
    {
      id: 8,
      tenant: "Aarti Deshmukh",
      property: "Flat 9C, Pearl Residency",
      amount: "₹8,200",
      dueDate: "Jul 31, 2025",
      status: "Paid",
    },
  ];

  const filteredDues = dues.filter((due) =>
    (filterStatus === "All" || due.status === filterStatus)
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <FaExclamationCircle /> Dues
      </h2>
      <p className="text-gray-600 mb-4">
        View unpaid rents and pending amounts from tenants.
      </p>

      {/* Filters */}
      <div className="flex gap-4 mb-4">
        <select
          className="border rounded px-3 py-2"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Paid">Paid</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-lg bg-white shadow">
          <thead className="bg-gray-100 text-sm text-gray-600">
            <tr>
              <th className="py-2 px-4 border-b">Tenant</th>
              <th className="py-2 px-4 border-b">Property</th>
              <th className="py-2 px-4 border-b">Amount</th>
              <th className="py-2 px-4 border-b">Due Date</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDues.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No dues found.
                </td>
              </tr>
            ) : (
              filteredDues.map((due) => (
                <tr key={due.id} className="text-sm">
                  <td className="py-2 px-4 border-b">{due.tenant}</td>
                  <td className="py-2 px-4 border-b">{due.property}</td>
                  <td className="py-2 px-4 border-b">{due.amount}</td>
                  <td className="py-2 px-4 border-b">{due.dueDate}</td>
                  <td className="py-2 px-4 border-b">{due.status}</td>
                  <td className="py-2 px-4 border-b">
                    {due.status === "Pending" ? (
                      <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">
                        Send Reminder
                      </button>
                    ) : (
                      <span className="text-green-600">✓ Paid</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dues;
