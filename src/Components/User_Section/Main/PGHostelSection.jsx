import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  FaMapMarkerAlt,
  FaHome,
  FaBed,
  FaRupeeSign,
  FaCheckCircle,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const PGHostelSection = () => {
  const [pgHostelData, setPgHostelData] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    fetchData();
  }, []);



const fetchData = async () => {
  try {
    const res = await axios.get("https://pg-hostel.nearprop.com/api/public/all-properties");
    console.log("API Response:", res.data);

    // ✅ Correct key: res.data.properties
    if (Array.isArray(res.data.properties)) {
      setPgHostelData(res.data.properties);
    } else {
      console.error("Unexpected response format:", res.data);
    }
  } catch (error) {
    console.error("Error fetching PG & Hostel data:", error);
  }
};


  return (
   <section className="py-8 px-6 bg-gray-50 text-center">
  <h2
    className="text-3xl font-bold text-indigo-500 mb-8"
    data-aos="fade-up"
  >
    Affordable PGs & Hostels
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {pgHostelData.slice(0, 6).map((item, index) => (
      <Link
        to={`/${item.type}/${item.id}`}
        state={item}
        key={item._id}
        className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden text-left"
        data-aos="zoom-in"
        data-aos-delay={index * 100}
      >
        <img
          src={item.images?.[0] || "https://via.placeholder.com/400x300"}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
      
      <div className="p-6 space-y-4">
  {/* Title */}
  <h3 className="text-2xl font-bold text-center text-[#5C4EFF]">
    {item.name}
  </h3>

  {/* City & Area */}
  <div className="flex items-center text-gray-600 text-sm gap-2">
    <FaMapMarkerAlt className="text-[#5C4EFF]" />
    <span>{item.location?.city}, {item.location?.area}</span>
  </div>

  {/* Property Type */}
  <div className="flex items-center text-sm gap-2 text-gray-700">
    <FaHome className="text-[#5C4EFF]" />
    <span className="font-semibold">Type:</span>
    <span>{item.type}</span>
  </div>

  {/* Bedrooms */}
  <div className="flex items-center text-sm gap-2 text-gray-700">
    <FaBed className="text-[#5C4EFF]" />
    <span className="font-semibold">Bedrooms:</span>
    <span>{item.totalRooms || "N/A"}</span>
  </div>

  {/* Location - Redesigned */}
  <div className="flex items-start gap-2 text-sm text-gray-700">
    <FaCheckCircle className="mt-1 text-[#5C4EFF]" />
    <div>
      <p>
        <span className="font-semibold">Location:</span> {item.location?.address}
      </p>
      <p>{item.location?.city}, {item.location?.state}</p>
    </div>
  </div>
</div>


      </Link>
    ))}
  </div>
</section>

  );
};

export default PGHostelSection;
