// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AOS from "aos";
// import "aos/dist/aos.css";

// const sellProperties = [
//   {
//     id: 1,
//     name: 'Lakeview Residency',
//     location: 'Powai, Mumbai',
//     price: 9500000,
//     area: 1100,
//     bedrooms: 2,
//     image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
//     description: '2 BHK lake-facing flat with excellent amenities and natural light.',
//   },
//   {
//     id: 2,
//     name: 'Sunset Villas',
//     location: 'Hinjewadi, Pune',
//     price: 12500000,
//     area: 1500,
//     bedrooms: 3,
//     image: 'https://images.unsplash.com/photo-1600585153885-2580b004e90d',
//     description: 'Luxurious 3 BHK independent villa in gated community.',
//   },
//   {
//     id: 3,
//     name: 'Eco Heights',
//     location: 'Whitefield, Bangalore',
//     price: 8800000,
//     area: 1200,
//     bedrooms: 2,
//     image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
//     description: 'Modern eco-friendly apartment with solar power and rainwater harvesting.',
//   },
//   {
//     id: 4,
//     name: 'Prestige Enclave',
//     location: 'Banjara Hills, Hyderabad',
//     price: 18500000,
//     area: 2000,
//     bedrooms: 4,
//     image: 'https://images.unsplash.com/photo-1572120360610-d971b9b78857',
//     description: 'Premium 4 BHK with rooftop garden and high-end interiors.',
//   },
//   {
//     id: 5,
//     name: 'Urban Nest',
//     location: 'Salt Lake, Kolkata',
//     price: 7600000,
//     area: 1000,
//     bedrooms: 2,
//     image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20f',
//     description: 'Cozy 2 BHK flat with nearby schools, parks, and metro station.',
//   },
//   {
//     id: 6,
//     name: 'Harmony Towers',
//     location: 'Noida Sector 50',
//     price: 10500000,
//     area: 1350,
//     bedrooms: 3,
//     image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
//     description: 'Spacious 3 BHK apartment with community hall and clubhouse.',
//   },
//   {
//     id: 7,
//     name: 'Central Avenue',
//     location: 'Koregaon Park, Pune',
//     price: 17200000,
//     area: 1800,
//     bedrooms: 4,
//     image: 'https://images.unsplash.com/photo-1590073242674-e6f21e3d8115',
//     description: '4 BHK elite flat in one of Pune’s poshest areas.',
//   },
//   {
//     id: 8,
//     name: 'Skyview Homes',
//     location: 'Rajajinagar, Bangalore',
//     price: 9400000,
//     area: 1250,
//     bedrooms: 2,
//     image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb',
//     description: 'Well-connected 2 BHK apartment with modern design and security.',
//   },
// ];

// function SellProperty() {
//   const [loading, setLoading] = useState(true);
//   const [properties, setProperties] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setProperties(sellProperties);
//       setLoading(false);
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h1
//         className="text-3xl font-semibold text-center text-gray-800 mb-6"
//         data-aos="fade-down"
//       >
//         Properties for Sale
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
//               onClick={() =>
//                 navigate(`/sell/${property.id}`, { state: property })
//               }
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
//                 <p className="text-sm text-gray-600 mb-1">{property.location}</p>
//                 <p className="text-gray-700 font-semibold mb-1">
//                   ₹{property.price.toLocaleString()}
//                 </p>
//                 <p className="text-sm text-gray-500 mb-1">
//                   {property.bedrooms} BHK • {property.area} sq.ft
//                 </p>
//                 <p className="text-sm text-gray-600">{property.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default SellProperty;



