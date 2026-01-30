"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Server, Database, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import Link from "next/link";
import { Footer } from "@/components/footer";


const sections = [
  {
    title: "Problem Statement",
    content: "Organizations struggle to monitor security threats and operational metrics in real-time. Existing solutions are either too complex, too expensive, or lack the scalability needed for growing infrastructure.",
  },
  {
    title: "Solution",
    content: "ThreatIQ provides a unified dashboard for security monitoring and analytics. Built with Go for high-performance backend processing and Next.js for a responsive frontend, it delivers real-time insights with minimal latency.",
  },
];

const architecture = [
  { icon: Server, title: "Go Backend", description: "High-performance API server handling thousands of concurrent connections" },
  { icon: Database, title: "PostgreSQL", description: "Optimized schema for time-series security data and analytics" },
  { icon: Shield, title: "Threat Detection", description: "Real-time anomaly detection using statistical analysis" },
  { icon: Zap, title: "Real-time Updates", description: "WebSocket connections for instant dashboard updates" },
];

export default function ThreatIQ() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-cyan/5" />
          
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
                  {["Go", "Next.js", "PostgreSQL"].map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                  ThreatIQ
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
                  AI-Powered Security & Analytics Dashboard for monitoring system threats and operational metrics.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button variant="default" size="lg">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="lg">
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

              {/* Architecture */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-8 gradient-text">System Architecture</h2>
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

              {/* Challenges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4 gradient-text">Challenges & Solutions</h2>
                <div className="space-y-4">
                  <div className="glass-card rounded-xl p-6">
                    <h3 className="font-semibold mb-2">High-Volume Data Processing</h3>
                    <p className="text-sm text-muted-foreground">
                      Implemented Go&apos;s goroutines for concurrent processing, handling 10,000+ events per second with minimal memory footprint.
                    </p>
                  </div>
                  <div className="glass-card rounded-xl p-6">
                    <h3 className="font-semibold mb-2">Real-time Dashboard Updates</h3>
                    <p className="text-sm text-muted-foreground">
                      Used WebSocket connections with intelligent batching to push updates to the frontend without overwhelming the client.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Lessons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4 gradient-text">Key Takeaways</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Go&apos;s concurrency model is ideal for high-throughput backend systems
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    PostgreSQL time-series optimizations significantly improve query performance
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    WebSocket batching reduces frontend re-renders while maintaining real-time feel
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
