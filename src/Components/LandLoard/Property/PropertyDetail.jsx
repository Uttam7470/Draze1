


// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import {
//   FaRupeeSign,
//   FaLock,
//   FaCalendarAlt,
//   FaBolt,
//   FaMapMarkerAlt,
//   FaHome,
//   FaCouch,
//   FaBed,
//   FaMoneyBillWave,
//   FaBath,
//   FaListUl,
//   FaInfoCircle,
// } from "react-icons/fa";
// import { FaPlus, FaLayerGroup, FaImage, FaThLarge } from "react-icons/fa";
// import RoomAdd from "./RoomAdd";
// import Collections from "./Collections";
// import Dues from "./Dues";
// import Expenses from "./Expenses";
// import TenantForm from "../Tenant/TenantForm";
// import Maintenance from "./Maintenance";

// const amenityIcons = {
//   Wifi: "📶",
//   Parking: "🚗",
//   Water: "🚿",
//   PowerBackup: "🔌",
//   AC: "❄️",
//   Heater: "🔥",
//   TV: "📺",
//   Bed: "🛎",
//   Table: "🪑",
//   Laundry: "🪺",
//   Kitchen: "🍽",
//   Fridge: "🫪",
//   Security: "🚱",
//   Elevator: "🚗",
//   Balcony: "🌇",
//   Gym: "🏋",
//   CCTV: "📹",
//   Garden: "🌳",
//   Housekeeping: "🩹",
// };

// const PLACEHOLDER_IMAGE = "https://via.placeholder.com/220";

