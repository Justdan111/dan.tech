"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Brain, Rocket } from "lucide-react";

const stats = [
  { value: "15+", label: "Projects Built", icon: Rocket },
  { value: "10+", label: "Systems Designed", icon: Database },
  { value: "5+", label: "AI Products", icon: Brain },
];

const philosophyPoints = [
  {
    icon: Database,
    title: "Backend Architecture",
    description: "Designing scalable, maintainable systems that handle real-world complexity with elegance.",
  },
  {
    icon: Brain,
    title: "AI-Driven Systems",
    description: "Leveraging LLMs and multi-agent systems to build intelligent, adaptive products.",
  },
  {
    icon: Code2,
    title: "Product Thinking",
    description: "Building technology that solves real problems for users in Africa and global markets.",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="text-sm font-mono text-primary mb-2 tracking-wider">ABOUT ME</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Engineering <span className="gradient-text">Philosophy</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I build software that matters. From backend APIs to AI-powered platforms, 
              I focus on creating scalable solutions that solve real-world problems.
            </p>
          </motion.div>

          {/* Philosophy cards */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {philosophyPoints.map((point, index) => (
              <motion.div
                key={point.title}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card rounded-2xl p-6 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-cyan/20 flex items-center justify-center"
                >
                  <stat.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
