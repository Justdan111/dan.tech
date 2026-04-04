

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          <p>
            © {new Date().getFullYear()} Emmanuel Ngulube. All rights reserved.
          </p>
         
        </motion.div>
      </div>
    </footer>
  );
}
