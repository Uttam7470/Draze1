// import React, { useEffect } from "react";
// import { useLocation, useParams } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const PGDetails = () => {
//   const { state } = useLocation();
//   const { id } = useParams();
//   const pg = state;

//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   if (!pg)
//     return <div className="text-center mt-10">PG not found.</div>;

//   return (
//     <div
//       className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-md rounded-xl"
//       data-aos="fade-up"
//     >
//       <h1
//         className="text-3xl font-bold mb-4 text-center"
//         data-aos="zoom-in"
//       >
//         {pg.name}
//       </h1>

//       <div
//         className="w-full h-64 overflow-hidden rounded-lg mb-6"
//         data-aos="fade-up"
//       >
//         <img
//           src={pg.image}
//           alt={pg.name}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       <div
//         className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800"
//         data-aos="fade-up"
//       >
//         <div data-aos="fade-right">
//           <h2 className="text-lg font-semibold">Location</h2>
//           <p>{pg.location}, {pg.city}</p>
//         </div>

//         <div data-aos="fade-left">
//           <h2 className="text-lg font-semibold">Price</h2>
//           <p>₹ {pg.price}</p>
//         </div>

//         <div data-aos="fade-right">
//           <h2 className="text-lg font-semibold">Bedrooms</h2>
//           <p>{pg.bedrooms}</p>
//         </div>

//         <div data-aos="fade-left">
//           <h2 className="text-lg font-semibold">Property Type</h2>
//           <p>{pg.propertyType}</p>
//         </div>

//         <div data-aos="fade-right">
//           <h2 className="text-lg font-semibold">Status</h2>
//           <p>{pg.status}</p>
//         </div>

//         <div data-aos="fade-left">
//           <h2 className="text-lg font-semibold">Amenities</h2>
//           <ul className="list-disc list-inside">
//             {pg.amenities &&
//               pg.amenities.map((item, i) => (
//                 <li key={i}>{item}</li>
//               ))}
//           </ul>
//         </div>

//         <div
//           className="sm:col-span-2"
//           data-aos="fade-up"
//         >
//           <h2 className="text-lg font-semibold">Description</h2>
//           <p className="text-gray-600">{pg.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PGDetails;
 


















// import React, { useEffect } from "react";
// import { useLocation, useParams } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import ScheduleTourBox from "../ScheduleTour/ScheduleTourBox";

// const PGDetails = () => {
//   const { state } = useLocation();
//   const { id } = useParams();
//   const pg = state;

//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   if (!pg) return <div className="text-center mt-10">PG not found.</div>;

//   return (
//     <div className="max-w-6xl mx-auto px-4 mt-10 flex flex-col md:flex-row gap-6">
//       {/* Left: PG Details */}
//       <div
//         className="flex-1 bg-white shadow-md rounded-xl p-6"
//         data-aos="fade-up"
//       >
//         <h1 className="text-3xl font-bold mb-4 text-center" data-aos="zoom-in">
//           {pg.name}
//         </h1>

//         <div
//           className="w-full h-64 overflow-hidden rounded-lg mb-6"
//           data-aos="fade-up"
//         >
//           <img
//             src={pg.image}
//             alt={pg.name}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div
//           className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800"
//           data-aos="fade-up"
//         >
//           <div data-aos="fade-right">
//             <h2 className="text-lg font-semibold">Location</h2>
//             <p>{pg.location}, {pg.city}</p>
//           </div>

//           <div data-aos="fade-left">
//             <h2 className="text-lg font-semibold">Price</h2>
//             <p>₹ {pg.price}</p>
//           </div>

//           <div data-aos="fade-right">
//             <h2 className="text-lg font-semibold">Bedrooms</h2>
//             <p>{pg.bedrooms}</p>
//           </div>

//           <div data-aos="fade-left">
//             <h2 className="text-lg font-semibold">Property Type</h2>
//             <p>{pg.propertyType}</p>
//           </div>

//           <div data-aos="fade-right">
//             <h2 className="text-lg font-semibold">Status</h2>
//             <p>{pg.status}</p>
//           </div>

//           <div data-aos="fade-left">
//             <h2 className="text-lg font-semibold">Amenities</h2>
//             <ul className="list-disc list-inside">
//               {pg.amenities &&
//                 pg.amenities.map((item, i) => (
//                   <li key={i}>{item}</li>
//                 ))}
//             </ul>
//           </div>

//           <div className="sm:col-span-2" data-aos="fade-up">
//             <h2 className="text-lg font-semibold">Description</h2>
//             <p className="text-gray-600">{pg.description}</p>
//           </div>
//         </div>
//       </div>

