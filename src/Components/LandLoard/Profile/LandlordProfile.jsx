


// import React from "react";
// import { FaUserEdit } from "react-icons/fa";

// const LandlordProfile = () => {
//   return (
//     <div className="bg-white shadow rounded-xl p-6 mb-8">
//       <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-6">
//         {/* Profile Image */}
//         <div className="flex-shrink-0 text-center sm:text-left">
//           <img
//             src="https://images.unsplash.com/photo-1624610806703-99c0852c31c0?w=600&auto=format&fit=crop&q=60"
//             alt="Profile"
//             className="w-28 h-28 rounded-full object-cover mx-auto sm:mx-0"
//           />
//         </div>

//         {/* Profile Details */}
//         <div className="flex-1 text-center sm:text-left">
//           <h4 className="text-xl font-semibold text-gray-800 mb-1">Suman Sharma</h4>
//           <p className="text-gray-600">Email: suman@example.com</p>
//           <p className="text-gray-600">Phone: +91 9876543210</p>
//           <p className="text-gray-600">Location: Delhi, India</p>
//         </div>


//         {/* Edit Button */}
//         <div className="text-center sm:text-right">
//           <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md flex items-center gap-2 mx-auto sm:mx-0">
//             <FaUserEdit className="text-white" />
//             Edit Profile
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandlordProfile;



// import React, { useEffect, useState } from "react";

// function LandlordProfile() {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         console.error("No token found");
//         setLoading(false);
//         return;
//       }

//       try {
//         const res = await fetch("https://pg-hostel.nearprop.com/api/landlord/profile", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const data = await res.json();

//         if (data.success) {
//           setProfile(data.landlord);
//         } else {
//           console.error("Profile fetch failed:", data.message);
//         }
//       } catch (error) {
//         console.error("Error fetching profile:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/login"; // Adjust this path to your login route
//   };

//   if (loading) {
//     return (
//       <div className="text-center py-10">
//         <p className="text-lg font-semibold">Loading profile...</p>
//       </div>
//     );
//   }

//   if (!profile) {
//     return (
//       <div className="text-center py-10">
//         <p className="text-lg font-semibold text-red-500">Failed to load profile.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Sticky Header */}
//       <header className="sticky top-0 z-50 bg-white shadow-md py-4 px-6 flex justify-between items-center">
//         <h1 className="text-xl font-bold text-gray-800">Profile</h1>
//         <div className="space-x-4">
//           {/* <button className="text-blue-600 font-medium hover:underline">My Bookings</button> */}
//           <button
//             onClick={handleLogout}
//             className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded"
//           >
//             Logout
//           </button>
//         </div>
//       </header>

//       {/* Profile Info */}
//       <div className="max-w-4xl mx-auto px-4 py-10 bg-white shadow-md rounded-lg mt-6">
//         <div className="flex flex-col md:flex-row items-center gap-6">
//           <img
//             src={`https://pg-hostel.nearprop.com${profile.profilePhoto}`}
//             alt="Profile"
//             className="w-32 h-32 rounded-full object-cover border"
//           />

//           <div className="flex-1">
//             <h2 className="text-2xl font-bold text-gray-800 mb-2">{profile.name}</h2>
//             <p className="text-gray-600"><strong>Email:</strong> {profile.email}</p>
//             <p className="text-gray-600"><strong>Mobile:</strong> {profile.mobile}</p>
//             <p className="text-gray-600"><strong>DOB:</strong> {new Date(profile.dob).toLocaleDateString()}</p>
//             <p className="text-gray-600"><strong>Gender:</strong> {profile.gender}</p>
//           </div>
//         </div>

//         <hr className="my-6" />

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <p><strong>Address:</strong> {profile.address}</p>
//           <p><strong>Pin Code:</strong> {profile.pinCode}</p>
//           <p><strong>State:</strong> {profile.state}</p>
//           <p><strong>Aadhaar Number:</strong> {profile.aadhaarNumber}</p>
//           <p><strong>PAN Number:</strong> {profile.panNumber}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LandlordProfile;




import React, { useEffect, useState } from "react";

function LandlordProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

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
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/"; // Adjust this path if needed
  };

  if (loading) {
    return (
      <div className="text-center py-10">
        <p className="text-lg font-semibold">Loading profile...</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="text-center py-10">
        <p className="text-lg font-semibold text-red-500">Failed to load profile.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-8 relative">
        {/* Profile Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Profile</h1>

        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src={`https://pg-hostel.nearprop.com${profile.profilePhoto}`}
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover border-4 border-gray-300 shadow"
          />
        </div>

        {/* Name & Basic Info */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">{profile.name}</h2>
          <p className="text-gray-600 mt-1"><strong>Email:</strong> {profile.email}</p>
          <p className="text-gray-600"><strong>Mobile:</strong> {profile.mobile}</p>
          <p className="text-gray-600">
            <strong>DOB:</strong> {new Date(profile.dob).toLocaleDateString()}
          </p>
          <p className="text-gray-600"><strong>Gender:</strong> {profile.gender}</p>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-sm">
          <p><strong>Address:</strong> {profile.address}</p>
          <p><strong>Pin Code:</strong> {profile.pinCode}</p>
          <p><strong>State:</strong> {profile.state}</p>
          <p><strong>Aadhaar Number:</strong> {profile.aadhaarNumber}</p>
          <p><strong>PAN Number:</strong> {profile.panNumber}</p>
        </div>

        {/* Logout Button Bottom Right */}
        <div className="flex justify-end mt-10">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandlordProfile;
