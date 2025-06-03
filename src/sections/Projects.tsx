import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils"; // Assuming this is your Tailwind cn helper

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack web application built with React and Node.js",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    link: "#",
  },
  {
    title: "DeFi Dashboard",
    description:
      "Decentralized finance dashboard using Ethereum smart contracts",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    tags: ["Solidity", "Web3.js", "React", "TypeScript"],
    link: "#",
  },
  {
    title: "Social Media App",
    description: "Mobile-first responsive social networking platform",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    tags: ["React Native", "Firebase", "TypeScript", "Redux"],
    link: "#",
  },
  {
    title: "AI Image Generator",
    description: "Image generation platform using machine learning",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "TensorFlow", "React", "FastAPI"],
    link: "#",
  },
];

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (scrollerRef.current && containerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      containerRef.current.style.setProperty(
        "--animation-direction",
        "forwards"
      );
      containerRef.current.style.setProperty("--animation-duration", "100s"); // Normal speed
      setStart(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Projects
            </span>
          </h2>

          {/* Infinite Scrolling Container */}
          <div
            ref={containerRef}
            className={cn("relative z-20 max-w-full overflow-hidden")}
          >
            <div
              ref={scrollerRef}
              className={cn(
                "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
                start && "animate-scroll",
                "hover:[animation-play-state:paused]"
              )}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="relative w-[300px] md:w-[400px] shrink-0 snap-center"
                >
                  <Card className="h-full bg-[#000000] border-[#404040] overflow-hidden group">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button variant="secondary" asChild>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Project
                          </a>
                        </Button>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-white">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-white/70">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-[#404040] text-white/80 rounded-md text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
