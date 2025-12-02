"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            어려움 속에서도<br />
            방법을 찾는<br />
            개발자입니다
          </h2>
          <div className="h-1 w-24 bg-foreground" />
        </div>

        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
          AI 연구실에서 컴퓨터 비전 알고리즘 개발과 데이터 분석 경험을 쌓았으며, 
          현재는 React 기반 웹 개발에 집중하여 여러 개의 프로젝트를 성공적으로 완수했습니다.
        </p>

        <div className="flex items-center gap-8 pt-4">
          <div>
            <div className="text-3xl font-bold mb-1">6+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="h-12 w-px bg-border" />
          <div>
            <div className="text-3xl font-bold mb-1">2+</div>
            <div className="text-sm text-muted-foreground">Years</div>
          </div>
          <div className="h-12 w-px bg-border" />
          <div>
            <div className="text-3xl font-bold mb-1">20+</div>
            <div className="text-sm text-muted-foreground">Skills</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
