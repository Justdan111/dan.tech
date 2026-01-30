"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Server, Database, ShoppingCart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import Link from "next/link";
import { Footer } from "@/components/footer";

const sections = [
  {
    title: "Problem Statement",
    content: "Many food ordering platforms face backend systems that don't scale efficiently, complex cart logic that becomes difficult to maintain, and poor database design leading to performance issues. Tight coupling between frontend and backend systems often results in unreliable platforms.",
  },
  {
    title: "Solution",
    content: "SwiftEats was built as a modular, backend-driven system with a dedicated mobile application. The platform emphasizes API-first architecture using Go, RESTful services for core business logic, PostgreSQL for structured relational data, and role-based access control.",
  },
];

const architecture = [
  { icon: Server, title: "Go Backend", description: "Modular REST API with authentication and authorization middleware" },
  { icon: Database, title: "PostgreSQL", description: "Relational schema optimized for transactional operations" },
  { icon: ShoppingCart, title: "Cart System", description: "Flexible cart management with session consistency" },
  { icon: Shield, title: "Role-Based Access", description: "Secured admin endpoints with middleware protection" },
];

const apiEndpoints = [
  { method: "GET", path: "/menu-items", description: "Fetch available menu items" },
  { method: "POST", path: "/cart", description: "Add items to cart" },
  { method: "GET", path: "/cart", description: "Retrieve cart contents" },
  { method: "POST", path: "/orders", description: "Place orders" },
  { method: "*", path: "/admin/*", description: "Admin-only operations" },
];

export default function SwiftEats() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-background to-emerald-500/5" />
          
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
                  {["Go", "PostgreSQL", "REST APIs", "React Native", "Expo"].map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                  SwiftEats
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
                  Scalable food ordering platform with mobile app and robust backend API.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button onClick={() => window.open("https://github.com/Justdan111/swiftEats-mobile", "_blank")} variant="default" size="lg">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button onClick={() => window.open("https://github.com/Justdan111/swiftEats-backend", "_blank")} variant="outline" size="lg">
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

              {/* API Design */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6 gradient-text">API Design</h2>
                <div className="glass-card rounded-xl overflow-hidden">
                  <div className="p-4 border-b border-border/50">
                    <span className="text-sm font-mono text-muted-foreground">Core Endpoints</span>
                  </div>
                  <div className="divide-y divide-border/50">
                    {apiEndpoints.map((endpoint, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="p-4 flex items-center gap-4"
                      >
                        <span className={`px-2 py-1 text-xs font-mono rounded ${
                          endpoint.method === "GET" ? "bg-emerald-500/20 text-emerald-400" :
                          endpoint.method === "POST" ? "bg-blue-500/20 text-blue-400" :
                          "bg-purple-500/20 text-purple-400"
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-sm font-mono text-foreground">{endpoint.path}</code>
                        <span className="text-sm text-muted-foreground ml-auto hidden sm:block">{endpoint.description}</span>
                      </motion.div>
                    ))}
                  </div>
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
                    <h3 className="font-semibold mb-2">Designing a Flexible Cart System</h3>
                    <p className="text-sm text-muted-foreground">
                      Implemented stateless API architecture with efficient relational modeling to handle dynamic cart updates while maintaining data consistency across sessions.
                    </p>
                  </div>
                  <div className="glass-card rounded-xl p-6">
                    <h3 className="font-semibold mb-2">Securing Admin Operations</h3>
                    <p className="text-sm text-muted-foreground">
                      Role-based authentication using middleware ensures only authorized users can access sensitive endpoints with clear separation between business logic and API layers.
                    </p>
                  </div>
                  <div className="glass-card rounded-xl p-6">
                    <h3 className="font-semibold mb-2">Performance Under Concurrent Requests</h3>
                    <p className="text-sm text-muted-foreground">
                      Query optimization with indexed queries and Go&apos;s concurrency model maintain fast response times with multiple simultaneous users.
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
                    API-first architecture enables seamless integration across mobile and web clients
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Modular design improves maintainability and extensibility
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    PostgreSQL with proper indexing handles transactional operations efficiently
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
