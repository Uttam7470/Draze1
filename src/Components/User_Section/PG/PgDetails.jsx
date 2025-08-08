

// import React, { useEffect, useState } from "react";
// import { useLocation, useParams } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import ScheduleTourBox from "../ScheduleTour/ScheduleTourBox";
// import {
//   FaBed,
//   FaDoorOpen,
//   FaRupeeSign,
//   FaMapMarkerAlt,
//   FaCheckCircle,
//   FaListUl,
//   FaInfoCircle,
//   FaUserFriends,
// } from "react-icons/fa";

// const PGDetails = () => {
//   const location = useLocation();
//   const { id } = useParams();
//   const [pg, setPg] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//     window.scrollTo({ top: 0, behavior: "smooth" });

//     const fetchPGDetails = async () => {
//       try {
//         const res = await fetch(`https://pg-hostel.nearprop.com/api/public/property/${id}`);
//         const data = await res.json();
//         setPg(data.property); // Extract the 'property' object from the response
//       } catch (error) {
//         console.error("API fetch failed:", error);
//         setPg(location.state || null); // fallback to location.state
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPGDetails();
//   }, [id, location.state]);

//   if (loading) {
//     return (
//       <div className="text-center mt-10 text-lg font-semibold">
//         Loading PG Details...
//       </div>
//     );
//   }

//   if (!pg) {
//     return (
//       <div className="text-center mt-10 text-lg font-semibold text-red-500">
//         PG not found.
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto px-4 mt-10 flex flex-col md:flex-row gap-6">
//       {/* Left: PG Details */}
//       <div className="flex-1 bg-white shadow-md rounded-xl p-6" data-aos="fade-up">
//         <h1 className="text-3xl font-bold mb-6 text-center" data-aos="zoom-in">
//           {pg.name}
//         </h1>

//         <div className="w-full h-64 overflow-hidden rounded-lg mb-6" data-aos="fade-up">
//           <img
//             src={pg.images?.[0] || "https://via.placeholder.com/400x300?text=No+Image"}
//             alt={pg.name}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Section 1: Basic Information */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800 mb-8">
//           <div className="flex items-start gap-2">
//             <FaMapMarkerAlt className="text-xl mt-1" />
//             <div>
//               <h2 className="text-lg font-semibold">Location</h2>
//               <p>{pg.location?.address}, {pg.location?.city}, {pg.location?.state} - {pg.location?.pinCode}</p>
//             </div>
//           </div>

//           <div className="flex items-start gap-2">
//             <FaRupeeSign className="text-xl mt-1" />
//             <div>
//               <h2 className="text-lg font-semibold">Rent Range (Beds)</h2>
//               <p>₹ {pg.pricing?.beds.min} - ₹ {pg.pricing?.beds.max}/month</p>
//             </div>
//           </div>

//           <div className="flex items-start gap-2">
//             <FaDoorOpen className="text-xl mt-1" />
//             <div>
//               <h2 className="text-lg font-semibold">Total Rooms</h2>
//               <p>{pg.totalRooms}</p>
//             </div>
//           </div>

//           <div className="flex items-start gap-2">
//             <FaBed className="text-xl mt-1" />
//             <div>
//               <h2 className="text-lg font-semibold">Total Beds</h2>
//               <p>{pg.totalBeds}</p>
//             </div>
//           </div>

//           <div className="flex items-start gap-2">
//             <FaBed className="text-xl mt-1" />
//             <div>
//               <h2 className="text-lg font-semibold">Available Beds</h2>
//               <p>{pg.availability?.availableBedCount}</p>
//             </div>
//           </div>
//         </div>

//         {/* Section 2: Property Details */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800 mb-8">
//           <div className="flex items-start gap-2">
//             <FaInfoCircle className="text-xl mt-1" />
//             <div>
//               <h2 className="text-lg font-semibold">Property Type</h2>
//               <p>{pg.type}</p>
//             </div>
//           </div>

//           <div className="flex items-start gap-2">
//             <FaCheckCircle className="text-xl mt-1" />
//             <div>
//               <h2 className="text-lg font-semibold">Availability</h2>
//               <p>{pg.availability?.hasAvailableRooms ? "Available" : "Not Available"}</p>
//             </div>
//           </div>

//           <div className="flex items-start gap-2">
//             <FaInfoCircle className="text-xl mt-1" />
//             <div>
//               <h2 className="text-lg font-semibold">Created On</h2>
//               <p>{new Date(pg.createdAt).toLocaleDateString()}</p>
//             </div>
//           </div>
//         </div>