//       {/* Right: Schedule Tour Box */}
//       <ScheduleTourBox />
//     </div>
//   );
// };

// export default PGDetails;







// import React, { useEffect, useState } from "react";
// import { useLocation, useParams } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import ScheduleTourBox from "../ScheduleTour/ScheduleTourBox";

// const PGDetails = () => {
//   const location = useLocation();
//   const { id } = useParams();
//   const [pg, setPg] = useState(location.state || null);

//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//     window.scrollTo({ top: 0, behavior: "smooth" });

//     // If state is not passed, fetch data by ID
//     if (!location.state) {
//       fetch(`https://api.nearprop.com/api/properties/${id}`)
//         .then((res) => res.json())
//         .then((data) => setPg(data))
//         .catch(() => setPg(null));
//     }
//   }, [id, location.state]);

//   if (!pg) return <div className="text-center mt-10">PG not found.</div>;

//   return (
//     <div className="max-w-6xl mx-auto px-4 mt-10 flex flex-col md:flex-row gap-6">
//       {/* Left: PG Details */}
//       <div
//         className="flex-1 bg-white shadow-md rounded-xl p-6"
//         data-aos="fade-up"
//       >
//         <h1 className="text-3xl font-bold mb-4 text-center" data-aos="zoom-in">
//           {pg.name}
//         </h1>

//         <div
//           className="w-full h-64 overflow-hidden rounded-lg mb-6"
//           data-aos="fade-up"
//         >
//           <img
//             src={pg.images?.[0] || pg.image}
//             alt={pg.name}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div
//           className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800"
//           data-aos="fade-up"
//         >
//           <div data-aos="fade-right">
//             <h2 className="text-lg font-semibold">Location</h2>
//             <p>{pg.location}, {pg.city}</p>
//           </div>

//           <div data-aos="fade-left">
//             <h2 className="text-lg font-semibold">Price</h2>
//             <p>₹ {pg.price}</p>
//           </div>

//           <div data-aos="fade-right">
//             <h2 className="text-lg font-semibold">Bedrooms</h2>
//             <p>{pg.bedrooms}</p>
//           </div>

//           <div data-aos="fade-left">
//             <h2 className="text-lg font-semibold">Property Type</h2>
//             <p>{pg.propertyType}</p>
//           </div>

//           <div data-aos="fade-right">
//             <h2 className="text-lg font-semibold">Status</h2>
//             <p>{pg.status}</p>
//           </div>

//           <div data-aos="fade-left">
//             <h2 className="text-lg font-semibold">Amenities</h2>
//             <ul className="list-disc list-inside">
//               {pg.amenities?.map((item, i) => (
//                 <li key={i}>{item}</li>
//               ))}
//             </ul>
//           </div>

//           <div className="sm:col-span-2" data-aos="fade-up">
//             <h2 className="text-lg font-semibold">Description</h2>
//             <p className="text-gray-600">{pg.description}</p>
//           </div>
//         </div>
//       </div>

//       {/* Right: Schedule Tour Box */}
//       <ScheduleTourBox />
//     </div>
//   );
// };

// export default PGDetails;




// this code working //

// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import ScheduleTourBox from "../ScheduleTour/ScheduleTourBox";

// const PGDetails = () => {
//   const location = useLocation();
//   const pg = location.state;

//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   if (!pg) return <div className="text-center mt-10">PG not found.</div>;

//   return (
//     <div className="max-w-6xl mx-auto px-4 mt-10 flex flex-col md:flex-row gap-6">
//       {/* Left: PG Details */}
//       <div className="flex-1 bg-white shadow-md rounded-xl p-6" data-aos="fade-up">
//         <h1 className="text-3xl font-bold mb-4 text-center" data-aos="zoom-in">
//           {pg.name}
//         </h1>

//         <div className="w-full h-64 overflow-hidden rounded-lg mb-6" data-aos="fade-up">
//           <img
//             src={pg.images?.[0] || pg.image}
//             alt={pg.name}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800" data-aos="fade-up">
//           <div data-aos="fade-right">
//             <h2 className="text-lg font-semibold">Location</h2>
//             <p>{pg.location}, {pg.city}</p>
//           </div>

//           <div data-aos="fade-left">
//             <h2 className="text-lg font-semibold">Price</h2>
//             <p>₹ {pg.price}</p>
//           </div>

//           <div data-aos="fade-right">
//             <h2 className="text-lg font-semibold">Bedrooms</h2>
//             <p>{pg.bedrooms}</p>
//           </div>

//           <div data-aos="fade-left">
//             <h2 className="text-lg font-semibold">Property Type</h2>
//             <p>{pg.propertyType}</p>
//           </div>

