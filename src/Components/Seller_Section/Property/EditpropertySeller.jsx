import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const amenitiesList = [
  "WiFi", "Parking", "Security", "Power Backup", "Water Supply",
  "Lift", "Garden", "CCTV", "Housekeeping"
];

const EditpropertySeller = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("properties")) || [];
    const selected = saved[id];
    if (selected) {
      setForm(selected);
    } else {
      navigate("/"); // redirect if property not found
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const toggleAmenity = (amenity) => {
    setForm((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const saved = JSON.parse(localStorage.getItem("properties")) || [];
    saved[id] = form;
    localStorage.setItem("properties", JSON.stringify(saved));
    alert("✅ Property updated successfully!");
    navigate(`/seller/property/${id}`);
  };

  if (!form) return <div className="p-8 mt-20">Loading...</div>;

  return (
    <div className="min-h-screen pt-24 px-4 bg-gray-100 flex justify-center">
      <div className="bg-white w-full max-w-3xl p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
          Edit Property
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1 Fields */}
          <div className="space-y-4">
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Property Title"
              className="w-full p-3 border rounded"
              required
            />
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full p-3 border rounded text-gray-700"
              required
            >
              <option value="">Select Property Type</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Flat">Flat</option>
              <option value="PG">PG</option>
              <option value="Hostel">Hostel</option>
            </select>
            <input
              name="price"
              type="number"
              value={form.price}
              onChange={handleChange}
              placeholder="Price (₹)"
              className="w-full p-3 border rounded"
              required
            />
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full p-3 border rounded"
              rows="4"
              required
            />
            <input
              name="images"
              value={form.images}
              onChange={handleChange}
              placeholder="Enter image URLs (comma-separated)"
              className="w-full p-3 border rounded"
              required
            />
          </div>

          {/* Step 2 Fields */}
          <div className="space-y-4 pt-4">
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full p-3 border rounded"
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
                className="p-3 border rounded"
                required
              />
              <input
                name="state"
                value={form.state}
                onChange={handleChange}
                placeholder="State"
                className="p-3 border rounded"
                required
              />
            </div>
            <input
              name="pincode"
              value={form.pincode}
              onChange={handleChange}
              placeholder="Pincode"
              className="w-full p-3 border rounded"
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                name="bedroom"
                value={form.bedroom}
                onChange={handleChange}
                placeholder="Bedrooms"
                type="number"
                className="p-3 border rounded"
                required
              />
              <input
                name="bathroom"
                value={form.bathroom}
                onChange={handleChange}
                placeholder="Bathrooms"
                type="number"
                className="p-3 border rounded"
                required
              />
            </div>

            {/* Amenities */}
            <div>
              <p className="mb-2 font-medium text-gray-700">Amenities</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {amenitiesList.map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={`flex items-center justify-between p-2 border rounded hover:bg-indigo-100 transition ${
                      form.amenities.includes(item)
                        ? "bg-indigo-200 border-indigo-500"
                        : ""
                    }`}
                    onClick={() => toggleAmenity(item)}
                  >
                    {item}
                    {form.amenities.includes(item) && (
                      <FaCheckCircle className="text-green-600" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3 Fields */}
          <div className="space-y-4 pt-4">
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              className="w-full p-3 border rounded"
              required
            />
            <input
              name="contact"
              value={form.contact}
              onChange={handleChange}
              placeholder="Contact Number"
              type="tel"
              className="w-full p-3 border rounded"
              required
            />
          </div>

          {/* Submit */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-4 py-3 rounded hover:bg-green-700 text-lg font-semibold"
            >
              Update Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditpropertySeller;
