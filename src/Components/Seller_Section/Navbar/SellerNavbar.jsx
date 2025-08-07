import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import drazeLogo from "../../../assets/logo/drazeLogo.png";

const SellerNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinkClasses = (path) =>
    `px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
      isActive(path)
        ? "bg-[#5c4eff] text-white"
        : "bg-gray-100 text-gray-800 hover:bg-[#5c4eff] hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50  ">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 h-[70px]">
        {/* Left: Logo */}
        <Link to="/seller/home" className="flex items-center">
          <img
            src={drazeLogo}
            alt="Logo"
            className="h-8 w-auto object-contain"
          />
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-4 text-[16px]">
          <Link to="/seller/home" className={navLinkClasses("/seller/home")}>
            Home
          </Link>
          <Link
            to="/seller/property"
            className={navLinkClasses("/seller/property")}
          >
            My Listings
          </Link>
          <Link
            to="/seller/add-property"
            className={navLinkClasses("/seller/add-property")}
          >
            Add Property
          </Link>
          <Link
            to="/seller/enquiries"
            className={navLinkClasses("/seller/enquiries")}
          >
            Enquiries
          </Link>
          <Link
            to="/seller/seller-profile"
            className={navLinkClasses("/seller/seller-profile")}
          >
            Profile
          </Link>
          <Link
            to="/seller/subscription"
            className={navLinkClasses("/seller/subscription")}
          >
            Subscription
          </Link>
        </div>

        {/* Right: Logout Button */}
        <div className="hidden md:block">
          <Link
            to="/"
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            Logout
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 bg-white shadow">
          <div className="flex flex-col space-y-2 text-black font-medium text-base">
            <Link to="/seller/home" onClick={() => setIsMenuOpen(false)} className={navLinkClasses("/seller/home")}>Home</Link>
            <Link to="/seller/property" onClick={() => setIsMenuOpen(false)} className={navLinkClasses("/seller/property")}>My Listings</Link>
            <Link to="/seller/add-property" onClick={() => setIsMenuOpen(false)} className={navLinkClasses("/seller/add-property")}>Add Property</Link>
            <Link to="/seller/enquiries" onClick={() => setIsMenuOpen(false)} className={navLinkClasses("/seller/enquiries")}>Enquiries</Link>
            <Link to="/seller/seller-profile" onClick={() => setIsMenuOpen(false)} className={navLinkClasses("/seller/seller-profile")}>Profile</Link>
            <Link to="/seller/subscription" onClick={() => setIsMenuOpen(false)} className={navLinkClasses("/seller/subscription")}>Subscription</Link>
            <Link to="/logout" onClick={() => setIsMenuOpen(false)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">Logout</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default SellerNavbar;
