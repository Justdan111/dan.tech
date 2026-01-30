"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Server, Database, Brain, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";

const sections = [
  {
    title: "Problem Statement",
    content: "Mental health tracking apps often lack personalized insights, store data inefficiently, and fail to scale with user-generated emotional data. Users need a platform that understands the unstructured nature of emotional experiences.",
  },
  {
    title: "Solution",
    content: "Reflecta was built with a React Native (Expo) mobile frontend, Golang backend API for performance, and MongoDB for flexible emotional data storage. The system generates meaningful insights and trends from user mood logs.",
  },
];

const architecture = [
  { icon: Activity, title: "React Native App", description: "Cross-platform mobile app built with Expo for iOS and Android" },
  { icon: Server, title: "Go Backend", description: "Lightweight and performant REST API for data processing" },
  { icon: Database, title: "MongoDB", description: "NoSQL database for flexible emotional data storage" },
  { icon: Brain, title: "Insights Engine", description: "Aggregation pipelines for trend analysis and pattern detection" },
];

const collections = [
  { name: "users", description: "User profiles and preferences" },
  { name: "mood_logs", description: "Daily mood entries with timestamps" },
  { name: "triggers", description: "Emotional triggers and patterns" },
  { name: "insights", description: "Generated trends and analytics" },
];

export default function Reflecta() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 via-background to-pink-500/5" />
          
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
                  {["React Native", "Expo", "Go", "MongoDB"].map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                  Reflecta
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
                  Mood tracking mobile app with Go backend and intelligent insights generation.
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

              {/* Data Flow */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6 gradient-text">Data Flow</h2>
                <div className="glass-card rounded-xl p-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
                    {["Mobile App", "Go API", "MongoDB", "Insights"].map((step, index) => (
                      <div key={step} className="flex items-center gap-4">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="w-24 h-24 rounded-xl bg-primary/10 flex items-center justify-center"
                        >
                          <span className="text-sm font-medium text-primary">{step}</span>
                        </motion.div>
                        {index < 3 && (
                          <span className="hidden sm:block text-muted-foreground">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Database Design */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6 gradient-text">Database Design</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {collections.map((collection, index) => (
                    <motion.div
                      key={collection.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-card rounded-xl p-4"
                    >
                      <code className="text-sm font-mono text-primary">{collection.name}</code>
                      <p className="text-sm text-muted-foreground mt-1">{collection.description}</p>
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
                    <h3 className="font-semibold mb-2">Modeling Emotional Data</h3>
                    <p className="text-sm text-muted-foreground">
                      Used NoSQL schema design with MongoDB to handle varying emotional data structures and unstructured user inputs.
                    </p>
                  </div>
                  <div className="glass-card rounded-xl p-6">
                    <h3 className="font-semibold mb-2">Insight Generation Logic</h3>
                    <p className="text-sm text-muted-foreground">
                      Implemented aggregation pipelines for trend analysis, enabling pattern detection across mood logs over time.
                    </p>
                  </div>
                  <div className="glass-card rounded-xl p-6">
                    <h3 className="font-semibold mb-2">Efficient Data Retrieval</h3>
                    <p className="text-sm text-muted-foreground">
                      Lightweight Go API design ensures fast response times while MongoDB&apos;s indexing handles growing data volumes.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Key Takeaways */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4 gradient-text">Key Takeaways</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    MongoDB&apos;s flexibility is ideal for unstructured emotional data
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Go provides excellent performance for lightweight API services
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Aggregation pipelines enable powerful trend analysis without complex application logic
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