//           <div data-aos="fade-right">
//             <h2 className="text-lg font-semibold">Status</h2>
//             <p>{pg.status}</p>
//           </div>

//           <div data-aos="fade-left">
//             <h2 className="text-lg font-semibold">Amenities</h2>
//             <ul className="list-disc list-inside">
//               {pg.amenities?.map((item, i) => (
//                 <li key={i}>{item}</li>
//               ))}
//             </ul>
//           </div>

//           <div className="sm:col-span-2" data-aos="fade-up">
//             <h2 className="text-lg font-semibold">Description</h2>
//             <p className="text-gray-600">{pg.description}</p>
//           </div>
//         </div>
//       </div>

//       {/* Right: Schedule Tour Box */}
//       <ScheduleTourBox />
//     </div>
//   );
// };

// export default PGDetails;





// import React, { useEffect, useState } from "react";
// import { useLocation, useParams } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import ScheduleTourBox from "../ScheduleTour/ScheduleTourBox";

// const PGDetails = () => {
//   const location = useLocation();
//   const { id } = useParams();
//   const [pg, setPg] = useState(location.state || null);

//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//     window.scrollTo({ top: 0, behavior: "smooth" });

//     // If state is not passed, fetch data by ID
//     if (!location.state) {
//       fetch(`http://13.234.110.204:3003/api/public/property/${id}`)
//         .then((res) => res.json())
//         .then((data) => setPg(data))
//         .catch(() => setPg(null));
//     }
//   }, [id, location.state]);

//   if (!pg) return <div className="text-center mt-10">PG not found.</div>;

//   return (
//     <div className="max-w-6xl mx-auto px-4 mt-10 flex flex-col md:flex-row gap-6">
//       {/* Left: PG Details */}
//       <div className="flex-1 bg-white shadow-md rounded-xl p-6" data-aos="fade-up">
//         <h1 className="text-3xl font-bold mb-4 text-center" data-aos="zoom-in">
//           {pg.name}
//         </h1>

//         <div className="w-full h-64 overflow-hidden rounded-lg mb-6" data-aos="fade-up">
//           <img
//             src={pg.images?.[0] || pg.image}
//             alt={pg.name}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800" data-aos="fade-up">
//           <div data-aos="fade-right">
//             <h2 className="text-lg font-semibold">Location</h2>
//            <p>
//   {pg.location?.address}, {pg.location?.city}, {pg.location?.state} - {pg.location?.pinCode}
// </p>

//           </div>

//           <div data-aos="fade-left">
//             <h2 className="text-lg font-semibold">Price</h2>
//             <p>₹ {pg.price}</p>
//           </div>

//           <div data-aos="fade-right">
//             <h2 className="text-lg font-semibold">Bedrooms</h2>
//             <p>{pg.bedrooms}</p>
//           </div>

//           <div data-aos="fade-left">
//             <h2 className="text-lg font-semibold">Property Type</h2>
//             <p>{pg.propertyType}</p>
//           </div>

//           <div data-aos="fade-right">
//             <h2 className="text-lg font-semibold">Status</h2>
//             <p>{pg.status}</p>
//           </div>

//           <div data-aos="fade-left">
//             <h2 className="text-lg font-semibold">Amenities</h2>
//             <ul className="list-disc list-inside">
//               {pg.amenities?.map((item, i) => (
//                 <li key={i}>{item}</li>
//               ))}
//             </ul>
//           </div>

//           <div className="sm:col-span-2" data-aos="fade-up">
//             <h2 className="text-lg font-semibold">Description</h2>
//             <p className="text-gray-600">{pg.description}</p>
//           </div>
//         </div>
//       </div>

//       {/* Right: Schedule Tour Box */}
//       <ScheduleTourBox />
//     </div>
//   );
// };

// export default PGDetails;



// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import ScheduleTourBox from "../ScheduleTour/ScheduleTourBox";
// import axios from "axios";

// const PGDetails = () => {
//   const { id } = useParams(); // Get PG ID from the URL
//   const [pg, setPg] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//     window.scrollTo({ top: 0, behavior: "smooth" });

//     const fetchPGDetails = async () => {
//       try {
//         const response = await axios.get(`http://13.234.110.204:3003/api/public/property/${id}`);
//         setPg(response.data.property); // Adjust based on actual API structure
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching PG details:", error);
//         setLoading(false);
//       }
//     };

//     fetchPGDetails();
//   }, [id]);

//   if (loading) return <div className="text-center mt-10">Loading...</div>;
//   if (!pg) return <div className="text-center mt-10">PG not found.</div>;

