// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// function HostelDetail() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const hostel = location.state?.hostel;

//   if (!hostel) {
//     return (
//       <div className="text-center mt-10">
//         <p className="text-lg font-semibold">No hostel data found.</p>
//         <button
//           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//           onClick={() => navigate(-1)}
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {/* ✅ Back Button on Top */}
//       <button
//         className="mb-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         onClick={() => navigate(-1)}
//       >
//         ← Back
//       </button>

//       <img
//         src={hostel.image}
//         alt={hostel.name}
//         className="w-full h-64 object-cover rounded-lg mb-6"
//       />
//       <h2 className="text-3xl font-bold text-[#5C4EFF] mb-3">{hostel.name}</h2>
//       <p className="text-gray-700 mb-2">
//         <strong>City:</strong> {hostel.city}, <strong>Location:</strong>{" "}
//         {hostel.location}
//       </p>
//       <p className="text-gray-700 mb-2">
//         <strong>Price:</strong> ₹{hostel.price} /month
//       </p>
//       <p className="text-gray-700 mb-2">
//         <strong>Bedrooms:</strong> {hostel.bedrooms} BHK
//       </p>
//       <p className="text-gray-700 mb-2">
//         <strong>Gender:</strong> {hostel.gender}
//       </p>
//       <p className="text-gray-700 mb-4">
//         <strong>Description:</strong> {hostel.description}
//       </p>
//       <div>
//         <strong>Amenities:</strong>
//         <ul className="list-disc list-inside text-gray-600">
//           {hostel.amenities.map((a, i) => (
//             <li key={i}>{a}</li>
//           ))}
//         </ul>
//       </div>

//     </div>
//   );
// }

// export default HostelDetail;






// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import ScheduleTourBox from "../ScheduleTour/ScheduleTourBox";

// function HostelDetail() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [hostel, setHostel] = useState(location.state || null);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });

//     // If state is not passed, fetch from API
//     if (!location.state) {
//       fetch(`https://api.nearprop.com/api/properties/${id}`)
//         .then((res) => res.json())
//         .then((data) => setHostel(data))
//         .catch(() => setHostel(null));
//     }
//   }, [id, location.state]);

//   if (!hostel) {
//     return (
//       <div className="text-center mt-10">
//         <p className="text-lg font-semibold">No hostel data found.</p>
//         <button
//           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//           onClick={() => navigate(-1)}
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
//       {/* Left - Hostel Details */}
//       <div className="lg:col-span-2">
//         <button
//           className="mb-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           onClick={() => navigate(-1)}
//         >
//           ← Back
//         </button>

//         <img
//           src={hostel.images?.[0] || hostel.image}
//           alt={hostel.name}
//           className="w-full h-64 object-cover rounded-lg mb-6"
//         />

//         <h2 className="text-3xl font-bold text-[#5C4EFF] mb-3">{hostel.name}</h2>

//         <p className="text-gray-700 mb-2">
//           <strong>City:</strong> {hostel.city}, <strong>Location:</strong> {hostel.location}
//         </p>

//         <p className="text-gray-700 mb-2">
//           <strong>Price:</strong> ₹{hostel.price} /month
//         </p>

//         <p className="text-gray-700 mb-2">
//           <strong>Bedrooms:</strong> {hostel.bedrooms} BHK
//         </p>

//         <p className="text-gray-700 mb-2">
//           <strong>Gender:</strong> {hostel.gender || "Unspecified"}
//         </p>

//         <p className="text-gray-700 mb-4">
//           <strong>Description:</strong> {hostel.description}
//         </p>

//         {hostel.amenities?.length > 0 && (
//           <div>
//             <strong>Amenities:</strong>
//             <ul className="list-disc list-inside text-gray-600">
//               {hostel.amenities.map((a, i) => (
//                 <li key={i}>{a}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* Right - Schedule Tour Box */}
//       <div className="lg:sticky lg:top-20 h-fit">
//         <ScheduleTourBox />
//       </div>
//     </div>
//   );
// }

// export default HostelDetail;



