




// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBed, FaBath, FaMapMarkerAlt, FaRupeeSign } from "react-icons/fa";

// const Property = () => {
//   const [properties, setProperties] = useState([]);
//   const [filters, setFilters] = useState({
//     city: "",
//     type: "",
//     maxRent: "",
//     furnished: "",
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     try {
//       const stored = JSON.parse(localStorage.getItem("properties")) || [];
//       const filtered = stored.filter(
//         (p) => Array.isArray(p.images) && p.images.length > 0
//       );
//       setProperties(filtered);
//     } catch (error) {
//       console.error("Error loading properties from localStorage:", error);
//       setProperties([]);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   const filteredProperties = properties.filter((prop) => {
//     return (
//       (!filters.city ||
//         prop.city?.toLowerCase().includes(filters.city.toLowerCase())) &&
//       (!filters.type || prop.type === filters.type) &&
//       (!filters.maxRent ||
//         (prop.rent && prop.rent <= Number(filters.maxRent))) &&
//       (!filters.furnished || prop.furnished?.toString() === filters.furnished)
//     );
//   });

//   const handleFilterChange = (e) => {
//     const { id, value } = e.target;
//     setFilters((prev) => ({ ...prev, [id]: value }));
//   };

//   const resetFilters = () => {
//     setFilters({
//       city: "",
//       type: "",
//       maxRent: "",
//       furnished: "",
//     });
//   };

//   return (
//     <div className="px-4 py-6 md:px-8 bg-gray-50 min-h-screen">
//       {/* Filter Panel */}
//       <div className="sticky top-0 z-50 bg-white py-4 shadow-md mb-4">
//         <h2 className="text-center text-xl sm:text-2xl font-bold text-indigo-600 mb-4">
//           All Properties
//         </h2>

//         <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 px-2 sm:px-4">
//           {/* City */}
//           <div>
//             <label htmlFor="city" className="text-sm font-medium block mb-1">
//               City
//             </label>
//             <input
//               type="text"
//               id="city"
//               value={filters.city}
//               onChange={handleFilterChange}
//               placeholder="Enter city"
//               className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
//             />
//           </div>

//           {/* Type */}
//           <div>
//             <label htmlFor="type" className="text-sm font-medium block mb-1">
//               Type
//             </label>
//             <select
//               id="type"
//               value={filters.type}
//               onChange={handleFilterChange}
//               className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
//             >
//               <option value="">All</option>
//               <option value="PG">PG</option>
//               <option value="Hostel">Hostel</option>
//               <option value="Flat">Flat</option>
//               <option value="Apartment">Apartment</option>
//             </select>
//           </div>

//           {/* Max Rent */}
//           <div>
//             <label htmlFor="maxRent" className="text-sm font-medium block mb-1">
//               Max Rent (₹)
//             </label>
//             <input
//               type="number"
//               id="maxRent"
//               value={filters.maxRent}
//               onChange={handleFilterChange}
//               placeholder="Max rent"
//               className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
//               min="0"
//             />
//           </div>

//           {/* Furnished */}
//           <div>
//             <label
//               htmlFor="furnished"
//               className="text-sm font-medium block mb-1"
//             >
//               Furnished
//             </label>
//             <select
//               id="furnished"
//               value={filters.furnished}
//               onChange={handleFilterChange}
//               className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
//             >
//               <option value="">All</option>
//               <option value="true">Yes</option>
//               <option value="false">No</option>
//             </select>
//           </div>

//           {/* Reset Button */}
//           <div className="flex items-end">
//             <button
//               type="button"
//               onClick={resetFilters}
//               className="w-full text-sm border border-gray-400 text-gray-700 rounded px-3 py-2 hover:bg-gray-100"
//             >
//               Reset
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Property Cards */}
//       {loading ? (
//         <div className="text-center my-10">
//           <div className="border-t-4 border-indigo-500 w-10 h-10 rounded-full animate-spin mx-auto"></div>
//         </div>
//       ) : filteredProperties.length === 0 ? (
//         <div className="text-center my-10">
//           <p className="text-gray-500">No properties match your filters.</p>
//           <button
//             onClick={resetFilters}
//             className="mt-2 text-indigo-600 hover:underline text-sm"
//           >
//             Clear Filters
//           </button>
//         </div>
//       ) : (
//         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//           {filteredProperties.map((property) => (
//             <div
//               key={property.id}
//               className="bg-white shadow rounded overflow-hidden flex flex-col"
//             >
//               <img
//                 src={property.images[0]}
//                 alt={property.title || "Property"}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4 flex flex-col gap-2 text-sm">
//               <p className="flex items-center font-700" style={{ color: "#5c4eff", fontSize: "18px" }}>
//            <FaRupeeSign className="mr-1" /> {property.rent} / Month
// </p>
//                 <h5 className="font-semibold text-xl">{property.title}</h5>
//                 <p className="flex items-center text-gray-600">
//                   <FaMapMarkerAlt className="mr-1" /> {property.city}
//                 </p>
//                 <p className="flex items-center" style={{ color: "#5c4eff" }}>
//                   <FaBed className="mr-1" /> {property.bedrooms} Beds
//                   <FaBath className="ml-4 mr-1" /> {property.bathrooms} Baths
//                 </p>
//                 <p className="text-gray-600">
//                   Type: {property.type} | Furnished:{" "}
//                   {property.furnished ? "Yes" : "No"}
//                 </p>
//                 <Link
//                   to={`/landlord/property/${property.id}`}
//                   className="mt-2 inline-block bg-indigo-600 text-white px-4 py-2 rounded text-sm text-center hover:bg-indigo-700"
//                 >
//                   View Details
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Property;





