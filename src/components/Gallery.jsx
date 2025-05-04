// import React from 'react';
// import { Plus } from 'lucide-react';

// const gridItems = [
//   {
//     type: 'image',
//     src: '/assets/images/lightspeed.jpg',
//     title: 'Lightspeed',
//     size: 'row-span-2', // taller box
//   },
//   {
//     type: 'textBorder',
//     heading: 'Double-digit gains in engagement and resolution rates.',
//     subheading: 'Groundbreaking results with Fin',
//     size: '',
//   },
//   {
//     type: 'image',
//     src: '/assets/images/moo.jpg',
//     title: 'MOO',
//     size: '',
//   },
//   {
//     type: 'text',
//     background: 'bg-cyan-400',
//     heading: 'Meeting customer demand has never been smoother.',
//     name: 'Jeff Cardoso',
//     role: 'VP Operations, Azazie',
//     size: '',
//   },
//   {
//     type: 'image',
//     src: '/assets/images/travelperk.jpg',
//     title: 'TravelPerk',
//     size: '',
//   },
//   {
//     type: 'textBorder',
//     heading: 'Building customer loyalty at scale.',
//     subheading: 'Innovative solutions.',
//     size: '',
//   },
//   {
//     type: 'image',
//     src: '/assets/images/cultureamp.jpg',
//     title: 'Culture Amp',
//     size: 'col-span-2', // wide box
//   },
// ];

// const CustomerGrid = () => {
//   return (
//     <div className="bg-[#f1efe7] p-10 min-h-screen">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[250px]">
//         {gridItems.map((item, index) => (
//           <div
//             key={index}
//             className={`relative flex flex-col justify-between p-4 rounded-md overflow-hidden ${
//               item.size ? item.size : ''
//             } ${
//               item.type === 'text'
//                 ? `${item.background} text-black`
//                 : 'bg-white'
//             } ${
//               item.type === 'textBorder' ? 'border-2 border-black text-black' : ''
//             }`}
//           >
//             {item.type === 'image' && (
//               <div className="relative w-full h-full rounded-md overflow-hidden">
//                 <img
//                   src={item.src}
//                   alt={item.title}
//                   className="object-cover w-full h-full"
//                 />
//                 <div className="absolute bottom-2 left-2 bg-white text-black text-sm font-semibold px-2 py-1 rounded">
//                   {item.title}
//                 </div>
//               </div>
//             )}

//             {item.type === 'text' && (
//               <>
//                 <p className="text-lg font-medium">{item.heading}</p>
//                 <div className="mt-4">
//                   <p className="font-bold">{item.name}</p>
//                   <p className="text-sm">{item.role}</p>
//                 </div>
//               </>
//             )}

//             {item.type === 'textBorder' && (
//               <div className="flex flex-col justify-center items-center text-center h-full">
//                 <p className="text-xl font-bold">{item.subheading}</p>
//                 <p className="mt-2 text-sm">{item.heading}</p>
//               </div>
//             )}

//             {/* Plus Icon */}
//             <div className="absolute bottom-2 right-2 bg-black text-white rounded-full p-1">
//               <Plus size={18} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CustomerGrid;

import React from 'react';
import { Plus } from 'lucide-react';

const gridItems = [
  {
    type: 'image',
    src: '/assets/images/lightspeed.jpg',
    title: 'Lightspeed',
    size: 'row-span-2', // taller box
  },
  {
    type: 'textBorder',
    heading: 'Double-digit gains in engagement and resolution rates.',
    subheading: 'Groundbreaking results with Fin',
    size: '',
  },
  {
    type: 'image',
    src: '/assets/images/moo.jpg',
    title: 'MOO',
    size: '',
  },
  {
    type: 'text',
    background: 'bg-cyan-400',
    heading: 'Meeting customer demand has never been smoother.',
    name: 'Jeff Cardoso',
    role: 'VP Operations, Azazie',
    size: '',
  },
  {
    type: 'image',
    src: '/assets/images/travelperk.jpg',
    title: 'TravelPerk',
    size: '',
  },
  {
    type: 'textBorder',
    heading: 'Building customer loyalty at scale.',
    subheading: 'Innovative solutions.',
    size: '',
  },
  {
    type: 'image',
    src: '/assets/images/cultureamp.jpg',
    title: 'Culture Amp',
    size: 'col-span-2', // wide box
  },
];

const CustomerGrid = () => {
  return (
    <div className="bg-[#f1efe7] px-4 py-10 sm:px-6 md:px-10 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-[220px] sm:auto-rows-[250px]">
        {gridItems.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col justify-between p-4 rounded-md overflow-hidden transition-transform hover:scale-[1.02] ${
              item.size ? item.size : ''
            } ${
              item.type === 'text'
                ? `${item.background} text-black`
                : 'bg-white'
            } ${
              item.type === 'textBorder' ? 'border-2 border-black text-black' : ''
            }`}
          >
            {item.type === 'image' && (
              <div className="relative w-full h-full rounded-md overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-2 left-2 bg-white text-black text-sm font-semibold px-2 py-1 rounded shadow-md">
                  {item.title}
                </div>
              </div>
            )}

            {item.type === 'text' && (
              <>
                <p className="text-lg font-semibold">{item.heading}</p>
                <div className="mt-4">
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm">{item.role}</p>
                </div>
              </>
            )}

            {item.type === 'textBorder' && (
              <div className="flex flex-col justify-center items-center text-center h-full">
                <p className="text-xl font-bold">{item.subheading}</p>
                <p className="mt-2 text-sm">{item.heading}</p>
              </div>
            )}

            {/* Plus Icon */}
            <div className="absolute bottom-2 right-2 bg-black text-white rounded-full p-1 shadow-md">
              <Plus size={18} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerGrid;
