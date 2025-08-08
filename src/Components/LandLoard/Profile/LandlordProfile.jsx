
import React, { useEffect, useState } from "react";
import {
  HiOutlineMail, HiOutlinePhone, HiOutlineCake, HiOutlineUser,
} from "react-icons/hi";
import {
  MdLocationOn, MdOutlinePin, MdFingerprint, MdAccountBox,
} from "react-icons/md";
import { FiLogOut, FiEdit, FiSave } from "react-icons/fi";

function LandlordProfile() {
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [previewImage, setPreviewImage] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      if (!token) {
        console.error("No token found");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("https://pg-hostel.nearprop.com/api/landlord/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (data.success) {
          setProfile(data.landlord);
          setFormData(data.landlord);
        } else {
          console.error("Profile fetch failed:", data.message);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profilePhoto") {
      setFormData({ ...formData, profilePhoto: files[0] });
      setPreviewImage(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleUpdate = async () => {
    try {
      const form = new FormData();
      for (let key in formData) {
        form.append(key, formData[key]);
      }

      const res = await fetch("https://pg-hostel.nearprop.com/api/landlord/profile", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: form,
      });

      const data = await res.json();

      if (data.success) {
        alert("Profile updated successfully!");
        setProfile(data.landlord);
        setEditMode(false);
      } else {
        alert("Failed to update profile");
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading profile...</div>;
  }

  if (!profile) {
    return <div className="text-center py-10 text-red-500">Failed to load profile.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-10 px-4 flex justify-center items-center">
      <div className="relative bg-white shadow-2xl rounded-2xl w-full max-w-4xl p-8">
        
        {/* Logout + Edit Buttons */}
        <div className="absolute top-6 right-6 flex gap-4">
          {editMode ? (
            <button onClick={handleUpdate} className="flex items-center gap-2 text-sm bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow">
              <FiSave /> Save
            </button>
          ) : (
            <button onClick={() => setEditMode(true)} className="flex items-center gap-2 text-sm bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow">
              <FiEdit /> Edit
            </button>
          )}
          <button onClick={handleLogout} className="flex items-center gap-2 text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow">
            <FiLogOut /> Logout
          </button>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Landlord Profile</h1>

        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          {editMode ? (
            <div className="flex flex-col items-center gap-2">
              <img
                src={previewImage || `https://pg-hostel.nearprop.com${formData.profilePhoto}`}
                alt="Preview"
                className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <input type="file" name="profilePhoto" accept="image/*" onChange={handleChange} />
            </div>
          ) : (
            <img
              src={`https://pg-hostel.nearprop.com${profile.profilePhoto}`}
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
            />
          )}
        </div>

        {/* Editable Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <Field label="Name" icon={<HiOutlineUser />} value={formData.name} name="name" onChange={handleChange} editMode={editMode} />
          <Field label="Email" icon={<HiOutlineMail />} value={formData.email} name="email" onChange={handleChange} editMode={editMode} />
          <Field label="Mobile" icon={<HiOutlinePhone />} value={formData.mobile} name="mobile" onChange={handleChange} editMode={editMode} />
          <Field label="DOB" icon={<HiOutlineCake />} value={formData.dob?.slice(0, 10)} name="dob" onChange={handleChange} editMode={editMode} type="date" />
          <Field label="Gender" icon={<HiOutlineUser />} value={formData.gender} name="gender" onChange={handleChange} editMode={editMode} />
          <Field label="Address" icon={<MdLocationOn />} value={formData.address} name="address" onChange={handleChange} editMode={editMode} />
          <Field label="Pin Code" icon={<MdOutlinePin />} value={formData.pinCode} name="pinCode" onChange={handleChange} editMode={editMode} />
          <Field label="State" icon={<MdLocationOn />} value={formData.state} name="state" onChange={handleChange} editMode={editMode} />
          <Field label="Aadhaar Number" icon={<MdFingerprint />} value={formData.aadhaarNumber} name="aadhaarNumber" onChange={handleChange} editMode={editMode} />
          <Field label="PAN Number" icon={<MdAccountBox />} value={formData.panNumber} name="panNumber" onChange={handleChange} editMode={editMode} />
        </div>
      </div>
    </div>
  );
}

function Field({ label, icon, value, name, onChange, editMode, type = "text" }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xl">{icon}</span>
      {editMode ? (
        <div className="flex flex-col w-full">
          <label className="text-sm text-gray-500">{label}</label>
          <input
            type={type}
            name={name}
            value={value || ""}
            onChange={onChange}
            className="border px-3 py-2 rounded-md focus:outline-none focus:ring w-full"
          />
        </div>
      ) : (
        <span className="flex flex-col">
          <span className="text-sm text-gray-500">{label}</span>
          <span className="font-medium">{value}</span>
        </span>
      )}
    </div>
  );
}

export default LandlordProfile;
