

// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Environment, Float } from "@react-three/drei";
// import { ChatBubbleLeftIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";
// import AbstractModel from "./3d";
// import Loader from "../components/Loader";

// // Loader component shown while 3D model is loading


// const HeroSection = () => {
//   return (
//     <div className="w-full h-screen bg-[#e0e4eb] relative overflow-hidden">
//       {/* Left Text Section */}
//       <div className="absolute z-10 left-6 md:left-32 top-20 md:top-24 max-w-[90%] md:max-w-xl px-4 md:px-0">
//         <span className="rounded-full bg-[#121252] px-3 py-1 text-white text-sm md:text-base">Preview</span>
//         <h1 className="text-4xl md:text-6xl font-black leading-snug md:leading-tight text-[#302350] mt-4">
//           <span className="text-[#e84644]">LinQ</span> Your<br />
//           Business with<br />
//           Our Solutions....
//         </h1>
//         <p className="mt-4 text-base md:text-lg text-black">
//           Delivering long-term, effective solutions tailored for business growth and streamlined operational and logistical processes.
//         </p>
//         <button className="mt-6 px-5 py-2 bg-[#ef4948] text-[#302350] rounded-md shadow-md hover:bg-[#302350] hover:text-[#ef4948] transition">
//           Get Started
//         </button>
//       </div>

//       {/* 3D Canvas Section */}
//       <div className="absolute top-0 right-0 w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center">
//         <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className="w-full h-full cursor-grab">
//           <ambientLight intensity={1} />
//           <directionalLight position={[2, 2, 5]} intensity={1.5} />
//           <Environment preset="studio" />
//           <Suspense fallback={<Loader />}>
//             <Float speed={2} rotationIntensity={1} floatIntensity={1}>
//               <AbstractModel />
//             </Float>
//           </Suspense>
//           <OrbitControls enableZoom={false} />
//         </Canvas>
//       </div>

//       {/* Chat Box */}
//       <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 w-[90%] sm:w-[500px]">
//         <div className="flex items-center px-4 py-3 rounded-xl backdrop-blur-md bg-white/30 border border-white/40 text-black shadow-lg">
//           <ChatBubbleLeftIcon className="h-6 w-6 mr-3 text-black" />
//           <input
//             type="text"
//             placeholder="Chat with us..."
//             className="flex-1 bg-transparent outline-none placeholder:text-black text-black text-sm sm:text-base"
//           />
//           <PaperAirplaneIcon className="h-6 w-6 ml-3 text-black cursor-pointer rotate-45" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;




import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import { MdChatBubble } from "react-icons/md";
import { IoPaperPlane } from "react-icons/io5";
import AbstractModel from "./3d";
import Loader from "../components/Loader";

// Loader component shown while 3D model is loading

const HeroSection = () => {
  return (
    <div className="w-full h-screen bg-[#e0e4eb] relative overflow-hidden">
      {/* Left Text Section */}
      <div className="absolute z-10 left-6 md:left-32 top-20 md:top-24 max-w-[90%] md:max-w-xl px-4 md:px-0">
        <span className="rounded-full bg-[#121252] px-3 py-1 text-white text-sm md:text-base">Preview</span>
        <h1 className="text-4xl md:text-6xl font-black leading-snug md:leading-tight text-[#302350] mt-4">
          <span className="text-[#e84644]">LinQ</span> Your<br />
          Business with<br />
          Our Solutions....
        </h1>
        <p className="mt-4 text-base md:text-lg text-black">
          Delivering long-term, effective solutions tailored for business growth and streamlined operational and logistical processes.
        </p>
        <button className="mt-6 px-5 py-2 bg-[#ef4948] text-[#302350] rounded-md shadow-md hover:bg-[#302350] hover:text-[#ef4948] transition">
          Get Started
        </button>
      </div>

      {/* 3D Canvas Section */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className="w-full h-full cursor-grab">
          <ambientLight intensity={1} />
          <directionalLight position={[2, 2, 5]} intensity={1.5} />
          <Environment preset="studio" />
          <Suspense fallback={<Loader />}>
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
              <AbstractModel />
            </Float>
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* Chat Box */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 w-[90%] sm:w-[500px]">
        <div className="flex items-center px-4 py-3 rounded-xl backdrop-blur-md bg-white/30 border border-white/40 text-black shadow-lg">
          <MdChatBubble className="h-6 w-6 mr-3 text-black" />
          <input
            type="text"
            placeholder="Chat with us..."
            className="flex-1 bg-transparent outline-none placeholder:text-black text-black text-sm sm:text-base"
          />
          <IoPaperPlane className="h-6 w-6 ml-3 text-black cursor-pointer rotate-45" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
