"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Server, Shield, MapPin, Brain, Users, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import Link from "next/link";
import { Footer } from "@/components/footer";


const sections = [
  {
    title: "Why ThreatIQ",
    content: "Many communities—especially in regions where formal reporting systems are limited—receive security information through informal channels like messaging apps, social media, or word of mouth. That information is often late, fragmented, or unverifiable, leading to slower responses and increased risk. ThreatIQ creates a central, trusted channel for reporting and verifying incidents so people and responders can act faster and more confidently.",
  },
  {
    title: "The Solution",
    content: "ThreatIQ is a community-driven security intelligence platform that combines trusted human reporting, location intelligence, and AI-powered risk analysis to transform fragmented information into clear, actionable intelligence. It enables real-time incident reporting, AI-assisted risk scoring, human verification workflows, and interactive map-based analytics.",
  },
];

const howItWorks = [
  { step: "Report", description: "Users submit incidents (suspicious activity, theft, violence, infrastructure damage, emergencies) with location, description, severity, and optional media." },
  { step: "Analyze", description: "AI checks for duplicates, assigns a risk score, and surfaces patterns across time and place." },
  { step: "Verify", description: "Trusted community leaders and admins confirm or flag reports to improve accuracy." },
  { step: "Act", description: "Users receive location-based alerts and can view incidents on interactive maps and dashboards." },
];

const architecture = [
  { icon: Server, title: "Next.js Frontend", description: "Responsive, security-first UI with dark mode and real-time incident feeds" },
  { icon: Shield, title: "Golang Backend", description: "High-performance APIs for incident processing, user management, and analytics" },
  { icon: Brain, title: "AI Engine", description: "Risk scoring, duplicate detection, and pattern analysis across reports" },
  { icon: MapPin, title: "Location Intelligence", description: "Interactive heatmaps and map-based visualization of incidents" },
  { icon: Users, title: "Community Verification", description: "Workflow for leaders and admins to verify and flag reports" },
  { icon: Lock, title: "Security & Access", description: "Role-based access controls, encryption, and audit logs" },
];

const features = [
  "Live incident feed and alerts",
  "Interactive heatmaps and map intelligence",
  "AI risk scoring and pattern detection",
  "Community verification workflow",
  "Secure, role-based access controls",
  "Analytics and historical trend reporting",
  "Dark-mode, security-first UI",
  "Location-based notifications",
];

const audiences = [
  { name: "Local Residents", description: "Neighborhood groups staying informed about nearby threats" },
  { name: "Community Leaders & NGOs", description: "Verifying and coordinating incident response" },
  { name: "Security Teams", description: "Emergency responders monitoring real-time intelligence" },
  { name: "City Planners & Analysts", description: "Using historical data and trends for safety planning" },
];

export default function ThreatIQ() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-cyan/5" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/#projects">
                <Button variant="ghost" size="sm" className="mb-8">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Projects
                </Button>
              </Link>

              <div className="max-w-4xl">
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Next.js", "Golang", "AI", "Maps"].map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                  ThreatIQ
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
                  Community-driven security intelligence platform for detecting, understanding, and responding to threats in real time.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button onClick={() => window.open("https://threatiq.example.com", "_blank")} variant="default" size="lg">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button onClick={() => window.open("https://github.com/Justdan111/threatiq", "_blank")} variant="outline" size="lg">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content sections */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-16">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h2 className="text-2xl font-bold mb-4 gradient-text">{section.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              ))}

              {/* How It Works */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-8 gradient-text">How It Works</h2>
                <div className="grid gap-6">
                  {howItWorks.map((item, index) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-card rounded-xl p-6 card-hover"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                          <span className="text-sm font-bold text-primary">{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{item.step}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Architecture */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-8 gradient-text">Technology & Architecture</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {architecture.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-card rounded-xl p-6 card-hover"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6 gradient-text">Key Features</h2>
                <div className="glass-card rounded-xl p-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Who Should Use */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-8 gradient-text">Who Should Use ThreatIQ</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {audiences.map((audience, index) => (
                    <motion.div
                      key={audience.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-card rounded-xl p-6 card-hover"
                    >
                      <h3 className="font-semibold mb-2">{audience.name}</h3>
                      <p className="text-sm text-muted-foreground">{audience.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
