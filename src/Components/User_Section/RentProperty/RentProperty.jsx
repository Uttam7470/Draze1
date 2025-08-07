
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const rentProperties = [
//   {
//     id: 1,
//     name: "Greenview PG",
//     location: "Koramangala, Bangalore",
//     rent: 9500,
//     area: 450,
//     type: "PG",
//     image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
//     description: "Fully furnished PG with Wi-Fi, meals, and daily cleaning.",
//   },
//   {
//     id: 2,
//     name: "Urban Nest Flats",
//     location: "Andheri West, Mumbai",
//     rent: 23000,
//     area: 850,
//     type: "1BHK Apartment",
//     image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
//     description: "1BHK apartment with modular kitchen and security services.",
//   },
//   {
//     id: 3,
//     name: "Cozy Hostel",
//     location: "Sector 62, Noida",
//     rent: 7000,
//     area: 300,
//     type: "Hostel",
//     image:
//       "https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&auto=format&fit=crop&q=60",
//     description:
//       "Affordable hostel accommodation for students and professionals.",
//   },
//   {
//     id: 4,
//     name: "Lake View Rooms",
//     location: "Salt Lake, Kolkata",
//     rent: 12000,
//     area: 600,
//     type: "Room",
//     image:
//       "https://media.istockphoto.com/id/1438437647/photo/christmas-celebration-at-luxury-lake-house.webp?a=1&b=1&s=612x612&w=0&k=20&c=vBeyQjLc4DwX9qRa3SqtfdnxjH2Oj47buIRVGn3Xn38=",
//     description:
//       "Spacious room near lake with natural light and attached washroom.",
//   },
//   {
//     id: 5,
//     name: "Studio Stay",
//     location: "Gachibowli, Hyderabad",
//     rent: 18000,
//     area: 550,
//     type: "Studio Apartment",
//     image:
//       "https://images.unsplash.com/photo-1610224353475-f589ea4993f6?w=600&auto=format&fit=crop&q=60",
//     description:
//       "Modern studio apartment with fully equipped kitchen and AC.",
//   },
//   {
//     id: 6,
//     name: "Girls PG Heaven",
//     location: "Viman Nagar, Pune",
//     rent: 8500,
//     area: 400,
//     type: "PG",
//     image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
//     description: "Safe and hygienic girls PG with food and laundry services.",
//   },
// ];

// function RentProperty() {
//   const [loading, setLoading] = useState(true);
//   const [properties, setProperties] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//     AOS.refresh();

//     window.scrollTo({ top: 0, behavior: "smooth" });

//     const timer = setTimeout(() => {
//       setProperties(rentProperties);
//       setLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   const handleCardClick = (property) => {
//     navigate(`/rent/${property.id}`, { state: property });
//   };

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h1
//         className="text-3xl font-semibold text-center text-gray-800 mb-6"
//         data-aos="fade-down"
//       >
//         Properties for Rent
//       </h1>

//       {loading ? (
//         <div className="flex justify-center items-center h-64">
//           <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
//         </div>
//       ) : (
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {properties.map((property, index) => (
//             <div
//               key={property.id}
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//               onClick={() => handleCardClick(property)}
//               className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
//             >
//               <img
//                 src={property.image}
//                 alt={property.name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h2 className="text-xl font-bold text-gray-800">
//                   {property.name}
//                 </h2>
//                 <p className="text-sm text-gray-600 mb-1">
//                   {property.location}
//                 </p>
//                 <p className="text-gray-700 font-semibold mb-1">
//                   ₹{property.rent.toLocaleString()} / month
//                 </p>
//                 <p className="text-sm text-gray-500 mb-1">
//                   {property.type} • {property.area} sq.ft
//                 </p>
//                 <p className="text-sm text-gray-600">
//                   {property.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default RentProperty;








import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const rentProperties = [
  {
    id: 1,
    name: "Greenview PG",
    location: "Koramangala, Bangalore",
    rent: 9500,
    area: 450,
    type: "PG",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    description: "Fully furnished PG with Wi-Fi, meals, and daily cleaning.",
  },
  {
    id: 2,
    name: "Urban Nest Flats",
    location: "Andheri West, Mumbai",
    rent: 23000,
    area: 850,
    type: "1BHK Apartment",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    description: "1BHK apartment with modular kitchen and security services.",
  },
  {
    id: 3,
    name: "Cozy Hostel",
    location: "Sector 62, Noida",
    rent: 7000,
    area: 300,
    type: "Hostel",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&auto=format&fit=crop&q=60",
    description:
      "Affordable hostel accommodation for students and professionals.",
  },
  {
    id: 4,
    name: "Lake View Rooms",
    location: "Salt Lake, Kolkata",
    rent: 12000,
    area: 600,
    type: "Room",
    image:
      "https://media.istockphoto.com/id/1438437647/photo/christmas-celebration-at-luxury-lake-house.webp?a=1&b=1&s=612x612&w=0&k=20&c=vBeyQjLc4DwX9qRa3SqtfdnxjH2Oj47buIRVGn3Xn38=",
    description:
      "Spacious room near lake with natural light and attached washroom.",
  },
  {
    id: 5,
    name: "Studio Stay",
    location: "Gachibowli, Hyderabad",
    rent: 18000,
    area: 550,
    type: "Studio Apartment",
    image:
      "https://images.unsplash.com/photo-1610224353475-f589ea4993f6?w=600&auto=format&fit=crop&q=60",
    description:
      "Modern studio apartment with fully equipped kitchen and AC.",
  },
  {
    id: 6,
    name: "Girls PG Heaven",
    location: "Viman Nagar, Pune",
    rent: 8500,
    area: 400,
    type: "PG",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
    description: "Safe and hygienic girls PG with food and laundry services.",
  },
];

function RentProperty() {

  
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();
    window.scrollTo({ top: 0, behavior: "smooth" });

    const timer = setTimeout(() => {
      setProperties(rentProperties);
      setFilteredProperties(rentProperties);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleFilter = () => {
    const filtered = properties.filter((property) => {
      const matchesSearch =
        property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType = selectedType
        ? property.type.toLowerCase() === selectedType.toLowerCase()
        : true;

      const matchesPrice = (() => {
        const rent = property.rent;
        if (priceRange === "0-8000") return rent <= 8000;
        if (priceRange === "8001-15000") return rent > 8000 && rent <= 15000;
        if (priceRange === "15001-25000") return rent > 15000 && rent <= 25000;
        if (priceRange === "25001+") return rent > 25000;
        return true;
      })();

      return matchesSearch && matchesType && matchesPrice;
    });

    setFilteredProperties(filtered);
  };

  const handleReset = () => {
    setSearchTerm("");
    setSelectedType("");
    setPriceRange("");
    setFilteredProperties(properties);
  };

  const handleCardClick = (property) => {
    navigate(`/rent/${property.id}`, { state: property });
  };

  return (
      <div className="min-h-screen bg-[#f6f8fa] py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Properties for Rent
      </h1>

      {/* ✅ Filter Section (Fixed Below Title) */}
      <div
       className="max-w-5xl mx-auto mb-8 
                   bg-white/30 backdrop-blur-md 
                   border border-blue-500/50 shadow-lg
                   rounded-xl p-4
                   flex flex-wrap items-center gap-4 justify-center"
        style={{
          boxShadow: "0 0 12px rgba(59,130,246,0.6)",
          minHeight: "80px",
        }}
      >
        <input
          type="text"
          placeholder="Search by name or location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-blue-500/50 p-2 rounded w-56 bg-white/50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="border border-blue-500/50 p-2 rounded w-44 bg-white/50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Types</option>
          <option value="PG">PG</option>
          <option value="Hostel">Hostel</option>
          <option value="Room">Room</option>
          <option value="1BHK Apartment">1BHK Apartment</option>
          <option value="Studio Apartment">Studio Apartment</option>
        </select>

        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="border border-blue-500/50 p-2 rounded w-44 bg-white/50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Prices</option>
          <option value="0-8000">₹0 - ₹8,000</option>
          <option value="8001-15000">₹8,001 - ₹15,000</option>
          <option value="15001-25000">₹15,001 - ₹25,000</option>
          <option value="25001+">₹25,001+</option>
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

      {/* ✅ Property Cards */}
      <div className="p-6 max-w-7xl mx-auto">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          </div>
        ) : filteredProperties.length === 0 ? (
          <p className="text-center text-gray-500">No properties found.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property, index) => (
              <div
                key={property.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={() => handleCardClick(property)}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-800">
                    {property.name}
                  </h2>
                  <p className="text-sm text-gray-600 mb-1">
                    {property.location}
                  </p>
                  <p className="text-gray-700 font-semibold mb-1">
                    ₹{property.rent.toLocaleString()} / month
                  </p>
                  <p className="text-sm text-gray-500 mb-1">
                    {property.type} • {property.area} sq.ft
                  </p>
                  <p className="text-sm text-gray-600">
                    {property.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default RentProperty;
