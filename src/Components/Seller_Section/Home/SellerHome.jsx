import React from "react";
import {
  FaPlus,
  FaHome,
  FaList,
  FaCheckCircle,
  FaEdit,
  FaUserTie,
  FaLightbulb,
} from "react-icons/fa";
import { Link } from "react-router-dom";


const SellerHome = () => {
  return (
    <div
      className="min-h-screen bg-gray-100 px-4 py-6 md:px-10"
      style={{ marginTop: "80px" }}
    >
      <h2 className="text-3xl font-bold text-[#5c4eff] mb-6">
        Welcome, Seller!
      </h2>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <FaHome className="text-[#5c4eff] text-3xl mb-3" />
          <h3 className="text-xl font-semibold">Total Properties</h3>
          <p className="text-gray-600 mt-1">You have listed 12 properties.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <FaCheckCircle className="text-[#5c4eff] text-3xl mb-3" />
          <h3 className="text-xl font-semibold">Approved Listings</h3>
          <p className="text-gray-600 mt-1">9 properties are live.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <FaList className="text-[#5c4eff] text-3xl mb-3" />
          <h3 className="text-xl font-semibold">Pending Approvals</h3>
          <p className="text-gray-600 mt-1">3 properties are pending review.</p>
        </div>
      </div>

      {/* Activity & Management */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-[#5c4eff] mb-4">
            Your Activity
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>Added 2 new listings last week</li>
            <li>Updated rental terms for 3 flats</li>
            <li>Published 1 property after approval</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-[#5c4eff] mb-4">
            Manage Properties
          </h3>
          <div className="flex flex-col gap-3">
            <Link
              to="/seller/add-property"
              className="bg-[#5c4eff] text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-[#483bd1] transition"
            >
              <FaPlus /> Add New Property
            </Link>
            <button className="bg-gray-100 text-[#5c4eff] border border-[#5c4eff] py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-[#eae8ff] transition">
              <FaEdit /> Edit Listings
            </button>
          </div>
        </div>
      </div>

      {/* Seller Profile & Tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-4 mb-4">
            <FaUserTie className="text-[#5c4eff] text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Your Profile</h3>
              <p className="text-gray-600 text-sm">Verified Seller Account</p>
            </div>
          </div>
          <p className="text-gray-700">
            <strong>Name:</strong> John Sharma
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> john.seller@example.com
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> +91-9876543210
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-4 mb-4">
            <FaLightbulb className="text-yellow-400 text-3xl" />
            <h3 className="text-xl font-semibold text-[#5c4eff]">
              Quick Tips for Better Listings
            </h3>
          </div>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>Use high-quality images of your property</li>
            <li>Add clear rental terms (rent, deposit, notice period)</li>
            <li>Highlight unique features and nearby landmarks</li>
            <li>Keep your property details updated regularly</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SellerHome;
