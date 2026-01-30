"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";


interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean;
  index?: number;
}

export function ProjectCard({
  title,
  description,
  tech,
  image,
  liveUrl,
  githubUrl,
  caseStudyUrl,
  featured = false,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className={`group glass-card rounded-2xl overflow-hidden card-hover ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Project image placeholder */}
      <div className="relative h-48 sm:h-56 bg-linear-to-br from-primary/10 via-cyan/5 to-purple/10 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center">
            <span className="text-3xl font-bold gradient-text">{title[0]}</span>
          </div>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-card via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-xs font-mono bg-secondary/50 text-muted-foreground rounded border border-border/50"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-2">
          {caseStudyUrl && (
            <Button variant="default" size="sm" asChild>
              <Link href={caseStudyUrl}>
                Case Study
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          )}
          {liveUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-3 w-3" />
                Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="ghost" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1 h-3 w-3" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
