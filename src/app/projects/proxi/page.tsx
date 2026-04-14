"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Server, Database, Shield, MapPin, Bell, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";

const sections = [
  {
    title: "Problem",
    content:
      "Most reminder apps are time-based, but many real tasks are context-based. Reminding someone to buy fuel only matters when they are near a station, not at an arbitrary time. Time alarms create noise, get dismissed, and fail to match real-world behavior.",
  },
  {
    title: "Solution",
    content:
      "Proxi combines a location-aware Expo mobile app with a focused Go backend. The app handles GPS and geofencing in real time, while the API handles authentication, reminder persistence, and activity history. This split keeps location logic responsive on-device and keeps backend concerns clean and scalable.",
  },
];

const architecture = [
  {
    icon: MapPin,
    title: "Expo Mobile App",
    description: "Client-side GPS, geofencing, and local notifications for proximity reminders",
  },
  {
    icon: Server,
    title: "Go + Chi API",
    description: "REST API for authentication, reminders, and activity logging",
  },
  {
    icon: Database,
    title: "MongoDB Atlas",
    description: "Flexible document storage for users, reminders, and event history",
  },
  {
    icon: Shield,
    title: "JWT Security",
    description: "HS256 tokens and bcrypt password hashing for secure account flows",
  },
  {
    icon: Bell,
    title: "Notification Flow",
    description: "Events are logged for created, toggled, deleted, and triggered reminder actions",
  },
  {
    icon: Activity,
    title: "Deploy Stack",
    description: "Railway deployment with environment-driven config and container support",
  },
];

const apiGroups = [
  {
    title: "Health",
    endpoints: ["GET /health"],
    notes: "Checks API and MongoDB status for uptime verification.",
  },
  {
    title: "Authentication",
    endpoints: [
      "POST /api/auth/signup",
      "POST /api/auth/login",
      "POST /api/auth/logout",
      "GET /api/auth/me",
    ],
    notes: "Handles account lifecycle and token-based user identity.",
  },
  {
    title: "Reminders",
    endpoints: [
      "GET /api/reminders",
      "POST /api/reminders",
      "GET /api/reminders/:id",
      "PUT /api/reminders/:id",
      "PATCH /api/reminders/:id/toggle",
      "DELETE /api/reminders/:id",
    ],
    notes: "All routes are user-scoped so data is isolated per authenticated account.",
  },
  {
    title: "Activity",
    endpoints: ["GET /api/activities", "POST /api/activities"],
    notes: "Stores recent user events for timeline history and future analytics.",
  },
];

const highlights = [
  "User-scoped data access across reminders and activities",
  "Consistent JSON response shape for predictable client integration",
  "Support for location metadata, radius, and optional active timeframe windows",
  "Secure authentication with expiring JWT tokens and bcrypt password hashing",
  "Dockerized local workflow plus Railway production deployment",
  "Clear separation of concerns across handler, service, and repository layers",
];

const workflow = [
  "User signs up or logs in and receives a JWT token",
  "Mobile app stores token securely and sends it with protected API requests",
  "User creates reminders with title, place, radius, and coordinates",
  "App performs geofencing locally and triggers notifications on proximity",
  "App logs event history to activity endpoints for traceability",
  "API persists all state and enforces ownership rules for every query",
];

export default function Proxi() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        <section className="py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 via-background to-sky-500/5" />

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
                  {["Go", "Chi", "MongoDB", "JWT", "Expo", "Docker", "Railway"].map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Proxi</h1>
                <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
                  Location-based reminder platform where the mobile app handles geofencing and the backend focuses on secure data and account workflows.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button asChild variant="default" size="lg">
                    <Link href="https://github.com/Justdan111/proxi-app" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Mobile App
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="https://github.com/Justdan111/proxi-api" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Backend API
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

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
                  <p className="text-lg text-muted-foreground leading-relaxed">{section.content}</p>
                </motion.div>
              ))}

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
                      transition={{ delay: index * 0.08 }}
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

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6 gradient-text">Product Workflow</h2>
                <div className="grid gap-4">
                  {workflow.map((step, index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: -25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.06 }}
                      className="glass-card rounded-xl p-5"
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-semibold flex items-center justify-center mt-0.5">
                          {index + 1}
                        </span>
                        <p className="text-sm text-muted-foreground">{step}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6 gradient-text">API Design</h2>
                <div className="space-y-4">
                  {apiGroups.map((group, index) => (
                    <motion.div
                      key={group.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="glass-card rounded-xl p-6"
                    >
                      <h3 className="font-semibold mb-3">{group.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {group.endpoints.map((endpoint) => (
                          <code key={endpoint} className="text-xs bg-primary/10 text-primary rounded-md px-2 py-1">
                            {endpoint}
                          </code>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">{group.notes}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6 gradient-text">Implementation Highlights</h2>
                <div className="glass-card rounded-xl p-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {highlights.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.04 }}
                        className="flex items-start gap-3"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4 gradient-text">Outcome</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Proxi delivers a practical reminder experience by combining location-aware mobile behavior with a clean, production-minded backend. The project demonstrates API design discipline, secure authentication, user data isolation, and deployment readiness from local Docker workflows to Railway hosting.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