//         {/* Section 3: Rooms Details */}
//         <div className="text-gray-800 mb-8">
//           <h2 className="text-2xl font-semibold mb-4">Room Details</h2>
//           {pg.rooms?.map((room, index) => (
//             <div key={index} className="border rounded-lg p-4 mb-4">
//               <h3 className="text-xl font-semibold">{room.name} ({room.type})</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
//                 <div className="flex items-start gap-2">
//                   <FaRupeeSign className="text-xl mt-1" />
//                   <div>
//                     <h4 className="text-md font-medium">Room Price</h4>
//                     <p>₹ {room.price}/month</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <FaBed className="text-xl mt-1" />
//                   <div>
//                     <h4 className="text-md font-medium">Total Beds</h4>
//                     <p>{room.totalBeds}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <FaBed className="text-xl mt-1" />
//                   <div>
//                     <h4 className="text-md font-medium">Available Beds</h4>
//                     <p>{room.availableBeds}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <FaCheckCircle className="text-xl mt-1" />
//                   <div>
//                     <h4 className="text-md font-medium">Status</h4>
//                     <p>{room.status}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-2 col-span-2">
//                   <FaListUl className="text-xl mt-1" />
//                   <div>
//                     <h4 className="text-md font-medium">Facilities</h4>
//                     <ul className="list-disc list-inside">
//                       {room.facilities.map((facility, i) => (
//                         <li key={i}>{facility}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-2 col-span-2">
//                   <FaBed className="text-xl mt-1" />
//                   <div>
//                     <h4 className="text-md font-medium">Bed Details</h4>
//                     <ul className="list-disc list-inside">
//                       {room.beds.map((bed, i) => (
//                         <li key={i}>
//                           {bed.name} - ₹ {bed.price}/month ({bed.status})
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Section 4: Amenities & Facilities */}
//         <div className="text-gray-800">
//           <div className="flex items-start gap-2 mb-4">
//             <FaListUl className="text-xl mt-1" />
//             <div>
//               <h2 className="text-lg font-semibold">Common Facilities</h2>
//               <ul className="list-disc list-inside">
//                 {(pg.commonFacilities || []).map((item, i) => (
//                   <li key={i}>{item}</li>
//                 )) || <p>No common facilities listed.</p>}
//               </ul>
//             </div>
//           </div>

//           <div className="flex items-start gap-2 mb-4">
//             <FaListUl className="text-xl mt-1" />
//             <div>
//               <h2 className="text-lg font-semibold">Facilities Overview</h2>
//               <ul className="list-disc list-inside">
//                 {Object.entries(pg.facilitiesDetail || {}).map(([category, details]) =>
//                   Object.entries(details).map(([feature, { available, count }]) =>
//                     available && (
//                       <li key={`${category}-${feature}`}>
//                         {feature.replace(/([A-Z])/g, ' $1').trim()} ({count})
//                       </li>
//                     )
//                   )
//                 )}
//               </ul>
//             </div>
//           </div>

//           <div className="flex items-start gap-2">
//             <FaInfoCircle className="text-xl mt-1" />
//             <div>
//               <h2 className="text-lg font-semibold">Description</h2>
//               <p className="text-gray-600">{pg.description || "No description available."}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right: Schedule Tour Box */}
//       <ScheduleTourBox />
//     </div>
//   );
// };

// export default PGDetails;




