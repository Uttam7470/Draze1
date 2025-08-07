


import React from "react";
import { FaUserEdit } from "react-icons/fa";

const LandlordProfile = () => {
  return (
    <div className="bg-white shadow rounded-xl p-6 mb-8">
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-6">
        {/* Profile Image */}
        <div className="flex-shrink-0 text-center sm:text-left">
          <img
            src="https://images.unsplash.com/photo-1624610806703-99c0852c31c0?w=600&auto=format&fit=crop&q=60"
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover mx-auto sm:mx-0"
          />
        </div>

        {/* Profile Details */}
        <div className="flex-1 text-center sm:text-left">
          <h4 className="text-xl font-semibold text-gray-800 mb-1">Suman Sharma</h4>
          <p className="text-gray-600">Email: suman@example.com</p>
          <p className="text-gray-600">Phone: +91 9876543210</p>
          <p className="text-gray-600">Location: Delhi, India</p>
        </div>


        {/* Edit Button */}
        <div className="text-center sm:text-right">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md flex items-center gap-2 mx-auto sm:mx-0">
            <FaUserEdit className="text-white" />
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandlordProfile;

