import React from "react";
import { useNavigate } from "react-router-dom";

const dummyProperties = [
  {
    id: "prop1",
    name: "Sunshine PG",
    type: "PG",
    status: "Active",
    location: "Indore, MP",
    rent: "₹6,500",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "prop2",
    name: "Blue Ridge Apartment",
    type: "Flat",
    status: "Pending",
    location: "Pune, MH",
    rent: "₹12,000",
    image:
      "https://images.unsplash.com/photo-1586105251261-72a756497a12?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "prop3",
    name: "Green Valley Hostel",
    type: "Hostel",
    status: "Active",
    location: "Bangalore, KA",
    rent: "₹4,800",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348223?auto=format&fit=crop&w=800&q=80",
  },
];

const TenantProperties = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/tenant/properties/${id}`);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">My Properties</h2>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#5c4eff] text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">Property Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Type</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {dummyProperties.map((property) => (
              <tr key={property.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="font-semibold">{property.name}</div>
                  <div className="text-sm text-gray-500">{property.location}</div>
                </td>
                <td className="px-6 py-4 text-sm">{property.type}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-2 py-1 text-xs rounded-full ${
                      property.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {property.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleViewDetails(property.id)}
                    className="text-sm px-4 py-1 bg-[#5c4eff] text-white rounded hover:bg-indigo-700 transition"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TenantProperties;
