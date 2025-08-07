// import { useState } from "react";
// import { Menu, X, User } from "lucide-react";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../Context/AuthContext";
// import drazeLogo from "../../../assets/logo/drazeLogo.png";
// import Login from "../Login&Signup/Login";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isProfileClicked, setIsProfileClicked] = useState(false);
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [selectedRole, setSelectedRole] = useState(null);

//   const location = useLocation();
//   const navigate = useNavigate();
//   const currentPath = location.pathname;

//   const { user, role, switchRole } = useAuth();

//   const navLinks = [
//     { name: "Home", to: "/" },
//     { name: "Property", to: "/properties" },
//     { name: "Reel", to: "/reel" },
//     { name: "Contact", to: "/contact" },
//     { name: "Other", to: "/other" },
//   ];

//   const handleRoleClick = (newRole) => {
//     if (!user) {
//       setSelectedRole(newRole);
//       setShowLoginModal(true);
//       setIsProfileClicked(false);
//     } else {
//       switchRole(newRole);
//       setIsProfileClicked(false);

//       if (newRole === "Landlord") {
//         navigate("/landlord");
//       } else if (newRole === "User") {
//         navigate("/user/profile");
//       } else if (newRole === "Seller") {
//         navigate("/seller");
//       } else if (newRole === "Tenant") {
//         navigate("/tenant");
//       }
//     }
//   };

//   return (
//     <>
//       <nav className="backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50 bg-white "> 
//         {/* //bg-transparent  */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             {/* Logo */}
//             <div className="flex items-center">
//               <img
//                 src={drazeLogo}
//                 alt="Draze Logo"
//                 className="h-40 w-auto mr-2 max-w-none"
//               />
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex space-x-10 font-medium text-gray-800 relative">
//               {navLinks.map((link) => {
//                 const isActive = currentPath === link.to;
//                 return (
//                   <div
//                     key={link.name}
//                     className="relative flex flex-col items-center"
//                   >
//                     {isActive && (
//                       <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                         <div
//                           className="w-0 h-0"
//                           style={{
//                             borderLeft: "6px solid transparent",
//                             borderRight: "6px solid transparent",
//                             borderTop: "6px solid #facc15",
//                           }}
//                         />
//                       </div>
//                     )}
//                     <NavLink
//                       to={link.to}
//                       className={`pb-2 transition ${
//                         isActive
//                           ? "text-[#5C4EFF] font-semibold"
//                           : "text-black"
//                       } hover:text-[#5C4EFF]`}
//                     >
//                       {link.name}
//                     </NavLink>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Profile */}
//             <div className="relative">
//               <div className="flex items-center space-x-4">
//                 <button
//                   onClick={() => setIsProfileClicked(!isProfileClicked)}
//                   className={`transition ${
//                     isProfileClicked ? "text-[#5C4EFF]" : "text-gray-800"
//                   } hover:text-[#5C4EFF]`}
//                 >
//                   <User className="w-6 h-6 cursor-pointer" />
//                 </button>

//                 {/* Mobile Hamburger */}
//                 <div className="md:hidden">
//                   <button
//                     onClick={() => setIsOpen(!isOpen)}
//                     className="text-gray-700 hover:text-[#5C4EFF] focus:outline-none"
//                   >
//                     {isOpen ? (
//                       <X className="w-6 h-6" />
//                     ) : (
//                       <Menu className="w-6 h-6" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {/* Role Dropdown */}
//               {isProfileClicked && (
//                 <div className="absolute top-12 right-0 bg-white shadow-lg rounded-md z-50 w-40">
//                   <ul className="divide-y divide-gray-200 text-sm">
//                     {["User", "Landlord", "Seller", "Tenant"].map((r) => (
//                       <li key={r}>
//                         <button
//                           className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
//                             role === r ? "bg-gray-200 font-semibold" : ""
//                           }`}
//                           onClick={() => handleRoleClick(r)}
//                         >
//                           {r}
//                         </button>
//                       </li>
//                     ))}

