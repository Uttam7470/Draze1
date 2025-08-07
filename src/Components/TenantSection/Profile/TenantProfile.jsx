import React, { useState } from "react";


import { useAuth } from "../../User_Section/Context/AuthContext";

const TenantProfile = () => {
  const { user, updateProfile } = useAuth(); 
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    photo: user?.photo || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateProfile(formData); // update context
    setEditing(false);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">My Profile</h2>

      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        {/* Profile Image */}
        <div className="flex items-center gap-6">
          <img
            src={formData.photo || "https://via.placeholder.com/100"}
            alt="Profile"
            className="h-24 w-24 rounded-full object-cover border"
          />
          {editing && (
            <input
              type="text"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              className="border rounded px-2 py-1 w-full"
              placeholder="Photo URL"
            />
          )}
        </div>

        {/* Details */}
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-gray-600">Name:</label>
            {editing ? (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded px-2 py-1 w-full"
              />
            ) : (
              <p className="font-medium">{formData.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-600">Email:</label>
            <p className="font-medium">{user?.email}</p>
          </div>

          {/* Phone */}
          <div>
            <label className="text-gray-600">Phone:</label>
            <p className="font-medium">{user?.phone || "Not Provided"}</p>
          </div>

          {/* DOB */}
          <div>
            <label className="text-gray-600">Date of Birth:</label>
            <p className="font-medium">{user?.dob || "Not Provided"}</p>
          </div>
        </div>

        {/* Edit Buttons */}
        <div className="text-right">
          {editing ? (
            <div className="space-x-2">
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Save
              </button>
              <button
                onClick={() => setEditing(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setEditing(true)}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TenantProfile;
