import { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import type { Container, Engine } from 'tsparticles-engine';

const Home = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Lamp Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <div className="relative">
          <div className="w-1 h-40 bg-gradient-to-b from-primary to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Full Stack Developer | Blockchain Enthusiast | Problem Solver
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center space-x-4"
          >
            <a
              href="#contact"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-lg transition-colors"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;