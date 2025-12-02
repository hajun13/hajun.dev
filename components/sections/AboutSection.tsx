"use client";

import { motion } from "framer-motion";
import { about, education } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div>
          <h2 className="text-3xl font-bold mb-8">About</h2>
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {about.intro}
            </p>

            {about.sections.map((section, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg font-semibold">{section.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t">
          <h3 className="text-2xl font-bold mb-6">Education</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold">{education.school}</h4>
              <p className="text-lg text-muted-foreground">{education.major}</p>
              <p className="text-sm text-muted-foreground mt-2">
                {education.period} · {education.status}
              </p>
              <p className="text-sm mt-2">
                GPA: <span className="font-semibold">{education.gpa}</span>
              </p>
            </div>

            <div className="pt-4">
              <p className="font-semibold mb-3">Achievements</p>
              <ul className="space-y-2">
                {education.achievements.map((achievement, index) => (
                  <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5">·</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
