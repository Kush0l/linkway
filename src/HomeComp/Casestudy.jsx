// import React, { useState, useEffect } from 'react';
// import { ArrowLeft, ArrowRight } from 'lucide-react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const caseStudies = [
//   {
//     title: "Lion Parcel",
//     image: "/assests/images/c2.jpg",
//     quote: "Revolutionizing customer support in the logistics industry, Lion Parcel is driving an unparalleled service experience with Gen AI-powered dynamic chatbots enabled by Yellow.ai.",
//     person: "– Mr. Budi Santoso, Chief Experience Officer",
//   },
//   {
//     title: "ShopEase",
//     image: "/assests/images/c1.jpg",
//     quote: "With Yellow.ai’s dynamic AI, we elevated our customer service experience—cutting wait times and increasing satisfaction across the board.",
//     person: "– Jane Doe, Head of Customer Success",
//   },
//   {
//     title: "QuickBank",
//     image: "/assests/images/c3.jpg",
//     quote: "The AI assistants built with Yellow.ai transformed our banking support—secure, scalable, and instant.",
//     person: "– Rahul Mehta, VP of Digital Operations",
//   },
// ];

// const CaseStudyCarousel = () => {
//   const [index, setIndex] = useState(0);
//   const total = caseStudies.length;
//   const current = caseStudies[index];

//   const prevSlide = () => setIndex((prev) => (prev - 1 + total) % total);
//   const nextSlide = () => setIndex((prev) => (prev + 1) % total);

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   // Re-trigger AOS animation when the slide index changes
//   useEffect(() => {
//     AOS.refresh(); // Refresh AOS animations on slide change
//   }, [index]);

//   return (
//     <section className="bg-gradient-to-br from-white via-[#faebd7] to-white py-10 px-4 sm:px-6 md:px-10 lg:px-16">

//       <div className="max-w-7xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-[35%_65%] gap-8 items-center">
        
//         {/* Left Section */}
//         <div className="mt-8 lg:mt-0" data-aos="fade-right">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black mb-4">
//             The results speak for themselves, just like our customers.
//           </h2>
//           <a href="#" className="text-[#6c38ff] font-medium inline-flex items-center space-x-1 mb-6">
//             <span>View more success stories</span>
//             <ArrowRight className="w-4 h-4" />
//           </a>

//           <div className="flex gap-4 mt-4">
//             <button
//               onClick={prevSlide}
//               className="p-2 border border-[#6c38ff] rounded-full hover:bg-[#6c38ff]/10 transition"
//             >
//               <ArrowLeft className="text-[#6c38ff]" />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="p-2 border border-[#6c38ff] rounded-full hover:bg-[#6c38ff]/10 transition"
//             >
//               <ArrowRight className="text-[#6c38ff]" />
//             </button>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div 
//           key={index} // Changing the key ensures re-rendering of the component for each case study
//           className="relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 w-full" 
//           data-aos="fade-left"
//         >
//           <img
//             src={current.image}
//             alt={current.title}
//             className="w-full object-cover h-56 sm:h-64 md:h-72 lg:h-80"
//           />

//           {/* Quote and Details */}
//           <div className="p-5 sm:p-6">
//             <span className="text-xs font-semibold text-[#6c38ff] bg-[#efebff] px-2 py-1 rounded-full mb-2 inline-block">
//               Case study
//             </span>
//             <p className="text-gray-800 text-sm sm:text-base">{current.quote}</p>
//             <p className="text-sm text-gray-500 mt-2">{current.person}</p>
//             <a href="#" className="mt-3 inline-block text-[#6c38ff] font-medium text-sm sm:text-base">
//               Read more →
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CaseStudyCarousel;

