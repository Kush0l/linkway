// import React, { useEffect, useRef, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// // Import your graphic components
// import ChatBotGraphic from "../components/Robot.jsx";
// import CrmGraphic from "../components/CRM.jsx";
// import CyberBigDataInPhone from "../components/Big.jsx";
// import IntelliOpsInPhone from "../components/ITMS.jsx";
// import CyberIoTInPhone from "../components/Iot.jsx";
// import CyberAutomationInPhone from "../components/neon.jsx";

// const sections = [
//   {
//     title: "ChatBot",
//     content: (
//       <>
//         <h2 className="text-2xl font-semibold mb-2">"Redefining Engagement Through Chat"</h2>
//         💬 Real-time, human-like chats across web, app.<br />
//         ⚙️ Customizable workflows using in-house LLMs<br />
//         🔌 150+ no-code integrations to deploy instantly
//       </>
//     ),
//     GraphicComponent: ChatBotGraphic,
//   },
//   {
//     title: "CRM",
//     content: (
//       <>
//         <h2 className="text-2xl font-semibold mb-2">Empower Your Customer Relationships</h2>
//         📩 Intelligent client interactions via emails, chats, and calls<br />
//         🧠 In-depth customer insights using proprietary AI algorithms<br />
//         🔗 150+ integrations with leading sales, support, and marketing tools
//       </>
//     ),
//     GraphicComponent: CrmGraphic,
//   },
//   {
//     title: "BIG DATA",
//     content: (
//       <>
//         <h2 className="text-2xl font-semibold mb-2">DataPulse: Powering Insights at Scale</h2>
//         ⚡ Handle massive data volumes with lightning-fast processing<br />
//         🔍 Real-time analytics for proactive decision-making<br />
//         🔗 Seamless integration with 100+ data sources and tools
//       </>
//     ),
//     GraphicComponent: CyberBigDataInPhone,
//   },
//   {
//     title: "ITMS",
//     content: (
//       <>
//         <h2 className="text-2xl font-semibold mb-2">IntelliOps: Redefining IT Management</h2>
//         🧠 Intelligent monitoring and incident management<br />
//         ⚙️ Streamlined asset tracking and service workflows<br />
//         🔗 100+ integrations for seamless ecosystem connectivity
//       </>
//     ),
//     GraphicComponent: IntelliOpsInPhone,
//   },
//   {
//     title: "IoT",
//     content: (
//       <>
//         <h2 className="text-2xl font-semibold mb-2">Synaptix IoT: Connect. Monitor. Automate.</h2>
//         🌐 Real-time data capture from smart sensors and devices<br />
//         ⚙️ Automated control and alerts for faster response<br />
//         🔗 100+ pre-built integrations for rapid deployment
//       </>
//     ),
//     GraphicComponent: CyberIoTInPhone,
//   },
//   {
//     title: "Automation",
//     content: (
//       <>
//         <h2 className="text-2xl font-semibold mb-2">NexaAI: Smarter Automation for Seamless Service</h2>
//         🤖 Natural, human-like conversations across chat and voice<br />
//         ⚡ Lightning-fast responses with proprietary LLM technology<br />
//         🔌 150+ ready-to-use integrations for quick deployment
//       </>
//     ),
//     GraphicComponent: CyberAutomationInPhone,
//   },
// ];

// const SplitScrollSections = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const sectionRefs = useRef([]);

//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       let closest = 0;
//       let minDist = Infinity;

//       sectionRefs.current.forEach((ref, index) => {
//         if (ref) {
//           const rect = ref.getBoundingClientRect();
//           const dist = Math.abs(rect.top - window.innerHeight / 2);
//           if (dist < minDist) {
//             minDist = dist;
//             closest = index;
//           }
//         }
//       });

//       setActiveIndex(closest);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const ActiveGraphic = sections[activeIndex].GraphicComponent;
//   const isITMS = sections[activeIndex].title === "ITMS";

//   return (
//     <div
//       className="flex text-black relative w-full"
//       style={{
//         background: "linear-gradient(to bottom, #63c9ff 0%, white 50%)",
//         backgroundAttachment: "fixed",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//       }}
//     >
//       <style>{`
//         .hide-scrollbar::-webkit-scrollbar { display: none; }
//         .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
//       `}</style>

