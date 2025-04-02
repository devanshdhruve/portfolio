import { motion } from "framer-motion";
import { ReactNode } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiFirebase,
  SiSolidity,
  SiWeb3Dotjs,
  SiEthers,
  SiMysql,
  SiPython,
  SiCplusplus,
  SiC,
  SiTypescript,
  SiExpress,
} from "react-icons/si";
import { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles"; // Correct import path
import { Particles } from "react-tsparticles";

interface SkillItem {
  name: string;
  icon: ReactNode;
}

interface SkillCategoryProps {
  title: string;
  items: SkillItem[];
}

const skills = {
  frontend: [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "MySQL", icon: <SiMysql /> },
  ],
  blockchain: [
    { name: "Solidity", icon: <SiSolidity /> },
    { name: "Web3.js", icon: <SiWeb3Dotjs /> },
    { name: "Ethers.js", icon: <SiEthers /> },
    {
      name: "Hardhat",
      icon: <img src="/Hardhat.svg" alt="Hardhat" width={24} height={24} />,
    },
  ],
  other: [
    { name: "C", icon: <SiC /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Git", icon: <FaGitAlt /> },
  ],
};

const SkillCategory = ({ title, items }: SkillCategoryProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-6"
  >
    <h3 className="text-xl font-bold mb-3 text-neonBlue">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map(({ name, icon }) => (
        <motion.span
          key={name}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 px-3 py-1 bg-gray-900 border border-neonBlue text-white rounded-full text-sm shadow-lg hover:shadow-neonBlue transition-all"
        >
          <span className="text-neonBlue">{icon}</span> {name}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const About = () => {
  const particlesInit = async (engine: Engine) => {
    try {
      await loadFull(engine);
    } catch (error) {
      console.error("Error initializing particles:", error);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-transparent" id="about">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false }, // Disable fullscreen mode
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: "#0000",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
              random: true,
            },
            size: {
              value: 3,
              random: true,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              outModes: "out",
            },
            links: {
              enable: true,
              color: "#0ff",
              distance: 150,
              opacity: 0.4,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              repulse: {
                distance: 100,
              },
              push: {
                quantity: 4,
              },
            },
          },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0, // Change from -1 to 0
        }}
      />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-extrabold mb-8 text-center text-neonBlue">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Me
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-300 mb-4"
              >
                I'm a passionate full-stack developer with expertise in modern
                web technologies and blockchain development. With a strong
                foundation in both front-end and back-end development, I create
                scalable and user-friendly applications.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-gray-300"
              >
                My journey in blockchain technology has equipped me with deep
                knowledge of smart contract development and decentralized
                applications. I'm always excited to take on new challenges and
                contribute to innovative projects.
              </motion.p>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-black border-2 border-neonBlue p-6 rounded-xl shadow-[0_0_10px_#0ff,0_0_20px_rgba(0,255,255,0.3)]"
              >
                <h2 className="text-2xl font-bold mb-6 text-neonBlue text-center">
                  My Skills
                </h2>
                <div className="space-y-6">
                  <SkillCategory title="Frontend" items={skills.frontend} />
                  <SkillCategory title="Backend" items={skills.backend} />
                  <SkillCategory title="Blockchain" items={skills.blockchain} />
                  <SkillCategory title="Other" items={skills.other} />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
