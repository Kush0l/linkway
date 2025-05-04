// import React from "react";
// import {
//   TwitterIcon,
//   LinkedinIcon,
//   InstagramIcon,
//   GithubIcon,
// } from "lucide-react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear(); // get current year dynamically

//   return (
//     <footer className="bg-[#e0e4eb] py-12 px-6">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
//         {/* Logo and Social Icons */}
//         <div className="flex flex-col items-start space-y-6">
//           {/* Logo */}
//           <div className="flex flex-col items-center space-y-4">
//             <img src="/assests/images/logo.png" alt="Linqway Logo" className="h-28" />
            
//             {/* Social Icons */}
//             <div className="flex space-x-4">
//               <a href="#" className="group">
//                 <TwitterIcon className="h-6 w-6 text-black group-hover:text-[#1DA1F2] transition-all duration-300 transform group-hover:scale-110" />
//               </a>
//               <a href="#" className="group">
//                 <LinkedinIcon className="h-6 w-6 text-black group-hover:text-[#0A66C2] transition-all duration-300 transform group-hover:scale-110" />
//               </a>
//               <a href="#" className="group">
//                 <InstagramIcon className="h-6 w-6 text-black group-hover:text-[#E4405F] transition-all duration-300 transform group-hover:scale-110" />
//               </a>
//               <a href="#" className="group">
//                 <GithubIcon className="h-6 w-6 text-black group-hover:text-[#333] transition-all duration-300 transform group-hover:scale-110" />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Products */}
//         <div>
//           <h4 className="text-black font-semibold mb-4">Products</h4>
//           <ul className="space-y-2 text-gray-600 text-sm">
//             <li>Chatbot</li>
//             <li>CRM billing</li>
//             <li>IoT</li>
//           </ul>
//         </div>

//         {/* Solutions */}
//         <div>
//           <h4 className="text-black font-semibold mb-4">Solutions</h4>
//           <ul className="space-y-2 text-gray-600 text-sm">
//             <li>UX Design</li>
//             <li>Frontend</li>
//             <li>Application Development</li>
//             <li>AI/ML engineer</li>
//             <li>Software development</li>
//             <li>Digital Marketing</li>
//           </ul>
//         </div>

//         {/* Resources */}
//         <div>
//           <h4 className="text-black font-semibold mb-4">Resources</h4>
//           <ul className="space-y-2 text-gray-600 text-sm">
//             <li>Blogs</li>
//             <li>Case studies</li>
//             <li>About Us</li>
//             <li>Privacy policy</li>
//           </ul>
//         </div>

//         {/* Support & Company */}
//         <div className="flex flex-col space-y-8">
//           <div>
//             <h4 className="text-black font-semibold mb-4">Support</h4>
//             <ul className="space-y-2 text-gray-600 text-sm">
//               <li>Help Center</li>
//               <li>API & Developers</li>
//               <li>Professional Services</li>
//               <li>System Status</li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-black font-semibold mb-4">Company</h4>
//             <ul className="space-y-2 text-gray-600 text-sm">
//               <li>Contact</li>
//               <li>Team</li>
//               <li>Partner Program</li>
//               <li>Legal</li>
//             </ul>
//           </div>
//         </div>
//       </div>
    

//       {/* Copyright */}
//       <div className="text-center text-gray-600 text-sm mt-10 py-5 border-t border-gray-700">
//         ©{currentYear} linqway
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import {
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  GithubIcon,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // get current year dynamically

  return (
    <footer className="bg-[#e0e4eb] py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Social Icons */}
        <div className="flex flex-col items-start space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <img
              src="/assests/images/logo.png"
              alt="Linqway Logo"
              className="h-28"
            />

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="group">
                <TwitterIcon className="h-6 w-6 text-black group-hover:text-[#1DA1F2] transition-all duration-300 transform group-hover:scale-110" />
              </a>
              <a href="#" className="group">
                <LinkedinIcon className="h-6 w-6 text-black group-hover:text-[#0A66C2] transition-all duration-300 transform group-hover:scale-110" />
              </a>
              <a href="#" className="group">
                <InstagramIcon className="h-6 w-6 text-black group-hover:text-[#E4405F] transition-all duration-300 transform group-hover:scale-110" />
              </a>
              <a href="#" className="group">
                <GithubIcon className="h-6 w-6 text-black group-hover:text-[#333] transition-all duration-300 transform group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        {/* Products - Hidden on mobile */}
        <div className="hidden md:block">
          <h4 className="text-black font-semibold mb-4">Products</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Chatbot</li>
            <li>CRM billing</li>
            <li>IoT</li>
          </ul>
        </div>

        {/* Solutions - Hidden on mobile */}
        <div className="hidden md:block">
          <h4 className="text-black font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>UX Design</li>
            <li>Frontend</li>
            <li>Application Development</li>
            <li>AI/ML engineer</li>
            <li>Software development</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        {/* Resources - Hidden on mobile */}
        <div className="hidden md:block">
          <h4 className="text-black font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Blogs</li>
            <li>Case studies</li>
            <li>About Us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Support & Company */}
        <div className="flex flex-col space-y-8">
          {/* Support - Always visible */}
          <div>
            <h4 className="text-black font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Help Center</li>
              <li>API & Developers</li>
              <li>Professional Services</li>
              <li>System Status</li>
            </ul>
          </div>

          {/* Company - Hidden on mobile */}
          <div className="hidden md:block">
            <h4 className="text-black font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Contact</li>
              <li>Team</li>
              <li>Partner Program</li>
              <li>Legal</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-600 text-sm mt-10 py-5 border-t border-gray-700">
        ©{currentYear} linqway
      </div>
    </footer>
  );
};

export default Footer;
