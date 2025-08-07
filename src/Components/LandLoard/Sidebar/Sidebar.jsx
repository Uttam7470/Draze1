

// import React, { useState } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import {
//   FaTachometerAlt,
//   FaPlus,
//   FaBuilding,
//   FaUserFriends,
//   FaUser,
//   FaListAlt,
//   FaBars,
//   FaSignOutAlt
  
// } from "react-icons/fa";
// import drazeLogo from '../../../assets/logo/drazeLogo.png';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => setIsOpen(!isOpen);
//   const closeSidebar = () => setIsOpen(false);

//   const links = [
//     { to: "/landlord", icon: <FaTachometerAlt />, label: "Dashboard", exact: true },
//     { to: "/landlord/property", icon: <FaBuilding />, label: "Properties" },
//     { to: "/landlord/add-property", icon: <FaPlus />, label: "Add Property" },
//     { to: "/landlord/room-overview", icon: <FaListAlt />, label: "Rooms" },
//     { to: "/landlord/tenants", icon: <FaUserFriends />, label: "Tenants" },
//     { to: "/landlord/property-list", icon: <FaListAlt />, label: "Listings" },
//     { to: "/landlord/landlord-profile", icon: <FaUser />, label: "Profile" },
//     { to: "/landlord/landlord-logout", icon: <FaSignOutAlt />, label: "Logout" },
//   ];

//   return (
//     <>
//       {/* Mobile Toggle Button */}
//       <button
//         className="md:hidden fixed top-3 left-3 z-50 bg-[#5C4EFF] text-white p-2 rounded shadow"
//         onClick={toggleSidebar}
//         aria-label="Toggle sidebar"
//       >
//         <FaBars />
//       </button>

//       {/* Sidebar */}
//       <div
//         style={{ backgroundColor: "#5C4EFF" }}
//         className={`fixed top-0 left-0 h-screen w-64 text-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out
//         ${isOpen ? "translate-x-0" : "-translate-x-full"}
//         md:translate-x-0 md:relative md:z-0 overflow-hidden`}
//       >
//         {/* Logo */}
//         <div className="flex justify-center items-center border-b border-indigo-200 bg-white">
//           <img
//             src={drazeLogo}
//             alt="Draze Logo"
//             className="w-[clamp(100px,20vw,100px)] h-auto object-contain"
//           />
//         </div>

//         {/* Navigation Links */}
//         <div className="flex flex-col justify-between h-[calc(100vh-88px)] px-4 py-4">
//           <ul className="space-y-2">
//             {links.map(({ to, icon, label }) => (
//               <li key={to}>
//                 <NavLink
//                   to={to}
//                   onClick={closeSidebar}
//                   end={to === "/landlord"}
//                   className={({ isActive }) =>
//                     `flex items-center gap-3 px-4 py-2 rounded transition-colors ${
//                       isActive
//                         ? "bg-white text-[#5C4EFF] font-semibold"
//                         : "text-white hover:bg-indigo-600"
//                     }`
//                   }
//                 >
//                   <span className="text-xl">{icon}</span>
//                   <span className="text-sm sm:text-base">{label}</span>
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Mobile Overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
//           onClick={toggleSidebar}
//         />
//       )}
//     </>
//   );
// };

// export default Sidebar;




import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaPlus,
  FaBuilding,
  FaUserFriends,
  FaUser,
  FaListAlt,
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa";
import drazeLogo from '../../../assets/logo/drazeLogo.png';
import { useAuth } from "../../User_Section/Context/AuthContext";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth(); // logout from context

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const handleLogout = () => {
    logout();           // Clear auth context/localStorage/session etc.
    navigate("/");      // Redirect to home page
  };

  const links = [
    { to: "/landlord", icon: <FaTachometerAlt />, label: "Dashboard", exact: true },
    { to: "/landlord/property", icon: <FaBuilding />, label: "Properties" },
    { to: "/landlord/add-property", icon: <FaPlus />, label: "Add Property" },
    { to: "/landlord/room-overview", icon: <FaListAlt />, label: "Rooms" },
    { to: "/landlord/tenants", icon: <FaUserFriends />, label: "Tenants" },
    // { to: "/landlord/property-list", icon: <FaListAlt />, label: "Listings" },
    { to: "/landlord/landlord-profile", icon: <FaUser />, label: "Profile" },
    { to: "#", icon: <FaSignOutAlt />, label: "Logout", onClick: handleLogout },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-3 left-3 z-50 bg-[#5C4EFF] text-white p-2 rounded shadow"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        style={{ backgroundColor: "#5C4EFF" }}
        className={`fixed top-0 left-0 h-screen w-64 text-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:relative md:z-0 overflow-hidden`}
      >
        {/* Logo */}
        <div className="flex justify-center items-center border-b border-indigo-200 p-10">
          <img
            src={drazeLogo}
            alt="Draze Logo"
            className="w-[clamp(100px,20vw,100px)] h-auto object-contain"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col justify-between h-[calc(100vh-88px)] px-4 py-4">
          <ul className="space-y-2">
            {links.map(({ to, icon, label, onClick }) => (
              <li key={label}>
                {label === "Logout" ? (
                  <button
                    onClick={() => {
                      closeSidebar();
                      onClick();
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2 rounded transition-colors text-white hover:bg-red-600"
                  >
                    <span className="text-xl">{icon}</span>
                    <span className="text-sm sm:text-base">{label}</span>
                  </button>
                ) : (
                  <NavLink
                    to={to}
                    onClick={closeSidebar}
                    end={to === "/landlord"}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-2 rounded transition-colors ${
                        isActive
                          ? "bg-white text-[#5C4EFF] font-semibold"
                          : "text-white hover:bg-indigo-600"
                      }`
                    }
                  >
                    <span className="text-xl">{icon}</span>
                    <span className="text-sm sm:text-base">{label}</span>
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;

