"use client";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Brain, Database, Users, Cpu } from "lucide-react";
import Link from "next/link";


const sections = [
  {
    title: "Problem Statement",
    content: "SMEs face high operational costs of hiring staff, inefficient manual workflows, and limited access to intelligent automation tools. Traditional solutions are expensive and require significant technical expertise to implement.",
  },
  {
    title: "Solution",
    content: "BizCrew AI introduces AI agents that act as virtual employees, reducing costs and improving productivity. The platform provides role-based AI agents for accounting, marketing, and customer support with multi-model AI support and contextual memory.",
  },
];

const architecture = [
  { icon: Brain, title: "LLM Reasoning", description: "Multi-model support with OpenAI and Claude for intelligent responses" },
  { icon: Database, title: "Vector Database", description: "Contextual memory using Supabase and vector embeddings" },
  { icon: Users, title: "AI Agents", description: "Role-based agents for accounting, marketing, and support tasks" },
  { icon: Cpu, title: "Orchestration", description: "CrewAI-style multi-agent workflow management" },
];

const agents = [
  { 
    name: "Accountant Agent", 
    description: "Financial summaries, expense analysis, and budget tracking",
    color: "bg-emerald-500/20 text-emerald-400"
  },
  { 
    name: "Marketing Agent", 
    description: "Content generation and campaign strategy recommendations",
    color: "bg-blue-500/20 text-blue-400"
  },
  { 
    name: "Support Agent", 
    description: "Automated customer interactions and issue resolution",
    color: "bg-purple-500/20 text-purple-400"
  },
];

const features = [
  "Role-based AI agents",
  "File upload & document parsing",
  "Agent memory and context retention",
  "Multi-model AI support",
  "Usage limits and analytics",
];

export default function BizCrewAI() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-background to-purple-500/5" />
          
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
                  {["Next.js", "Supabase", "LLM APIs", "Vector DB"].map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                  BizCrew AI
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
                  AI-powered SaaS platform providing virtual AI staff for SMEs.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button onClick={() => window.open("https://bicrewai-frontend.vercel.app", "_blank")} variant="default" size="lg">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button onClick={() => window.open("https://github.com/Justdan111/bizrewai-backend", "_blank")} variant="outline" size="lg">
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

              {/* AI Agents */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-8 gradient-text">Core AI Agents</h2>
                <div className="grid gap-6">
                  {agents.map((agent, index) => (
                    <motion.div
                      key={agent.name}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-card rounded-xl p-6 card-hover"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`px-3 py-1.5 rounded-lg text-sm font-medium ${agent.color}`}>
                          {agent.name}
                        </div>
                        <p className="text-muted-foreground">{agent.description}</p>
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

              {/* Features */}
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
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
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
                    <h3 className="font-semibold mb-2">Multi-Agent Workflows</h3>
                    <p className="text-sm text-muted-foreground">
                      Implemented CrewAI-style architecture to orchestrate multiple AI agents working together on complex tasks.
                    </p>
                  </div>
                  <div className="glass-card rounded-xl p-6">
                    <h3 className="font-semibold mb-2">AI Context & Memory</h3>
                    <p className="text-sm text-muted-foreground">
                      Vector databases store conversation history and document embeddings for contextual memory across sessions.
                    </p>
                  </div>
                  <div className="glass-card rounded-xl p-6">
                    <h3 className="font-semibold mb-2">Secure & Scalable Architecture</h3>
                    <p className="text-sm text-muted-foreground">
                      Supabase provides authentication, storage, and row-level security while the API layer handles LLM orchestration.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Impact */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4 gradient-text">Impact & Outcomes</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Reduced operational costs for SMEs through AI automation
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Improved decision-making with intelligent agent recommendations
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Scalable multi-agent architecture for future agent expansion
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
