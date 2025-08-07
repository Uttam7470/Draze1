

// import {
//   FaHome,
//   FaBuilding,
//   FaFilm,
//   FaPhoneAlt,
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";
// import drazeLogo from "../../../assets/logo/drazeLogo.png";
// import { motion } from "framer-motion";

// const Footer = () => {
//   return (
//     <footer className="bg-[#2596be] text-white relative mt-10  overflow-hidden">
//       {/* Background Arrow Lines */}
//       <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
//         <svg width="100%" height="100%">
//           <line
//             x1="0"
//             y1="100%"
//             x2="100%"
//             y2="0"
//             stroke="white"
//             strokeWidth="2"
//           />
//           <line
//             x1="50%"
//             y1="100%"
//             x2="100%"
//             y2="50%"
//             stroke="white"
//             strokeWidth="2"
//           />
//           <line
//             x1="0"
//             y1="50%"
//             x2="50%"
//             y2="0"
//             stroke="white"
//             strokeWidth="2"
//           />
//         </svg>
//       </div>

//       {/* Main Footer Content */}
//       <div className="relative z-10 max-w-7xl ml-auto pb-10 grid grid-cols-1 md:grid-cols-4 gap-10">
//         <div>
//           <div className="flex items-center h-40">
//             <img src={drazeLogo} alt="Draze Logo" className="h-40 w-auto" />
//           </div>
//           <p className="text-base leading-relaxed px-10">
//             Explore, Rent, and Own your next dream property with Draze.
//           </p>
//           <div className="flex space-x-4 mt-4 text-xl px-10">
//             <a href="#" className="hover:text-yellow-300 transition">
//               <FaFacebookF />
//             </a>
//             <a href="#" className="hover:text-yellow-300 transition">
//               <FaInstagram />
//             </a>
//             <a href="#" className="hover:text-yellow-300 transition">
//               <FaLinkedinIn />
//             </a>
//           </div>
//         </div>

//         <div>
//           <div className="h-40 flex items-center">
//             <h4 className="font-semibold text-xl">Explore</h4>
//           </div>
//           <ul className="space-y-3 text-base">
//             <li className="flex items-center gap-2 hover:underline hover:text-yellow-300 transition">
//               <FaHome /> Home
//             </li>
//             <li className="flex items-center gap-2 hover:underline hover:text-yellow-300 transition">
//               <FaBuilding /> Property
//             </li>
//             <li className="flex items-center gap-2 hover:underline hover:text-yellow-300 transition">
//               <FaFilm /> Reels
//             </li>
//             <li className="flex items-center gap-2 hover:underline hover:text-yellow-300 transition">
//               <FaPhoneAlt /> Contact
//             </li>
//           </ul>
//         </div>

//         <div>
//           <div className="h-40 flex items-center">
//             <h4 className="font-semibold text-xl">Company</h4>
//           </div>
//           <ul className="space-y-3 text-base">
//             <li className="hover:underline hover:text-yellow-300 transition">
//               About Us
//             </li>
//             <li className="hover:underline hover:text-yellow-300 transition">
//               Careers
//             </li>
//             <li className="hover:underline hover:text-yellow-300 transition">
//               Partners
//             </li>
//             <li className="hover:underline hover:text-yellow-300 transition">
//               Blog
//             </li>
//           </ul>
//         </div>

//         <div>
//           <div className="h-40 flex items-center">
//             <h4 className="font-semibold text-xl">Legal</h4>
//           </div>
//           <ul className="space-y-3 text-base">
//             <li className="hover:underline hover:text-yellow-300 transition">
//               Terms & Conditions
//             </li>
//             <li className="hover:underline hover:text-yellow-300 transition">
//               Privacy Policy
//             </li>
//             <li className="hover:underline hover:text-yellow-300 transition">
//               Refund Policy
//             </li>
//             <li className="hover:underline hover:text-yellow-300 transition">
//               Support
//             </li>
//           </ul>
//         </div>
//       </div>

//       <motion.div
//         className="w-[70%] h-[3px] bg-yellow-300 mx-auto opacity-90 rounded-full"
//         initial={{ scaleX: 0 }}
//         animate={{ scaleX: 1 }}
//         transition={{ duration: 1 }}
//         style={{ transformOrigin: "left" }}
//       />

//       {/* Bottom Bar */}
//       <div className="text-white text-center text-base font-medium py-2 relative z-10">
//         © {new Date().getFullYear()} Draze. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;






// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";
// import drazeLogo from "../../../assets/logo/drazeLogo.png";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-[#5c4eff] text-white relative mt-10 overflow-hidden">
//       {/* Background Arrow Lines */}
//       <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
//         <svg width="100%" height="100%">
//           <line x1="0" y1="100%" x2="100%" y2="0" stroke="white" strokeWidth="2" />
//           <line x1="50%" y1="100%" x2="100%" y2="50%" stroke="white" strokeWidth="2" />
//           <line x1="0" y1="50%" x2="50%" y2="0" stroke="white" strokeWidth="2" />
//         </svg>
//       </div>

//       {/* Main Footer Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
//         {/* Brand */}
//         <div>
//           <img src={drazeLogo} alt="Draze Logo" className="h-28 w-auto mb-4" />
//           <p className="text-base leading-relaxed">
//             Explore, Rent, and Own your next dream property with Draze.
//           </p>
//           <div className="flex space-x-4 mt-4 text-xl">
//             <a href="#" className="hover:text-yellow-300 transition">
//               <FaFacebookF />
//             </a>
//             <a href="#" className="hover:text-yellow-300 transition">
//               <FaInstagram />
//             </a>
//             <a href="#" className="hover:text-yellow-300 transition">
//               <FaLinkedinIn />
//             </a>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="font-semibold text-xl mb-4">Quick Links</h4>
//           <ul className="space-y-3 text-base">
//             <li className="hover:underline hover:text-yellow-300 transition">Home</li>
//             <li className="hover:underline hover:text-yellow-300 transition">Properties</li>
//             <li className="hover:underline hover:text-yellow-300 transition">Contact</li>
//           </ul>
//         </div>

//         {/* Company */}
//         <div>
//   <div className="h-40 flex items-center">
//     <h4 className="font-semibold text-xl">Company</h4>
//   </div>
//   <ul className="space-y-3 text-base">
//     <li className="hover:underline hover:text-yellow-300 transition">
//       <Link to="/about">About Us</Link>
//     </li>
//     <li className="hover:underline hover:text-yellow-300 transition">
//       <Link to="/blog">Blog</Link>
//     </li>
//     <li className="hover:underline hover:text-yellow-300 transition">Partners</li>
//     <li className="hover:underline hover:text-yellow-300 transition">Blog</li>
//   </ul>
// </div>


//         {/* Legal */}
//         <div>
//           <h4 className="font-semibold text-xl mb-4">Legal</h4>
//           <ul className="space-y-3 text-base">
//             <li className="hover:underline hover:text-yellow-300 transition">Terms & Conditions</li>
//             <li className="hover:underline hover:text-yellow-300 transition">Privacy Policy</li>
//             <li className="hover:underline hover:text-yellow-300 transition">Support</li>
//           </ul>
//         </div>
//       </div>

//       {/* Divider */}
//       <motion.div
//         className="w-[70%] h-[3px] bg-yellow-300 mx-auto opacity-90 rounded-full"
//         initial={{ scaleX: 0 }}
//         animate={{ scaleX: 1 }}
//         transition={{ duration: 1 }}
//         style={{ transformOrigin: "left" }}
//       />

//       {/* Copyright */}
//       <div className="text-white text-center text-base font-medium py-4 relative z-10">
//         © {new Date().getFullYear()} Draze. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;




// import {
//   FaFacebook,
//   FaGoogle,
//   FaInstagram,
//   FaLinkedin,
//   FaPinterest,
//   FaXTwitter,
//   FaYoutube,
// } from "react-icons/fa6";

// import logo from '../../../assets/logo/logo.png';

// const Footer = () => {
//   return (
//     <footer className="bg-[#5c4eff] text-white pt-14 pb-6 px-4 md:px-20">
//       <div className="grid md:grid-cols-4 gap-10">
//         {/* Company Info */}
//         <div>
          
//   <div className="flex gap-3 mb-4 items-start">
//   <img
//     src={logo}
//     alt="Erase Logo"
//     className=" w-40 h-40 object-contain block"
//   />
//   {/* <div className="self-center">
//     <h2 className="text-2xl font-bold leading-snug">Draze</h2>
//     <p className="text-sm text-white opacity-80">Live Smart, Live Modern</p>
//   </div> */}
// </div>


//           <p className="text-white text-sm opacity-90 leading-relaxed">
//             Your trusted platform for exploring hostels, PGs, banquet halls,
//             and premium properties across India. Draze is your smart living
//             solution.
//           </p>
//         </div>

