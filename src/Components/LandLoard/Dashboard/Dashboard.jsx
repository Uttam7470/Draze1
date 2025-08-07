


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBuilding,
  FaUsers,
  FaRupeeSign,
  FaPlusCircle,
  FaBell,
  FaChartBar,
  FaWrench,
  FaExclamationTriangle,
} from "react-icons/fa";

const Dashboard = () => {
  const [totalProperties, setTotalProperties] = useState(0);
  const [totalTenants, setTotalTenants] = useState(0);

  useEffect(() => {
    const storedProperties = JSON.parse(localStorage.getItem("properties")) || [];
    setTotalProperties(storedProperties.length);
    const savedTenants = JSON.parse(localStorage.getItem("tenants")) || [];
    setTotalTenants(savedTenants.length);
  }, []);

  const pendingPayments = 5;

  const recentActivities = [
    "Added PG in Noida",
    "Received ₹8,000 from Ramesh",
    "Tenant Aman vacated property in Pune",
  ];

  const upcomingRent = [
    {
      name: "Ramesh Kumar",
      property: "PG in Noida",
      due: "28 Jul",
      amount: 8000,
    },
    {
      name: "Sita Devi",
      property: "Flat in Delhi",
      due: "01 Aug",
      amount: 12000,
    },
  ];

  const notifications = [
    "Tenant Amit’s rent is overdue",
    "2 properties have lease expiry this week",
    "Missing KYC for 3 tenants",
  ];

  const maintenanceRequests = [
    { tenant: "Vivek", issue: "Fan not working", room: "202", status: "Pending" },
    { tenant: "Pooja", issue: "Leaking Tap", room: "105", status: "In Progress" },
  ];

  const leaseExpiries = [
    { tenant: "Aman", property: "Flat-102", daysLeft: 12 },
    { tenant: "Sneha", property: "PG-Room 7", daysLeft: 25 },
  ];

  const occupancy = {
    totalRooms: 50,
    occupied: 38,
    vacant: 12,
  };

  const occupancyRate = ((occupancy.occupied / occupancy.totalRooms) * 100).toFixed(1);

  return (
    <div className="px-4 py-6 max-w-screen-2xl mx-auto w-full">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-10">Landlord Dashboard</h2>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {[{ icon: FaBuilding, title: "Total Properties", value: totalProperties, link: "/landlord/property" },
          { icon: FaUsers, title: "Total Tenants", value: totalTenants, link: "/landlord/tenant-list" },
          { icon: FaRupeeSign, title: "Pending Payments", value: pendingPayments }
        ].map((stat, i) => {
          const Icon = stat.icon;
          const content = (
            <div className="bg-white rounded-xl shadow p-6 hover:bg-indigo-50 transition">
              <div className="flex items-center gap-3 mb-4">
                <Icon className="text-indigo-600 text-2xl" />
                <h5 className="text-lg font-semibold text-indigo-700">{stat.title}</h5>
              </div>
              <h3 className="text-3xl font-bold text-center">{stat.value}</h3>
            </div>
          );
          return stat.link ? (
            <Link key={i} to={stat.link}>{content}</Link>
          ) : (
            <div key={i}>{content}</div>
          );
        })}
      </div>

      {/* Occupancy Rate */}
      <div className="bg-white rounded-xl shadow p-6 mb-10">
        <h5 className="text-indigo-700 font-semibold mb-2">Occupancy Rate</h5>
        <p className="text-sm text-gray-600 mb-3">{occupancy.occupied} out of {occupancy.totalRooms} rooms occupied</p>
        <div className="w-full bg-gray-200 h-6 rounded-full overflow-hidden">
          <div
            className="bg-indigo-600 h-full text-white text-sm text-center"
            style={{ width: `${occupancyRate}%` }}
          >
            {occupancyRate}% Occupied
          </div>
        </div>
      </div>

      

      {/* Recent Activities & Notifications */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {[{ title: "Recent Activities", icon: FaChartBar, items: recentActivities },
          { title: "Notifications", icon: FaBell, items: notifications }
        ].map((section, idx) => {
          const Icon = section.icon;
          return (
            <div key={idx} className="bg-white rounded-xl shadow p-6">
              <h5 className="text-indigo-700 font-semibold mb-4 flex items-center gap-2">
                <Icon className="text-xl" /> {section.title}
              </h5>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>



      {/* Upcoming Rent Dues */}
      <div className="bg-white rounded-xl shadow p-6 mb-10 overflow-auto">
        <h5 className="text-indigo-700 font-semibold mb-4">Upcoming Rent Dues</h5>
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-indigo-100 text-indigo-700">
              <th className="p-2 text-left">Tenant</th>
              <th className="p-2 text-left">Property</th>
              <th className="p-2 text-left">Due Date</th>
              <th className="p-2 text-left">Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            {upcomingRent.map((item, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.property}</td>
                <td className="p-2">{item.due}</td>
                <td className="p-2">₹{item.amount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>



      {/* Maintenance Requests */}
      <div className="bg-white rounded-xl shadow p-6 mb-10">
        <h5 className="text-indigo-700 font-semibold mb-4 flex items-center gap-2">
          <FaWrench /> Maintenance Requests
        </h5>
        <ul className="space-y-3 text-sm">
          {maintenanceRequests.map((req, idx) => (
            <li key={idx}>
              <strong>{req.tenant}</strong>: {req.issue} - Room {req.room}
              <span className={`ml-2 inline-block px-2 py-0.5 text-xs rounded ${
                req.status === "Pending" ? "bg-yellow-500" : "bg-blue-500"
              } text-white`}>
                {req.status}
              </span>
            </li>
          ))}
        </ul>
      </div>




      {/* Lease Expiry Alerts */}
      <div className="bg-white rounded-xl shadow p-6 mb-10">
        <h5 className="text-indigo-700 font-semibold mb-4 flex items-center gap-2">
          <FaExclamationTriangle /> Lease Expiry Alerts
        </h5>
        <ul className="space-y-3 text-sm">
          {leaseExpiries.map((lease, idx) => (
            <li key={idx}>
              Lease for <strong>{lease.tenant}</strong> ({lease.property}) expires in
              <span className="text-red-600 font-bold"> {lease.daysLeft} days</span>
            </li>
          ))}
        </ul>
      </div>



      

      {/* Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[{ to: "/landlord/add-property", text: "Add New Property" },
          { to: "/landlord/tenant-form", text: "Add New Tenant" },
          // { to: "/payments", text: "View Payments" }
        ].map((link, i) => (
          <Link
            key={i}
            to={link.to}
            className="flex items-center justify-center gap-2 border border-indigo-500 text-indigo-600 hover:bg-indigo-50 font-medium py-3 rounded text-sm"
          >
            <FaPlusCircle /> {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