//   return (
//     <div className="max-w-6xl mx-auto px-4 mt-10 flex flex-col md:flex-row gap-6">
//       {/* Left: PG Details */}
//       <div className="flex-1 bg-white shadow-md rounded-xl p-6" data-aos="fade-up">
//         <h1 className="text-3xl font-bold mb-4 text-center" data-aos="zoom-in">
//           {pg.name}
//         </h1>

//         {/* Image */}
//         <div className="w-full h-64 overflow-hidden rounded-lg mb-6" data-aos="fade-up">
//           <img
//             src={pg.images?.[0] || pg.image || "https://via.placeholder.com/600x400"}
//             alt={pg.name}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Details Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800" data-aos="fade-up">
//           {/* Location */}
//           <div data-aos="fade-right">
//             <h2 className="text-lg font-semibold">Location</h2>
//             <p>
//               {pg.location?.address}, {pg.location?.city}, {pg.location?.state} - {pg.location?.pinCode}
//             </p>
//           </div>

//           {/* Price */}
//           <div data-aos="fade-left">
//             <h2 className="text-lg font-semibold">Price</h2>
//             <p>₹ {pg.price}</p>
//           </div>

//           {/* Bedrooms */}
//           <div data-aos="fade-right">
//             <h2 className="text-lg font-semibold">Bedrooms</h2>
//             <p>{pg.bedrooms || "N/A"}</p>
//           </div>

//           {/* Type */}
//           <div data-aos="fade-left">
//             <h2 className="text-lg font-semibold">Property Type</h2>
//             <p>{pg.propertyType || "N/A"}</p>
//           </div>

//           {/* Status */}
//           <div data-aos="fade-right">
//             <h2 className="text-lg font-semibold">Status</h2>
//             <p>{pg.status || "Available"}</p>
//           </div>

//           {/* Amenities */}
//           <div data-aos="fade-left">
//             <h2 className="text-lg font-semibold">Amenities</h2>
//             {pg.amenities?.length > 0 ? (
//               <ul className="list-disc list-inside">
//                 {pg.amenities.map((item, i) => (
//                   <li key={i}>{item}</li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No amenities listed.</p>
//             )}
//           </div>

//           {/* Description */}
//           <div className="sm:col-span-2" data-aos="fade-up">
//             <h2 className="text-lg font-semibold">Description</h2>
//             <p className="text-gray-600">{pg.description || "No description available."}</p>
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
import { useLocation, useParams } from "react-router-dom";
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
} from "react-icons/fa";

const PGDetails = () => {
  const location = useLocation();
  const { id } = useParams();
  const [pg, setPg] = useState(location.state || null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (!location.state) {
      fetch(`https://pg-hostel.nearprop.com/api/public/property/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setPg(data);
        })
        .catch(() => setPg(null));
    }
  }, [id, location.state]);

  if (!pg) return <div className="text-center mt-10">PG not found.</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 mt-10 flex flex-col md:flex-row gap-6">
      {/* Left: PG Details */}
      <div className="flex-1 bg-white shadow-md rounded-xl p-6" data-aos="fade-up">
        <h1 className="text-3xl font-bold mb-6 text-center" data-aos="zoom-in">
          {pg.name}
        </h1>

        <div className="w-full h-64 overflow-hidden rounded-lg mb-6" data-aos="fade-up">
          <img
            src={pg.images?.[0] || pg.image}
            alt={pg.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Section 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800 mb-8">
          <div className="flex items-start gap-2">
            <FaMapMarkerAlt className="text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold">Location</h2>
              <p>{pg.location?.address}, {pg.location?.city}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <FaRupeeSign className="text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold">Rent per Room</h2>
              <p>₹ {pg.price}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <FaDoorOpen className="text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold">Total Rooms</h2>
              <p>{pg.totalRooms}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <FaBed className="text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold">Total Beds</h2>
              <p>{pg.totalBeds}</p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800 mb-8">
          <div className="flex items-start gap-2">
            <FaBed className="text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold">Bedrooms</h2>
              <p>{pg.bedrooms}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <FaInfoCircle className="text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold">Property Type</h2>
              <p>{pg.propertyType}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <FaCheckCircle className="text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold">Status</h2>
              <p>{pg.status}</p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="text-gray-800">
          <div className="flex items-start gap-2 mb-4">
            <FaListUl className="text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold">Amenities</h2>
              <ul className="list-disc list-inside">
                {pg.amenities?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <FaInfoCircle className="text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold">Description</h2>
              <p className="text-gray-600">{pg.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Schedule Tour Box */}
      <ScheduleTourBox />
    </div>
  );
};

export default PGDetails;