//                     {/* My Profile */}
//                     {user && (
//                       <li>
//                         <NavLink
//                           to="/user/profile"
//                           onClick={() => setIsProfileClicked(false)}
//                           className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                         >
//                           My Profile
//                         </NavLink>
//                       </li>
//                     )}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden bg-white/90 px-4 pt-2 pb-4 space-y-4 shadow-md border-t border-white/40">
//             {navLinks.map((link) => {
//               const isActive = currentPath === link.to;
//               return (
//                 <NavLink
//                   key={link.name}
//                   to={link.to}
//                   onClick={() => setIsOpen(false)}
//                   className={`block text-gray-800 ${
//                     isActive ? "font-semibold text-[#5C4EFF]" : ""
//                   } hover:text-[#5C4EFF] transition`}
//                 >
//                   {link.name}
//                 </NavLink>
//               );
//             })}
//           </div>
//         )}
//       </nav>

//       {/* Login Modal */}
//       {showLoginModal && (
//         <Login
//           role={selectedRole}
//           onClose={() => setShowLoginModal(false)}
//         />
//       )}
//     </>
//   );
// }

// export default Navbar;









// import { useState } from "react";
// import { Menu, X, User } from "lucide-react";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../Context/AuthContext";
// import drazeLogo from "../../../assets/logo/drazeLogo.png";
// import Login from "../Login&Signup/Login";
// import './navbar.css';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isProfileClicked, setIsProfileClicked] = useState(false);
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [selectedRole, setSelectedRole] = useState(null);

//   const location = useLocation();
//   const navigate = useNavigate();
//   const currentPath = location.pathname;

//   const { user, role, switchRole } = useAuth();

//   const navLinks = [
//     { name: "Home", to: "/" },
//     { name: "Property", to: "/properties" },
//     { name: "Reel", to: "/reel" },
//     { name: "Contact", to: "/contact" },
//     { name: "Other", to: "/other" },
//   ];

//   const handleRoleClick = (newRole) => {
//     if (!user) {
//       setSelectedRole(newRole);
//       setShowLoginModal(true);
//       setIsProfileClicked(false);
//     } else {
//       switchRole(newRole);
//       setIsProfileClicked(false);

//       if (newRole === "Landlord") {
//         navigate("/landlord");
//       } else if (newRole === "User") {
//         navigate("/user/profile");
//       } else if (newRole === "Seller") {
//         navigate("/seller");
//       } else if (newRole === "Tenant") {
//         navigate("/tenant");
//       }
//     }
//   };

//   return (
//     <>
//       <nav className="backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             {/* Logo */}
//             <div className="flex items-center">
//               <img
//                 src={drazeLogo}
//                 alt="Draze Logo"
//                 className="h-40 w-auto mr-2 max-w-none"
//               />
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex space-x-10 font-medium text-gray-800 relative">
//               {navLinks.map((link) => {
//                 const isActive = currentPath === link.to;
//                 return (
//                   <div
//                     key={link.name}
//                     className="relative flex flex-col items-center"
//                   >
//                     {isActive && (
//                       <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                         <div
//                           className="w-0 h-0"
//                           style={{
//                             borderLeft: "6px solid transparent",
//                             borderRight: "6px solid transparent",
//                             borderTop: "6px solid #facc15",
//                           }}
//                         />
//                       </div>
//                     )}
//                     <NavLink
//                       to={link.to}
//                       className={({ isActive }) =>
//                         `relative px-4 py-2 rounded-md text-sm transition-all duration-200 ease-in-out transform perspective-1000 hover:scale-110 hover:shadow-3d hover:bg-[#5C4EFF] hover:text-white active:scale-90 ${
//                           isActive
//                             ? "bg-[#5C4EFF] text-white shadow-3d scale-105 font-semibold"
//                             : "text-black bg-transparent shadow-sm"
//                         }`
//                       }
//                     >
//                       {link.name}
//                     </NavLink>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Profile */}
//             <div className="relative">
//               <div className="flex items-center space-x-4">
//                 <button
//                   onClick={() => setIsProfileClicked(!isProfileClicked)}
//                   className={`transition ${
//                     isProfileClicked ? "text-[#5C4EFF]" : "text-gray-800"
//                   } hover:text-[#5C4EFF]`}
//                 >
//                   <User className="w-6 h-6 cursor-pointer" />
//                 </button>

