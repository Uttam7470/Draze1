


// import React, { useEffect, useState } from "react";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import {
//   FaBed,
//   FaDoorOpen,
//   FaRupeeSign,
//   FaMapMarkerAlt,
//   FaCheckCircle,
//   FaBuilding,
//   FaCalendarAlt,
// } from "react-icons/fa";
// import { MdDescription } from "react-icons/md";

// const RentDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [property, setProperty] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//     window.scrollTo({ top: 0, behavior: "smooth" });

//     const fetchProperty = async () => {
//       try {
//         const res = await fetch(`https://pg-hostel.nearprop.com/api/public/property/${id}`);
//         const data = await res.json();
//         setProperty(data.property);
//       } catch (error) {
//         console.error("Error fetching property:", error);
//         setProperty(location.state || null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProperty();
//   }, [id, location.state]);

//   if (loading) {
//     return (
//       <div className="text-center mt-10 text-lg font-semibold text-gray-700">
//         Loading Property Details...
//       </div>
//     );
//   }

//   if (!property) {
//     return (
//       <div className="text-center mt-10 text-lg font-semibold text-red-500">
//         Property not found.
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-12">
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-6 px-4 py-2 bg-[#5C4EFF] text-white rounded-md hover:bg-[#483bd4] transition"
//       >
//         Back
//       </button>

//       <div className="bg-white shadow-xl rounded-2xl p-6">
//         <h1 className="text-3xl font-bold mb-6 text-center">{property.name}</h1>

//         <div className="w-full h-72 rounded-xl overflow-hidden shadow-md mb-8">
//           <img
//             src={property.images?.[0] || "https://via.placeholder.com/600x400?text=No+Image"}
//             alt={property.name}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 text-gray-800">
//           <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow">
//             <FaMapMarkerAlt className="text-xl mt-1 text-blue-600" />
//             <div>
//               <h2 className="font-semibold text-gray-900">Location</h2>
//               <p>{property.location?.address}</p>
//               <p>{property.location?.city}, {property.location?.state} - {property.location?.pinCode}</p>
//             </div>
//           </div>

//           <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow">
//             <FaRupeeSign className="text-xl mt-1 text-green-600" />
//             <div>
//               <h2 className="font-semibold text-gray-900">Rent</h2>
//               <p>₹ {property.pricing?.beds?.min} - ₹ {property.pricing?.beds?.max}/month</p>
//             </div>
//           </div>

//           <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow">
//             <FaDoorOpen className="text-xl mt-1 text-purple-600" />
//             <div>
//               <h2 className="font-semibold text-gray-900">Total Rooms</h2>
//               <p>{property.totalRooms}</p>
//             </div>
//           </div>

//           <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow">
//             <FaBed className="text-xl mt-1 text-indigo-600" />
//             <div>
//               <h2 className="font-semibold text-gray-900">Total Beds</h2>
//               <p>{property.totalBeds}</p>
//             </div>
//           </div>

//           <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow">
//             <FaCheckCircle className="text-xl mt-1 text-green-600" />
//             <div>
//               <h2 className="font-semibold text-gray-900">Available Beds</h2>
//               <p>{property.availability?.availableBedCount}</p>
//             </div>
//           </div>

//           <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow">
//             <FaBuilding className="text-xl mt-1 text-orange-600" />
//             <div>
//               <h2 className="font-semibold text-gray-900">Type</h2>
//               <p>{property.type}</p>
//             </div>
//           </div>

//           <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow">
//             <FaCalendarAlt className="text-xl mt-1 text-blue-600" />
//             <div>
//               <h2 className="font-semibold text-gray-900">Created</h2>
//               <p>{new Date(property.createdAt).toLocaleDateString()}</p>
//             </div>
//           </div>
//         </div>

//         {/* Description */}
//         {property.description && (
//           <div className="bg-gray-50 p-6 rounded-xl shadow-md">
//             <div className="flex items-center gap-3 mb-2">
//               <MdDescription className="text-xl text-purple-600" />
//               <h2 className="text-lg font-bold text-gray-900">Description</h2>
//             </div>
//             <p className="text-gray-700 leading-relaxed">{property.description}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RentDetail;




import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaBed,
  FaDoorOpen,
  FaRupeeSign,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaBuilding,
  FaCalendarAlt,
} from "react-icons/fa";
import { MdDescription } from "react-icons/md";
 // ✅ Make sure path is correct
 import ScheduleTourBox from "../ScheduleTour/ScheduleTourBox";

const RentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchProperty = async () => {
      try {
        const res = await fetch(`https://pg-hostel.nearprop.com/api/public/property/${id}`);
        const data = await res.json();
        setProperty(data.property);
      } catch (error) {
        console.error("Error fetching property:", error);
        setProperty(location.state || null);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id, location.state]);

  if (loading) {
    return (
      <div className="text-center mt-10 text-lg font-semibold text-gray-700">
        Loading Property Details...
      </div>
    );
  }

  if (!property) {
    return (
      <div className="text-center mt-10 text-lg font-semibold text-red-500">
        Property not found.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-12">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-[#5C4EFF] text-white rounded-md hover:bg-[#483bd4] transition"
      >
        Back
      </button>

      {/* 2-column layout with ScheduleTourBox */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left side: property details */}
        <div className="lg:col-span-2 bg-white shadow-xl rounded-2xl p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">{property.name}</h1>

          <div className="w-full h-72 rounded-xl overflow-hidden shadow-md mb-8">
            <img
              src={property.images?.[0] || "https://via.placeholder.com/600x400?text=No+Image"}
              alt={property.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-10 text-gray-800">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow">
              <FaMapMarkerAlt className="text-xl mt-1 text-blue-600" />
              <div>
                <h2 className="font-semibold text-gray-900">Location</h2>
                <p>{property.location?.address}</p>
                <p>{property.location?.city}, {property.location?.state} - {property.location?.pinCode}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow">
              <FaRupeeSign className="text-xl mt-1 text-green-600" />
              <div>
                <h2 className="font-semibold text-gray-900">Rent</h2>
                <p>₹ {property.pricing?.beds?.min} - ₹ {property.pricing?.beds?.max}/month</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow">
              <FaDoorOpen className="text-xl mt-1 text-purple-600" />
              <div>
                <h2 className="font-semibold text-gray-900">Total Rooms</h2>
                <p>{property.totalRooms}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow">
              <FaBed className="text-xl mt-1 text-indigo-600" />
              <div>
                <h2 className="font-semibold text-gray-900">Total Beds</h2>
                <p>{property.totalBeds}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow">
              <FaCheckCircle className="text-xl mt-1 text-green-600" />
              <div>
                <h2 className="font-semibold text-gray-900">Available Beds</h2>
                <p>{property.availability?.availableBedCount}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow">
              <FaBuilding className="text-xl mt-1 text-orange-600" />
              <div>
                <h2 className="font-semibold text-gray-900">Type</h2>
                <p>{property.type}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow">
              <FaCalendarAlt className="text-xl mt-1 text-blue-600" />
              <div>
                <h2 className="font-semibold text-gray-900">Created</h2>
                <p>{new Date(property.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          {property.description && (
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <MdDescription className="text-xl text-purple-600" />
                <h2 className="text-lg font-bold text-gray-900">Description</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">{property.description}</p>
            </div>
          )}
        </div>

        {/* Right side: Schedule a Tour */}
        <div className="lg:col-span-1">
          <ScheduleTourBox />
        </div>
      </div>
    </div>
  );
};

export default RentDetail;