//       {/* Left - scrollable text sections */}
//       <div className="w-full md:w-1/2 overflow-y-auto hide-scrollbar pt-20 pb-40 space-y-24">
//         {sections.map((section, idx) => (
//           <div
//             key={idx}
//             ref={(el) => (sectionRefs.current[idx] = el)}
//             className="min-h-[60vh] flex flex-col justify-center px-8 md:px-16 scroll-section"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600 text-center" data-aos="fade-right">
//               {section.title}
//             </h2>
//             <p className="text-lg text-black max-w-md" data-aos="fade-up">
//               {section.content}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Right - sticky graphic */}
//       <div className="hidden md:flex w-1/2 h-screen sticky top-0 items-center justify-center px-8 md:px-16">
//         <div
//           data-aos="zoom-in"
//           className={`text-center transition-transform duration-500 ${isITMS ? "scale-[1.8]" : "scale-100"}`}
//           style={{ width: "600px", height: "600px" }}
//         >
//           <ActiveGraphic />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SplitScrollSections;

// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const domains = [
//   {
//     title: "Chatbot",
//     description:
//       "Build intelligent conversational agents using Natural Language Processing (NLP) to automate customer interactions and provide seamless user experiences.",
//     videoUrl: "/assests/images/ai1.mp4",
//   },
//   {
//     title: "CRM (Customer Relationship Management)",
//     description:
//       "Develop powerful CRM solutions to manage customer interactions, automate sales processes, and enhance customer satisfaction using advanced data analytics.",
//     videoUrl: "/assests/images/ai4.mp4",
//   },
//   {
//     title: "IoT (Internet of Things)",
//     description:
//       "Connect and manage a network of devices, enabling them to collect and exchange data for smarter decision-making, automation, and efficiency.",
//     videoUrl: "/assests/images/ai5.mp4",
//   },
//   {
//     title: "Automation",
//     description:
//       "Leverage automation technologies to streamline repetitive tasks, improve productivity, and reduce human error across various industries.",
//     videoUrl: "/assests/images/ai4.mp4",
//   },
// ];

// const DomainShowcase = () => {
//   const [selectedDomain, setSelectedDomain] = useState(domains[0]);

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div
//       className="min-h-screen text-white bg-cover bg-center"
//       style={{ backgroundImage: "url('/assests/images/d1.svg')" }}
//     >
//       {/* Desktop layout with sidebar */}
//       <div className="hidden md:flex md:flex-row min-h-screen">
//         {/* Sidebar */}
//         <div className="md:w-1/4 bg-transparent h-full flex flex-col border-r border-gray-700 backdrop-blur-sm">
//           {domains.map((domain, idx) => (
//             <div
//               key={idx}
//               onClick={() => setSelectedDomain(domain)}
//               className={`flex-1 flex items-center justify-center text-center px-4 py-3 cursor-pointer transition-all duration-300 ${
//                 selectedDomain.title === domain.title
//                   ? "bg-blue-600 text-white font-bold"
//                   : "bg-gray-800 hover:bg-blue-500 text-white bg-opacity-50 backdrop-blur-lg"
//               }`}
//             >
//               {domain.title}
//             </div>
//           ))}
//         </div>

//         {/* Main content */}
//         <div className="w-full md:w-3/4 p-10 flex flex-col items-center justify-center text-center">
//           <div className="max-w-2xl space-y-4">
//             <h2 className="text-4xl font-bold" data-aos="fade-up" data-aos-delay="100">
//               {selectedDomain.title}
//             </h2>
//             <p className="text-lg" data-aos="fade-up" data-aos-delay="200">
//               {selectedDomain.description}
//             </p>
//           </div>
//           <div
//             className="w-full mt-10 max-w-4xl h-96 rounded-xl shadow-2xl overflow-hidden"
//             data-aos="zoom-in"
//             data-aos-delay="300"
//           >
//             <video
//               src={selectedDomain.videoUrl}
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Mobile layout: All domains stacked */}
//       <div className="block md:hidden p-4 space-y-12">
//         {domains.map((domain, idx) => (
//           <div key={idx} className="text-center space-y-4" data-aos="fade-up">
//             <h2 className="text-2xl font-bold">{domain.title}</h2>
//             <p className="text-base">{domain.description}</p>
//             <div className="w-full h-56 sm:h-64 rounded-xl shadow-2xl overflow-hidden">
//               <video
//                 src={domain.videoUrl}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DomainShowcase;

// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const domains = [
//   {
//     title: "Chatbot",
//     description:
//       "Build intelligent conversational agents using Natural Language Processing (NLP) to automate customer interactions and provide seamless user experiences.",
//     videoUrl: "/assests/images/ai1.mp4",
//   },
//   {
//     title: "CRM (Customer Relationship Management)",
//     description:
//       "Develop powerful CRM solutions to manage customer interactions, automate sales processes, and enhance customer satisfaction using advanced data analytics.",
//     videoUrl: "/assests/images/ai4.mp4",
//   },
//   {
//     title: "IoT (Internet of Things)",
//     description:
//       "Connect and manage a network of devices, enabling them to collect and exchange data for smarter decision-making, automation, and efficiency.",
//     videoUrl: "/assests/images/ai5.mp4",
//   },
//   {
//     title: "Automation",
//     description:
//       "Leverage automation technologies to streamline repetitive tasks, improve productivity, and reduce human error across various industries.",
//     videoUrl: "/assests/images/ai4.mp4",
//   },
// ];

// const DomainShowcase = () => {
//   const [selectedDomain, setSelectedDomain] = useState(domains[0]);

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div
//       className="min-h-screen text-white bg-cover bg-center"
//       style={{ backgroundImage: "url('/assests/images/d1.svg')" }}
//     >
//       {/* Desktop layout with sidebar */}
//       <div className="hidden md:flex md:flex-row h-screen">
//         {/* Sidebar */}
//         <div className="w-1/4 flex flex-col bg-transparent border-r border-gray-700 backdrop-blur-sm">
//           {domains.map((domain, idx) => (
//             <div
//               key={idx}
//               onClick={() => setSelectedDomain(domain)}
//               className={`flex-1 flex items-center justify-center text-center px-4 cursor-pointer transition-all duration-300 ${
//                 selectedDomain.title === domain.title
//                   ? "bg-blue-600 text-white font-bold"
//                   : "bg-gray-800 bg-opacity-50 backdrop-blur-lg hover:bg-blue-500 text-white"
//               }`}
//             >
//               {domain.title}
//             </div>
//           ))}
//         </div>

//         {/* Main content */}
//         <div className="w-3/4 p-10 flex flex-col items-center justify-center text-center overflow-y-auto">
//           <div className="max-w-2xl space-y-4">
//             <h2 className="text-4xl font-bold" data-aos="fade-up" data-aos-delay="100">
//               {selectedDomain.title}
//             </h2>
//             <p className="text-lg" data-aos="fade-up" data-aos-delay="200">
//               {selectedDomain.description}
//             </p>
//           </div>
//           <div
//             className="w-full mt-10 max-w-4xl h-96 rounded-xl shadow-2xl overflow-hidden"
//             data-aos="zoom-in"
//             data-aos-delay="300"
//           >
//             <video
//               src={selectedDomain.videoUrl}
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Mobile layout: All domains stacked */}
//       <div className="block md:hidden p-4 space-y-12">
//         {domains.map((domain, idx) => (
//           <div key={idx} className="text-center space-y-4" data-aos="fade-up">
//             <h2 className="text-2xl font-bold">{domain.title}</h2>
//             <p className="text-base">{domain.description}</p>
//             <div className="w-full h-56 sm:h-64 rounded-xl shadow-2xl overflow-hidden">
//               <video
//                 src={domain.videoUrl}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DomainShowcase;

// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const domains = [
//   {
//     title: "Chatbot",
//     description:
//       "Build intelligent conversational agents using Natural Language Processing (NLP) to automate customer interactions and provide seamless user experiences.",
//     videoUrl: "/assests\images\D1.mp4",
//   },
//   {
//     title: "CRM (Customer Relationship Management)",
//     description:
//       "Develop powerful CRM solutions to manage customer interactions, automate sales processes, and enhance customer satisfaction using advanced data analytics.",
//     videoUrl: "/assests/images/ai4.mp4",
//   },
//   {
//     title: "IoT (Internet of Things)",
//     description:
//       "Connect and manage a network of devices, enabling them to collect and exchange data for smarter decision-making, automation, and efficiency.",
//     videoUrl: "/assests/images/ai5.mp4",
//   },
//   {
//     title: "Automation",
//     description:
//       "Leverage automation technologies to streamline repetitive tasks, improve productivity, and reduce human error across various industries.",
//     videoUrl: "/assests/images/ai4.mp4",
//   },
// ];

// const DomainShowcase = () => {
//   const [selectedDomain, setSelectedDomain] = useState(domains[0]);

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div
//       className="min-h-screen text-white bg-cover bg-center"
//       style={{ backgroundImage: "url('/assests/images/d1.svg')" }}
//     >
//       {/* Desktop layout with sidebar */}
//       <div className="hidden md:flex h-screen">
//         {/* Sidebar */}
//         <div className="w-1/4 flex flex-col bg-transparent border-r border-gray-700 backdrop-blur-sm">
//           {domains.map((domain, idx) => (
//             <div
//               key={idx}
//               onClick={() => setSelectedDomain(domain)}
//               className={`flex-1 flex items-center justify-center text-center px-4 cursor-pointer transition-all duration-300 ${
//                 selectedDomain.title === domain.title
//                   ? "bg-black text-white font-bold"
//                   : "bg-gray-800 bg-opacity-50 backdrop-blur-lg hover:bg-blue-500 text-white"
//               } ${idx !== domains.length - 1 ? "border-b border-gray-600" : ""}`}
//             >
//               {domain.title}
//             </div>
//           ))}
//         </div>