import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ScheduleTourBox from "../ScheduleTour/ScheduleTourBox";
import {
  FaMapMarkerAlt,
  FaRupeeSign,
  FaDoorOpen,
  FaBed,
  FaInfoCircle,
  FaListUl,
  FaCheckCircle,
  FaUserFriends,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HostelDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [hostel, setHostel] = useState(location.state || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("Params ID:", id); // Debug: Check if ID is received
    console.log("Initial State:", location.state); // Debug: Check initial state

    if (!location.state) {
      const fetchHostelDetails = async () => {
        try {
          const res = await fetch(`https://pg-hostel.nearprop.com/api/public/property/${id}`);
          if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
          const data = await res.json();
          console.log("API Response:", data); // Debug: Log API response
          if (data.success) setHostel(data.property);
          else throw new Error("API returned no success or invalid data");
        } catch (error) {
          console.error("API fetch failed:", error);
          setHostel(location.state || null); // Fallback to location.state
        } finally {
          setLoading(false);
        }
      };
      fetchHostelDetails();
    } else {
      setLoading(false);
    }
  }, [id, location.state]);

  if (loading) {
    return (
      <div className="text-center mt-10 text-lg font-semibold">
        Loading Hostel Details...
      </div>
    );
  }

  if (!hostel) {
    return (
      <div className="text-center mt-10 text-lg font-semibold text-red-500">
        Hostel not found.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 mt-10 flex flex-col md:flex-row gap-6">
      {/* Left: Hostel Details */}
      <div className="flex-1 bg-white shadow-md rounded-xl p-6" data-aos="fade-up">
        <button
          className="mb-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <h1 className="text-3xl font-bold mb-6 text-center" data-aos="zoom-in">
          {hostel.name}
        </h1>

        <div className="w-full h-64 overflow-hidden rounded-lg mb-6" data-aos="fade-up">
          <img
            src={hostel.images?.[0] || "https://via.placeholder.com/400x300?text=No+Image"}
            alt={hostel.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Section 1: Basic Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800 mb-8">
          <div className="flex items-start gap-2">
            <FaMapMarkerAlt className="text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold">Location</h2>
              <p>
                {hostel.location?.address || "N/A"}, {hostel.location?.city || "N/A"}, {hostel.location?.state || "N/A"} - {hostel.location?.pinCode || "N/A"}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <FaRupeeSign className="text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold">Rent Range (Beds)</h2>
              <p>₹ {hostel.pricing?.beds.min || "N/A"} - ₹ {hostel.pricing?.beds.max || "N/A"}/month</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <FaDoorOpen className="text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold">Total Rooms</h2>
              <p>{hostel.totalRooms || "N/A"}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <FaBed className="text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold">Total Beds</h2>
              <p>{hostel.totalBeds || "N/A"}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <FaBed className="text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold">Available Beds</h2>
              <p>{hostel.availability?.availableBedCount || "N/A"}</p>
            </div>
          </div>
        </div>

        {/* Section 2: Property Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800 mb-8">
          <div className="flex items-start gap-2">
            <FaInfoCircle className="text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold">Property Type</h2>
              <p>{hostel.type || "N/A"}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <FaCheckCircle className="text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold">Availability</h2>
              <p>{hostel.availability?.hasAvailableRooms ? "Available" : "Not Available"}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <FaInfoCircle className="text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold">Created On</h2>
              <p>{new Date(hostel.createdAt).toLocaleDateString()}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <FaUserFriends className="text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold">Landlord</h2>
              <p>{hostel.landlord?.name || "N/A"}</p>
            </div>
          </div>
        </div>

        {/* Section 3: Rooms Details (Hidden if no rooms) */}
        {hostel.rooms?.length > 0 && (
          <div className="text-gray-800 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Room Details</h2>
            {hostel.rooms.map((room, index) => (
              <div key={index} className="border rounded-lg p-4 mb-4">
                <h3 className="text-xl font-semibold">{room.name} ({room.type})</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <div className="flex items-start gap-2">
                    <FaRupeeSign className="text-xl mt-1" />
                    <div>
                      <h4 className="text-md font-medium">Room Price</h4>
                      <p>₹ {room.price || "N/A"}/month</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaBed className="text-xl mt-1" />
                    <div>
                      <h4 className="text-md font-medium">Total Beds</h4>
                      <p>{room.totalBeds || "N/A"}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaBed className="text-xl mt-1" />
                    <div>
                      <h4 className="text-md font-medium">Available Beds</h4>
                      <p>{room.availableBeds || "N/A"}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaCheckCircle className="text-xl mt-1" />
                    <div>
                      <h4 className="text-md font-medium">Status</h4>
                      <p>{room.status || "N/A"}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 col-span-2">
                    <FaListUl className="text-xl mt-1" />
                    <div>
                      <h4 className="text-md font-medium">Facilities</h4>
                      <ul className="list-disc list-inside">
                        {room.facilities.map((facility, i) => (
                          <li key={i}>{facility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 col-span-2">
                    <FaBed className="text-xl mt-1" />
                    <div>
                      <h4 className="text-md font-medium">Bed Details</h4>
                      <ul className="list-disc list-inside">
                        {room.beds.map((bed, i) => (
                          <li key={i}>
                            {bed.name} - ₹ {bed.price}/month ({bed.status})
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Section 4: Amenities & Facilities */}
        <div className="text-gray-800">
          <div className="flex items-start gap-2 mb-4">
            <FaListUl className="text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold">Common Facilities</h2>
              <ul className="list-disc list-inside">
                {(hostel.commonFacilities || []).map((item, i) => (
                  <li key={i}>{item}</li>
                )) || <p>No common facilities listed.</p>}
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-2 mb-4">
            <FaListUl className="text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold">Facilities Overview</h2>
              <ul className="list-disc list-inside">
                {Object.entries(hostel.facilitiesDetail || {}).map(([category, details]) =>
                  Object.entries(details).map(([feature, { available, count }]) =>
                    available && (
                      <li key={`${category}-${feature}`}>
                        {feature.replace(/([A-Z])/g, " $1").trim()} ({count})
                      </li>
                    )
                  )
                ) || <p>No facilities available.</p>}
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <FaInfoCircle className="text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold">Description</h2>
              <p className="text-gray-600">{hostel.description || "No description available"}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Schedule Tour Box */}
      <div className="md:sticky md:top-20 h-fit">
        <ScheduleTourBox />
      </div>
    </div>
  );
};

export default HostelDetail;