import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const sellProperties = [
  {
    id: 1,
    name: 'Lakeview Residency',
    location: 'Powai, Mumbai',
    price: 9500000,
    area: 1100,
    bedrooms: 2,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    description: '2 BHK lake-facing flat with excellent amenities and natural light.',
  },
  {
    id: 2,
    name: 'Sunset Villas',
    location: 'Hinjewadi, Pune',
    price: 12500000,
    area: 1500,
    bedrooms: 3,
    image: 'https://images.unsplash.com/photo-1600585153885-2580b004e90d',
    description: 'Luxurious 3 BHK independent villa in gated community.',
  },
  {
    id: 3,
    name: 'Eco Heights',
    location: 'Whitefield, Bangalore',
    price: 8800000,
    area: 1200,
    bedrooms: 2,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
    description: 'Modern eco-friendly apartment with solar power and rainwater harvesting.',
  },
  {
    id: 4,
    name: 'Prestige Enclave',
    location: 'Banjara Hills, Hyderabad',
    price: 18500000,
    area: 2000,
    bedrooms: 4,
    image: 'https://images.unsplash.com/photo-1572120360610-d971b9b78857',
    description: 'Premium 4 BHK with rooftop garden and high-end interiors.',
  },
  {
    id: 5,
    name: 'Urban Nest',
    location: 'Salt Lake, Kolkata',
    price: 7600000,
    area: 1000,
    bedrooms: 2,
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20f',
    description: 'Cozy 2 BHK flat with nearby schools, parks, and metro station.',
  },
  {
    id: 6,
    name: 'Harmony Towers',
    location: 'Noida Sector 50',
    price: 10500000,
    area: 1350,
    bedrooms: 3,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
    description: 'Spacious 3 BHK apartment with community hall and clubhouse.',
  },
  {
    id: 7,
    name: 'Central Avenue',
    location: 'Koregaon Park, Pune',
    price: 17200000,
    area: 1800,
    bedrooms: 4,
    image: 'https://images.unsplash.com/photo-1590073242674-e6f21e3d8115',
    description: '4 BHK elite flat in one of Pune’s poshest areas.',
  },
  {
    id: 8,
    name: 'Skyview Homes',
    location: 'Rajajinagar, Bangalore',
    price: 9400000,
    area: 1250,
    bedrooms: 2,
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb',
    description: 'Well-connected 2 BHK apartment with modern design and security.',
  },
];

function SellProperty() {
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBedrooms, setSelectedBedrooms] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProperties(sellProperties);
      setFilteredProperties(sellProperties);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleFilter = () => {
    const filtered = properties.filter((property) => {
      const matchesSearch =
        property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesBedrooms = selectedBedrooms
        ? property.bedrooms === parseInt(selectedBedrooms)
        : true;

      const matchesPrice = (() => {
        const price = property.price;
        if (priceRange === "0-9000000") return price <= 9000000;
        if (priceRange === "9000001-13000000") return price > 9000000 && price <= 13000000;
        if (priceRange === "13000001-18000000") return price > 13000000 && price <= 18000000;
        if (priceRange === "18000001+") return price > 18000000;
        return true;
      })();

      return matchesSearch && matchesBedrooms && matchesPrice;
    });

    setFilteredProperties(filtered);
  };

  const handleReset = () => {
    setSearchTerm('');
    setSelectedBedrooms('');
    setPriceRange('');
    setFilteredProperties(properties);
  };

  return (
  <div className="min-h-screen bg-[#f6f8fa] py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-6"
        data-aos="fade-down"
      >
        Properties for Sale
      </h1>

      {/* ✅ Filter Section */}
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
          value={selectedBedrooms}
          onChange={(e) => setSelectedBedrooms(e.target.value)}
          className="border border-blue-500/50 p-2 rounded w-44 bg-white/50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Bedrooms</option>
          <option value="2">2 BHK</option>
          <option value="3">3 BHK</option>
          <option value="4">4 BHK</option>
        </select>

        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="border border-blue-500/50 p-2 rounded w-44 bg-white/50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Prices</option>
          <option value="0-9000000">₹0 - ₹90 Lakh</option>
          <option value="9000001-13000000">₹90 Lakh - ₹1.3 Cr</option>
          <option value="13000001-18000000">₹1.3 Cr - ₹1.8 Cr</option>
          <option value="18000001+">₹1.8 Cr+</option>
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
                onClick={() =>
                  navigate(`/sell/${property.id}`, { state: property })
                }
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-800">{property.name}</h2>
                  <p className="text-sm text-gray-600 mb-1">{property.location}</p>
                  <p className="text-gray-700 font-semibold mb-1">
                    ₹{property.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500 mb-1">
                    {property.bedrooms} BHK • {property.area} sq.ft
                  </p>
                  <p className="text-sm text-gray-600">{property.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SellProperty;
