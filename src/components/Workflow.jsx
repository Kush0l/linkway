
// import React, { useState, useRef } from 'react';

// const contents = [
//   {
//     title: 'Knowledge',
//     description: 'Fin uses all of your support knowledge to generate accurate answers.',
//   },
//   {
//     title: 'Behaviour',
//     description: 'Fin speaks in your tone of voice, and follows your policies and procedures.',
//   },
//   {
//     title: 'Actions',
//     description: 'Fin personalizes every interaction and takes actions on behalf of customers.',
//   },
//   {
//     title: 'Insights',
//     description: 'AI-generated insights give you full visibility and trust in Fin’s performance.',
//   },
// ];

// const videos = [
//   '/assests/images/w1.mp4', // fixed typo: assests -> assets
//   '/assests/images/W13.mp4',
//   '/assests/w2.mp4',
//   'assests/images/w1.mp4',
// ];

// const SplitContentVideo = () => {
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const videoRef = useRef(null);

//   const handleTitleClick = (index) => {
//     setCurrentVideoIndex(index);

//     if (videoRef.current) {
//       videoRef.current.load();
//       videoRef.current.play();
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-auto md:h-screen w-full">

//       {/* Left Side - Text Content */}
//       <div className="w-full md:w-1/2 bg-white p-10 flex flex-col justify-center space-y-8">
        
//         {/* Heading Section */}
//         <div className="text-4xl font-bold mb-8 leading-snug">
//           <p>Fin handles all your</p>
//           <p>frontline support with human</p>
//         </div>

//         {/* Content List */}
//         <div className="space-y-8">
//           {contents.map((item, idx) => (
//             <div
//               key={idx}
//               className="cursor-pointer flex flex-col space-y-4"
//               onClick={() => handleTitleClick(idx)}
//             >
//               <div>
//                 <h2
//                   className={`text-lg transition-all duration-300 ${
//                     idx === currentVideoIndex
//                       ? 'font-bold text-black'
//                       : 'font-normal text-gray-400'
//                   }`}
//                 >
//                   {item.title}
//                 </h2>
//                 <p
//                   className={`mt-2 transition-all duration-300 ${
//                     idx === currentVideoIndex
//                       ? 'text-gray-700'
//                       : 'text-gray-300'
//                   }`}
//                 >
//                   {item.description}
//                 </p>
//               </div>

//               {/* Mobile Only Video under Active Content */}
//               {idx === currentVideoIndex && (
//                 <div className="block md:hidden w-full bg-black rounded-lg overflow-hidden">
//                   <video
//                     ref={videoRef}
//                     src={videos[idx]}
//                     autoPlay
//                     muted
//                     controls={false}
//                     className="w-full h-screen object-cover"
//                   />
//                 </div>
//               )}

//               {idx !== contents.length - 1 && (
//                 <hr className="my-4 border-t border-gray-300" />
//               )}
//             </div>
//           ))}
//         </div>

//         <button className="mt-8 bg-black text-white px-6 py-3 rounded-md w-fit">
//           Learn more
//         </button>
//       </div>

//       {/* Right Side - Big Video for Desktop */}
//       <div
//         className="hidden md:flex w-full md:w-1/2 items-center justify-center p-4 bg-cover bg-center relative"
//         style={{ backgroundImage: "url('/assests/images/wb1.png')" }}
//       >
//         <video
//           ref={videoRef}
//           src={videos[currentVideoIndex]}
//           autoPlay
//           muted
//           controls={false}
//           onEnded={() =>
//             setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
//           }
//           className="relative z-10 rounded-lg shadow-lg max-h-[80%] w-auto"
//         />
//       </div>
//     </div>
//   );
// };

// export default SplitContentVideo;

// import React, { useState, useRef } from 'react';

// const contents = [
//   {
//     title: 'Knowledge',
//     description: 'Fin uses all of your support knowledge to generate accurate answers.',
//   },
//   {
//     title: 'Behaviour',
//     description: 'Fin speaks in your tone of voice, and follows your policies and procedures.',
//   },
//   {
//     title: 'Actions',
//     description: 'Fin personalizes every interaction and takes actions on behalf of customers.',
//   },
//   {
//     title: 'Insights',
//     description: 'AI-generated insights give you full visibility and trust in Fin’s performance.',
//   },
// ];

// const videos = [
//   '/assests/images/w1.mp4',
//   '/assests/images/W13.mp4',
//   '/assests/w2.mp4',
//   '/assests/images/W13.mp4',
// ];

// const SplitContentVideo = () => {
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const videoRef = useRef(null);

