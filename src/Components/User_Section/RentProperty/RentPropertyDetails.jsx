


import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ScheduleTourBox from "../ScheduleTour/ScheduleTourBox";
function RentDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const property = location.state;

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!property) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg font-semibold">No property data found.</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 mt-10 flex flex-col md:flex-row gap-6">
      {/* Left: Property Details */}
      <div className="flex-1 bg-white shadow-md rounded-xl p-6">
        {/* Back Button */}
        <button
          className="mb-6 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded text-gray-700"
          onClick={() => navigate(-1)}
          data-aos="fade-right"
        >
          ← Back
        </button>

        {/* Image */}
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-72 object-cover rounded-lg mb-6 shadow-lg"
          data-aos="zoom-in"
        />

        {/* Details */}
        <h2
          className="text-3xl font-bold text-gray-800 mb-3"
          data-aos="fade-up"
        >
          {property.name}
        </h2>
        <p className="text-gray-700 mb-2" data-aos="fade-up" data-aos-delay="100">
          <strong>Location:</strong> {property.location}
        </p>
        <p className="text-gray-700 mb-2" data-aos="fade-up" data-aos-delay="200">
          <strong>Rent:</strong> ₹{property.rent.toLocaleString()} / month
        </p>
        <p className="text-gray-700 mb-2" data-aos="fade-up" data-aos-delay="300">
          <strong>Area:</strong> {property.area} sq.ft
        </p>
        <p className="text-gray-700 mb-2" data-aos="fade-up" data-aos-delay="400">
          <strong>Type:</strong> {property.type}
        </p>
        <p className="text-gray-700 mb-4" data-aos="fade-up" data-aos-delay="500">
          <strong>Description:</strong> {property.description}
        </p>
      </div>

      {/* Right: Schedule Tour Box */}
      <ScheduleTourBox />
    </div>
  );
}

export default RentDetail;


