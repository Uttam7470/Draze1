
// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(() => {
//     const storedUser = localStorage.getItem("user");
//     return storedUser ? JSON.parse(storedUser) : null;
//   });

//   const [role, setRole] = useState(() => {
//     const storedUser = localStorage.getItem("user");
//     return storedUser ? JSON.parse(storedUser).role : "Tenant";
//   });

//   const login = (userData) => {

//     // userData must include role
//     setUser(userData);
//     setRole(userData.role || "Tenant");
//     localStorage.setItem("user", JSON.stringify(userData));
//   };

//   const completeSignup = (signupData) => {
//     const updatedUser = {
//       ...user,
//       ...signupData,
//       isRegistered: true,
//     };
//     setUser(updatedUser);
//     localStorage.setItem("user", JSON.stringify(updatedUser));
//   };

//   const logout = () => {
//     setUser(null);
//     setRole("Tenant");
//     localStorage.removeItem("user");
//   };

//   const switchRole = (newRole) => {
//     setRole(newRole);
//     if (user) {
//       const updatedUser = { ...user, role: newRole };
//       setUser(updatedUser);
//       localStorage.setItem("user", JSON.stringify(updatedUser));
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         role,
//         login,
//         logout,
//         switchRole,
//         completeSignup,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }



import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [role, setRole] = useState(() => {
    return localStorage.getItem("role") || null;
  });

  const login = (userData, userRole) => {
    setUser(userData);
    setRole(userRole);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("role", userRole);
  };

  const logout = () => {
    setUser(null);
    setRole(null);
    localStorage.removeItem("user");
    localStorage.removeItem("role");
  };

  const switchRole = (newRole) => {
    setRole(newRole);
    localStorage.setItem("role", newRole);
  };

  const updateUser = (updatedFields) => {
    const updatedUser = { ...user, ...updatedFields };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser)); // 🧠 persist to localStorage
  };

  return (
    <AuthContext.Provider
      value={{ user, role, login, logout, switchRole, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