// // Custom Tabs Component
// const Tabs = ({ tabs, activeTab, onTabChange }) => {
//   return (
//     <div className="tabs-container">
//       <ul className="nav nav-tabs">
//         {tabs.map((tab) => (
//           <li key={tab.id} className="nav-item">
//             <button
//               className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
//               onClick={() => onTabChange(tab.id)}
//             >
//               {tab.label}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const PropertyDetail = () => {
//   const { id } = useParams();
//   const [property, setProperty] = useState(null);
//   const [activeTab, setActiveTab] = useState("details");
//   const [rooms, setRooms] = useState(() => {
//     const savedRooms = localStorage.getItem("rooms");
//     return savedRooms ? JSON.parse(savedRooms) : [];
//   });
//   useEffect(() => {
//     const properties = JSON.parse(localStorage.getItem("properties")) || [];
//     const found = properties.find((p) => String(p.id) === String(id));
//     setProperty(found || null);
//   }, [id]);
//   useEffect(() => {
//     localStorage.setItem("rooms", JSON.stringify(rooms));
//   }, [rooms]);

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   if (!property) {
//     return (
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
//         <h4 className="text-red-500 text-lg font-semibold">
//           Property not found
//         </h4>
//       </div>
//     );
//   }

//   const tabs = [
//     { id: "details", label: "Details" },
//     { id: "rooms", label: "Rooms" },
//     { id: "collection", label: "Collection" },
//     { id: "dues", label: "Dues" },
//     { id: "expenses", label: "Expenses" },
//     { id: "maintenance", label: "Maintenance" },
//     { id: "tenant", label: "Tenant" },
//   ];

 
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <style>
//         {`
//           body {
//             font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//             background-color: #f8fafc;
//           }
//           .tabs-container .nav-tabs {
//             display: flex;
//             flex-wrap: nowrap;
//             overflow-x: auto;
//             border-bottom: 2px solid #e2e8f0;
//             margin-bottom: 2rem;
//             white-space: nowrap;
//             -webkit-overflow-scrolling: touch;
//           }
//           .tabs-container .nav-tabs::-webkit-scrollbar {
//             height: 8px;
//           }
//           .tabs-container .nav-tabs::-webkit-scrollbar-thumb {
//             background-color: #d1d5db;
//             border-radius: 4px;
//           }
//           .tabs-container .nav-item {
//             flex: 0 0 auto;
//           }
//           .tabs-container .nav-link {
//             color: #4b5563;
//             font-weight: 500;
//             padding: 0.75rem 1.25rem;
//             border: none;
//             border-radius: 0.375rem 0.375rem 0 0;
//             transition: all 0.3s ease;
//             font-size: 0.95rem;
//           }
//           .tabs-container .nav-link:hover {
//             background-color: #f1f5f9;
//             color: #1e3a8a;
//           }
//           .tabs-container .nav-link.active {
//             background-color: #1e3a8a;
//             color: white;
//             font-weight: 600;
//             border-bottom: 3px solid #3b82f6;
//           }
//           .section-box {
//             background-color: white;
//             border-radius: 0.75rem;
//             padding: 1.5rem;
//             margin-bottom: 1.5rem;
//             box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//             transition: transform 0.2s ease;
//           }
//           .section-box:hover {
//             transform: translateY(-3px);
//           }
//           .section-title {
//             color: #1e3a8a;
//             font-size: 1.5rem;
//             font-weight: 600;
//             margin-bottom: 1rem;
//             display: flex;
//             align-items: center;
//           }
//           .property-image {
//             width: 100%;
//             height: 200px;
//             object-fit: cover;
//             border-radius: 0.5rem;
//             transition: transform 0.3s ease;
//           }
//           .property-image:hover {
//             transform: scale(1.03);
//           }
//           .amenity-item {
//             background-color: #f1f5f9;
//             border-radius: 1.5rem;
//             padding: 0.5rem 1rem;
//             font-size: 0.9rem;
//             font-weight: 500;
//             color: #1f2937;
//             transition: background-color 0.2s ease;
//           }
//           .amenity-item:hover {
//             background-color: #e2e8f0;
//           }
//           .btn-primary {
//             background-color: #1e3a8a;
//             border-color: #1e3a8a;
//             border-radius: 1.5rem;
//             padding: 0.5rem 1.5rem;
//             font-weight: 500;
//             transition: all 0.3s ease;
//           }
//           .btn-primary:hover {
//             background-color: #1e40af;
//             border-color: #1e40af;
//             transform: translateY(-1px);
//           }
//           .text-primary {
//             color: #1e3a8a !important;
//           }
//           .text-muted {
//             color: #6b7280 !important;
//           }
//           .image-grid {
//             display: grid;
//             grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//             gap: 0.75rem;
//             max-width: 100%;
//           }
//           .image-overlay {
//             position: absolute;
//             inset: 0;
//             background: rgba(0, 0, 0, 0.5);
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             border-radius: 0.5rem;
//             color: white;
//             font-weight: 500;
//           }
//           @media (max-width: 768px) {
//             .tabs-container .nav-link {
//               padding: 0.5rem 1rem;
//               font-size: 0.85rem;
//             }
//             .property-image {
//               height: 150px;
//             }
//             .section-title {
//               font-size: 1.25rem;
//             }
//             .image-grid {
//               grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
//             }
//           }
//         `}
//       </style>

//       {/* Tabs */}

//       <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />

//       {/* Tab Content */}
//       <div className="tab-content">
//         {/* Details Tab */}
//         {activeTab === "details" && (
//           <div>
//             {/* Photos */}
//             <section className="section-box mb-8">
//               <h3 className="section-title">Photos</h3>
//               {property.images?.length > 0 ? (
//                 <div className="image-grid">
//                   {property.images.slice(0, 7).map((img, idx) => (
//                     <div key={idx} className="relative overflow-hidden">
//                       <img
//                         src={img}
//                         alt={`Image ${idx + 1}`}
//                         className="property-image"
//                         onError={(e) => {
//                           e.target.src = PLACEHOLDER_IMAGE;
//                         }}
//                       />
//                     </div>
//                   ))}
//                   {property.images.length > 7 && (
//                     <div className="relative overflow-hidden">
//                       <img
//                         src={property.images[7]}
//                         alt="Extra"
//                         className="property-image"
//                         onError={(e) => {
//                           e.target.src = PLACEHOLDER_IMAGE;
//                         }}
//                       />
//                       <div className="image-overlay">
//                         <span>+{property.images.length - 7} Images</span>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <div className="text-muted">
//                   No images available for this property.
//                 </div>
//               )}
//             </section>

//             {/* Property Title */}
//             <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8 text-center">
//               {property.title || "Untitled Property"}
//             </h2>

//             {/* About Section */}
//             <section className="section-box">
//               <h3 className="section-title">
//                 <FaInfoCircle className="mr-2" /> About This Property
//               </h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
//                 <div>
//                   <FaHome className="inline mr-2 text-primary" />
//                   <strong>Type:</strong> {property.type || "N/A"}
//                 </div>
//                 <div>
//                   <FaCouch className="inline mr-2 text-primary" />
//                   <strong>Furnishing:</strong> {property.furnishing || "N/A"}
//                 </div>
//                 <div>
//                   <FaBed className="inline mr-2 text-primary" />
//                   <strong>Bedrooms:</strong> {property.bedrooms || "N/A"}
//                 </div>
//                 <div>
//                   <FaBath className="inline mr-2 text-primary" />
//                   <strong>Bathrooms:</strong> {property.bathrooms || "N/A"}
//                 </div>
//                 <div className="sm:col-span-2">
//                   <FaMapMarkerAlt className="inline mr-2 text-primary" />
//                   <strong>Location:</strong>{" "}
//                   {[
//                     property.address,
//                     property.city,
//                     property.state,
//                     property.pincode,
//                   ]
//                     .filter(Boolean)
//                     .join(", ") || "N/A"}
//                 </div>
//               </div>
//             </section>

//             {/* Renting Terms */}
//             <section className="section-box">
//               <h3 className="section-title">Renting Terms</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-800">
//                 <div>
//                   <FaRupeeSign className="inline mr-2 text-green-600" />
//                   <strong>Rent:</strong> ₹{property.rent || "N/A"}
//                 </div>
//                 <div>
//                   <FaRupeeSign className="inline mr-2 text-yellow-500" />
//                   <strong>Deposit:</strong> ₹{property.deposit || "N/A"}
//                 </div>
//                 <div>
//                   <FaLock className="inline mr-2 text-red-500" />
//                   <strong>Lock-in Period:</strong> {property.lockin || "N/A"}
//                 </div>
//                 <div>
//                   <FaCalendarAlt className="inline mr-2 text-indigo-500" />
//                   <strong>Notice Period:</strong> {property.notice || "N/A"}
//                 </div>
//                 <div>
//                   <FaBolt className="inline mr-2 text-yellow-400" />
//                   <strong>Electricity Unit:</strong>{" "}
//                   {property.electricity || "N/A"}
//                 </div>
//               </div>
//             </section>

//             {/* Amenities */}
//             {property.amenities?.length > 0 && (
//               <section className="section-box">
//                 <h3 className="section-title">Amenities</h3>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
//                   {property.amenities.map((item, idx) => (
//                     <div
//                       key={idx}
//                       className="amenity-item flex items-center gap-2"
//                     >
//                       <span className="text-lg">
//                         {amenityIcons[item] || "✅"}
//                       </span>
//                       <span>{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}

//             {/* Rules */}
//             {property.rules?.length > 0 && (
//               <section className="section-box">
//                 <h3 className="section-title">
//                   <FaListUl className="mr-2" /> Rules
//                 </h3>
//                 <ul className="list-disc ml-5 text-gray-700 space-y-1">
//                   {property.rules.map((rule, idx) => (
//                     <li key={idx}>{rule}</li>
//                   ))}
//                 </ul>
//               </section>
//             )}

//             {/* Description */}
//             <section className="section-box">
//               <h3 className="section-title">Description</h3>
//               <p className="text-muted">
//                 {property.description || "No description provided."}
//               </p>
//             </section>

//             {/* Edit Button */}
//             <div className="text-center mt-8">
//               <Link
//                 to="/landlord/add-property"
//                 state={{ propertyToEdit: property }}
//                 className="btn btn-primary"
//               >
//                 Edit Property
//               </Link>
//             </div>
//           </div>
//         )}

//         {activeTab === "rooms" && <RoomAdd />}
//         {activeTab === "collection" && <Collections />}
//         {activeTab === "dues" && (
//           <section className="section-box">
//             <h3 className="section-title">Dues</h3>
//             <p className="text-muted">Dues details will be displayed here.</p>
//             <Dues />
//           </section>
//         )}

//         {activeTab === "expenses" && (
//           <section className="section-box">
//             <h3 className="section-title">Expenses</h3>
//             <p className="text-muted">
//               Expenses details will be displayed here.
//             </p>
//             <Expenses />
//           </section>
//         )}
//         {activeTab === "maintenance" && (
//           <section className="section-box">
//             <h3 className="section-title">Maintenance</h3>
//             <p className="text-muted">
//               Maintenance details will be displayed here.
//             </p>
//             <Maintenance />
//           </section>
//         )}
//         {activeTab === "tenant" && (
//           <section className="section-box">
//             <h3 className="section-title">Tenants</h3>
//             <p className="text-muted">Tenant details will be displayed here.</p>
//             <TenantForm />
//           </section>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PropertyDetail;




// src/pages/PropertyDetail.jsx



// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { FaBed, FaBath, FaMapMarkerAlt, FaRupeeSign } from "react-icons/fa";

// const PropertyDetail = () => {
//   const { id } = useParams();
//   const [property, setProperty] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProperty = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.error("No token found.");
//         return;
//       }

//       try {
//         const res = await fetch(`https://pg-hostel.nearprop.com/api/landlord/property/${id}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const data = await res.json();
//         if (data.success && data.property) {
//           setProperty(data.property);
//         } else {
//           console.error("Failed to load property");
//         }
//       } catch (error) {
//         console.error("Error fetching property:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProperty();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="text-center my-10">
//         <div className="border-t-4 border-indigo-500 w-10 h-10 rounded-full animate-spin mx-auto"></div>
//       </div>
//     );
//   }

//   if (!property) {
//     return <p className="text-center text-red-500">Property not found.</p>;
//   }

//   return (
//     <div className="px-4 py-6 md:px-8 bg-gray-50 min-h-screen">
//       <div className="max-w-4xl mx-auto bg-white shadow rounded p-4">
//         <img
//           src={property.images?.[0]}
//           alt={property.title || "Property Image"}
//           className="w-full h-64 object-cover rounded mb-4"
//         />
//         <h2 className="text-2xl font-bold text-indigo-700 mb-2">{property.title}</h2>
//         <p className="text-gray-600 mb-1 flex items-center">
//           <FaMapMarkerAlt className="mr-2" />
//           {property.city}
//         </p>
//         <p className="text-gray-600 mb-1">
//           <FaRupeeSign className="inline-block mr-1" />
//           {property.rent} / month
//         </p>
//         <p className="text-gray-600 mb-1">
//           <FaBed className="inline-block mr-1" />
//           {property.bedrooms} Beds | <FaBath className="inline-block mx-1" />
//           {property.bathrooms} Baths
//         </p>
//         <p className="text-gray-600 mb-1">
//           Type: {property.type} | Furnished: {property.furnished ? "Yes" : "No"}
//         </p>
//         <p className="mt-4 text-gray-700">{property.description}</p>

//         <Link
//           to="/landlord/property"
//           className="inline-block mt-6 text-indigo-600 hover:underline text-sm"
//         >
//           ← Back to Properties
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default PropertyDetail;



// import React, { useEffect, useState } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import {
//   FaBed,
//   FaBath,
//   FaMapMarkerAlt,
//   FaRupeeSign,
//   FaEdit,
// } from "react-icons/fa";

// const tabs = [
//   "Details",
//   "Rooms",
//   "Collection",
//   "Dues",
//   "Expenses",
//   "Maintenance",
//   "Tenant",
// ];

// const PropertyDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [property, setProperty] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState("Details");

//   useEffect(() => {
//     const fetchProperty = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.error("No token found.");
//         return;
//       }

//       try {
//         const res = await fetch(
//           `https://pg-hostel.nearprop.com/api/landlord/property/${id}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         const data = await res.json();
//         if (data.success && data.property) {
//           setProperty(data.property);
//         } else {
//           console.error("Failed to load property");
//         }
//       } catch (error) {
//         console.error("Error fetching property:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProperty();
//   }, [id]);

//   const handleEdit = () => {
//     navigate(`/landlord/edit-property/${id}`, { state: { property } });
//   };

//   if (loading) {
//     return (
//       <div className="text-center my-10">
//         <div className="border-t-4 border-indigo-500 w-10 h-10 rounded-full animate-spin mx-auto"></div>
//       </div>
//     );
//   }

//   if (!property) {
//     return <p className="text-center text-red-500">Property not found.</p>;
//   }

//   return (
//     <div className="px-4 py-6 md:px-8 bg-gray-50 min-h-screen">
//       {/* Tabs */}
//       <div className="mb-6 flex flex-wrap gap-2 justify-center">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-2 rounded-full text-sm font-medium ${
//               activeTab === tab
//                 ? "bg-indigo-600 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Property Detail Card */}
//       <div className="max-w-4xl mx-auto bg-white shadow rounded p-4">
//         {/* Images */}
//         {property.images?.length > 0 ? (
//           <img
//             src={property.images[0]}
//             alt={property.name || "Property Image"}
//             className="w-full h-64 object-cover rounded mb-4"
//           />
//         ) : (
//           <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500 rounded mb-4">
//             No Image Available
//           </div>
//         )}

//         <h2 className="text-2xl font-bold text-indigo-700 mb-2">
//           {property.name}
//         </h2>

//         <p className="text-gray-600 mb-1 flex items-center">
//           <FaMapMarkerAlt className="mr-2" />
//           {property.address}, {property.city}, {property.state} -{" "}
//           {property.pinCode}
//         </p>

//         <p className="text-gray-600 mb-1">
//           <FaRupeeSign className="inline-block mr-1" />
//           Rent: {property.rent || "N/A"} / month
//         </p>

//         <p className="text-gray-600 mb-1">
//           <FaBed className="inline-block mr-1" />
//           Rooms: {property.totalRooms} | Beds: {property.totalBeds}
//         </p>

//         <p className="text-gray-600 mb-1">
//           Type: {property.type} | Furnished:{" "}
//           {property.furnished ? "Yes" : "No"}
//         </p>

//         <p className="mt-4 text-gray-700">{property.description || ""}</p>

//         {/* Edit Button */}
//         <div className="mt-6 flex justify-between items-center">
//           <Link
//             to="/landlord/property"
//             className="text-indigo-600 hover:underline text-sm"
//           >
//             ← Back to Properties
//           </Link>

//           <button
//             onClick={handleEdit}
//             className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
//           >
//             <FaEdit />
//             Edit Property
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyDetail;




import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Home,
  MapPin,
  Building,
  BedDouble,
  Layers,
  Map,
  Landmark,
  LocateFixed,
} from "lucide-react";

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPropertyDetails = async () => {
    try {
      const res = await axios.get(
        `https://pg-hostel.nearprop.com/api/public/property/${id}`
      );
      setProperty(res.data.property);
    } catch (error) {
      console.error("Error fetching property:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPropertyDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg text-red-600">Property not found</div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        {property.name}
      </h1>

      {/* Image section */}
      <div className="relative overflow-hidden rounded-lg shadow-lg mb-8 group">
        {property.images?.length > 0 && property.images[0] ? (
          <img
            src={property.images[0]}
            alt={property.name}
            className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.src = "/placeholder.jpg";
            }}
          />
        ) : (
          <div className="w-full h-80 bg-gray-200 flex items-center justify-center text-gray-500">
            No Image Available
          </div>
        )}
      </div>

      {/* Details section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-lg">
        <DetailItem icon={<Home className="text-blue-500" />} label="Type" value={property.type} />
        <DetailItem
          icon={<MapPin className="text-blue-500" />}
          label="Address"
          value={property.location?.address}
        />
        <DetailItem
          icon={<Building className="text-blue-500" />}
          label="City"
          value={property.location?.city}
        />
        <DetailItem
          icon={<Landmark className="text-blue-500" />}
          label="State"
          value={property.location?.state}
        />
        <DetailItem
          icon={<LocateFixed className="text-blue-500" />}
          label="Pin Code"
          value={property.location?.pinCode}
        />
        <DetailItem
          icon={<Layers className="text-blue-500" />}
          label="Total Rooms"
          value={property.totalRooms}
        />
        <DetailItem
          icon={<BedDouble className="text-blue-500" />}
          label="Total Beds"
          value={property.totalBeds}
        />
      </div>
    </div>
  );
};

const DetailItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-4 bg-gray-50 p-4 rounded hover:bg-gray-100 transition">
    <div className="text-xl">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-lg font-semibold text-gray-800">{value || "N/A"}</p>
    </div>
  </div>
);

export default PropertyDetail;