//                 {/* Mobile Hamburger */}
//                 <div className="md:hidden">
//                   <button
//                     onClick={() => setIsOpen(!isOpen)}
//                     className="text-gray-700 hover:text-[#5C4EFF] focus:outline-none"
//                   >
//                     {isOpen ? (
//                       <X className="w-6 h-6" />
//                     ) : (
//                       <Menu className="w-6 h-6" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {/* Role Dropdown */}
//               {isProfileClicked && (
//                 <div className="absolute top-12 right-0 bg-white shadow-lg rounded-md z-50 w-40">
//                   <ul className="divide-y divide-gray-200 text-sm">
//                     {["User", "Landlord", "Seller", "Tenant"].map((r) => (
//                       <li key={r}>
//                         <button
//                           className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
//                             role === r ? "bg-gray-200 font-semibold" : ""
//                           }`}
//                           onClick={() => handleRoleClick(r)}
//                         >
//                           {r}
//                         </button>
//                       </li>
//                     ))}

//                     {/* My Profile */}
//                     {user && (
//                       <li>
//                         <NavLink
//                           to="/user/profile"
//                           onClick={() => setIsProfileClicked(false)}
//                           className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                         >
//                           My Profile
//                         </NavLink>
//                       </li>
//                     )}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden bg-white/90 px-4 pt-2 pb-4 space-y-4 shadow-md">
//             {navLinks.map((link) => {
//               const isActive = currentPath === link.to;
//               return (
//                 <NavLink
//                   key={link.name}
//                   to={link.to}
//                   onClick={() => setIsOpen(false)}
//                   className={({ isActive }) =>
//                     `block px-4 py-2 rounded-md text-sm transition-all duration-200 ease-in-out transform perspective-1000 hover:scale-110 hover:shadow-3d hover:bg-[#5C4EFF] hover:text-white active:scale-90 ${
//                       isActive
//                         ? "bg-[#5C4EFF] text-white shadow-3d scale-105 font-semibold"
//                         : "text-gray-800 bg-transparent shadow-sm"
//                     }`
//                   }
//                 >
//                   {link.name}
//                 </NavLink>
//               );
//             })}
//           </div>
//         )}
//       </nav>

//       {/* Login Modal */}
//       {showLoginModal && (
//         <Login
//           role={selectedRole}
//           onClose={() => setShowLoginModal(false)}
//         />
//       )}
//     </>
//   );
// }

// export default Navbar;







