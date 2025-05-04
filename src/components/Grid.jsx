// import React from "react";

// const gridItems = [
//   { name: "Tax", area: "Tax" },
//   { name: "Billing", area: "Billing" },
//   { name: "Invoicing", area: "Invoicing" },
//   { name: "Checkout", area: "Checkout" },
//   { name: "Payments", area: "Payments" },
//   { name: "Climate", area: "Climate" },
//   { name: "Connect", area: "Connect" },
//   { name: "Radar", area: "Radar" },
//   { name: "Terminal", area: "Terminal" },
//   { name: "Capital", area: "Capital" },
//   { name: "Identity", area: "Identity" },
//   { name: "Issuing", area: "Issuing" },
//   { name: "Treasury", area: "Treasury" },
// ];

// const layoutStyle = {
//   display: "grid",
//   gridTemplateRows: "repeat(6, 78px)",
//   gridTemplateColumns: "repeat(4, 78px)",
//   gridTemplateAreas: `
//     ".        Tax      .         ."
//     "Billing  .        Invoicing Checkout"
//     ".        Payments .         Climate"
//     "Connect  .        Radar     ."
//     ".        Terminal Capital   ."
//     "Identity Issuing  .         Treasury"
//   `,
//   gap: "12px",
// };

// const areaStyle = (area) => ({
//   gridArea: area,
// });

// const GridLayout = () => {
//   return (
//     <div className="p-4 bg-[#f6f9fc] flex justify-center">
//       <div style={layoutStyle}>
//         {gridItems.map(({ name, area }) => (
//           <div
//             key={name}
//             style={areaStyle(area)}
//             className="bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-sm text-gray-800 font-medium"
//           >
//             {name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GridLayout;

import React from "react";

const FlowGrid = () => {
  return (
    <div className="relative w-full h-[600px] bg-[#f6f9fc] grid grid-cols-5 grid-rows-5 gap-10 p-10">
      {/* SVG CONNECTORS */}
      <svg className="absolute w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        {/* Billing to Tax */}
        <line
          x1="160"
          y1="160"
          x2="300"
          y2="80"
          stroke="#6b21a8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Billing to Radar */}
        <path
          d="M160,160 C220,180 300,280 360,320"
          stroke="#9333ea"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* CARD: Billing */}
      <div className="col-start-1 row-start-2 z-10">
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center">
          <div className="w-10 h-10 bg-green-500 rounded-full mb-2"></div>
          <span className="font-medium text-gray-700">Billing</span>
        </div>
      </div>

      {/* CARD: Tax */}
      <div className="col-start-3 row-start-1 z-10">
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center">
          <div className="w-10 h-10 bg-purple-500 rounded-full mb-2"></div>
          <span className="font-medium text-gray-700">Tax</span>
        </div>
      </div>

      {/* CARD: Radar */}
      <div className="col-start-4 row-start-4 z-10">
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center">
          <div className="w-10 h-10 bg-pink-500 rounded-full mb-2"></div>
          <span className="font-medium text-gray-700">Radar</span>
        </div>
      </div>

      {/* Placeholder elements */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center text-gray-300"
        >
          {/* placeholder icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FlowGrid;
