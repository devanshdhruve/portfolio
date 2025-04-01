import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavbarProps {
  isScrolled?: boolean;
}

const Navbar = ({ isScrolled = false }: NavbarProps) => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(isScrolled);
  const location = useLocation();

  // Handle scroll effect if not provided via props
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://github.com/yourusername", icon: Github, label: "GitHub" },
    {
      href: "https://linkedin.com/in/yourusername",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://twitter.com/yourusername",
      icon: Twitter,
      label: "Twitter",
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center md:justify-between">
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-base font-medium px-2 py-1 border-b-2 transition-all duration-200 hover:text-primary ${
                  location.pathname === link.href
                    ? "border-primary text-primary"
                    : "border-transparent text-foreground/80 hover:border-primary/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links and Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2 text-foreground/70 hover:text-primary transition-colors"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}

            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
              className="rounded-full h-9 w-9 border-foreground/20"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile Menu - Centered */}
          <div className="flex md:hidden items-center justify-between w-full">
            <div className="flex-1"></div> {/* Spacer for centering */}
            <div className="flex items-center space-x-6">
              {navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-base font-medium transition-colors ${
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex-1 flex justify-end">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label={`Switch to ${
                  theme === "dark" ? "light" : "dark"
                } mode`}
                className="mr-2"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col h-full pt-8">
                    <div className="flex flex-col space-y-6">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          className={`text-lg font-medium transition-colors hover:text-primary ${
                            location.pathname === link.href
                              ? "text-primary"
                              : "text-foreground/80"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>

                    <div className="mt-auto py-6 border-t border-border">
                      <div className="flex justify-start space-x-6">
                        {socialLinks.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                            className="text-foreground/70 hover:text-primary transition-colors"
                          >
                            <link.icon className="h-5 w-5" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