//   const handleTitleClick = (index) => {
//     setCurrentVideoIndex(index);
//     if (videoRef.current) {
//       videoRef.current.load();
//       videoRef.current.play();
//     }
//   };

//   return (
//     <div className="w-full bg-white text-black min-h-screen flex flex-col">

//       {/* Top Centered Header */}
//       <div className="w-full text-center px-4 pt-10 pb-6">
//         <h1 className="text-5xl font-bold mb-4">Workflow</h1>
//         <p className="text-lg text-gray-300">
//           Fin helps you automate your frontline support efficiently.
//         </p>
//         <p className="text-lg text-gray-300">
//           Each interaction is smarter, faster, and fully aligned with your brand.
//         </p>
//       </div>

//       {/* Split Layout */}
//       <div className="flex flex-col md:flex-row flex-grow w-full">

//         {/* Left Section */}
//         <div className="w-full md:w-1/2 p-10 flex flex-col justify-start space-y-8">
//           <div className="space-y-8">
//             {contents.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="cursor-pointer flex flex-col"
//                 onClick={() => handleTitleClick(idx)}
//               >
//                 <div>
//                   <h2
//                     className={`text-xl transition-all duration-300 ${
//                       idx === currentVideoIndex ? 'font-bold text-white' : 'font-normal text-gray-400'
//                     }`}
//                   >
//                     {item.title}
//                   </h2>
//                   <p
//                     className={`mt-2 transition-all duration-300 ${
//                       idx === currentVideoIndex ? 'text-gray-200' : 'text-gray-500'
//                     }`}
//                   >
//                     {item.description}
//                   </p>
//                 </div>

//                 {/* Mobile Video */}
//                 {idx === currentVideoIndex && (
//                   <div className="block md:hidden w-full bg-black rounded-lg overflow-hidden mt-4">
//                     <video
//                       ref={videoRef}
//                       src={videos[idx]}
//                       autoPlay
//                       muted
//                       controls={false}
//                       className="w-full h-[200px] object-cover"
//                     />
//                   </div>
//                 )}

//                 {idx !== contents.length - 1 && (
//                   <hr className="my-4 border-t border-gray-700" />
//                 )}
//               </div>
//             ))}
//           </div>

//           <button className="mt-10 bg-white text-black px-6 py-3 rounded-md w-fit">
//             Learn more
//           </button>
//         </div>

//         {/* Right Section - Fixed Height, Video Original Size Centered */}
//         <div
//           className="hidden md:flex w-full md:w-1/2 h-[600px] bg-cover bg-center relative items-center justify-center p-4"
//           style={{ backgroundImage: "url('/assets/images/wb1.png')" }}
//         >
//           <video
//             ref={videoRef}
//             src={videos[currentVideoIndex]}
//             autoPlay
//             muted
//             controls={false}
//             onEnded={() =>
//               setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
//             }
//             className="relative z-10 rounded-lg shadow-lg max-h-full h-auto w-auto"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SplitContentVideo;

// import React, { useState, useRef } from 'react';

// const contents = [
//   {
//     title: 'Knowledge',
//     description: 'Fin uses all of your support knowledge to generate accurate answers.',
//   },
//   {
//     title: 'Behaviour',
//     description: 'Fin speaks in your tone of voice, and follows your policies and procedures.',
//   },
//   {
//     title: 'Actions',
//     description: 'Fin personalizes every interaction and takes actions on behalf of customers.',
//   },
//   {
//     title: 'Insights',
//     description: 'AI-generated insights give you full visibility and trust in Fin’s performance.',
//   },
// ];

// const videos = [
//   '/assests/images/w1.mp4',
//   '/assests/images/W13.mp4',
//   '/assests/w2.mp4',
//   '/assests/images/W13.mp4',
// ];

// const SplitContentVideo = () => {
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const videoRef = useRef(null);

//   const handleTitleClick = (index) => {
//     setCurrentVideoIndex(index);
//     if (videoRef.current) {
//       videoRef.current.load();
//       videoRef.current.play();
//     }
//   };

//   return (
//     <div className="w-full bg-black text-white min-h-screen flex flex-col">

//       {/* Top Header */}
//       <div className="w-full text-center px-4 pt-10 pb-6">
//         <h1 className="text-5xl font-bold mb-4">Workflow</h1>
//         <p className="text-lg text-gray-300">
//           Fin helps you automate your frontline support efficiently.
//         </p>
//         <p className="text-lg text-gray-300">
//           Each interaction is smarter, faster, and fully aligned with your brand.
//         </p>
//       </div>

//       {/* Split Layout */}
//       <div className="flex flex-col md:flex-row flex-grow w-full">

