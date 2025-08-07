// import React, { useState } from "react";
// import { FaDoorOpen } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const RoomOverview = () => {
//   const roomStats = [
//     { label: "Total Rooms", count: 0 },
//     { label: "Total Beds", count: 0 },
//     { label: "Vacant Rooms", count: 0 },
//   ];

//   const [searchTerm, setSearchTerm] = useState("");

//   return (
//     <div className="p-4 w-full">
//       <h3 className="text-xl sm:text-2xl font-bold mb-6">Room Overview</h3>

//       {/* Stat Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
//         {roomStats.map((stat, index) => (
//           <div
//             key={index}
//             className="bg-white border rounded-lg shadow-sm p-5 text-center"
//           >
//             <h2 className="text-2xl text-blue-600 font-bold">{stat.count}</h2>
//             <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
//           </div>
//         ))}
//       </div>

//       {/* Search */}
//       <div className="mb-6">
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Search Room..."
//           className="w-full sm:w-96 px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//         />
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
//         <table className="min-w-full text-sm">
//           <thead className="bg-gray-100 text-xs text-gray-600 uppercase">
//             <tr>
//               <th className="px-4 py-2">Floor</th>
//               <th className="px-4 py-2">Name</th>
//               <th className="px-4 py-2">Occupancy</th>
//               <th className="px-4 py-2">Status</th>
//               <th className="px-4 py-2">Rent/Bed</th>
//               <th className="px-4 py-2">Remarks</th>
//               <th className="px-4 py-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td colSpan="7" className="text-center text-gray-400 py-6">
//                 No data available
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       {/* Add Room */}
//       <div className="mt-6 text-right">
//         <Link to="/landlord/add-room">
//           <button className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
//             <FaDoorOpen className="mr-2" />
//             Add Room
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default RoomOverview;




import React, { useEffect, useState } from "react";
import { FaDoorOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

const RoomOverview = () => {
  const [rooms, setRooms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("ALL"); // 👈 Track current filter

  // Load rooms from localStorage on mount
  useEffect(() => {
    const savedRooms = JSON.parse(localStorage.getItem("rooms")) || [];
    setRooms(savedRooms);
  }, []);

  // Calculate stats
  const totalRooms = rooms.length;
  const totalBeds = rooms.reduce((sum, room) => sum + Number(room.beds || 0), 0);
  const vacantRooms = rooms.filter(room => Number(room.beds) === 0).length;

  const roomStats = [
    { label: "Total Rooms", count: totalRooms, type: "ALL" },
    { label: "Total Beds", count: totalBeds, type: "ALL" },
    { label: "Vacant Rooms", count: vacantRooms, type: "VACANT" },
  ];

  // Filtered room list
  const filteredRooms = rooms
    .filter((room) =>
      room.roomName?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((room) => {
      if (filterType === "VACANT") return Number(room.beds) === 0;
      return true;
    });

  return (
    <div className="p-4 w-full">
      <h3 className="text-xl sm:text-2xl font-bold mb-6">Room Overview</h3>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {roomStats.map((stat, index) => (
          <div
            key={index}
            className="cursor-pointer bg-white border rounded-lg shadow-sm p-5 text-center hover:shadow-md transition"
            onClick={() => setFilterType(stat.type)} // 👈 click se filter lagega
          >
            <h2 className="text-2xl text-blue-600 font-bold">{stat.count}</h2>
            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Room..."
          className="w-full sm:w-96 px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Table of Rooms */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-xs text-gray-600 uppercase">
            <tr>
              <th className="px-4 py-2">Floor</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Occupancy</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Rent/Bed</th>
              <th className="px-4 py-2">Remarks</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredRooms.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center text-gray-400 py-6">
                  No rooms found.
                </td>
              </tr>
            ) : (
              filteredRooms.map((room, idx) => (
                <tr key={idx} className="text-center border-t">
                  <td className="px-4 py-2">{room.floor}</td>
                  <td className="px-4 py-2">{room.roomName}</td>
                  <td className="px-4 py-2">{room.beds}</td>
                  <td className="px-4 py-2">
                    {Number(room.beds) > 0 ? (
                      <span className="text-green-600">Occupied</span>
                    ) : (
                      <span className="text-yellow-500">Vacant</span>
                    )}
                  </td>
                  <td className="px-4 py-2">₹{room.rent}</td>
                  <td className="px-4 py-2 text-gray-500">-</td>
                  <td className="px-4 py-2">
                    <Link
                      to="/landlord/add-room"
                      className="text-blue-600 hover:text-blue-800 underline text-xs"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Add Room Button */}
      <div className="mt-6 text-right">
        <Link to="/landlord/add-room">
          <button className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            <FaDoorOpen className="mr-2" />
            Add Room
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RoomOverview;