// import React, { useState, useEffect } from 'react';
// import { ArrowLeft, ArrowRight } from 'lucide-react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const caseStudies = [
//   {
//     title: "Lion Parcel",
//     image: "/assests/images/c2.jpg",
//     quote: "Revolutionizing customer support in the logistics industry, Lion Parcel is driving an unparalleled service experience with Gen AI-powered dynamic chatbots enabled by Yellow.ai.",
//     person: "– Mr. Budi Santoso, Chief Experience Officer",
//   },
//   {
//     title: "ShopEase",
//     image: "/assests/images/c1.jpg",
//     quote: "With Yellow.ai’s dynamic AI, we elevated our customer service experience—cutting wait times and increasing satisfaction across the board.",
//     person: "– Jane Doe, Head of Customer Success",
//   },
//   {
//     title: "QuickBank",
//     image: "/assests/images/c3.jpg",
//     quote: "The AI assistants built with Yellow.ai transformed our banking support—secure, scalable, and instant.",
//     person: "– Rahul Mehta, VP of Digital Operations",
//   },
// ];

// const CaseStudyCarousel = () => {
//   const [index, setIndex] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const total = caseStudies.length;
//   const current = caseStudies[index];

//   const prevSlide = () => setIndex((prev) => (prev - 1 + total) % total);
//   const nextSlide = () => setIndex((prev) => (prev + 1) % total);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   useEffect(() => {
//     AOS.refresh();
//   }, [index]);

//   return (
//     <section className="bg-gradient-to-br from-white via-[#faebd7] to-white py-10 px-4 sm:px-6 md:px-10 lg:px-16 relative">

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
//           <div className="bg-white rounded-xl shadow-lg w-full max-w-md sm:max-w-lg p-6 relative overflow-y-auto max-h-[90vh]">
//             <button
//               onClick={closeModal}
//               className="absolute top-3 right-3 text-gray-600 hover:text-black text-lg font-bold"
//             >
//               &times;
//             </button>

//             <img
//               src={current.image}
//               alt={current.title}
//               className="w-full h-44 sm:h-56 object-cover rounded-lg mb-4"
//             />
//             <h3 className="text-xl font-semibold text-black mb-2">{current.title}</h3>
//             <p className="text-gray-800 text-sm sm:text-base">{current.quote}</p>
//             <p className="text-sm text-gray-500 mt-2">{current.person}</p>
//           </div>
//         </div>
//       )}

//       {/* Carousel Content */}
//       <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-[35%_65%] gap-8 items-center">
        
//         {/* Left Section */}
//         <div className="mt-8 lg:mt-0 w-full" data-aos="fade-right">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black mb-4 text-center lg:text-left">
//             The results speak for themselves, just like our customers.
//           </h2>
//           <div className="text-center lg:text-left">
//             <a href="#" className="text-[#6c38ff] font-medium inline-flex items-center space-x-1 mb-6">
//               <span>View more success stories</span>
//               <ArrowRight className="w-4 h-4" />
//             </a>
//           </div>

//           <div className="flex justify-center lg:justify-start gap-4 mt-4">
//             <button
//               onClick={prevSlide}
//               className="p-2 border border-[#6c38ff] rounded-full hover:bg-[#6c38ff]/10 transition"
//               aria-label="Previous Slide"
//             >
//               <ArrowLeft className="text-[#6c38ff]" />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="p-2 border border-[#6c38ff] rounded-full hover:bg-[#6c38ff]/10 transition"
//               aria-label="Next Slide"
//             >
//               <ArrowRight className="text-[#6c38ff]" />
//             </button>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div 
//           key={index}
//           className="relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 w-full" 
//           data-aos="fade-left"
//         >
//           <img
//             src={current.image}
//             alt={current.title}
//             className="w-full object-cover h-56 sm:h-64 md:h-72 lg:h-80"
//           />

//           <div className="p-5 sm:p-6">
//             <span className="text-xs font-semibold text-[#6c38ff] bg-[#efebff] px-2 py-1 rounded-full mb-2 inline-block">
//               Case study
//             </span>
//             <p className="text-gray-800 text-sm sm:text-base">{current.quote}</p>
//             <p className="text-sm text-gray-500 mt-2">{current.person}</p>
//             <button
//               onClick={openModal}
//               className="mt-3 inline-block text-[#6c38ff] font-medium text-sm sm:text-base cursor-pointer"
//             >
//               Read more →
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CaseStudyCarousel;