//         {/* Left Section */}
//         <div className="w-full md:w-1/2 p-10 flex flex-col justify-start space-y-8 border-r border-white">
//           <div className="space-y-8">
//             {contents.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="cursor-pointer flex flex-col"
//                 onClick={() => handleTitleClick(idx)}
//               >
//                 <div>
//                   <h2
//                     className={`text-xl transition-all duration-300 ${
//                       idx === currentVideoIndex ? 'font-bold text-white' : 'font-normal text-gray-400'
//                     }`}
//                   >
//                     {item.title}
//                   </h2>
//                   <p
//                     className={`mt-2 transition-all duration-300 ${
//                       idx === currentVideoIndex ? 'text-gray-200' : 'text-gray-500'
//                     }`}
//                   >
//                     {item.description}
//                   </p>
//                 </div>

//                 {/* Mobile Video */}
//                 {idx === currentVideoIndex && (
//                   <div className="block md:hidden w-full bg-black rounded-lg overflow-hidden mt-4">
//                     <video
//                       ref={videoRef}
//                       src={videos[idx]}
//                       autoPlay
//                       muted
//                       controls={false}
//                       className="w-full h-[200px] object-cover"
//                     />
//                   </div>
//                 )}

//                 {idx !== contents.length - 1 && (
//                   <hr className="my-4 border-t border-gray-700" />
//                 )}
//               </div>
//             ))}
//           </div>

//           <button className="mt-10 bg-white text-black px-6 py-3 rounded-md w-fit">
//             Learn more
//           </button>
//         </div>

//         {/* Right Section - Fixed Height, Video Original Size Centered */}
//         <div
//           className="hidden md:flex w-full md:w-1/2 h-[600px] bg-cover bg-center relative items-center justify-center p-4 border-l border-white"
//           style={{ backgroundImage: "url('/assets/images/wb1.png')" }}
//         >
//           <video
//             ref={videoRef}
//             src={videos[currentVideoIndex]}
//             autoPlay
//             muted
//             controls={false}
//             onEnded={() =>
//               setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
//             }
//             className="relative z-10 rounded-lg shadow-lg max-h-full h-auto w-auto"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SplitContentVideo;

// import React, { useState, useRef } from 'react';

// const contents = [
//   {
//     title: 'Knowledge',
//     description: 'Fin uses all of your support knowledge to generate accurate answers.',
//   },
//   {
//     title: 'Behaviour',
//     description: 'Fin speaks in your tone of voice, and follows your policies and procedures.',
//   },
//   {
//     title: 'Actions',
//     description: 'Fin personalizes every interaction and takes actions on behalf of customers.',
//   },
//   {
//     title: 'Insights',
//     description: 'AI-generated insights give you full visibility and trust in Fin’s performance.',
//   },
// ];

// const videos = [
//   '/assests/images/w1.mp4',
//   '/assests/images/W13.mp4',
//   '/assests/w2.mp4',
//   '/assests/images/W13.mp4',
// ];

// const SplitContentVideo = () => {
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const videoRef = useRef(null);

//   const handleTitleClick = (index) => {
//     setCurrentVideoIndex(index);
//     if (videoRef.current) {
//       videoRef.current.load();
//       videoRef.current.play();
//     }
//   };

//   return (
//     <div
//       className="w-full bg-black text-white min-h-screen flex flex-col"
//       style={{ backgroundImage: "url('/assets/images/main-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
//     >

//       {/* Top Header */}
//       <div className="w-full text-center px-4 pt-10 pb-6">
//         <h1 className="text-5xl font-bold mb-4">Workflow</h1>
//         <p className="text-lg text-gray-300">
//           Fin helps you automate your frontline support efficiently.
//         </p>
//         <p className="text-lg text-gray-300">
//           Each interaction is smarter, faster, and fully aligned with your brand.
//         </p>
//       </div>

//       {/* Split Layout */}
//       <div className="flex flex-col md:flex-row flex-grow w-full">

//         {/* Left Section */}
//         <div className="w-full md:w-1/2 p-10 flex flex-col justify-start space-y-8 border-r border-white">
//           <div className="space-y-8">
//             {contents.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="cursor-pointer flex flex-col"
//                 onClick={() => handleTitleClick(idx)}
//               >
//                 <div>
//                   <h2
//                     className={`text-xl transition-all duration-300 ${idx === currentVideoIndex ? 'font-bold text-white' : 'font-normal text-gray-400'}`}
//                   >
//                     {item.title}
//                   </h2>
//                   <p
//                     className={`mt-2 transition-all duration-300 ${idx === currentVideoIndex ? 'text-gray-200' : 'text-gray-500'}`}
//                   >
//                     {item.description}
//                   </p>
//                 </div>