//         {/* Main content */}
//         <div className="w-3/4 p-10 flex flex-col items-center justify-center text-center overflow-y-auto">
//           <div className="max-w-2xl space-y-4">
//             <h2 className="text-4xl font-bold" data-aos="fade-up" data-aos-delay="100">
//               {selectedDomain.title}
//             </h2>
//             <p className="text-lg" data-aos="fade-up" data-aos-delay="200">
//               {selectedDomain.description}
//             </p>
//           </div>
//           <div
//             className="w-full mt-10 max-w-4xl h-96 rounded-xl shadow-2xl overflow-hidden"
//             data-aos="zoom-in"
//             data-aos-delay="300"
//           >
//             <video
//               src={selectedDomain.videoUrl}
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Mobile layout: All domains stacked */}
//       <div className="block md:hidden p-4 space-y-12">
//         {domains.map((domain, idx) => (
//           <div key={idx} className="text-center space-y-4" data-aos="fade-up">
//             <h2 className="text-2xl font-bold">{domain.title}</h2>
//             <p className="text-base">{domain.description}</p>
//             <div className="w-full h-56 sm:h-64 rounded-xl shadow-2xl overflow-hidden">
//               <video
//                 src={domain.videoUrl}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DomainShowcase;

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const domains = [
  {
    title: "Chatbot",
    description:
      "Build intelligent conversational agents using Natural Language Processing (NLP) to automate customer interactions and provide seamless user experiences.",
    videoUrl: "/assests/images/D1.mp4",
  },
  {
    title: "CRM (Customer Relationship Management)",
    description:
      "Develop powerful CRM solutions to manage customer interactions, automate sales processes, and enhance customer satisfaction using advanced data analytics.",
    videoUrl: "/assests/images/D2.mp4",
  },
  {
    title: "IoT (Internet of Things)",
    description:
      "Connect and manage a network of devices, enabling them to collect and exchange data for smarter decision-making, automation, and efficiency.",
    videoUrl: "/assests/images/D4.mp4",
  },
  {
    title: "Automation",
    description:
      "Leverage automation technologies to streamline repetitive tasks, improve productivity, and reduce human error across various industries.",
    videoUrl: "/assests/images/D3.mp4",
  },
];

const DomainShowcase = () => {
  const [selectedDomain, setSelectedDomain] = useState(domains[0]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="min-h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/assests/images/d1.svg')" }}
    >
      {/* Desktop layout with sidebar */}
      <div className="hidden md:flex h-screen">
        {/* Sidebar */}
        <div className="w-1/4 flex flex-col bg-transparent border-r border-gray-700 backdrop-blur-sm">
          {domains.map((domain, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedDomain(domain)}
              className={`flex-1 flex items-center justify-center text-center px-4 cursor-pointer transition-all duration-300 ${
                selectedDomain.title === domain.title
                  ? "bg-black text-white font-bold"
                  : "bg-gray-800 bg-opacity-50 backdrop-blur-lg hover:bg-gray-600 text-white"
              } ${idx !== domains.length - 1 ? "border-b border-gray-600" : ""}`}
            >
              {domain.title}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="w-3/4 p-10 flex flex-col items-center justify-center text-center overflow-y-auto">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl font-bold" data-aos="fade-up" data-aos-delay="100">
              {selectedDomain.title}
            </h2>
            <p className="text-lg" data-aos="fade-up" data-aos-delay="200">
              {selectedDomain.description}
            </p>
          </div>
          <div
            className="w-full mt-10 max-w-4xl relative"
            style={{ paddingBottom: "56.25%" }}
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <video
              src={selectedDomain.videoUrl}
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Mobile layout: All domains stacked */}
      <div className="block md:hidden p-4 space-y-12">
        {domains.map((domain, idx) => (
          <div key={idx} className="text-center space-y-4" data-aos="fade-up">
            <h2 className="text-2xl font-bold">{domain.title}</h2>
            <p className="text-base">{domain.description}</p>
            <div
              className="w-full relative"
              style={{ paddingBottom: "56.25%" }}
            >
              <video
                src={domain.videoUrl}
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DomainShowcase;
