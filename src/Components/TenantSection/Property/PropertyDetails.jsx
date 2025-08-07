import React from "react";
import { useParams } from "react-router-dom";

const propertyDetails = {
  prop1: {
    name: "Sunshine PG",
    address: "45 MG Road, Indore, MP",
    rent: "₹6,500",
    type: "PG",
    status: "Active",
    facilities: ["WiFi", "Laundry", "CCTV", "Meals"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  prop2: {
    name: "Blue Ridge Apartment",
    address: "Tower B, Hinjewadi, Pune, MH",
    rent: "₹12,000",
    type: "Flat",
    status: "Pending",
    facilities: ["Parking", "Power Backup", "Gym", "Balcony"],
    image:
      "https://images.unsplash.com/photo-1586105251261-72a756497a12?auto=format&fit=crop&w=800&q=80",
  },
  prop3: {
    name: "Green Valley Hostel",
    address: "BTM Layout, Bangalore, KA",
    rent: "₹4,800",
    type: "Hostel",
    status: "Active",
    facilities: ["Shared Rooms", "Common Area", "Security"],
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348223?auto=format&fit=crop&w=800&q=80",
  },
};

const TenantPropertyDetails = () => {
  const { id } = useParams();
  const property = propertyDetails[id];

  if (!property) return <p className="text-red-500">Property not found.</p>;

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h2 className="text-2xl font-bold mb-1">{property.name}</h2>
      <p className="text-sm text-gray-500 mb-4">{property.address}</p>
      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
        <div><strong>Type:</strong> {property.type}</div>
        <div><strong>Status:</strong> {property.status}</div>
        <div><strong>Rent:</strong> {property.rent} / month</div>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Facilities:</h4>
        <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
          {property.facilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TenantPropertyDetails;