//         {/* Top Cities */}
//         <div>
//           <h3 className="text-lg font-semibold border-b-2 border-yellow-300 inline-block mb-3">
//             Top Cities
//           </h3>
//           <ul className="space-y-2 text-white text-sm opacity-90">
//             <li>Delhi</li>
//             <li>Mumbai</li>
//             <li>Bangalore</li>
//             <li>Pune</li>
//             <li>Hyderabad</li>
//             <li>Indore</li>
//           </ul>
//         </div>

//         {/* Useful Links */}
//         <div>
//           <h3 className="text-lg font-semibold border-b-2 border-yellow-300 inline-block mb-3">
//             Useful Links
//           </h3>
//           <ul className="space-y-2 text-white text-sm opacity-90">
//             <li><a href="/">Home</a></li>
//             <li><a href="/properties">Property</a></li>
//             <li><a href="/about">About Us</a></li>
//             <li><a href="/blog">Blog</a></li>
//             <li><a href="/career">Career</a></li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="text-lg font-semibold border-b-2 border-yellow-300 inline-block mb-3">
//             Contact
//           </h3>
//           <ul className="space-y-2 text-white text-sm opacity-90">
//             <li>📍 21, Sector 7, Gurugram, Haryana</li>
//             <li>📧 support@draze.in</li>
//             <li>📞 +91 98765 43210</li>
//           </ul>
//           <div className="flex gap-3 mt-4 text-lg text-white">
//             <FaGoogle className="hover:text-yellow-300 cursor-pointer" />
//             <FaFacebook className="hover:text-yellow-300 cursor-pointer" />
//             <FaInstagram className="hover:text-yellow-300 cursor-pointer" />
//             <FaLinkedin className="hover:text-yellow-300 cursor-pointer" />
//             <FaPinterest className="hover:text-yellow-300 cursor-pointer" />
//             <FaXTwitter className="hover:text-yellow-300 cursor-pointer" />
//             <FaYoutube className="hover:text-yellow-300 cursor-pointer" />
//           </div>
//         </div>
//       </div>

//       {/* Bottom Strip */}
//       <div className="mt-10 border-t border-white border-opacity-20 pt-4 text-center text-sm text-white opacity-80">
//         © {new Date().getFullYear()} Draze – All rights reserved
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import drazeLogo from '../../../assets/logo/drazeLogo.png'

const Footer = () => {
  return (
    <footer className="bg-[#5c4eff] text-white pt-14 pb-6 px-4 md:px-20 mt-16">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <div className="flex gap-3 mb-4 items-start">
            <img
              src={drazeLogo}
              alt="Draze Logo"
              className="w-auto h-8 pt-2 object-contain block"
            />
          </div>

          <p className="text-white text-base opacity-90 leading-relaxed">
            Your trusted platform for exploring hostels, PGs, banquet halls,
            and premium properties across India. Draze is your smart living
            solution.
          </p>
        </div>

        {/* Top Cities */}
        <div>
          <h3 className="text-xl font-semibold border-b-2 border-yellow-300 inline-block mb-4">
            Top Cities
          </h3>
          <ul className="space-y-2 text-white text-base font-medium opacity-90">
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Bangalore</li>
            <li>Pune</li>
            {/* <li>Hyderabad</li> */}
            <li>Indore</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold border-b-2 border-yellow-300 inline-block mb-4">
            Useful Links
          </h3>
          <ul className="space-y-2 text-white text-base font-medium opacity-90">
            <li><a href="/">Home</a></li>
            <li><a href="/properties">Property</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/how-it-works">How It Works</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold border-b-2 border-yellow-300 inline-block mb-4">
            Contact
          </h3>
          <ul className="space-y-2 text-white text-base font-medium opacity-90">
            <li>📍 21, Sector 7, Gurugram, Haryana</li>
            <li>📧 support@draze.in</li>
            <li>📞 +91 98765 43210</li>
          </ul>
          <div className="flex gap-3 mt-4 text-xl text-white">
            <FaGoogle className="hover:text-yellow-300 cursor-pointer" />
            <FaFacebook className="hover:text-yellow-300 cursor-pointer" />
            <FaInstagram className="hover:text-yellow-300 cursor-pointer" />
            <FaLinkedin className="hover:text-yellow-300 cursor-pointer" />
            <FaPinterest className="hover:text-yellow-300 cursor-pointer" />
            <FaXTwitter className="hover:text-yellow-300 cursor-pointer" />
            <FaYoutube className="hover:text-yellow-300 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-10 border-t border-white border-opacity-20 pt-4 text-center text-sm text-white opacity-80">
        © {new Date().getFullYear()} Draze – All rights reserved
      </div>
    </footer>
  );
};

export default Footer;

