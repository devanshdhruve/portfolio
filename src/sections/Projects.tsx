import { useRef, useEffect } from "react";
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8">Featured Projects</h2>

          <div className="relative">
            {/* Desktop Navigation Buttons */}
            <div className="hidden md:block">
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#2d2d2d] hover:bg-[#404040]"
                onClick={() => scroll("left")}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#2d2d2d] hover:bg-[#404040]"
                onClick={() => scroll("right")}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Project Cards Container */}
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="min-w-[300px] md:min-w-[400px] snap-center"
                >
                  <Card className="h-full bg-[#2d2d2d] border-[#404040] overflow-hidden group">
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
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
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
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
