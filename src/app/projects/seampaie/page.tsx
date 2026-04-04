
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, DollarSign, ShieldAlert, FileCheck, Clock, BarChart3 } from "lucide-react";
import Link from "next/link";


const sections = [
  {
    title: "The Problem",
    content: "Businesses across Africa struggle with manual and error-prone salary processing, inconsistent tax and regulatory compliance across regions, payroll fraud and unauthorized salary changes, disconnected HR, attendance, and payroll systems, and a lack of real-time visibility into workforce costs. Existing solutions were either not localized, too rigid, or lacked automation and intelligence.",
  },
  {
    title: "The Solution",
    content: "Seampaie provides a unified payroll, compliance, and HR platform, enhanced with AI to ensure accuracy, efficiency, and trust. It simplifies complex payroll workflows, automates compliance, detects fraud, and integrates attendance and leave management—all in one centralized system designed specifically for the African market.",
  },
];

const featureGroups = [
  {
    icon: DollarSign,
    title: "Automated Salary Processing",
    items: [
      "One-click salary payouts",
      "Automatic calculation of taxes, pensions, and benefits",
      "Centralized HR and payroll data",
      "Real-time headcount cost insights",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Fraud Detection & Anomaly Alerts",
    items: [
      "AI-powered detection of suspicious payroll activities",
      "Real-time alerts for unusual changes or patterns",
      "Improved data integrity and financial security",
    ],
  },
  {
    icon: FileCheck,
    title: "Real-Time Tax & Compliance Tracking",
    items: [
      "Automated tax calculations",
      "Continuous compliance monitoring",
      "Reduced regulatory risk across regions",
    ],
  },
  {
    icon: Clock,
    title: "Smart Attendance & Leave Management",
    items: [
      "Integrated attendance tracking",
      "Automated leave approvals and deductions",
      "Accurate payroll based on real attendance data",
    ],
  },
  {
    icon: BarChart3,
    title: "Unified Workforce Intelligence",
    items: [
      "Live dashboards for payroll expenses",
      "Employee-level insights",
      "Scalable for startups and large enterprises",
    ],
  },
];

const challenges = [
  { title: "Fragmented Tax Laws", description: "Built a dynamic compliance engine that adapts to different regional tax rules and regulatory requirements across African countries." },
  { title: "Payroll Fraud Prevention", description: "Implemented AI-powered anomaly detection that flags suspicious salary changes, duplicate entries, and unauthorized modifications in real time." },
  { title: "System Integration", description: "Unified HR, attendance, leave, and payroll into a single platform, eliminating data silos and manual data transfer between disconnected systems." },
];

export default function Seampaie() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 via-background to-blue-500/5" />

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
                  {["React", "Vite", "APIs", "AI"].map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                  Seampaie
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
                  AI-powered payroll, compliance & HR platform designed specifically for African businesses.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button onClick={() => window.open("https://seampaie.example.com", "_blank")} variant="default" size="lg">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button onClick={() => window.open("https://github.com/Justdan111/seampaie", "_blank")} variant="outline" size="lg">
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

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-8 gradient-text">Key Features</h2>
                <div className="grid gap-6">
                  {featureGroups.map((group, index) => (
                    <motion.div
                      key={group.title}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-card rounded-xl p-6 card-hover"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <group.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-3">{group.title}</h3>
                          <ul className="space-y-2">
                            {group.items.map((item) => (
                              <li key={item} className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                <span className="text-sm text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
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
                  {challenges.map((challenge, index) => (
                    <motion.div
                      key={challenge.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-card rounded-xl p-6"
                    >
                      <h3 className="font-semibold mb-2">{challenge.title}</h3>
                      <p className="text-sm text-muted-foreground">{challenge.description}</p>
                    </motion.div>
                  ))}
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
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    Streamlined payroll processing from hours to one-click execution
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    Reduced compliance risk through automated tax calculations and monitoring
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    Enhanced financial security with AI-powered fraud detection
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    Unified HR and payroll data for real-time workforce intelligence
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
