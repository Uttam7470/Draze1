import React from "react";
import { FaBed, FaRupeeSign, FaFileContract, FaTools, FaBullhorn } from "react-icons/fa";

const TenantDashboard = () => {
  const dashboardData = [
    {
      icon: <FaBed className="text-indigo-600 text-2xl" />,
      label: "Room No.",
      value: "A-101",
    },
    {
      icon: <FaRupeeSign className="text-green-600 text-2xl" />,
      label: "Rent Due",
      value: "₹8,000",
    },
    {
      icon: <FaFileContract className="text-blue-600 text-2xl" />,
      label: "Lease Status",
      value: "Active",
    },
    {
      icon: <FaTools className="text-yellow-600 text-2xl" />,
      label: "Maintenance Requests",
      value: "1 Pending",
    },
    {
      icon: <FaBullhorn className="text-red-600 text-2xl" />,
      label: "Announcements",
      value: "2 New",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Welcome, Tenant 👋</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-5 flex items-center gap-4"
          >
            <div>{item.icon}</div>
            <div>
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="text-lg font-semibold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TenantDashboard;
