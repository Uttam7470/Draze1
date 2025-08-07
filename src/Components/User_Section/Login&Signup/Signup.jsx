import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";

function Signup({ onClose }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const { user, login } = useAuth();  // ✅ we need user to keep role

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!form.firstName || !form.lastName || !form.email) {
      alert("Please fill all fields");
      return;
    }

    // ✅ Merge previous user data (including role) with new signup data
    const updatedUser = {
      ...user,
      ...form,
      isRegistered: true,
    };

    // ✅ Save updated user to context & localStorage
    login(updatedUser);

    // ✅ Close modal
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center text-[#183c2c] mb-6">
          Complete Your Signup ({user?.role || "User"})
        </h2>

        <form onSubmit={handleSignup}>
          <label className="block text-gray-700 mb-1">First Name</label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-[#5C4EFF]"
          />

          <label className="block text-gray-700 mb-1">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-[#5C4EFF]"
          />

          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-[#5C4EFF]"
          />

          <button
            type="submit"
            className="w-full bg-[#5C4EFF] text-white py-2 rounded-md hover:bg-[#4b3edd] transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
 