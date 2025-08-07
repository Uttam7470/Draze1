// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   BedDouble,
//   Bath,
//   CarFront,
//   MapPin,
//   Star,
//   Heart,
//   Share2,
//   ZoomIn,
// } from "lucide-react";

// function AllProperty() {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const response = await fetch("https://api.nearprop.com/api/properties");
//         const data = await response.json();
//         setProperties(data?.data || []);
//       } catch (error) {
//         console.error("Error fetching properties:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProperties();
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#f6f8fa] py-12 px-4">
//       <h1 className="text-3xl font-bold text-center mb-10">
//         Explore All Properties
//       </h1>

//       {loading ? (
//         <div className="flex justify-center items-center min-h-[300px]">
//           <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
//         </div>
//       ) : properties.length === 0 ? (
//         <p className="text-center text-gray-500">No properties found.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
//           {properties.map((property) => (
//             <Link to={`/property/${property.id}`} key={property.id}>
//               <div className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer">
//                 <img
//                   src={
//                     property.imageUrls?.[0] ||
//                     "https://via.placeholder.com/400x250"
//                   }
//                   alt={property.title}
//                   className="w-full h-56 object-cover"
//                 />

//                 <div className="absolute bottom-3 right-3 flex gap-2">
//                   <button className="bg-white/80 backdrop-blur p-1.5 rounded-full hover:bg-white shadow-md">
//                     <Share2 size={18} />
//                   </button>
//                   <button className="bg-white/80 backdrop-blur p-1.5 rounded-full hover:bg-white shadow-md">
//                     <Heart size={18} />
//                   </button>
//                   <button className="bg-white/80 backdrop-blur p-1.5 rounded-full hover:bg-white shadow-md">
//                     <ZoomIn size={18} />
//                   </button>
//                 </div>

//                 <div className="p-4">
//                   <h2 className="text-xl font-semibold text-gray-800 mb-1">
//                     {property.title}
//                   </h2>
//                   <p className="text-sm text-gray-500 flex items-center gap-1 mb-2">
//                     <MapPin size={14} className="text-gray-400" />
//                     {property.address}, {property.city}
//                   </p>

//                   <div className="flex items-center text-sm text-gray-600 gap-4 mb-3">
//                     <span className="flex items-center gap-1">
//                       <BedDouble size={16} /> {property.bedrooms || "N/A"}
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <Bath size={16} /> {property.bathrooms || "N/A"}
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <CarFront size={16} /> {property.garages || "N/A"}
//                     </span>
//                     <span>
//                       {property.area} {property.sizePostfix || "sq.ft"}
//                     </span>
//                   </div>

//                   <div className="flex items-center gap-1 mb-2">
//                     <Star className="text-yellow-400" size={16} />
//                     <span className="text-sm text-gray-600">(0 reviews)</span>
//                   </div>

//                   <p className="text-sm font-semibold text-gray-700 mb-1">
//                     {property.type}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     Owner: {property.owner?.name || "N/A"}
//                   </p>
//                   <p className="text-sm text-gray-800 font-bold mt-2">
//                     ₹{property.price?.toLocaleString()} /{" "}
//                     {property.sizePostfix || "sq.ft"}
//                   </p>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default AllProperty;





import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BedDouble,
  Bath,
  CarFront,
  MapPin,
  Star,
  Heart,
  Share2,
  ZoomIn,
} from "lucide-react";

function AllProperty() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("https://api.nearprop.com/api/properties");
        const data = await response.json();
        setProperties(data?.data || []);
        setFilteredProperties(data?.data || []);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const handleFilter = () => {
    const filtered = properties.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.city.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory
        ? property.category?.toLowerCase() === selectedCategory.toLowerCase()
        : true;

      const matchesType = selectedType
        ? property.type?.toLowerCase() === selectedType.toLowerCase()
        : true;

      return matchesSearch && matchesCategory && matchesType;
    });

    setFilteredProperties(filtered);
  };

  const handleReset = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedType("");
    setFilteredProperties(properties);
  };

  return (
    <div className="min-h-screen bg-[#f6f8fa] py-12 px-4 ">
      <h1 className="text-3xl font-bold text-center mb-6">
        Explore All Properties
      </h1>

      {/* Filter Section */}
      <div
        className="max-w-5xl mx-auto mb-8 
                   bg-white/30 backdrop-blur-md 
                   border border-blue-500/50 shadow-lg
                   rounded-xl p-4
                   flex flex-wrap items-center gap-4 justify-center"
        style={{
          boxShadow: "0 0 10px rgba(59,130,246,0.5)",
          minHeight:'80px'
        }}
      >
        <input
          type="text"
          placeholder="Search by title, city, or address"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-blue-500/50 p-2 rounded w-56 bg-white/50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-blue-500/50 p-2 rounded w-44 bg-white/50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Land">Land</option>
        </select>

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="border border-blue-500/50 p-2 rounded w-44 bg-white/50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Types</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="Plot">Plot</option>
        </select>

        <button
          onClick={handleFilter}
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 shadow-lg"
        >
          Search
        </button>

        <button
          onClick={handleReset}
          className="bg-gray-400 text-white px-5 py-2 rounded hover:bg-gray-500"
        >
          Reset
        </button>
      </div>

      {/* Property Cards */}
      {loading ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : filteredProperties.length === 0 ? (
        <p className="text-center text-gray-500">No properties found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProperties.map((property) => (
            <Link to={`/property/${property.id}`} key={property.id}>
              <div className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer">
                <img
                  src={
                    property.imageUrls?.[0] ||
                    "https://via.placeholder.com/400x250"
                  }
                  alt={property.title}
                  className="w-full h-56 object-cover"
                />

                <div className="absolute bottom-3 right-3 flex gap-2">
                  <button className="bg-white/80 backdrop-blur p-1.5 rounded-full hover:bg-white shadow-md">
                    <Share2 size={18} />
                  </button>
                  <button className="bg-white/80 backdrop-blur p-1.5 rounded-full hover:bg-white shadow-md">
                    <Heart size={18} />
                  </button>
                  <button className="bg-white/80 backdrop-blur p-1.5 rounded-full hover:bg-white shadow-md">
                    <ZoomIn size={18} />
                  </button>
                </div>

                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-1">
                    {property.title}
                  </h2>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mb-2">
                    <MapPin size={14} className="text-gray-400" />
                    {property.address}, {property.city}
                  </p>

                  <div className="flex items-center text-sm text-gray-600 gap-4 mb-3">
                    <span className="flex items-center gap-1">
                      <BedDouble size={16} /> {property.bedrooms || "N/A"}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath size={16} /> {property.bathrooms || "N/A"}
                    </span>
                    <span className="flex items-center gap-1">
                      <CarFront size={16} /> {property.garages || "N/A"}
                    </span>
                    <span>
                      {property.area} {property.sizePostfix || "sq.ft"}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 mb-2">
                    <Star className="text-yellow-400" size={16} />
                    <span className="text-sm text-gray-600">(0 reviews)</span>
                  </div>

                  <p className="text-sm font-semibold text-gray-700 mb-1">
                    {property.type}
                  </p>
                  <p className="text-sm text-gray-600">
                    Owner: {property.owner?.name || "N/A"}
                  </p>
                  <p className="text-sm text-gray-800 font-bold mt-2">
                    ₹{property.price?.toLocaleString()} /{" "}
                    {property.sizePostfix || "sq.ft"}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllProperty;
