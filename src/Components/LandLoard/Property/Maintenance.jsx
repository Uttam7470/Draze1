import React, { useState } from "react";
import { FaTools } from "react-icons/fa";

const Maintenance = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      title: "Leaking tap in kitchen",
      property: "Flat 201, Green Residency",
      date: "2025-08-03",
      status: "Pending",
    },
    {
      id: 2,
      title: "AC not working",
      property: "Room 2A, Sunshine PG",
      date: "2025-07-29",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Broken window pane",
      property: "Villa 3, Lake View",
      date: "2025-07-25",
      status: "Resolved",
    },
    {
      id: 4,
      title: "Clogged bathroom drain",
      property: "Room 101, Lotus Hostel",
      date: "2025-08-01",
      status: "Pending",
    },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <FaTools /> Maintenance
      </h2>
      <p className="text-gray-600 mb-4">
        Manage maintenance requests and related activities here.
      </p>

      {/* Maintenance content area */}
      <div className="border rounded-lg p-4 bg-white shadow-sm">
        {requests.length > 0 ? (
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b text-left">
                <th className="p-2">Title</th>
                <th className="p-2">Property</th>
                <th className="p-2">Date</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr key={req.id} className="border-b">
                  <td className="p-2">{req.title}</td>
                  <td className="p-2">{req.property}</td>
                  <td className="p-2">{req.date}</td>
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        req.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : req.status === "In Progress"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {req.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-sm text-gray-500 text-center">
            No maintenance records yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Maintenance;
