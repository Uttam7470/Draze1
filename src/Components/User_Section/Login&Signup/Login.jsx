// import React, { useState } from "react";
// import { FaUserCircle } from "react-icons/fa";
// import { useAuth } from "../Context/AuthContext";
// import { useNavigate } from "react-router-dom";

// function Login({ role, onClose, onRegisterClick }) {

//    const navigate = useNavigate();

//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");
//   const [otpSent, setOtpSent] = useState(false);

//   const { login } = useAuth();

//   const handleSendOtp = (e) => {
//     e.preventDefault();
//     if (phone.length === 10) {
//       setOtpSent(true);
//     } else {
//       alert("Please enter a valid 10-digit number");
//     }
//   };

//   const handleVerifyOtp = (e) => {
//     e.preventDefault();
//     if (otp.length === 6) {
     
//       const userData = {
//         phone,
//         role: role || "User",
//         isRegistered: false,
//       };

//       login(userData);
//       onClose();

//       if (!userData.isRegistered && onRegisterClick) {
//         onRegisterClick();
//       }
//     } else {
//       alert("Invalid OTP");
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999]">
//       <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
//         >
//           &times;
//         </button>

//         <div className="flex justify-center mb-4">
//           <FaUserCircle className="text-6xl text-[#5C4EFF]" />
//         </div>

//         <h2 className="text-2xl font-semibold text-center text-[#5C4EFF] mb-6">
//           Login as {role || "User"}
//         </h2>

//         {!otpSent ? (
//           <>
//             <label className="block text-sm text-gray-700 mb-1">
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               placeholder="Enter your number"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C4EFF]"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//             <button
//               className="w-full mt-4 bg-[#5C4EFF] hover:bg-[#483fd4] text-white py-2 rounded-md"
//               onClick={handleSendOtp}
//             >
//               Send OTP
//             </button>
//           </>
//         ) : (
//           <>
//             <label className="block text-sm text-gray-700 mb-1">
//               Enter OTP
//             </label>
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C4EFF]"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//             />
//             <button
//               className="w-full mt-4 bg-[#5C4EFF] hover:bg-[#483fd4] text-white py-2 rounded-md"
//               onClick={handleVerifyOtp}
//             >
//               Verify & Login
//             </button>
//           </>
//         )}

//         {/* <div className="mt-4 text-sm text-center">
//           Don't have an account?{" "}
//           <button
//             onClick={() => {
//               onClose();
//               if (onRegisterClick) onRegisterClick();
//             }}
//             className="text-[#5C4EFF] hover:underline"
//           >
//             Register
//           </button>
//         </div> */}

//     <div className="mt-4 text-sm text-center">
//       Don't have an account?{" "}
//       <button
//         onClick={() => {
//           onClose();
//           navigate("/signup");     // Redirects to signup page
//         }}
//         className="text-[#5C4EFF] hover:underline"
//       >
//         Register
//       </button>
//     </div>



//       </div>
//     </div>
//   );
// }

// export default Login;



import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import baseurl from "../../../../BaseUrl.js"; 

import axios from "axios";
function Login({ role, onClose, onRegisterClick, onLoginSuccess }) {
  
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const { login } = useAuth();
const handleSendOtp = async (e) => {
  e.preventDefault();

  if (phone.length === 10) {
    try {
      const response = await axios.post(`${baseurl}/auth/otp/request-otp`, {
        mobile: phone,
        userType :"landlord"
      });

      console.log('OTP sent successfully:', response.data);
      setOtpSent(true);
      
    } catch (error) {
      console.error('Error sending OTP:', error);
      if (error.response && error.response.data) {
        alert(error.response.data.message || 'Failed to send OTP');
      } else {
        alert('Network error while sending OTP');
      }
    }
  } else {
    alert("Please enter a valid 10-digit number");
  }
};

const handleVerifyOtp = async (e) => {
  e.preventDefault();

  if (otp.length === 6) {
    try {
      const response = await axios.post(`${baseurl}/auth/otp/verify-otp`, {
        mobile: phone,
        otp: otp,
        userType: role?.toLowerCase() || "user"
      });

      console.log("OTP verified:", response.data);

      const isRegistered = response.data?.isRegistered || false;

      const userData = {
        phone,
        role: role || "User",
        isRegistered: isRegistered,
      };

      login(userData); // Store phone + role in context

      if (isRegistered) {
        onClose(); // Close login modal

        if (onLoginSuccess) {
          onLoginSuccess(userData.role); // Navigate or show success
        }
      } else {
        // User is not registered — show registration UI
        if (onRegisterClick) {
          onRegisterClick(userData); // You can pass userData to pre-fill mobile
        }
        navigate("/signup");

      }

    } catch (error) {
      console.error("OTP verification failed:", error);
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert("Failed to verify OTP");
      }
    }
  } else {
    alert("Invalid OTP");
  }
};



  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>

        <div className="flex justify-center mb-4">
          <FaUserCircle className="text-6xl text-[#5C4EFF]" />
        </div>

        <h2 className="text-2xl font-semibold text-center text-[#5C4EFF] mb-6">
          Login as {role || "User"}
        </h2>

        {!otpSent ? (
          <>
            <label className="block text-sm text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C4EFF]"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button
              className="w-full mt-4 bg-[#5C4EFF] hover:bg-[#483fd4] text-white py-2 rounded-md"
              onClick={handleSendOtp}
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <label className="block text-sm text-gray-700 mb-1">Enter OTP</label>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C4EFF]"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              className="w-full mt-4 bg-[#5C4EFF] hover:bg-[#483fd4] text-white py-2 rounded-md"
              onClick={handleVerifyOtp}
            >
              Verify & Login
            </button>
          </>
        )}

        <div className="mt-4 text-sm text-center">
          Don't have an account?{" "}
          <button
            onClick={() => {
              onClose();
              navigate("/signup");
            }}
            className="text-[#5C4EFF] hover:underline"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
