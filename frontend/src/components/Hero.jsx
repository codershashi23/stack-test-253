import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Build Modern Web Experiences with <span className="text-yellow-300">Ease</span>
          </h1>
          <p className="mt-6 text-lg text-gray-100">
            We craft responsive, fast, and scalable web solutions to empower your business
            in the digital world.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#services"
              className="bg-yellow-400 text-indigo-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-yellow-300 transition"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        {}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/906/906343.png"
            alt="Hero Illustration"
            className="w-80 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
