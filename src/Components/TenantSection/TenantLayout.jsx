// import React from "react";
// import { NavLink, Outlet, useNavigate } from "react-router-dom";
// import { LogOut } from "lucide-react";
// import { useAuth } from "../User_Section/Context/AuthContext";

// const TenantLayout = () => {
//   const navigate = useNavigate();
//   const { logout } = useAuth();

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   const navItems = [
//     { name: "Dashboard", path: "/tenant" },
//     { name: "My Profile", path: "/tenant/profile" },
//     { name: "My Room", path: "/tenant/my-room" },
//     { name: "Rent Payments", path: "/tenant/rent-payments" },
//     { name: "Maintenance", path: "/tenant/maintenance" },
//     { name: "Lease Agreement", path: "/tenant/lease" },
//     { name: "Announcements", path: "/tenant/announcements" },
//     { name: "Support", path: "/tenant/support" },
//   ];

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-md p-5">
//         <h2 className="text-2xl font-bold text-indigo-600 mb-8">Tenant Panel</h2>
//         <nav className="space-y-4">
//           {navItems.map((item) => (
//           <NavLink
//   key={item.name}
//   to={item.path}
//   className={({ isActive }) =>
//     `block px-3 py-2 rounded-md font-medium transition ${
//       isActive
//         ? "bg-indigo-600 text-white shadow"
//         : "text-gray-700 hover:bg-gray-100"
//     }`
//   }
// >
//   {item.name}
// </NavLink>

//           ))}
//         </nav>

//         {/* Logout Button */}
//         <button
//           onClick={handleLogout}
//           className="mt-10 flex items-center gap-2 text-sm text-red-600 hover:text-red-800"
//         >
//           <LogOut className="w-4 h-4" />
//           Logout
//         </button>
//       </aside>

//       {/* Content Area */}
//       <main className="flex-1 overflow-y-auto p-6">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default TenantLayout;







// import React from "react";
// import { NavLink, Outlet, useNavigate } from "react-router-dom";
// import { LogOut } from "lucide-react";
// import { useAuth } from "../User_Section/Context/AuthContext";

// const TenantLayout = () => {
//   const navigate = useNavigate();
//   const { logout } = useAuth();

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   const navItems = [
//     { name: "Dashboard", path: "/tenant" },
//     { name: "My Profile", path: "/tenant/profile" },
//     { name: "My Room", path: "/tenant/my-room" },
//     { name: "Rent Payments", path: "/tenant/rent-payments" },
//     { name: "Maintenance", path: "/tenant/maintenance" },
//     { name: "Lease Agreement", path: "/tenant/lease" },
//     { name: "Announcements", path: "/tenant/announcements" },
//     { name: "Support", path: "/tenant/support" },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       {/* Top Tab Navigation */}
//       <div className="bg-white shadow p-4 flex items-center justify-between">
//         <div className="flex space-x-4 overflow-x-auto">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               className={({ isActive }) =>
//                 `px-4 py-2 rounded-md font-medium transition whitespace-nowrap ${
//                   isActive
//                     ? "bg-indigo-600 text-white shadow"
//                     : "text-gray-700 hover:bg-gray-100"
//                 }`
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}
//         </div>
//         {/* Logout Button */}
//         <button
//           onClick={handleLogout}
//           className="flex items-center gap-2 text-sm text-red-600 hover:text-red-800"
//         >
//           <LogOut className="w-4 h-4" />
//           Logout
//         </button>
//       </div>

//       {/* Page Content */}
//       <main className="flex-1 p-6">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default TenantLayout;




import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { LogOut, User } from "lucide-react";
import { useAuth } from "../User_Section/Context/AuthContext";

const TenantLayout = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navItems = [
    // { name: "Dashboard", path: "/tenant" },
    { name: "Properties", path: "/tenant/properties" }, // ✅ UPDATED
    { name: "Rent Payments", path: "/tenant/rent-payments" },
    { name: "Maintenance", path: "/tenant/maintenance" },
    { name: "Lease Agreement", path: "/tenant/lease" },
    { name: "Announcements", path: "/tenant/announcements" },
    { name: "Support", path: "/tenant/support" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">
          Hey Tenant{user?.name ? `, ${user.name}` : ""} 👋
        </h1>
        <div className="mt-3 sm:mt-0 flex gap-4 items-center">
          <button
            onClick={() => navigate("/tenant/profile")}
            className="flex items-center gap-1 text-[#5c4eff] hover:text-indigo-800 text-sm"
          >
            <User className="w-4 h-4" />
            Profile
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 text-red-600 hover:text-red-800 text-sm"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="mt-6 flex justify-center">
        <div className="flex flex-wrap justify-center gap-3 px-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
                  isActive
                    ? "bg-[#5c4eff] text-white border-[#5c4eff] shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default TenantLayout;
