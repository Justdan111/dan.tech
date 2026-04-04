

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Server, 
  Globe, 
  Smartphone, 
  Brain, 
  Cloud} from "lucide-react";

const skillCategories = [
  {
    title: "Backend",
    icon: Server,
    color: "cyan",
    skills: ["Go (Golang)", "FastAPI", "REST APIs", "System Design",  "MongoDB", "PostgreSQL"],
  },
  {
    title: "Frontend",
    icon: Globe,
    color: "purple",
    skills: ["Next.js", "React", "Vite", "Tailwind CSS", "TanStack Query"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    color: "emerald",
    skills: ["React Native", "Expo"],
  },
  {
    title: "AI & Data",
    icon: Brain,
    color: "purple",
    skills: ["LLMs", "Multi-agent systems",   "Audio processing"],
  },
  {
    title: "Cloud & Tools",
    icon: Cloud,
    color: "cyan",
    skills: ["Docker", "Git & GitHub",  "Supabase", "APIs"],
  },
];

const colorClasses = {
  cyan: {
    bg: "bg-cyan/10",
    text: "text-cyan",
    border: "border-cyan/20",
    glow: "group-hover:shadow-cyan/20",
  },
  purple: {
    bg: "bg-purple/10",
    text: "text-purple",
    border: "border-purple/20",
    glow: "group-hover:shadow-purple/20",
  },
  emerald: {
    bg: "bg-emerald/10",
    text: "text-emerald",
    border: "border-emerald/20",
    glow: "group-hover:shadow-emerald/20",
  },
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-wider">EXPERTISE</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const colors = colorClasses[category.color as keyof typeof colorClasses];
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className={`group glass-card rounded-2xl p-6 border ${colors.border} card-hover ${colors.glow} transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
                    <category.icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        delay: categoryIndex * 0.1 + skillIndex * 0.03,
                        duration: 0.3 
                      }}
                      className="px-3 py-1.5 text-xs font-mono bg-secondary/50 text-secondary-foreground rounded-md border border-border/50 hover:border-primary/30 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
