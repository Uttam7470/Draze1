import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHome,
  FaUserEdit,
} from "react-icons/fa";

const SellerProfile = () => {
  const [seller, setSeller] = useState({
    name: "Ravi Kumar",
    email: "ravi.kumar@example.com",
    phone: "+91 9876543210",
    address: "Gurgaon, Haryana, India",
    profileImage: "https://i.pravatar.cc/150?img=8",
  });

  const properties = JSON.parse(localStorage.getItem("properties")) || [];

  return (
    <div className="pt-24 px-4 md:px-10 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 border-b pb-6">
          <img
            src={seller.profileImage}
            alt="Seller"
            className="w-32 h-32 rounded-full border-4 border-red-400 object-cover shadow"
          />
          <div className="text-center md:text-left space-y-1">
            <h2 className="text-3xl font-semibold text-gray-800">{seller.name}</h2>
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
              <FaEnvelope />
              <span>{seller.email}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
              <FaPhone />
              <span>{seller.phone}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
              <FaMapMarkerAlt />
              <span>{seller.address}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-700 font-medium">
              <FaHome className="text-green-600" />
              <span>
                Properties Listed:{" "}
                <span className="text-green-700 font-bold">{properties.length}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Edit Form */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
            <FaUserEdit className="text-blue-500" /> Edit Profile
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              value={seller.name}
              onChange={(e) => setSeller({ ...seller, name: e.target.value })}
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
              placeholder="Name"
            />
            <input
              type="email"
              value={seller.email}
              onChange={(e) => setSeller({ ...seller, email: e.target.value })}
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
              placeholder="Email"
            />
            <input
              type="text"
              value={seller.phone}
              onChange={(e) => setSeller({ ...seller, phone: e.target.value })}
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
              placeholder="Phone"
            />
            <input
              type="text"
              value={seller.address}
              onChange={(e) => setSeller({ ...seller, address: e.target.value })}
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
              placeholder="Address"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
