

import { motion } from "framer-motion";
import { ArrowDown, Github, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechBadge } from "@/components/techBadge";

const techStack = [
  { name: "Next.js", variant: "default" as const },
  { name: "React", variant: "cyan" as const },
  { name: "React Native", variant: "cyan" as const },
  { name: "Expo", variant: "default" as const },
  { name: "Go", variant: "cyan" as const },
  { name: "FastAPI", variant: "emerald" as const },
  { name: "MongoDB", variant: "emerald" as const },
  { name: "PostgreSQL", variant: "purple" as const },
  { name: "Supabase", variant: "emerald" as const },
  { name: "Docker", variant: "cyan" as const },
  { name: "AI Systems", variant: "purple" as const },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Greeting */}
          <motion.p className="text-sm font-mono text-primary mb-4 tracking-wider">
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-foreground">Emmanuel</span>{" "}
            <span className="gradient-text">Ngulube</span>
          </motion.h1>

          {/* Title */}
          <motion.h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
            Software Developer — Frontend, Mobile & Backend
          </motion.h2>

          {/* Tagline */}
          <motion.p className="text-lg sm:text-xl md:text-2xl font-light text-foreground/80 mb-4 max-w-2xl mx-auto">
            Building modern web, mobile, and backend systems with scalable architecture and AI-driven features.
          </motion.p>

          {/* Description */}
          <motion.p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-xl mx-auto">
            I design user-focused interfaces, robust APIs, and intelligent platforms across SaaS, AI, and marketplace products.
          </motion.p>

          {/* Tech badges */}
          <motion.div className="flex flex-wrap justify-center gap-2 mb-10">
            {techStack.map((tech, index) => (
              <TechBadge
                key={tech.name}
                name={tech.name}
                variant={tech.variant}
                index={index}
              />
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" size="lg" asChild>
              <a href="#projects">
                View Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/Justdan111" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:emmanuelngulube292@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
