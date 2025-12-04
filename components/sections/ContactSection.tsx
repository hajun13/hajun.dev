"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";
import { Mail, Github } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-6 lg:space-y-8"
      >
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">Get In Touch</h2>
          <p className="text-base lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            새로운 프로젝트나 기회에 대해 이야기 나누고 싶습니다. 
            언제든지 편하게 연락주세요.
          </p>
        </div>

        {/* Contact Info - Mobile optimized */}
        <div className="space-y-3 lg:hidden">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-3 p-4 border rounded-lg"
          >
            <Mail className="w-5 h-5" />
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium">{personalInfo.email}</p>
            </div>
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 border rounded-lg"
          >
            <Github className="w-5 h-5" />
            <div>
              <p className="text-xs text-muted-foreground">GitHub</p>
              <p className="text-sm font-medium">@hajun13</p>
            </div>
          </a>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block">
          <Button
            size="lg"
            className="gap-2"
            onClick={() => window.location.href = `mailto:${personalInfo.email}`}
          >
            <Mail className="w-5 h-5" />
            이메일 보내기
          </Button>
        </div>

        {/* Footer */}
        <div className="pt-8 lg:pt-12 text-xs lg:text-sm text-muted-foreground">
          <p>© 2025 {personalInfo.name}. Built with Next.js & TypeScript.</p>
        </div>
      </motion.div>
    </section>
  );
}