import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import drazeLogo from "../../../assets/logo/drazeLogo.png";
import Login from "../Login&Signup/Login";
import './navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const { user, role, switchRole } = useAuth();

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Property", to: "/properties" },
    { name: "Reel", to: "/reel" },
    { name: "Contact", to: "/contact" },
    { name: "About Us", to: "/about" },
  ];

  const handleRoleClick = (newRole) => {
    if (!user) {
      setSelectedRole(newRole);
      setShowLoginModal(true);
      setIsProfileClicked(false);
    } else {
      switchRole(newRole);
      setIsProfileClicked(false);

      if (newRole === "Landlord") {
        navigate("/landlord");
      } else if (newRole === "User") {
        navigate("/user/profile");
      } else if (newRole === "Seller") {
        navigate("/seller");
      } else if (newRole === "Tenant") {
        navigate("/tenant");
      }
    }
  };

  return (
    <>
      <nav className="backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={drazeLogo}
                alt="Draze Logo"
                className="h-8 w-auto mr-8 max-w-none"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10 font-medium text-gray-800 relative">
              {navLinks.map((link) => {
                const isActive = currentPath === link.to;
                return (
                  <div
                    key={link.name}
                    className="relative flex flex-col items-center"
                  >
                    {isActive && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div
                          className="w-0 h-0"
                          style={{
                            borderLeft: "6px solid transparent",
                            borderRight: "6px solid transparent",
                            borderTop: "6px solid #facc15",
                          }}
                        />
                      </div>
                    )}
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `relative px-4 py-2 rounded-md text-sm transition-all duration-200 ease-in-out transform perspective-1000 hover:scale-110 hover:shadow-3d hover:bg-[#5C4EFF] hover:text-white active:scale-90 ${
                          isActive
                            ? "bg-[#5C4EFF] text-white shadow-3d scale-105 font-semibold"
                            : "text-black bg-transparent shadow-sm"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </div>
                );
              })}
            </div>

            {/* Profile */}
            <div className="relative">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsProfileClicked(!isProfileClicked)}
                  className={`transition ${
                    isProfileClicked ? "text-[#5C4EFF]" : "text-gray-800"
                  } hover:text-[#5C4EFF]`}
                >
                  <User className="w-6 h-6 cursor-pointer" />
                </button>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-gray-700 hover:text-[#5C4EFF] focus:outline-none"
                  >
                    {isOpen ? (
                      <X className="w-6 h-6" />
                    ) : (
                      <Menu className="w-6 h-6" />
                    )}
                  </button>
                </div>
              </div>

              {/* Role Dropdown */}
              {isProfileClicked && (
                <div className="absolute top-12 right-0 bg-white shadow-lg rounded-md z-50 w-40">
                  <ul className="divide-y divide-gray-200 text-sm">
                    {["User", "Landlord", "Seller", "Tenant"].map((r) => (
                      <li key={r}>
                        <button
                          className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                            role === r ? "bg-gray-200 font-semibold" : ""
                          }`}
                          onClick={() => handleRoleClick(r)}
                        >
                          {r}
                        </button>
                      </li>
                    ))}

                    {/* My Profile */}
                    {user && (
                      <li>
                        <NavLink
                          to="/user/profile"
                          onClick={() => setIsProfileClicked(false)}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                          My Profile
                        </NavLink>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/90 px-4 pt-2 pb-4 space-y-4 shadow-md">
            {navLinks.map((link) => {
              const isActive = currentPath === link.to;
              return (
                <NavLink
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-md text-sm transition-all duration-200 ease-in-out transform perspective-1000 hover:scale-110 hover:shadow-3d hover:bg-[#5C4EFF] hover:text-white active:scale-90 ${
                      isActive
                        ? "bg-[#5C4EFF] text-white shadow-3d scale-105 font-semibold"
                        : "text-gray-800 bg-transparent shadow-sm"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {showLoginModal && (
        <Login
          role={selectedRole}
          onClose={() => setShowLoginModal(false)}
          onLoginSuccess={(finalRole) => {
            setShowLoginModal(false);
            switchRole(finalRole);
            if (finalRole === "Landlord") navigate("/landlord");
            else if (finalRole === "User") navigate("/user/profile");
            else if (finalRole === "Tenant") navigate("/tenant");
            else if (finalRole === "Seller") navigate("/seller");
          }}
        />
      )}
    </>
  );
}

export default Navbar;


























// import { useState } from "react";
// import { Menu, X, User } from "lucide-react";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../Context/AuthContext";
// import drazeLogo from "../../../assets/logo/drazeLogo.png";
// import Login from "../Login&Signup/Login";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isProfileClicked, setIsProfileClicked] = useState(false);
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [selectedRole, setSelectedRole] = useState(null);

//   const location = useLocation();
//   const navigate = useNavigate();
//   const currentPath = location.pathname;

//   const { user, role, switchRole } = useAuth();

//   const navLinks = [
//     { name: "Home", to: "/" },
//     { name: "Property", to: "/properties" },
//     { name: "Reel", to: "/reel" },
//     { name: "Contact", to: "/contact" },
//     { name: "Other", to: "/other" },
//   ];

//   const handleRoleClick = (newRole) => {
//     if (!user) {
//       setSelectedRole(newRole);
//       setShowLoginModal(true);
//       setIsProfileClicked(false);
//     } else {
//       switchRole(newRole);
//       setIsProfileClicked(false);

//       if (newRole === "Landlord") {
//         navigate("/landlord");
//       } else if (newRole === "User") {
//         navigate("/user/profile");
//       } else if (newRole === "Seller") {
//         navigate("/seller");
//       } else if (newRole === "Tenant") {
//         navigate("/tenant");
//       }
//     }
//   };

//   return (
//     <>
//       <nav className="backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50 bg-transparent">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             {/* Logo */}
//             <div className="flex items-center">
//               <img
//                 src={drazeLogo}
//                 alt="Draze Logo"
//                 className="h-40 w-auto mr-2 max-w-none"
//               />
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex space-x-4">
//               {navLinks.map((link) => {
//                 const isActive = currentPath === link.to;
//                 return (
//                   <NavLink
//                     key={link.name}
//                     to={link.to}
//                     className={`px-4 py-2 rounded-md transition font-medium ${
//                       isActive
//                         ? "bg-[#5C4EFF] text-white shadow"
//                         : "bg-white text-[#5C4EFF] hover:bg-[#5C4EFF] hover:text-white"
//                     }`}
//                   >
//                     {link.name}
//                   </NavLink>
//                 );
//               })}
//             </div>

//             {/* Profile & Hamburger */}
//             <div className="relative">
//               <div className="flex items-center space-x-4">
//                 <button
//                   onClick={() => setIsProfileClicked(!isProfileClicked)}
//                   className={`transition ${
//                     isProfileClicked ? "text-[#5C4EFF]" : "text-gray-800"
//                   } hover:text-[#5C4EFF]`}
//                 >
//                   <User className="w-6 h-6 cursor-pointer" />
//                 </button>

//                 {/* Mobile Hamburger */}
//                 <div className="md:hidden">
//                   <button
//                     onClick={() => setIsOpen(!isOpen)}
//                     className="text-gray-700 hover:text-[#5C4EFF] focus:outline-none"
//                   >
//                     {isOpen ? (
//                       <X className="w-6 h-6" />
//                     ) : (
//                       <Menu className="w-6 h-6" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {/* Role Dropdown */}
//               {isProfileClicked && (
//                 <div className="absolute top-12 right-0 bg-white shadow-lg rounded-md z-50 w-40">
//                   <ul className="divide-y divide-gray-200 text-sm">
//                     {["User", "Landlord", "Seller", "Tenant"].map((r) => (
//                       <li key={r}>
//                         <button
//                           className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
//                             role === r ? "bg-gray-200 font-semibold" : ""
//                           }`}
//                           onClick={() => handleRoleClick(r)}
//                         >
//                           {r}
//                         </button>
//                       </li>
//                     ))}
//                     {user && (
//                       <li>
//                         <NavLink
//                           to="/user/profile"
//                           onClick={() => setIsProfileClicked(false)}
//                           className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                         >
//                           My Profile
//                         </NavLink>
//                       </li>
//                     )}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden bg-white/90 px-4 pt-2 pb-4 space-y-3 shadow-md border-t border-white/40">
//             {navLinks.map((link) => {
//               const isActive = currentPath === link.to;
//               return (
//                 <NavLink
//                   key={link.name}
//                   to={link.to}
//                   onClick={() => setIsOpen(false)}
//                   className={`block w-full text-center px-4 py-2 rounded-md transition font-medium ${
//                     isActive
//                       ? "bg-[#5C4EFF] text-white shadow"
//                       : "bg-white text-[#5C4EFF] hover:bg-[#5C4EFF] hover:text-white"
//                   }`}
//                 >
//                   {link.name}
//                 </NavLink>
//               );
//             })}
//           </div>
//         )}
//       </nav>

//       {/* Login Modal */}
//       {showLoginModal && (
//         <Login role={selectedRole} onClose={() => setShowLoginModal(false)} />
//       )}
//     </>
//   );
// }

// export default Navbar;
