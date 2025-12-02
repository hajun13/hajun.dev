"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";
import { Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div>
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            새로운 프로젝트나 기회에 대해 이야기 나누고 싶습니다. 
            언제든지 편하게 연락주세요.
          </p>
        </div>

        <Button
          size="lg"
          className="gap-2"
          onClick={() => window.location.href = `mailto:${personalInfo.email}`}
        >
          <Mail className="w-5 h-5" />
          이메일 보내기
        </Button>

        <div className="pt-12 text-sm text-muted-foreground">
          <p>© 2025 {personalInfo.name}. Built with Next.js & TypeScript.</p>
        </div>
      </motion.div>
    </section>
  );
}