import React, { useEffect, useState } from "react";
import { useLocation, useParams,useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ScheduleTourBox from "../ScheduleTour/ScheduleTourBox";
import {
  FaBed,
  FaDoorOpen,
  FaRupeeSign,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaListUl,
  FaInfoCircle,
  FaUserFriends,
  FaBuilding,
  FaCalendarAlt,
  FaCouch,
} from "react-icons/fa";
import { MdDescription } from "react-icons/md";

const PGDetails = () => {
  const location = useLocation();
  const { id } = useParams();
  const [pg, setPg] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();


  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchPGDetails = async () => {
      try {
        const res = await fetch(`https://pg-hostel.nearprop.com/api/public/property/${id}`);
        const data = await res.json();
        setPg(data.property);
      } catch (error) {
        console.error("API fetch failed:", error);
        setPg(location.state || null);
      } finally {
        setLoading(false);
      }
    };

    fetchPGDetails();
  }, [id, location.state]);

  if (loading) {
    return (
      <div className="text-center mt-10 text-lg font-semibold text-gray-700">
        Loading PG Details...
      </div>
    );
  }

  if (!pg) {
    return (
      <div className="text-center mt-10 text-lg font-semibold text-red-500">
        PG not found.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-12 font-sans">
   <button
  onClick={() => navigate(-1)}
  className="mb-6 px-4 py-2 bg-[#5C4EFF] text-white rounded-md hover:bg-[#483bd4] transition duration-200 inline-flex items-center gap-2 text-sm font-medium"
>
  Back
</button>


      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: PG Details */}
        <div className="flex-1 bg-white shadow-2xl rounded-2xl p-8 transform hover:scale-[1.01] transition-transform duration-300" data-aos="fade-up">
          <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900 tracking-tight" data-aos="zoom-in">
            {pg.name}
          </h1>

          <div className="w-full h-80 overflow-hidden rounded-2xl mb-8 shadow-lg" data-aos="fade-up">
            <img
              src={pg.images?.[0] || "https://via.placeholder.com/400x300?text=No+Image"}
              alt={pg.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Section 1: Basic Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-800 mb-10">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors" data-aos="fade-right">
              <FaMapMarkerAlt className="text-2xl text-blue-600" />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Location</h2>
                <p className="text-gray-600">{pg.location?.address}, {pg.location?.city}, {pg.location?.state} - {pg.location?.pinCode}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors" data-aos="fade-right" data-aos-delay="100">
              <FaRupeeSign className="text-2xl text-green-600" />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Rent Range</h2>
                <p className="text-gray-600">₹ {pg.pricing?.beds.min} - ₹ {pg.pricing?.beds.max}/month</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors" data-aos="fade-right" data-aos-delay="200">
              <FaDoorOpen className="text-2xl text-purple-600" />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Total Rooms</h2>
                <p className="text-gray-600">{pg.totalRooms}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors" data-aos="fade-left">
              <FaBed className="text-2xl text-indigo-600" />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Total Beds</h2>
                <p className="text-gray-600">{pg.totalBeds}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors" data-aos="fade-left" data-aos-delay="100">
              <FaBed className="text-2xl text-teal-600" />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Available Beds</h2>
                <p className="text-gray-600">{pg.availability?.availableBedCount}</p>
              </div>
            </div>
          </div>

          {/* Section 2: Property Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-800 mb-10">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors" data-aos="fade-right">
              <FaBuilding className="text-2xl text-orange-600" />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Property Type</h2>
                <p className="text-gray-600">{pg.type}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors" data-aos="fade-right" data-aos-delay="100">
              <FaCheckCircle className="text-2xl text-green-600" />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Availability</h2>
                <p className="text-gray-600">{pg.availability?.hasAvailableRooms ? "Available" : "Not Available"}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors" data-aos="fade-right" data-aos-delay="200">
              <FaCalendarAlt className="text-2xl text-blue-600" />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Created On</h2>
                <p className="text-gray-600">{new Date(pg.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          {/* Section 3: Rooms Details */}
          <div className="text-gray-800 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3" data-aos="fade-up">
              <FaCouch className="text-3xl text-purple-600" />
              Room Details
            </h2>
            {pg.rooms?.map((room, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 mb-6 bg-white shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay={index * 100}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{room.name} ({room.type})</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex items-center gap-4">
                    <FaRupeeSign className="text-xl text-green-600" />
                    <div>
                      <h4 className="text-md font-medium text-gray-900">Room Price</h4>
                      <p className="text-gray-600">₹ {room.price}/month</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaBed className="text-xl text-indigo-600" />
                    <div>
                      <h4 className="text-md font-medium text-gray-900">Total Beds</h4>
                      <p className="text-gray-600">{room.totalBeds}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaBed className="text-xl text-teal-600" />
                    <div>
                      <h4 className="text-md font-medium text-gray-900">Available Beds</h4>
                      <p className="text-gray-600">{room.availableBeds}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaCheckCircle className="text-xl text-green-600" />
                    <div>
                      <h4 className="text-md font-medium text-gray-900">Status</h4>
                      <p className="text-gray-600">{room.status}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 col-span-2">
                    <FaListUl className="text-xl text-blue-600 mt-1" />
                    <div>
                      <h4 className="text-md font-medium text-gray-900">Facilities</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {room.facilities.map((facility, i) => (
                          <li key={i}>{facility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 col-span-2">
                    <FaBed className="text-xl text-indigo-600 mt-1" />
                    <div>
                      <h4 className="text-md font-medium text-gray-900">Bed Details</h4>
                      <ul className="list-disc list-inside text-gray-600">
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

          {/* Section 4: Amenities & Facilities */}
          <div className="text-gray-800">
            <div className="flex items-start gap-4 mb-6" data-aos="fade-up">
              <FaListUl className="text-2xl text-blue-600 mt-1" />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Common Facilities</h2>
                <ul className="list-disc list-inside text-gray-600">
                  {(pg.commonFacilities || []).map((item, i) => (
                    <li key={i}>{item}</li>
                  )) || <p>No common facilities listed.</p>}
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6" data-aos="fade-up" data-aos-delay="100">
              <FaListUl className="text-2xl text-blue-600 mt-1" />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Facilities Overview</h2>
                <ul className="list-disc list-inside text-gray-600">
                  {Object.entries(pg.facilitiesDetail || {}).map(([category, details]) =>
                    Object.entries(details).map(([feature, { available, count }]) =>
                      available && (
                        <li key={`${category}-${feature}`}>
                          {feature.replace(/([A-Z])/g, ' $1').trim()} ({count})
                        </li>
                      )
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="200">
              <MdDescription className="text-2xl text-purple-600 mt-1" />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Description</h2>
                <p className="text-gray-600 leading-relaxed">{pg.description || "No description available."}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Schedule Tour Box */}
        <div className="lg:w-1/3">
          <ScheduleTourBox />
        </div>
      </div>
    </div>
  );
};

export default PGDetails;