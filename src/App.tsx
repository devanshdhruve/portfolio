import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
// import Navbar from "@/components/Navbar";
import Home from "@/sections/Home";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import { Button } from "@/components/ui/button";
import FloatingDockDemo from "@/components/floating-dock-demo";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-[#121212] text-white">
        {/* <Navbar isScrolled={isScrolled} /> */}
        <main>
          <section id="home" className="scroll-mt-16">
            <Home />
          </section>
          <section id="about" className="scroll-mt-16">
            <About />
          </section>
          <section id="projects" className="scroll-mt-16">
            <Projects />
          </section>
          <section id="contact" className="scroll-mt-16">
            <Contact />
          </section>
        </main>

        <FloatingDockDemo />

        <AnimatePresence>
          {showScrollTop && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-8 right-8 z-50"
            >
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full bg-[#2d2d2d] hover:bg-[#404040] transition-colors"
                onClick={scrollToTop}
              >
                <ChevronUp className="h-5 w-5" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
