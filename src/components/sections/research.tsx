import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Mic, Bot, Leaf } from "lucide-react";

const researchItems = [
  {
    icon: Database,
    title: "AI-Driven SQL Query Optimization",
    description: "Research on using LLMs to automatically optimize database queries for improved performance and efficiency.",
    tags: ["LLM", "SQL", "Performance"],
  },
  {
    icon: Mic,
    title: "AI-Based Cough Risk Classification",
    description: "Machine learning system for audio analysis and classification of respiratory health indicators.",
    tags: ["Audio ML", "Healthcare", "Classification"],
  },
  {
    icon: Bot,
    title: "Multi-Agent AI Systems",
    description: "Exploring architectures for coordinating multiple AI agents to solve complex business problems.",
    tags: ["Multi-Agent", "LLM", "Architecture"],
  },
  {
    icon: Leaf,
    title: "AgroConnect AI Research",
    description: "Developing AI models for agricultural guidance tailored to African farming conditions.",
    tags: ["Agriculture", "AI", "Africa"],
  },
];

export function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-wider">INNOVATION</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Research & <span className="gradient-text">AI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring cutting-edge AI applications and their impact on real-world systems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {researchItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group glass-card rounded-2xl p-6 border border-purple/20 card-hover hover:shadow-purple/10"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-purple" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-purple transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono bg-purple/10 text-purple rounded border border-purple/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
