"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Brain, Rocket } from "lucide-react";



const philosophyPoints = [
  {
    icon: Code2,
    title: "Frontend & Mobile Experiences",
    description:
      "Crafting intuitive, responsive, and high-performance web and mobile interfaces with React, Next.js, and React Native.",
  },
  {
    icon: Database,
    title: "Backend Architecture",
    description:
      "Designing scalable APIs and systems using Go, FastAPI, MongoDB, PostgreSQL, and cloud-native tools.",
  },
  {
    icon: Brain,
    title: "AI & Product Systems",
    description:
      "Building intelligent platforms and automation systems that solve real-world problems using AI and modern software design.",
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
                I build digital products across web, mobile, and backend systems. 
                My focus is on creating scalable, user-centered, and intelligent software 
                that solves real-world problems in Africa and beyond.
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

      </div>
    </section>
  );
}
