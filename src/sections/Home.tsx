import React from "react";
import "./IconOrbit.css";

const Home = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-black text-white flex items-center justify-center px-4 sm:px-8 md:px-16 py-12 overflow-hidden">
      {/* Stars background */}
      <div className="stars" />

      {/* Main content container */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 z-10">
        {/* Left content - Text section */}
        <div className="max-w-2xl space-y-4 md:space-y-6 text-center md:text-left">
          <p className="text-lg text-gray-400">Welcome</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Devansh Dhruve
            </span>
          </h1>

          <div className="w-16 h-1 mx-auto md:mx-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full my-4" />

          <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 text-sm font-medium text-blue-400">
            <span>Full Stack Developer</span>
            <span className="text-cyan-400">• Blockchain Enthusiast</span>
            <span className="text-pink-400">• Problem Solver</span>
          </div>

          <div className="text-gray-300 leading-relaxed space-y-3 mt-4">
            <p className="text-sm sm:text-base">
              Crafting elegant solutions at the intersection of design and
              technology.
            </p>
            <p className="text-sm sm:text-base">
              Specialized in building robust web applications and blockchain
              integrations with a focus on performance and user experience.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 justify-center md:justify-start">
            <a href="#contact" className="inline-block w-full sm:w-auto">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-full font-medium sm:font-semibold shadow-md hover:opacity-90 transition-all w-full sm:w-auto">
                Get in Touch
              </button>
            </a>
            <a href="#projects" className="inline-block w-full sm:w-auto">
              <button className="border border-white px-5 py-2 rounded-full font-medium sm:font-semibold hover:bg-white hover:text-black transition-all w-full sm:w-auto">
                View Projects
              </button>
            </a>
          </div>
        </div>

        {/* Right content - Solar system animation */}
        <div className="flex items-center justify-center mt-10 sm:mt-12 md:mt-0">
          <div className="solar-system scale-[0.7] sm:scale-[0.8] md:scale-100">
            <div className="sun">
              <i className="devicon-react-original colored text-5xl" />
            </div>
            <div className="orbit orbit1">
              <div className="planet">
                <i className="devicon-typescript-plain colored text-2xl" />
              </div>
            </div>
            <div className="orbit orbit2">
              <div className="planet">
                <i className="devicon-javascript-plain colored text-2xl" />
              </div>
            </div>
            <div className="orbit orbit3">
              <div className="planet">
                <i className="devicon-solidity-plain colored text-2xl" />
              </div>
            </div>
            <div className="orbit orbit4">
              <div className="planet">
                <i className="devicon-tailwindcss-original colored text-2xl" />
              </div>
            </div>
            <div className="orbit orbit5">
              <div className="planet">
                <i className="devicon-nextjs-original text-white text-2xl" />
              </div>
            </div>
            <div className="orbit orbit6">
              <div className="planet">
                <i className="devicon-nodejs-plain colored text-2xl" />
              </div>
            </div>
            <div className="orbit orbit7">
              <div className="planet">
                <i className="devicon-git-plain colored text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
