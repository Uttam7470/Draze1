// import React, { useState } from "react";
// import {
//   FaDoorOpen,
//   FaUserFriends,
//   FaRupeeSign,
//   FaExclamationCircle,
//   FaBell,
// } from "react-icons/fa";
// import RoomsProp from "./RoomsProp"; // Keep your component as-is

// const tabs = [
//   { key: "rooms", label: "Rooms", icon: <FaDoorOpen /> },
//   { key: "tenants", label: "Tenants", icon: <FaUserFriends /> },
//   { key: "collections", label: "Collections", icon: <FaRupeeSign /> },
//   { key: "dues", label: "Dues", icon: <FaExclamationCircle /> },
//   { key: "announcements", label: "Announcements", icon: <FaBell /> },
// ];

// const PropertyTabs = () => {
//   const [activeTab, setActiveTab] = useState("rooms");

//   const renderContent = () => {
//     switch (activeTab) {
//       case "rooms":
//         return (
//           <div className="p-4">
//             <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-3">
//               <h4 className="text-xl font-semibold">Rooms</h4>
//               <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
//                 + Add Room
//               </button>
//             </div>
//             <p className="text-gray-600 mb-3">View and manage room details.</p>
//             <RoomsProp />
//           </div>
//         );
//       case "tenants":
//         return (
//           <div className="p-4">
//             <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-3">
//               <h4 className="text-xl font-semibold">Tenants</h4>
//               <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//                 + Add Tenant
//               </button>
//             </div>
//             <p className="text-gray-600">View and manage tenant details.</p>
//           </div>
//         );
//       case "collections":
//         return (
//           <div className="p-4">
//             <h4 className="text-xl font-semibold mb-2">Collections</h4>
//             <p className="text-gray-600">Track rent and other payments collected.</p>
//           </div>
//         );
//       case "dues":
//         return (
//           <div className="p-4">
//             <h4 className="text-xl font-semibold mb-2">Dues</h4>
//             <p className="text-gray-600">Pending rent or utility dues listed here.</p>
//           </div>
//         );
//       case "announcements":
//         return (
//           <div className="p-4">
//             <h4 className="text-xl font-semibold mb-2">Announcements</h4>
//             <p className="text-gray-600">Post or view property-related announcements.</p>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="w-full">
//       {/* Tab Buttons */}
//       <div className="flex overflow-x-auto border-b border-gray-300 mb-4 scrollbar-hide">
//         {tabs.map((tab) => (
//           <button
//             key={tab.key}
//             onClick={() => setActiveTab(tab.key)}
//             className={`flex items-center gap-2 px-4 py-2 whitespace-nowrap text-sm font-medium transition-all duration-200
//               ${
//                 activeTab === tab.key
//                   ? "border-b-2 border-blue-500 text-blue-600"
//                   : "text-gray-500 hover:text-blue-500"
//               }`}
//           >
//             {tab.icon}
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* Tab Content */}
//       <div className="bg-white rounded-lg shadow-md">{renderContent()}</div>
//     </div>
//   );
// };

// export default PropertyTabs;





import React, { useState } from "react";
import {
  FaDoorOpen,
  FaUserFriends,
  FaRupeeSign,
  FaExclamationCircle,
  FaBell,
} from "react-icons/fa";
import RoomsProp from "./RoomsProp"; // Keep your component as-is

const tabs = [
  { key: "rooms", label: "Rooms", icon: <FaDoorOpen /> },
  { key: "tenants", label: "Tenants", icon: <FaUserFriends /> },
  { key: "collections", label: "Collections", icon: <FaRupeeSign /> },
  { key: "dues", label: "Dues", icon: <FaExclamationCircle /> },
  { key: "announcements", label: "Announcements", icon: <FaBell /> },
];

const PropertyTabs = () => {
  const [activeTab, setActiveTab] = useState("rooms");

  const renderContent = () => {
    switch (activeTab) {
      case "rooms":
        return (
          <div className="p-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-3">
              <h4 className="text-xl font-semibold">Rooms</h4>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                + Add Room
              </button>
            </div>
            <p className="text-gray-600 mb-3">View and manage room details.</p>
            <RoomsProp />
          </div>
        );
      case "tenants":
        return (
          <div className="p-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-3">
              <h4 className="text-xl font-semibold">Tenants</h4>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                + Add Tenant
              </button>
            </div>
            <p className="text-gray-600">View and manage tenant details.</p>
          </div>
        );
      case "collections":
        return (
          <div className="p-4">
            <h4 className="text-xl font-semibold mb-2">Collections</h4>
            <p className="text-gray-600">Track rent and other payments collected.</p>
          </div>
        );
      case "dues":
        return (
          <div className="p-4">
            <h4 className="text-xl font-semibold mb-2">Dues</h4>
            <p className="text-gray-600">Pending rent or utility dues listed here.</p>
          </div>
        );
      case "announcements":
        return (
          <div className="p-4">
            <h4 className="text-xl font-semibold mb-2">Announcements</h4>
            <p className="text-gray-600">Post or view property-related announcements.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex overflow-x-auto border-b border-gray-300 mb-4 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-2 px-4 py-2 whitespace-nowrap text-sm font-medium transition-all duration-200
              ${
                activeTab === tab.key
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-blue-500"
              }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg shadow-md">{renderContent()}</div>
    </div>
  );
};

export default PropertyTabs;