import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const caseStudies = [
  {
    title: "Lion Parcel",
    image: "/assests/images/c2.jpg",
    quote: "Revolutionizing customer support in the logistics industry, Lion Parcel is driving an unparalleled service experience with Gen AI-powered dynamic chatbots enabled by Yellow.ai.",
    person: "– Mr. Budi Santoso, Chief Experience Officer",
  },
  {
    title: "ShopEase",
    image: "/assests/images/c1.jpg",
    quote: "With Yellow.ai’s dynamic AI, we elevated our customer service experience—cutting wait times and increasing satisfaction across the board.",
    person: "– Jane Doe, Head of Customer Success",
  },
  {
    title: "QuickBank",
    image: "/assests/images/c3.jpg",
    quote: "The AI assistants built with Yellow.ai transformed our banking support—secure, scalable, and instant.",
    person: "– Rahul Mehta, VP of Digital Operations",
  },
];

const CaseStudyCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const total = caseStudies.length;
  const current = caseStudies[index];

  const prevSlide = () => setIndex((prev) => (prev - 1 + total) % total);
  const nextSlide = () => setIndex((prev) => (prev + 1) % total);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [index]);

  return (
    <section className="bg-gradient-to-br from-white via-[#faebd7] to-white py-10 px-4 sm:px-6 md:px-10 lg:px-16 relative">

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-2 sm:px-4">
          <div className="bg-white rounded-lg shadow-lg w-full md:w-[75%] h-[90vh] max-h-[90vh] overflow-y-auto relative p-4 sm:p-6">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl font-bold"
            >
              &times;
            </button>
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
              {current.title}
            </h3>
            <p className="text-gray-800 text-sm sm:text-base">{current.quote}</p>
            <p className="text-sm text-gray-500 mt-2">{current.person}</p>
          </div>
        </div>
      )}

      {/* Carousel */}
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-[35%_65%] gap-8 items-center">
        
        {/* Left */}
        <div className="mt-8 lg:mt-0 w-full" data-aos="fade-right">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black mb-4 text-center lg:text-left">
            The results speak for themselves, just like our customers.
          </h2>
          <div className="text-center lg:text-left">
            <a href="#" className="text-[#6c38ff] font-medium inline-flex items-center space-x-1 mb-6">
              <span>View more success stories</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="flex justify-center lg:justify-start gap-4 mt-4">
            <button
              onClick={prevSlide}
              className="p-2 border border-[#6c38ff] rounded-full hover:bg-[#6c38ff]/10 transition"
              aria-label="Previous Slide"
            >
              <ArrowLeft className="text-[#6c38ff]" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 border border-[#6c38ff] rounded-full hover:bg-[#6c38ff]/10 transition"
              aria-label="Next Slide"
            >
              <ArrowRight className="text-[#6c38ff]" />
            </button>
          </div>
        </div>

        {/* Right */}
        <div 
          key={index}
          className="relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 w-full" 
          data-aos="fade-left"
        >
          <img
            src={current.image}
            alt={current.title}
            className="w-full object-cover h-56 sm:h-64 md:h-72 lg:h-80"
          />
          <div className="p-5 sm:p-6">
            <span className="text-xs font-semibold text-[#6c38ff] bg-[#efebff] px-2 py-1 rounded-full mb-2 inline-block">
              Case study
            </span>
            <p className="text-gray-800 text-sm sm:text-base">{current.quote}</p>
            <p className="text-sm text-gray-500 mt-2">{current.person}</p>
            <button
              onClick={openModal}
              className="mt-3 inline-block text-[#6c38ff] font-medium text-sm sm:text-base cursor-pointer"
            >
              Read more →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCarousel;
