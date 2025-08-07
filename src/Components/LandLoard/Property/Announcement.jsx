import React from "react";
import { FaBullhorn } from "react-icons/fa";

const Announcement = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <FaBullhorn /> Announcement
      </h2>
      <p>Create announcements or send messages to tenants here.</p>
      {/* Add announcement form and history list */}
    </div>
  );
};

export default Announcement;
