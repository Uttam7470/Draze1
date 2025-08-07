import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";

export default function UserProfile() {
  const { user, updateUser } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [photo, setPhoto] = useState(user?.photo || "");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result); // base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    updateUser({ firstName, lastName, photo });
    setIsEditing(false);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl border border-gray-100">
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-8">
        <img
          src={photo || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-indigo-100 shadow-sm"
        />

        <div className="mt-4 sm:mt-0 flex-1 w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Profile Info</h2>
            {isEditing ? (
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Edit Profile
              </button>
            )}
          </div>

          <div className="mt-4 space-y-4 text-gray-700 text-base">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <label className="font-medium text-gray-900 w-24">First Name:</label>
              {isEditing ? (
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border rounded px-3 py-1 w-full sm:w-64"
                />
              ) : (
                <p>{user.firstName}</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <label className="font-medium text-gray-900 w-24">Last Name:</label>
              {isEditing ? (
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="border rounded px-3 py-1 w-full sm:w-64"
                />
              ) : (
                <p>{user.lastName}</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <label className="font-medium text-gray-900 w-24">Email:</label>
              <p className="text-gray-600">{user.email}</p>
            </div>

            {isEditing && (
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                <label className="font-medium text-gray-900 w-24">Profile Pic:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mt-2 sm:mt-0"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
