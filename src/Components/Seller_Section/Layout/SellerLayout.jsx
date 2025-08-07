// src/Layouts/SellerLayout.jsx
import React from "react";
import SellerNavbar from "../Navbar/SellerNavbar";

import { Outlet } from "react-router-dom";

const SellerLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SellerNavbar />
      <main className="flex-1 p-4 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default SellerLayout;
