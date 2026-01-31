import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "ThreatIQ",
    description: "AI-Powered Security & Analytics Dashboard for monitoring system threats and operational metrics with scalable backend architecture.",
    tech: ["Go", "Next.js", "PostgreSQL"],
    featured: true,
    caseStudyUrl: "/projects/threatiq",
  },
  {
    title: "BizCrew AI",
    description: "AI-powered SaaS platform providing virtual AI staff (Accountant, Marketing, Support) for businesses with multi-model support.",
    tech: ["Next.js", "Supabase", "LLM APIs", "Vector DB"],
    featured: true,
    caseStudyUrl: "/projects/bizcrew-ai",
  },
  {
    title: "SwiftEats",
    description: "Scalable backend system for food ordering, menu management, and cart operations with optimized API flows.",
    tech: ["Go", "PostgreSQL", "REST APIs"],
    caseStudyUrl: "/projects/swifteats",
  },
  {
    title: "Seampaie",
    description: "AI-driven payroll and HR platform with automated salary processing, fraud detection, and compliance for African businesses.",
    tech: ["React", "Vite", "APIs", "AI"],
    caseStudyUrl: "/projects/seampaie",
  },
  {
    title: "Reflecta",
    description: "Mood tracking mobile app with Golang backend and MongoDB for storing emotional logs and generating insights.",
    tech: ["React Native", "Expo", "Go", "MongoDB"],
    caseStudyUrl: "/projects/reflecta",
  },
  {
    title: "CredFlow",
    description: "Financial dashboard for managing credit records and workflows with intuitive data visualization.",
    tech: ["Next.js", "APIs", "Database"],
    caseStudyUrl: "/projects/credflow",
  },
  {
    title: "QueueUp",
    description: "Smart queue management mobile app for digital queue systems and real-time updates.",
    tech: ["React Native", "Expo"],
    caseStudyUrl: "/projects/queueup",
  },
  {
    title: "AgroConnect",
    description: "AI-driven platform providing intelligent agricultural guidance and recommendations for farmers.",
    tech: ["Next.js", "AI APIs"],
    caseStudyUrl: "/projects/agroconnect",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-wider">PORTFOLIO</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of backend systems, AI platforms, and full-stack applications 
            solving real-world problems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
