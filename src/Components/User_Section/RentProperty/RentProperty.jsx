import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBed, FaCar, FaRulerCombined, FaUser, FaCalendarAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const RentProperty = () => {
  const navigate = useNavigate();
  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchData = async () => {
      try {
        const res = await fetch("https://pg-hostel.nearprop.com/api/public/all-properties");
        const json = await res.json();
        const allProperties = json?.properties || [];
        setPropertyData(allProperties);
      } catch (err) {
        console.error("Failed to fetch properties:", err);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (property) => {
    navigate(`/rent/${property.id}`, { state: property });
  };

  return (
    <div className="min-h-screen bg-[#f6f8fa] px-4 py-10 md:px-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-700" data-aos="fade-down">
       All Rent Properties
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-12" data-aos="fade-up">
        {propertyData.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">No properties found.</p>
        ) : (
          propertyData.map((property, index) => (
            <div
              key={property.id}
              onClick={() => handleCardClick(property)}
              className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={property.images?.[0] || "https://via.placeholder.com/400x300"}
                  alt={property.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{property.name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {property.location?.city}, {property.location?.state}
                </p>

                <div className="flex flex-wrap text-sm text-gray-700 gap-4 mb-2">
                  <span className="flex items-center gap-1">
                    <FaBed /> {Math.round(property.totalBeds / property.totalRooms) || "N/A"} Beds/Room
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCar /> Parking: N/A
                  </span>
                  <span className="flex items-center gap-1">
                    <FaRulerCombined /> Size: {property.area || "N/A"}
                  </span>
                </div>

                <div className="text-base font-semibold text-black mb-1">
                  ₹ {property.lowestPrice || property.price || "N/A"}
                </div>

                <div className="text-sm font-medium text-gray-600 mb-3">
                  Type: {property.type}
                </div>

                <div className="flex justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <FaUser /> Admin
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt /> {new Date(property.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RentProperty;
