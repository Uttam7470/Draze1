
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const LandlordLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-4 ml-0">
        <Outlet />
      </div>
    </div>
  );
};

export default LandlordLayout;
