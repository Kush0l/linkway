import React from "react";

const AgenticAISection = () => {
  return (
    <div className="bg-[#2c1a79] text-white py-16 px-8 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Side Content */}
      <div className="lg:w-1/2 space-y-6">
        <h1 className="text-4xl font-bold leading-tight">
          Agentic AI Platform for <br /> Service Automation
        </h1>
        <p className="text-lg text-gray-200">
          Streamline customer service operations with accurate, faster and
          personalized interactions, powered by our platform’s superior AI
          capabilities.
        </p>

        <button className="bg-[#ef4948] text-[#302350] font-bold py-3 px-6 rounded-full hover:bg-yellow-300 transition duration-300">
          Book a demo
        </button>

        <ul className="mt-6 space-y-4 text-base text-gray-100">
          <li className="flex items-start">
            <span className="text-yellow-400 text-xl mr-2">✔</span>
            Human-like conversations via chats , calls.
          </li>
          <li className="flex items-start">
            <span className="text-yellow-400 text-xl mr-2">✔</span>
            Speed and accuracy through in-house LLMs.
          </li>
          <li className="flex items-start">
            <span className="text-yellow-400 text-xl mr-2">✔</span>
            150+ plug-and-play integrations to go live faster
          </li>
        </ul>
      </div>

      {/* Right Side: Video and Chat UI */}
      <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
        <div className="rounded-3xl overflow-hidden shadow-xl relative">
          {/* Replace this with actual video */}
          <video
            className="w-full h-[400px] object-cover"
            src="/assests/images/2.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Overlays */}
          <div className="absolute top-6 left-6 bg-black bg-opacity-60 text-white px-4 py-2 rounded-full text-sm">
            90% automation with 24×7 self-service
          </div>
          </div>
        </div>
      </div>
    
  );
};

export default AgenticAISection;
