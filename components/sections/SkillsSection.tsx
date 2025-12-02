"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">Skills</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((skillCategory, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl font-semibold">
                {skillCategory.category}
              </h3>

              <div className="space-y-4">
                {skillCategory.items.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + i * 0.05 }}
                        viewport={{ once: true }}
                        className="h-full bg-foreground rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
