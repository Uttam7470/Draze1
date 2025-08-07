


import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaRupeeSign,
  FaLock,
  FaCalendarAlt,
  FaBolt,
  FaMapMarkerAlt,
  FaHome,
  FaCouch,
  FaBed,
  FaMoneyBillWave,
  FaBath,
  FaListUl,
  FaInfoCircle,
} from "react-icons/fa";
import { FaPlus, FaLayerGroup, FaImage, FaThLarge } from "react-icons/fa";
import RoomAdd from "./RoomAdd";
import Collections from "./Collections";
import Dues from "./Dues";
import Expenses from "./Expenses";
import TenantForm from "../Tenant/TenantForm";
import Maintenance from "./Maintenance";

const amenityIcons = {
  Wifi: "📶",
  Parking: "🚗",
  Water: "🚿",
  PowerBackup: "🔌",
  AC: "❄️",
  Heater: "🔥",
  TV: "📺",
  Bed: "🛎",
  Table: "🪑",
  Laundry: "🪺",
  Kitchen: "🍽",
  Fridge: "🫪",
  Security: "🚱",
  Elevator: "🚗",
  Balcony: "🌇",
  Gym: "🏋",
  CCTV: "📹",
  Garden: "🌳",
  Housekeeping: "🩹",
};

const PLACEHOLDER_IMAGE = "https://via.placeholder.com/220";

