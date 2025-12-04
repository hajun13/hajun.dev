"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "학부연구생",
    company: "삼육대학교 인공지능연구실 HnVLab",
    period: "2024.03 - 2024.09",
    description: "딥러닝과 컴퓨터 비전 기술을 활용한 신체 불균형 탐지 시스템 연구 및 개발",
    achievements: [
      "OpenCV와 MediaPipe를 활용한 실시간 자세 인식 시스템 구현",
      "CNN 기반 딥러닝 모델 설계 및 학습",
      "연구 결과를 정리하여 학술 논문 작성 완료",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8">Experience</h2>
        
        <div className="space-y-6 lg:space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-6 lg:pl-8 pb-6 lg:pb-8 border-l-2 border-border last:border-l-0 last:pb-0">
              <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-foreground" />
              
              <div className="space-y-2 lg:space-y-3">
                <div>
                  <h3 className="text-lg lg:text-xl font-semibold">{exp.role}</h3>
                  <p className="text-sm lg:text-base text-muted-foreground">{exp.company}</p>
                  <p className="text-xs lg:text-sm text-muted-foreground mt-1">{exp.period}</p>
                </div>
                
                <p className="text-sm lg:text-base text-muted-foreground">{exp.description}</p>
                
                <ul className="space-y-1.5 lg:space-y-2 pt-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-2 lg:gap-3 text-xs lg:text-sm text-muted-foreground">
                      <span>·</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Scholarship */}
          <div className="relative pl-6 lg:pl-8 border-l-2 border-border">
            <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-foreground" />
            <div>
              <h3 className="text-lg lg:text-xl font-semibold">국가우수이공계 장학생</h3>
              <p className="text-xs lg:text-sm text-muted-foreground mt-1">2024.03 - Present</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
