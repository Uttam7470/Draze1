
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";


// function RentProperty() {

  
//   const [loading, setLoading] = useState(true);
//   const [properties, setProperties] = useState([]);
//   const [filteredProperties, setFilteredProperties] = useState([]);

//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedType, setSelectedType] = useState("");
//   const [priceRange, setPriceRange] = useState("");

//   const navigate = useNavigate();

//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//     AOS.refresh();
//     window.scrollTo({ top: 0, behavior: "smooth" });

//     const timer = setTimeout(() => {
//       setProperties(rentProperties);
//       setFilteredProperties(rentProperties);
//       setLoading(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   const handleFilter = () => {
//     const filtered = properties.filter((property) => {
//       const matchesSearch =
//         property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         property.location.toLowerCase().includes(searchTerm.toLowerCase());

//       const matchesType = selectedType
//         ? property.type.toLowerCase() === selectedType.toLowerCase()
//         : true;

//       const matchesPrice = (() => {
//         const rent = property.rent;
//         if (priceRange === "0-8000") return rent <= 8000;
//         if (priceRange === "8001-15000") return rent > 8000 && rent <= 15000;
//         if (priceRange === "15001-25000") return rent > 15000 && rent <= 25000;
//         if (priceRange === "25001+") return rent > 25000;
//         return true;
//       })();

//       return matchesSearch && matchesType && matchesPrice;
//     });

//     setFilteredProperties(filtered);
//   };

//   const handleReset = () => {
//     setSearchTerm("");
//     setSelectedType("");
//     setPriceRange("");
//     setFilteredProperties(properties);
//   };

//   const handleCardClick = (property) => {
//     navigate(`/rent/${property.id}`, { state: property });
//   };

//   return (
//       <div className="min-h-screen bg-[#f6f8fa] py-12 px-4">
//       <h1 className="text-3xl font-bold text-center mb-6">
//         Properties for Rent
//       </h1>

//       {/* ✅ Filter Section (Fixed Below Title) */}
//       <div
//        className="max-w-5xl mx-auto mb-8 
//                    bg-white/30 backdrop-blur-md 
//                    border border-blue-500/50 shadow-lg
//                    rounded-xl p-4
//                    flex flex-wrap items-center gap-4 justify-center"
//         style={{
//           boxShadow: "0 0 12px rgba(59,130,246,0.6)",
//           minHeight: "80px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or location"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="border border-blue-500/50 p-2 rounded w-56 bg-white/50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         <select
//           value={selectedType}
//           onChange={(e) => setSelectedType(e.target.value)}
//           className="border border-blue-500/50 p-2 rounded w-44 bg-white/50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           <option value="">All Types</option>
//           <option value="PG">PG</option>
//           <option value="Hostel">Hostel</option>
//           <option value="Room">Room</option>
//           <option value="1BHK Apartment">1BHK Apartment</option>
//           <option value="Studio Apartment">Studio Apartment</option>
//         </select>

//         <select
//           value={priceRange}
//           onChange={(e) => setPriceRange(e.target.value)}
//           className="border border-blue-500/50 p-2 rounded w-44 bg-white/50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           <option value="">All Prices</option>
//           <option value="0-8000">₹0 - ₹8,000</option>
//           <option value="8001-15000">₹8,001 - ₹15,000</option>
//           <option value="15001-25000">₹15,001 - ₹25,000</option>
//           <option value="25001+">₹25,001+</option>
//         </select>

//         <button
//           onClick={handleFilter}
//           className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 shadow-lg"
//         >
//           Search
//         </button>

//         <button
//           onClick={handleReset}
//           className="bg-gray-400 text-white px-5 py-2 rounded hover:bg-gray-500"
//         >
//           Reset
//         </button>
//       </div>

//       {/* ✅ Property Cards */}
//       <div className="p-6 max-w-7xl mx-auto">
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
//           </div>
//         ) : filteredProperties.length === 0 ? (
//           <p className="text-center text-gray-500">No properties found.</p>
//         ) : (
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {filteredProperties.map((property, index) => (
//               <div
//                 key={property.id}
//                 data-aos="fade-up"
//                 data-aos-delay={index * 100}
//                 onClick={() => handleCardClick(property)}
//                 className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
//               >
//                 <img
//                   src={property.image}
//                   alt={property.name}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h2 className="text-xl font-bold text-gray-800">
//                     {property.name}
//                   </h2>
//                   <p className="text-sm text-gray-600 mb-1">
//                     {property.location}
//                   </p>
//                   <p className="text-gray-700 font-semibold mb-1">
//                     ₹{property.rent.toLocaleString()} / month
//                   </p>
//                   <p className="text-sm text-gray-500 mb-1">
//                     {property.type} • {property.area} sq.ft
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     {property.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default RentProperty;




// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const RentProperty = () => {
//   const [filteredProperties, setFilteredProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("https://pg-hostel.nearprop.com/api/public/all-properties")
//       .then((res) => res.json())
//       .then((data) => {
//         if (Array.isArray(data?.properties)) {
//           setFilteredProperties(data.properties);
//         } else {
//           setFilteredProperties([]);
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Fetch error:", err);
//         setError("Failed to fetch properties.");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div className="text-center py-10 text-lg text-blue-600">
//         Loading rent properties...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center py-10 text-red-600">
//         {error}
//       </div>
//     );
//   }

//   if (filteredProperties.length === 0) {
//     return (
//       <div className="text-center py-10 text-gray-600">
//         No rent properties found.
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h2 className="text-3xl font-bold text-center mb-8">
//         Available Rental Properties
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {filteredProperties.map((property, index) => (
//           <div
//             key={property._id || property.propertyId || index}
//             className="bg-white shadow rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
//             onClick={() =>
//               navigate(`/rent/${property._id}`, {
//                 state: property,
//               })
//             }
//           >
//             <img
//               src={
//                 property?.images?.[0] ||
//                 "https://via.placeholder.com/400x250"
//               }
//               alt={property.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4 space-y-2">
//               <h3 className="text-lg font-semibold text-[#5C4EFF]">
//                 {property.name}
//               </h3>

//               <p className="text-sm text-gray-700">
//                 <strong>Location:</strong>{" "}
//                 {property.location?.city}, {property.location?.state}
//               </p>

//               <p className="text-sm text-gray-700">
//                 <strong>Type:</strong> {property.type || "N/A"}
//               </p>

//               <p className="text-sm text-gray-700">
//                 <strong>Rooms:</strong> {property.totalRooms || "N/A"}
//               </p>

//               <p className="text-sm text-gray-900 font-semibold">
//                 {/* ₹{property.price || "N/A"} / month */}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RentProperty;

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