// Custom Tabs Component
const Tabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="tabs-container">
      <ul className="nav nav-tabs">
        {tabs.map((tab) => (
          <li key={tab.id} className="nav-item">
            <button
              className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => onTabChange(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [activeTab, setActiveTab] = useState("details");
  const [rooms, setRooms] = useState(() => {
    const savedRooms = localStorage.getItem("rooms");
    return savedRooms ? JSON.parse(savedRooms) : [];
  });
  useEffect(() => {
    const properties = JSON.parse(localStorage.getItem("properties")) || [];
    const found = properties.find((p) => String(p.id) === String(id));
    setProperty(found || null);
  }, [id]);
  useEffect(() => {
    localStorage.setItem("rooms", JSON.stringify(rooms));
  }, [rooms]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  if (!property) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <h4 className="text-red-500 text-lg font-semibold">
          Property not found
        </h4>
      </div>
    );
  }

  const tabs = [
    { id: "details", label: "Details" },
    { id: "rooms", label: "Rooms" },
    { id: "collection", label: "Collection" },
    { id: "dues", label: "Dues" },
    { id: "expenses", label: "Expenses" },
    { id: "maintenance", label: "Maintenance" },
    { id: "tenant", label: "Tenant" },
  ];

 
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <style>
        {`
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: #f8fafc;
          }
          .tabs-container .nav-tabs {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
            border-bottom: 2px solid #e2e8f0;
            margin-bottom: 2rem;
            white-space: nowrap;
            -webkit-overflow-scrolling: touch;
          }
          .tabs-container .nav-tabs::-webkit-scrollbar {
            height: 8px;
          }
          .tabs-container .nav-tabs::-webkit-scrollbar-thumb {
            background-color: #d1d5db;
            border-radius: 4px;
          }
          .tabs-container .nav-item {
            flex: 0 0 auto;
          }
          .tabs-container .nav-link {
            color: #4b5563;
            font-weight: 500;
            padding: 0.75rem 1.25rem;
            border: none;
            border-radius: 0.375rem 0.375rem 0 0;
            transition: all 0.3s ease;
            font-size: 0.95rem;
          }
          .tabs-container .nav-link:hover {
            background-color: #f1f5f9;
            color: #1e3a8a;
          }
          .tabs-container .nav-link.active {
            background-color: #1e3a8a;
            color: white;
            font-weight: 600;
            border-bottom: 3px solid #3b82f6;
          }
          .section-box {
            background-color: white;
            border-radius: 0.75rem;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s ease;
          }
          .section-box:hover {
            transform: translateY(-3px);
          }
          .section-title {
            color: #1e3a8a;
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
          }
          .property-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 0.5rem;
            transition: transform 0.3s ease;
          }
          .property-image:hover {
            transform: scale(1.03);
          }
          .amenity-item {
            background-color: #f1f5f9;
            border-radius: 1.5rem;
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
            font-weight: 500;
            color: #1f2937;
            transition: background-color 0.2s ease;
          }
          .amenity-item:hover {
            background-color: #e2e8f0;
          }
          .btn-primary {
            background-color: #1e3a8a;
            border-color: #1e3a8a;
            border-radius: 1.5rem;
            padding: 0.5rem 1.5rem;
            font-weight: 500;
            transition: all 0.3s ease;
          }
          .btn-primary:hover {
            background-color: #1e40af;
            border-color: #1e40af;
            transform: translateY(-1px);
          }
          .text-primary {
            color: #1e3a8a !important;
          }
          .text-muted {
            color: #6b7280 !important;
          }
          .image-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 0.75rem;
            max-width: 100%;
          }
          .image-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0.5rem;
            color: white;
            font-weight: 500;
          }
          @media (max-width: 768px) {
            .tabs-container .nav-link {
              padding: 0.5rem 1rem;
              font-size: 0.85rem;
            }
            .property-image {
              height: 150px;
            }
            .section-title {
              font-size: 1.25rem;
            }
            .image-grid {
              grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            }
          }
        `}
      </style>

      {/* Tabs */}

      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Tab Content */}
      <div className="tab-content">
        {/* Details Tab */}
        {activeTab === "details" && (
          <div>
            {/* Photos */}
            <section className="section-box mb-8">
              <h3 className="section-title">Photos</h3>
              {property.images?.length > 0 ? (
                <div className="image-grid">
                  {property.images.slice(0, 7).map((img, idx) => (
                    <div key={idx} className="relative overflow-hidden">
                      <img
                        src={img}
                        alt={`Image ${idx + 1}`}
                        className="property-image"
                        onError={(e) => {
                          e.target.src = PLACEHOLDER_IMAGE;
                        }}
                      />
                    </div>
                  ))}
                  {property.images.length > 7 && (
                    <div className="relative overflow-hidden">
                      <img
                        src={property.images[7]}
                        alt="Extra"
                        className="property-image"
                        onError={(e) => {
                          e.target.src = PLACEHOLDER_IMAGE;
                        }}
                      />
                      <div className="image-overlay">
                        <span>+{property.images.length - 7} Images</span>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-muted">
                  No images available for this property.
                </div>
              )}
            </section>

            {/* Property Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8 text-center">
              {property.title || "Untitled Property"}
            </h2>

            {/* About Section */}
            <section className="section-box">
              <h3 className="section-title">
                <FaInfoCircle className="mr-2" /> About This Property
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <FaHome className="inline mr-2 text-primary" />
                  <strong>Type:</strong> {property.type || "N/A"}
                </div>
                <div>
                  <FaCouch className="inline mr-2 text-primary" />
                  <strong>Furnishing:</strong> {property.furnishing || "N/A"}
                </div>
                <div>
                  <FaBed className="inline mr-2 text-primary" />
                  <strong>Bedrooms:</strong> {property.bedrooms || "N/A"}
                </div>
                <div>
                  <FaBath className="inline mr-2 text-primary" />
                  <strong>Bathrooms:</strong> {property.bathrooms || "N/A"}
                </div>
                <div className="sm:col-span-2">
                  <FaMapMarkerAlt className="inline mr-2 text-primary" />
                  <strong>Location:</strong>{" "}
                  {[
                    property.address,
                    property.city,
                    property.state,
                    property.pincode,
                  ]
                    .filter(Boolean)
                    .join(", ") || "N/A"}
                </div>
              </div>
            </section>

            {/* Renting Terms */}
            <section className="section-box">
              <h3 className="section-title">Renting Terms</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-800">
                <div>
                  <FaRupeeSign className="inline mr-2 text-green-600" />
                  <strong>Rent:</strong> ₹{property.rent || "N/A"}
                </div>
                <div>
                  <FaRupeeSign className="inline mr-2 text-yellow-500" />
                  <strong>Deposit:</strong> ₹{property.deposit || "N/A"}
                </div>
                <div>
                  <FaLock className="inline mr-2 text-red-500" />
                  <strong>Lock-in Period:</strong> {property.lockin || "N/A"}
                </div>
                <div>
                  <FaCalendarAlt className="inline mr-2 text-indigo-500" />
                  <strong>Notice Period:</strong> {property.notice || "N/A"}
                </div>
                <div>
                  <FaBolt className="inline mr-2 text-yellow-400" />
                  <strong>Electricity Unit:</strong>{" "}
                  {property.electricity || "N/A"}
                </div>
              </div>
            </section>

            {/* Amenities */}
            {property.amenities?.length > 0 && (
              <section className="section-box">
                <h3 className="section-title">Amenities</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {property.amenities.map((item, idx) => (
                    <div
                      key={idx}
                      className="amenity-item flex items-center gap-2"
                    >
                      <span className="text-lg">
                        {amenityIcons[item] || "✅"}
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Rules */}
            {property.rules?.length > 0 && (
              <section className="section-box">
                <h3 className="section-title">
                  <FaListUl className="mr-2" /> Rules
                </h3>
                <ul className="list-disc ml-5 text-gray-700 space-y-1">
                  {property.rules.map((rule, idx) => (
                    <li key={idx}>{rule}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Description */}
            <section className="section-box">
              <h3 className="section-title">Description</h3>
              <p className="text-muted">
                {property.description || "No description provided."}
              </p>
            </section>

            {/* Edit Button */}
            <div className="text-center mt-8">
              <Link
                to="/landlord/add-property"
                state={{ propertyToEdit: property }}
                className="btn btn-primary"
              >
                Edit Property
              </Link>
            </div>
          </div>
        )}

        {activeTab === "rooms" && <RoomAdd />}
        {activeTab === "collection" && <Collections />}
        {activeTab === "dues" && (
          <section className="section-box">
            <h3 className="section-title">Dues</h3>
            <p className="text-muted">Dues details will be displayed here.</p>
            <Dues />
          </section>
        )}

        {activeTab === "expenses" && (
          <section className="section-box">
            <h3 className="section-title">Expenses</h3>
            <p className="text-muted">
              Expenses details will be displayed here.
            </p>
            <Expenses />
          </section>
        )}
        {activeTab === "maintenance" && (
          <section className="section-box">
            <h3 className="section-title">Maintenance</h3>
            <p className="text-muted">
              Maintenance details will be displayed here.
            </p>
            <Maintenance />
          </section>
        )}
        {activeTab === "tenant" && (
          <section className="section-box">
            <h3 className="section-title">Tenants</h3>
            <p className="text-muted">Tenant details will be displayed here.</p>
            <TenantForm />
          </section>
        )}
      </div>
    </div>
  );
};

export default PropertyDetail;




// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function PropertyDetail() {
//   const { id } = useParams();
//   const [property, setProperty] = useState(null);
//   const [activeTab, setActiveTab] = useState("overview");
//   const [rooms, setRooms] = useState([
//     {
//       id: 1,
//       name: "Room A",
//       rent: 10000,
//       size: "120 sq ft",
//       furnished: true,
//     },
//     {
//       id: 2,
//       name: "Room B",
//       rent: 9000,
//       size: "110 sq ft",
//       furnished: false,
//     },
//   ]);

//   useEffect(() => {
//     AOS.init({ duration: 600 });

//     const dummyProperty = {
//       id,
//       title: "Elegant 2BHK Apartment",
//       type: "Apartment",
//       furnishing: "Fully Furnished",
//       bedrooms: 2,
//       bathrooms: 2,
//       address: "123 MG Road",
//       city: "Mumbai",
//       state: "Maharashtra",
//       pincode: "400001",
//       rent: 25000,
//       deposit: 75000,
//       lockin: "6 months",
//       notice: "1 month",
//       electricity: "₹8/unit",
//       amenities: ["Wifi", "Parking", "AC", "Kitchen", "TV"],
//       rules: ["No smoking", "No pets", "Keep noise low after 10 PM"],
//       description:
//         "A beautiful 2BHK apartment located in the heart of Mumbai, perfect for working professionals.",
//       images: [
//         "https://media.istockphoto.com/id/1223072133/photo/cityscape-of-a-residential-area-with-modern-apartment-buildings-new-green-urban-landscape-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=yBDWGBpw56cPhqh5bMK5QDcIxnmQWlK-x3LL65Dp1w4=",
//         "https://media.istockphoto.com/id/1437743069/photo/entrance-of-dining-room-with-dining-table-chairs-and-empty-white-wall-in-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=5mQGqr-bbmuCWzOxf4iD-Fhznn6fZ1aD11lNfCw6UNA=",
//         "https://media.istockphoto.com/id/2157389785/photo/there-is-brown-modular-sofa-and-armchair-in-the-clean-living-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=QWQ5IZp3PvQxocw_SrfY1Q3T3Qx3aGvBmDyR1ZEOK1Y=",
//       ],
//     };

//     setProperty(dummyProperty);
//   }, [id]);

//   if (!property) {
//     return (
//       <div className="text-center text-gray-500 mt-10">Loading property details...</div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-4">{property.title}</h1>

//       {/* Image Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
//         {property.images.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt={`property-${index}`}
//             className="w-full h-48 object-cover rounded-md shadow"
//           />
//         ))}
//       </div>

//       {/* Tabs */}
//       <div className="flex space-x-4 mb-6">
//         {["overview", "rooms", "amenities", "rules", "description"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`capitalize px-4 py-2 rounded ${
//               activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Tab Content */}
//       <div className="bg-white shadow rounded p-6">
//         {activeTab === "overview" && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <p><strong>Type:</strong> {property.type}</p>
//             <p><strong>Furnishing:</strong> {property.furnishing}</p>
//             <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
//             <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
//             <p><strong>Rent:</strong> ₹{property.rent}</p>
//             <p><strong>Deposit:</strong> ₹{property.deposit}</p>
//             <p><strong>City:</strong> {property.city}</p>
//             <p><strong>Address:</strong> {property.address}</p>
//             <p><strong>State:</strong> {property.state}</p>
//             <p><strong>Pin Code:</strong> {property.pincode}</p>
//           </div>
//         )}

//         {activeTab === "rooms" && (
//           <div className="space-y-4">
//             {rooms.map((room) => (
//               <div
//                 key={room.id}
//                 className="border rounded p-4 shadow-sm bg-gray-50"
//               >
//                 <h3 className="font-semibold text-lg">{room.name}</h3>
//                 <p><strong>Rent:</strong> ₹{room.rent}</p>
//                 <p><strong>Size:</strong> {room.size}</p>
//                 <p><strong>Furnished:</strong> {room.furnished ? "Yes" : "No"}</p>
//               </div>
//             ))}
//           </div>
//         )}

//         {activeTab === "amenities" && (
//           <ul className="list-disc list-inside">
//             {property.amenities.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         )}

//         {activeTab === "rules" && (
//           <ul className="list-disc list-inside">
//             {property.rules.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         )}

//         {activeTab === "description" && (
//           <p>{property.description}</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default PropertyDetail;


