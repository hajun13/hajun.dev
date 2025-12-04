"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-64px)] lg:min-h-screen flex items-center py-12 lg:py-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6 lg:space-y-8 w-full"
      >
        {/* Mobile: 간단한 인사 */}
        <div className="lg:hidden">
          <p className="text-muted-foreground mb-2">안녕하세요, 저는</p>
        </div>

        {/* Title */}
        <div className="space-y-4 lg:space-y-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="lg:hidden">어려움 속에서도 방법을 찾는 개발자입니다</span>
            <span className="hidden lg:block">
              어려움 속에서도<br />
              방법을 찾는<br />
              개발자입니다
            </span>
          </h2>
          <div className="h-1 w-16 lg:w-24 bg-foreground" />
        </div>

        {/* Description */}
        <p className="text-base lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          AI 연구실에서 컴퓨터 비전 알고리즘 개발과 데이터 분석 경험을 쌓았으며, 
          현재는 React 기반 웹 개발에 집중하여 여러 개의 프로젝트를 성공적으로 완수했습니다.
        </p>

        {/* Stats */}
        <div className="flex items-center gap-6 lg:gap-8 pt-4">
          <div>
            <div className="text-2xl lg:text-3xl font-bold mb-1">6+</div>
            <div className="text-xs lg:text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="h-10 lg:h-12 w-px bg-border" />
          <div>
            <div className="text-2xl lg:text-3xl font-bold mb-1">2+</div>
            <div className="text-xs lg:text-sm text-muted-foreground">Years</div>
          </div>
          <div className="h-10 lg:h-12 w-px bg-border" />
          <div>
            <div className="text-2xl lg:text-3xl font-bold mb-1">20+</div>
            <div className="text-xs lg:text-sm text-muted-foreground">Skills</div>
          </div>
        </div>

        {/* Mobile: Quick Actions */}
        <div className="lg:hidden flex gap-3 pt-4">
          <a
            href="#projects"
            className="flex-1 py-3 px-4 bg-foreground text-background text-center text-sm font-medium rounded-md"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            className="flex-1 py-3 px-4 border text-center text-sm font-medium rounded-md"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            연락하기
          </a>
        </div>
      </motion.div>
    </section>
  );
}
