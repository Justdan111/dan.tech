"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, ShoppingCart, MapPin, Clock3, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import Link from "next/link";
import { Footer } from "@/components/footer";

const sections = [
  {
    title: "What SwiftEats Is",
    content: "SwiftEats is a mobile food-ordering experience that helps users discover meals, add items to a cart, and place orders quickly without friction.",
  },
  {
    title: "Why It Matters",
    content: "The app focuses on speed, clarity, and convenience so people can go from hunger to checkout in a few taps, even during busy moments.",
  },
];

const architecture = [
  { icon: ShoppingCart, title: "Simple Cart Flow", description: "Add, remove, and review items with instant feedback" },
  { icon: MapPin, title: "Location Awareness", description: "See nearby restaurants and relevant delivery options" },
  { icon: Clock3, title: "Fast Ordering", description: "Clean ordering flow designed to reduce time-to-checkout" },
  { icon: Bell, title: "Order Updates", description: "Clear status updates so users know what is happening next" },
];

const userJourney = [
  "Browse available meals and categories",
  "Pick items and customize your cart",
  "Place an order in a few taps",
  "Track order progress with clear status updates",
];

export default function SwiftEats() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-orange-500/5 via-background to-emerald-500/5" />
          
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
                  {["React Native", "Expo", "Food Ordering", "Mobile UX"].map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                  SwiftEats
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
                  A simple mobile app for discovering meals and ordering food quickly.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button onClick={() => window.open("https://github.com/Justdan111/swiftEats-mobile", "_blank")} variant="default" size="lg">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button onClick={() => window.open("https://github.com/Justdan111/swiftEats-mobile", "_blank")} variant="outline" size="lg">
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
                <h2 className="text-2xl font-bold mb-8 gradient-text">Core Experience</h2>
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
                <h2 className="text-2xl font-bold mb-6 gradient-text">How It Works</h2>
                <div className="glass-card rounded-xl p-6">
                  <ul className="space-y-3 text-muted-foreground">
                    {userJourney.map((step) => (
                      <li key={step} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Challenges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4 gradient-text">Design Focus</h2>
                <div className="space-y-4">
                  <div className="glass-card rounded-xl p-6">
                    <h3 className="font-semibold mb-2">Fast Meal Discovery</h3>
                    <p className="text-sm text-muted-foreground">
                      Structured the experience so users can find meals quickly through clear categories and concise item presentation.
                    </p>
                  </div>
                  <div className="glass-card rounded-xl p-6">
                    <h3 className="font-semibold mb-2">Low-Friction Checkout</h3>
                    <p className="text-sm text-muted-foreground">
                      Kept the cart and ordering interactions straightforward to reduce drop-off before order completion.
                    </p>
                  </div>
                  <div className="glass-card rounded-xl p-6">
                    <h3 className="font-semibold mb-2">Clear Order Visibility</h3>
                    <p className="text-sm text-muted-foreground">
                      Designed status feedback that helps users understand each stage of their order with confidence.
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
                <h2 className="text-2xl font-bold mb-4 gradient-text">Simple Summary</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    SwiftEats helps users order food faster with fewer steps
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    The app experience prioritizes clarity, speed, and convenience
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    Users can browse, order, and track with minimal effort
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
