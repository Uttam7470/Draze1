import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext"; // optional if using context

export default function HeaderSection() {
  const navigate = useNavigate();
  const { logout } = useAuth(); // optional

  const handleLogout = () => {
    if (logout) logout(); // optional
    navigate("/");
  };

  return (
    <div className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <NavLink
        to="/user/profile"
        className={({ isActive }) =>
          `text-xl font-semibold ${
            isActive ? "text-[#5C4EFF]" : "text-gray-800"
          } hover:underline`
        }
      >
        Profile
      </NavLink>

      <NavLink
        to="/user/bookings"
        className={({ isActive }) =>
          `font-medium ${
            isActive ? "text-[#5C4EFF]" : "text-gray-800"
          } hover:underline`
        }
      >
        My Bookings
      </NavLink>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}
