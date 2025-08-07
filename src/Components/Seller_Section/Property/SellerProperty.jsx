import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";

const SellerProperty = () => {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [propertyType, setPropertyType] = useState(""); // ✅ Added this line

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("properties")) || [];
    setProperties(stored);
  }, []);

  const filteredProperties = properties.filter((prop) => {
    // console.log("this is property ",prop);
    const matchesSearch =
      prop.title.toLowerCase().includes(search.toLowerCase()) ||
      prop.location.toLowerCase().includes(search.toLowerCase()) ||
      (prop.city && prop.city.toLowerCase().includes(search.toLowerCase()));

    const matchesPrice = prop.price >= minPrice && prop.price <= maxPrice;

    const matchesType =
      !propertyType || prop.type?.toLowerCase() === propertyType.toLowerCase(); // ✅ Optional type match

    return matchesSearch && matchesPrice && matchesType;
  });

  return (
//     <div className="pt-24 px-6 bg-gray-100 min-h-screen">
//       <h2 className="text-2xl font-bold mb-4 text-[#5c4eff]">Available Properties</h2>
//       <div className="grid md:grid-cols-4 gap-6">
//         {/* Sidebar Filter */}
//         <div className="bg-white p-4 shadow rounded h-fit sticky top-24">
//           <h3 className="text-lg font-semibold mb-4">Filter Properties</h3>

//           <div className="mb-4">
//             <label className="block text-sm font-medium">Search</label>
//             <input
//               type="text"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Title, Location, City"
//               className="w-full mt-1 p-2 border rounded"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium">Property Type</label>
//             <select
//               value={propertyType}
//               onChange={(e) => setPropertyType(e.target.value)}
//               className="w-full mt-1 p-2 border rounded"
//             >
//               <option value="">Select Property Type</option>
//               <option value="PG">PG</option>
//               <option value="Flat">Flat</option>
//               <option value="Apartment">Apartment</option>
//               <option value="Villa">Villa</option>
//               <option value="Hostel">Hostel</option>
//             </select>
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium">Min Price (₹)</label>
//             <input
//               type="number"
//               value={minPrice}
//               onChange={(e) => setMinPrice(Number(e.target.value))}
//               className="w-full mt-1 p-2 border rounded"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium">Max Price (₹)</label>
//             <input
//               type="number"
//               value={maxPrice}
//               onChange={(e) => setMaxPrice(Number(e.target.value))}
//               className="w-full mt-1 p-2 border rounded"
//             />
//           </div>
//         </div>

//         {/* Property Cards */}
 


// <div className="md:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

//   {filteredProperties.length > 0 ? (
//     filteredProperties.map((prop, index) => (
//       <div
//         key={index}
//         className="bg-white border border-gray-200 rounded-[10px] overflow-hidden shadow-md hover:shadow-lg transition duration-300 w-full max-w-[440px]"
//       >
//         {/* 🖼️ Property Image */}
//         <div className="relative h-60">
//           <img
//             src={prop.images || "https://via.placeholder.com/400x250"}
//             alt="Property"
//             className="h-full w-full object-cover"
//           />
//           <span className="absolute top-3 left-3 bg-white text-gray-700 text-xs px-2 py-1 rounded font-semibold shadow">
//             For Sale
//           </span>
//         </div>

//         {/* 📄 Property Content */}
//         <div className="p-5">
//           <p className="font-bold text-xl text-[#5c4eff]">
//             ₹{prop.price}/Month
//           </p>

//           <h3 className="text-2xl font-semibold text-black mt-1">
//             {prop.title}
//           </h3>

//           <p className="text-sm text-gray-500 mb-4">
//             {prop.location || "Location not specified"}
//           </p>

//           {/* 🛏️ Details Row */}
//           <div className="flex items-center justify-between text-sm text-gray-600 gap-2 mb-4">
//             <div className="flex items-center gap-1">
//               <FaBed className="text-[#5c4eff]" /> {prop.beds || 3} Beds
//             </div>
//             <div className="flex items-center gap-1">
//               <FaBath className="text-[#5c4eff]" /> {prop.bathrooms || 2} Baths
//             </div>
//             <div className="flex items-center gap-1">
//               <FaRulerCombined className="text-[#5c4eff]" /> {prop.area || "120x180"} m²
//             </div>
//           </div>

//           {/* 🔗 View Details Button */}
//           <Link
//             to={`/property/${index}`}
//             className="block mt-2 text-center bg-[#5c4eff] text-white py-2 rounded hover:bg-[#4a3de6] transition"
//           >
//             View Details
//           </Link>
//         </div>
//       </div>
//     ))
//   ) : (
//     <p className="text-gray-500">No properties match your filters.</p>
//   )}
// </div>



//       </div>
//     </div>

  <div className="pt-24 px-6 bg-gray-100 min-h-screen">
  <h2 className="text-2xl font-bold mb-4 text-[#5c4eff]">Available Properties</h2>
  <div className="grid md:grid-cols-4 gap-6">
    {/* Sidebar Filter */}
    <div className="bg-white p-4 shadow rounded h-fit sticky top-24">
      <h3 className="text-lg font-semibold mb-4">Filter Properties</h3>

      <div className="mb-4">
        <label className="block text-sm font-medium">Search</label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Title, Location, City"
          className="w-full mt-1 p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Property Type</label>
        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          className="w-full mt-1 p-2 border rounded"
        >
          <option value="">Select Property Type</option>
          <option value="PG">PG</option>
          <option value="Flat">Flat</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="Hostel">Hostel</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Min Price (₹)</label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="w-full mt-1 p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Max Price (₹)</label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full mt-1 p-2 border rounded"
        />
      </div>
    </div>

    {/* Property Cards */}
    <div className="md:col-span-3 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      {filteredProperties.length > 0 ? (
        filteredProperties.map((prop, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-[10px] overflow-hidden shadow-md hover:shadow-lg transition duration-300 w-full max-w-[500px]"
          >
            {/* 🖼️ Property Image */}
            <div className="relative h-60">
              <img
                src={prop.images || "https://via.placeholder.com/400x250"}
                alt="Property"
                className="h-full w-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-white text-gray-700 text-xs px-2 py-1 rounded font-semibold shadow">
                For Sale
              </span>
            </div>

            {/* 📄 Property Content */}
            <div className="p-5">
              <p className="font-bold text-xl text-[#5c4eff]">
                ₹{prop.price}/Month
              </p>

              <h3 className="text-2xl font-semibold text-black mt-1">
                {prop.title}
              </h3>

              <p className="text-sm text-gray-500 mb-4">
                {prop.address || "Location not specified"}
              </p>

              {/* 🛏️ Details Row */}
              <div className="flex items-center justify-between text-sm text-gray-600 gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <FaBed className="text-[#5c4eff]" /> {prop.beds || 3} Beds
                </div>
                <div className="flex items-center gap-1">
                  <FaBath className="text-[#5c4eff]" /> {prop.bathrooms || 2} Baths
                </div>
                <div className="flex items-center gap-1">
                  <FaRulerCombined className="text-[#5c4eff]" /> {prop.area || "120x180"} m²
                </div>
              </div>

              {/* 🔗 View Details Button */}
              <Link
                to={`/seller/property/${index}`}
                className="block mt-2 text-center bg-[#5c4eff] text-white py-2 rounded hover:bg-[#4a3de6] transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No properties match your filters.</p>
      )}
    </div>
  </div>
</div>


  );
};

export default SellerProperty;