import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBed, FaBath, FaMapMarkerAlt, FaRupeeSign } from "react-icons/fa";

const Property = () => {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({
    city: "",
    type: "",
    maxRent: "",
    furnished: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found in localStorage.");
        setProperties([]);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("https://pg-hostel.nearprop.com/api/landlord/properties", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (data.success && Array.isArray(data.properties)) {
          const filtered = data.properties.filter(
            (p) => Array.isArray(p.images) && p.images.length > 0
          );
          setProperties(filtered);
        } else {
          setProperties([]);
        }
      } catch (err) {
        console.error("Failed to fetch properties:", err);
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const filteredProperties = properties.filter((prop) => {
    return (
      (!filters.city || prop.city?.toLowerCase().includes(filters.city.toLowerCase())) &&
      (!filters.type || prop.type === filters.type) &&
      (!filters.maxRent || (prop.rent && prop.rent <= Number(filters.maxRent))) &&
      (!filters.furnished || prop.furnished?.toString() === filters.furnished)
    );
  });

  const handleFilterChange = (e) => {
    const { id, value } = e.target;
    setFilters((prev) => ({ ...prev, [id]: value }));
  };

  const resetFilters = () => {
    setFilters({
      city: "",
      type: "",
      maxRent: "",
      furnished: "",
    });
  };

  return (
    <div className="px-4 py-6 md:px-8 bg-gray-50 min-h-screen">
      {/* Filter Panel */}
      <div className="sticky top-0 z-50 bg-white py-4 shadow-md mb-4">
        <h2 className="text-center text-xl sm:text-2xl font-bold text-indigo-600 mb-4">
          All Properties
        </h2>

        <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 px-2 sm:px-4">
          {/* City */}
          <div>
            <label htmlFor="city" className="text-sm font-medium block mb-1">
              City
            </label>
            <input
              type="text"
              id="city"
              value={filters.city}
              onChange={handleFilterChange}
              placeholder="Enter city"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>

          {/* Type */}
          <div>
            <label htmlFor="type" className="text-sm font-medium block mb-1">
              Type
            </label>
            <select
              id="type"
              value={filters.type}
              onChange={handleFilterChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            >
              <option value="">All</option>
              <option value="PG">PG</option>
              <option value="Hostel">Hostel</option>
              <option value="Flat">Flat</option>
              <option value="Apartment">Apartment</option>
            </select>
          </div>

          {/* Max Rent */}
          <div>
            <label htmlFor="maxRent" className="text-sm font-medium block mb-1">
              Max Rent (₹)
            </label>
            <input
              type="number"
              id="maxRent"
              value={filters.maxRent}
              onChange={handleFilterChange}
              placeholder="Max rent"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              min="0"
            />
          </div>

          {/* Furnished */}
          <div>
            <label htmlFor="furnished" className="text-sm font-medium block mb-1">
              Furnished
            </label>
            <select
              id="furnished"
              value={filters.furnished}
              onChange={handleFilterChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            >
              <option value="">All</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          {/* Reset Button */}
          <div className="flex items-end">
            <button
              type="button"
              onClick={resetFilters}
              className="w-full text-sm border border-gray-400 text-gray-700 rounded px-3 py-2 hover:bg-gray-100"
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      {/* Property Cards */}
      {loading ? (
        <div className="text-center my-10">
          <div className="border-t-4 border-indigo-500 w-10 h-10 rounded-full animate-spin mx-auto"></div>
        </div>
      ) : filteredProperties.length === 0 ? (
        <div className="text-center my-10">
          <p className="text-gray-500">No properties match your filters.</p>
          <button
            onClick={resetFilters}
            className="mt-2 text-indigo-600 hover:underline text-sm"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <div
              key={property._id}
              className="bg-white shadow rounded overflow-hidden flex flex-col"
            >
              <img
                src={property.images[0]}
                alt={property.title || "Property"}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col gap-2 text-sm">
                <p className="flex items-center font-700" style={{ color: "#5c4eff", fontSize: "18px" }}>
                  <FaRupeeSign className="mr-1" /> {property.rent} / Month
                </p>
                <h5 className="font-semibold text-xl">{property.title}</h5>
                <p className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="mr-1" /> {property.city}
                </p>
                <p className="flex items-center" style={{ color: "#5c4eff" }}>
                  <FaBed className="mr-1" /> {property.bedrooms} Beds
                  <FaBath className="ml-4 mr-1" /> {property.bathrooms} Baths
                </p>
                <p className="text-gray-600">
                  Type: {property.type} | Furnished:{" "}
                  {property.furnished ? "Yes" : "No"}
                </p>
                <Link
                  to={`/landlord/property/${property._id}`}
                  className="mt-2 inline-block bg-indigo-600 text-white px-4 py-2 rounded text-sm text-center hover:bg-indigo-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Property;