//                 {/* Mobile Video */}
//                 {idx === currentVideoIndex && (
//                   <div className="block md:hidden w-full bg-black rounded-lg overflow-hidden mt-4">
//                     <video
//                       ref={videoRef}
//                       src={videos[idx]}
//                       autoPlay
//                       muted
//                       controls={false}
//                       className="w-full h-[200px] object-cover"
//                     />
//                   </div>
//                 )}

//                 {idx !== contents.length - 1 && (
//                   <hr className="my-4 border-t border-gray-700" />
//                 )}
//               </div>
//             ))}
//           </div>

//           <button className="mt-10 bg-white text-black px-6 py-3 rounded-md w-fit">
//             Learn more
//           </button>
//         </div>

//         {/* Right Section - Fixed Height, Video Original Size Centered */}
//         <div className="hidden md:flex w-full md:w-1/2 h-[600px] relative overflow-hidden border-l border-white">
//           {/* Background Image */}
//           <div
//             className="absolute inset-0 bg-cover bg-center z-0"
//             style={{ backgroundImage: "url('/assets/images/wb1.png')" }}
//           ></div>

//           {/* Video */}
//           <div className="relative z-10 flex items-center justify-center w-full h-full p-4">
//             <video
//               ref={videoRef}
//               src={videos[currentVideoIndex]}
//               autoPlay
//               muted
//               controls={false}
//               onEnded={() =>
//                 setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
//               }
//               className="rounded-lg shadow-lg max-h-full h-auto w-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SplitContentVideo;

import React, { useState, useRef } from 'react';

const contents = [
  {
    title: 'Knowledge',
    description: 'Fin uses all of your support knowledge to generate accurate answers.',
  },
  {
    title: 'Behaviour',
    description: 'Fin speaks in your tone of voice, and follows your policies and procedures.',
  },
  {
    title: 'Actions',
    description: 'Fin personalizes every interaction and takes actions on behalf of customers.',
  },
  {
    title: 'Insights',
    description: 'AI-generated insights give you full visibility and trust in Fin’s performance.',
  },
];

const videos = [
  '/assests/images/w1.mp4',
  '/assests/images/W13.mp4',
  '/assests/images/w2.mp4',
  '/assests/images/W13.mp4',
];

const SplitContentVideo = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const handleTitleClick = (index) => {
    setCurrentVideoIndex(index);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  };

  return (
    <div
      className="w-full bg-black text-white min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/assets/images/main-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Top Header */}
      <div className="w-full text-center px-4 pt-10 pb-6">
        <h1 className="text-5xl font-bold mb-4">Workflow</h1>
        <p className="text-lg text-gray-300">
          Fin helps you automate your frontline support efficiently.
        </p>
        <p className="text-lg text-gray-300">
          Each interaction is smarter, faster, and fully aligned with your brand.
        </p>
      </div>

      {/* Split Layout */}
      <div className="flex flex-col md:flex-row flex-grow w-full">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-start space-y-8 border-r border-white">
          <div className="space-y-8">
            {contents.map((item, idx) => (
              <div
                key={idx}
                className="cursor-pointer flex flex-col"
                onClick={() => handleTitleClick(idx)}
              >
                <div>
                  <h2
                    className={`text-xl transition-all duration-300 ${
                      idx === currentVideoIndex
                        ? 'font-bold text-white'
                        : 'font-normal text-gray-400'
                    }`}
                  >
                    {item.title}
                  </h2>
                  <p
                    className={`mt-2 transition-all duration-300 ${
                      idx === currentVideoIndex ? 'text-gray-200' : 'text-gray-500'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                {/* No video in mobile view */}

                {idx !== contents.length - 1 && (
                  <hr className="my-4 border-t border-gray-700" />
                )}
              </div>
            ))}
          </div>

          <button className="mt-10 bg-white text-black px-6 py-3 rounded-md w-fit">
            Learn more
          </button>
        </div>

        {/* Right Section - Only visible on medium and larger screens */}
        <div className="hidden md:flex w-full md:w-1/2 h-[600px] relative overflow-hidden border-l border-white">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: "url('/assets/images/wb1.png')" }}
          ></div>

          {/* Video */}
          <div className="relative z-10 flex items-center justify-center w-full h-full p-4">
            <video
              ref={videoRef}
              src={videos[currentVideoIndex]}
              autoPlay
              muted
              controls={false}
              onEnded={() =>
                setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
              }
              className="rounded-lg shadow-lg max-h-full h-auto w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitContentVideo;
