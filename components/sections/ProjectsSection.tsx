"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8">Projects</h2>

        <div className="space-y-10 lg:space-y-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4 lg:space-y-6 pb-10 lg:pb-16 border-b last:border-b-0"
            >
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl lg:text-2xl font-bold leading-tight">{project.title}</h3>
                  <div className="flex gap-1.5 flex-shrink-0">
                    {project.link && (
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 lg:h-9 lg:w-9"
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        <ExternalLink className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 lg:h-9 lg:w-9"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                      </Button>
                    )}
                  </div>
                </div>
                <p className="text-xs lg:text-sm text-muted-foreground">{project.period}</p>
              </div>

              {/* Description */}
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="space-y-2 lg:space-y-3">
                <p className="text-xs lg:text-sm font-semibold">Tech Stack</p>
                <div className="flex flex-wrap gap-1.5 lg:gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs px-2 py-0.5 lg:px-2.5 lg:py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2 lg:space-y-3">
                <p className="text-xs lg:text-sm font-semibold">Key Achievements</p>
                <ul className="space-y-1.5 lg:space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2 lg:gap-3 text-xs lg:text-sm text-muted-foreground">
                      <span className="flex-shrink-0">·</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
