import React from "react";
import "./About.css";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiSolidity,
  SiEthers,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiC,
  SiCplusplus,
  SiGit,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { FaHardHat, FaTools } from "react-icons/fa";

// Icon mapping for skills
const iconMap: Record<string, JSX.Element> = {
  React: <SiReact />,
  TypeScript: <SiTypescript />,
  "Tailwind CSS": <SiTailwindcss />,
  "Next.js": <SiNextdotjs />,
  "Vue.js": <SiVuedotjs />,
  "Node.js": <SiNodedotjs />,
  Express: <SiExpress />,
  Python: <SiPython />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  Solidity: <SiSolidity />,
  "Ethers.js": <SiEthers />,
  JavaScript: <SiJavascript />,
  C: <SiC />,
  "C++": <SiCplusplus />,
  Git: <SiGit />,
  MongoDB: <SiMongodb />,
  MySQL: <SiMysql />,
  Hardhat: <FaHardHat />,
};

const skills = {
  Frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Next.js",
  ],
  Backend: ["Node.js", "Express", "MongoDB", "MySQL"],
  Blockchain: ["Solidity", "Web3.js", "Ethers.js", "Hardhat"],
  Other: ["C", "C++", "Python"],
};

const About = () => {
  return (
    <div className="relative w-full min-h-[90vh] bg-black text-white flex items-center justify-center px-4 sm:px-8 md:px-16 py-16 overflow-hidden">
      <div className="stars" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in">
        {/* About Text */}
        <div>
          <h1 className="text-5xl font-extrabold mb-6 text-white tracking-tight">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Me
            </span>
          </h1>
          <p className="text-gray-300 mb-5 text-lg leading-relaxed">
            I'm a passionate full-stack developer with expertise in modern web
            technologies and blockchain development. With a strong foundation in
            both front-end and back-end, I build scalable, user-friendly apps.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            My journey in blockchain technology has equipped me with deep
            knowledge of smart contract development and dApps. I love taking on
            new challenges and contributing to innovative projects.
          </p>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">My Skills</h2>

          {Object.entries(skills).map(([section, items]) => (
            <div className="mb-6" key={section}>
              <h3 className="text-xl font-semibold text-white mb-2">
                {section}
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center gap-2 bg-white text-black px-4 py-1 rounded-full text-sm font-medium shadow-md transition-transform transform hover:scale-105 hover:bg-[#00FFF0] hover:text-black"
                  >
                    {iconMap[skill] && (
                      <span className="text-lg">{iconMap[skill]}</span>
                    )}
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
