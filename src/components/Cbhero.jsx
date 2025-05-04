import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="bg-[#e0e4eb] flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-12">
      
      {/* Text Section */}
      <div className="text-center lg:text-left w-full lg:w-1/2" data-aos="fade-right">
        
        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl text-[#302350] font-bold mb-4 leading-snug"
          data-aos="fade-up"
        >
          <span className="text-[#ef4948]">Boost</span> efficiency with <br />
          <span className="text-[#ef4948]">AI chatbots</span> speeding<br />
          <span className="text-[#ef4948]">resolution </span>
          <TypeAnimation
            sequence={["challenges!", 2000, ""]}
            wrapper="span"
            cursor={false}
            repeat={Infinity}
            className="inline-block"
          />
        </h2>

        {/* Description */}
        <p
          className="text-md sm:text-lg text-gray-600 mb-6"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          Empower your customer support with faster, smarter AI-driven conversations.
        </p>

        {/* Email Input + Button (Stacked) */}
        <div
          className="flex flex-col items-center lg:items-start gap-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <input
            type="email"
            placeholder="Enter your business email"
            className="px-4 py-2 border border-[#ef4948] rounded-md w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-[#ef4948] font-semibold text-[#302350] px-6 py-2 rounded-md hover:bg-[#302350] hover:text-[#ef4948] w-28">
            Sign Up
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center"
        data-aos="fade-left"
      >
        <img
          src="/assests/images/Chat4.png"
          alt="Chatbot mobile screens"
          className="w-full h-auto max-w-[700px] max-h-[800px] object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
