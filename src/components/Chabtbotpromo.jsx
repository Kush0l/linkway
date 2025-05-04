import React from "react";

const ChatbotPromo1 = () => {
  return (
    <div className="bg-white text-center py-16 px-6">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Contribute to ChatBot’s  future
      </h1>
      <p className="text-lg font-medium text-gray-800 mb-6">
        Unleash the ChatBot’s AI potential and increase your productivity
      </p>
      <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition mb-16">
        Try It Now
      </button>

      {/* 🔁 New Main Box Start */}
      <div className="bg-[#f6fcff] p-1 rounded-3xl border-2 border-blue-300 shadow-[0_0_15px_#60a5fa] max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center bg-white rounded-3xl overflow-hidden">
          {/* Text Content */}
          <div className="lg:w-1/2 p-8 space-y-6 text-left">
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">
              AI-Powered Chatbot, Built <br /> for Human-Like Conversations
            </h3>

            <div className="border-t pt-4">
              <h4 className="font-bold text-md">Qualify Leads Automatically</h4>
              <p className="text-gray-600 text-sm">
                Capture visitor intent, ask the right questions, and route qualified leads to your sales team in real time.
              </p>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-bold text-md">Onboard New Users</h4>
              <p className="text-gray-600 text-sm">
                Guide users through your product or service with interactive walkthroughs and proactive help.
              </p>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-bold text-md">Instant Support, 24/7</h4>
              <p className="text-gray-600 text-sm">
                Answer customer queries any time, reduce wait times, and keep users happy — even when your team is offline.
              </p>
            </div>

            <button className="mt-6 px-5 py-2 bg-blue-100 text-sm font-semibold rounded-xl shadow-md hover:bg-blue-200 transition">
              SEE HOW IT WORKS
            </button>
          </div>

          {/* Image Section with Glowing Circle */}
          <div className="relative lg:w-1/2 p-6 flex justify-center items-center bg-[#e6f6fc]">
            <div className="absolute w-80 h-80 bg-blue-300 opacity-30 blur-3xl rounded-full z-0"></div>
            <img
              src="/assests/images/CB2.png"  // Replace with your actual image path
              alt="Chatbot Screenshot"
              className="w-64 h-auto z-10 relative rounded-xl"
            />
          </div>
        </div>
      </div>
      {/* 🔁 New Main Box End */}
    </div>
  );
};

export default ChatbotPromo1;
