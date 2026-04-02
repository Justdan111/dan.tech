
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  index?: number;
  variant?: "default" | "cyan" | "purple" | "emerald";
}

const variantStyles = {
  default: "border-primary/30 text-primary bg-primary/5",
  cyan: "border-cyan/30 text-cyan bg-cyan/5",
  purple: "border-purple/30 text-purple bg-purple/5",
  emerald: "border-emerald/30 text-emerald bg-emerald/5",
};

export function TechBadge({ name, index = 0, variant = "default" }: TechBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-full text-xs font-mono font-medium border transition-all duration-200",
        variantStyles[variant]
      )}
    >
      {name}
    </motion.span>
  );
}
