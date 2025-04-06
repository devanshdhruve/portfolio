import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconFileText,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-300 dark:text-neutral-300" />
      ),
      href: "#home",
    },
    {
      title: "About",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-300 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Projects",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-300 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Contact",
      icon: (
        <IconExchange className="h-full w-full text-neutral-300 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
    {
      title: "Resume",
      icon: (
        <IconFileText className="h-full w-full text-neutral-300 dark:text-neutral-300" />
      ),
      href: "https://drive.google.com/file/d/13NTlFjQs_0XW_m5tv3vdxFSQN8kqoqVA/view?usp=sharing",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-300 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/devansh-dhruve-6a19aa214/",
    },
    {
      title: "X",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-300 dark:text-neutral-300" />
      ),
      href: "https://x.com/DDhruve89997",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-300 dark:text-neutral-300" />
      ),
      href: "https://github.com/devanshdhruve",
    },
  ];
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 ">
      <FloatingDock items={links} />
    </div>
  );
}
