// import React from 'react';

// function Contact() {
//   return (
//     <div className="min-h-screen px-4 py-16 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 relative overflow-hidden">
//       {/* Decorative Blobs */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400 opacity-20 rounded-full blur-3xl -z-10"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-400 opacity-20 rounded-full blur-3xl -z-10"></div>

//       <div className="max-w-7xl mx-auto">
//         <h1
//           className="text-4xl font-bold text-center text-[#183c2c] mb-12"
//           data-aos="fade-up"
//         >
//           Contact Us
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {/* Contact Information */}
//           <div
//             className="backdrop-blur-lg bg-white/30 p-8 rounded-2xl shadow-xl border border-white/20"
//             data-aos="fade-right"
//           >
//             <h2 className="text-2xl font-semibold mb-4 text-[#5C4EFF]">Get in Touch</h2>
//             <p className="text-gray-800 mb-6">
//               We'd love to hear from you! Whether you have a question about listings,
//               features, or anything else, our team is ready to help.
//             </p>

//             <ul className="space-y-4 text-gray-700 font-medium">
//               <li>📍 Address: Draze HQ, 123 Real Estate Street, Mumbai, India</li>
//               <li>📞 Phone: +91 98765 43210</li>
//               <li>📧 Email: contact@draze.com</li>
//               <li>🌐 Website: www.draze.com</li>
//             </ul>
//           </div>

//           {/* Contact Form */}
//           <div
//             className="backdrop-blur-lg bg-white/30 p-8 rounded-2xl shadow-xl border border-white/20"
//             data-aos="fade-left"
//           >
//             <h2 className="text-2xl font-semibold mb-4 text-[#5C4EFF]">Send a Message</h2>
//             <form className="space-y-4">
//               <div>
//                 <label className="block text-gray-800 font-medium">Your Name</label>
//                 <input
//                   type="text"
//                   className="w-full border border-gray-300 rounded px-3 py-2 mt-1 bg-white/60 backdrop-blur-md"
//                   placeholder="John Doe"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-800 font-medium">Email</label>
//                 <input
//                   type="email"
//                   className="w-full border border-gray-300 rounded px-3 py-2 mt-1 bg-white/60 backdrop-blur-md"
//                   placeholder="john@example.com"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-800 font-medium">Message</label>
//                 <textarea
//                   className="w-full border border-gray-300 rounded px-3 py-2 mt-1 bg-white/60 backdrop-blur-md h-28"
//                   placeholder="Your message..."
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="bg-[#5C4EFF] text-white px-6 py-2 rounded hover:bg-[#443ccc] transition"
//                 data-aos="zoom-in"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Google Map */}
//         <div className="mt-16" data-aos="fade-up">
//           <iframe
//             title="Draze Location"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609959294!2d72.7410995!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63fb0fb8457%3A0xe51208822e8b8101!2sMumbai!5e0!3m2!1sen!2sin!4v1628252345678"
//             width="100%"
//             height="400"
//             allowFullScreen=""
//             loading="lazy"
//             className="rounded-lg shadow-xl"
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;








import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/2175973016/photo/modern-luxury-home-exterior-at-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=B2e-gEujpM7UNHX3uMHqvyh_bHC5sHFYfxf0ldEc6R0=')",
      }}
    >
      <div className="bg-black bg-opacity-50 backdrop-filter text-white p-10 rounded-lg w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Contact Form */}
        <div data-aos="fade-right">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-sm">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded text-black"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded text-black"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Phone</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 rounded text-black"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Message</label>
              <textarea
                placeholder="Type your message..."
                className="w-full px-4 py-2 h-28 rounded text-black"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 transition px-6 py-2 rounded text-white text-lg font-medium"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Content / Info */}
        <div data-aos="fade-left" className="space-y-4">
          <h2 className="text-3xl font-bold">Let’s Connect</h2>
          <p className="text-lg">
            Whether you're looking to rent, buy, or just need advice — we're here to help.
          </p>
          <ul className="space-y-2 text-md">
            <li>
              📍 <strong>Office:</strong> 123 Draze Street, Indore, MP
            </li>
            <li>
              📞 <strong>Phone:</strong> +91 98765 43210
            </li>
            <li>
              📧 <strong>Email:</strong> support@draze.com
            </li>
            <li>
              ⏰ <strong>Hours:</strong> Mon - Sat: 9am – 7pm
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
