import React, { useState } from "react";

const TenantMaintenance = () => {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [requests, setRequests] = useState([
    {
      title: "Leaky tap in bathroom",
      description: "Water keeps dripping, even after turning off.",
      status: "Pending",
      date: "2025-07-25",
    },
    {
      title: "Broken light in room",
      description: "Tube light not working in my room.",
      status: "Resolved",
      date: "2025-06-18",
    },
  ]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRequest = {
      ...formData,
      status: "Pending",
      date: new Date().toISOString().split("T")[0],
    };
    setRequests((prev) => [newRequest, ...prev]);
    setFormData({ title: "", description: "" });
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Maintenance Requests</h2>

      {/* Request Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow mb-8 space-y-4"
      >
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
            placeholder="e.g. Water leakage"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Describe the issue in detail..."
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit Request
        </button>
      </form>

      {/* Request List */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-xs text-gray-600 uppercase">
            <tr>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Description</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{req.title}</td>
                <td className="px-4 py-2">{req.description}</td>
                <td className="px-4 py-2">{req.date}</td>
                <td
                  className={`px-4 py-2 font-medium ${
                    req.status === "Resolved"
                      ? "text-green-600"
                      : "text-orange-500"
                  }`}
                >
                  {req.status}
                </td>
              </tr>
            ))}
            {requests.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center text-gray-400 py-6">
                  No requests yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TenantMaintenance;
