export const personalInfo = {
  name: "정하준",
  title: "Developer",
  description: "어려움 속에서도 방법을 찾는 신입 개발자",
  email: "chhajun01@naver.com",
  github: "https://github.com/hajun13",
  birthDate: "2001.02.25",
  age: 25,
};

export const about = {
  intro: "저는 최신 기술 트렌드를 빠르게 습득하고 이를 실제 서비스로 구현하는 개발자로 성장하고 싶습니다. 특히 AI 기술의 급격한 발전과 새로운 개발 패턴의 등장에 큰 관심을 가지고 있으며, 이러한 트렌드를 적극적으로 학습하고 프로젝트에 적용하며 실무 역량을 쌓아왔습니다.",
  sections: [
    {
      title: "AI 시대에 맞는 개발 방식의 이해",
      content: "저는 AI 도구를 활용한 효율적인 개발 방식에 주목하고 있습니다. Claude, ChatGPT 등의 AI 도구를 적극적으로 활용하여 코드 작성, 디버깅, 아키텍처 설계를 더욱 빠르고 정확하게 수행하고 있습니다. 단순히 도구를 사용하는 것을 넘어, AI가 생성한 코드를 검증하고 프로젝트 맥락에 맞게 최적화하는 능력을 키워왔습니다."
    },
    {
      title: "풀스택 개발 역량과 빠른 실행력",
      content: "PrayNote 프로젝트에서는 Next.js 15의 App Router와 Server Components를 활용해 SEO에 최적화된 풀스택 애플리케이션을 구축했습니다. Supabase를 통한 실시간 데이터베이스와 Row Level Security 기반 보안 시스템 구현, Recharts를 활용한 데이터 시각화 대시보드 개발, Vercel을 통한 서버리스 배포까지 전 과정을 수행하며 Lighthouse 성능 점수 90점 이상을 달성했습니다."
    },
    {
      title: "크로스 플랫폼 개발과 기술적 도전",
      content: "EasyCloud 프로젝트에서는 React Native와 Expo를 활용해 단일 코드베이스로 iOS, Android, Web 3개 플랫폼을 동시 지원하는 크로스 플랫폼 애플리케이션을 구축했습니다. 특히 파일 청킹 기법을 적용해 대용량 파일 업로드 시 메모리 사용량을 80% 이상 절감하며, 성능 최적화에 대한 실질적인 경험을 쌓았습니다."
    },
    {
      title: "지속적인 학습과 성장 마인드",
      content: "빠르게 변화하는 기술 환경에서 새로운 프레임워크, 라이브러리, 개발 패턴을 끊임없이 학습하고 프로젝트에 적용하는 것을 즐기며, 이러한 학습 능력과 실행력이 제 가장 큰 강점이라고 생각합니다."
    }
  ]
};

export const education = {
  school: "삼육대학교",
  major: "컴퓨터공학부",
  period: "2020.03 ~ ",
  status: "현 3학년 2학기 재학중",
  gpa: "4.03/4.5",
  achievements: [
    "삼육대학교 인공지능연구실 HnVLab 학부연구생 (2024.03-2024.09)",
    "국가우수이공계 장학생 (2024.03 ~ )"
  ]
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "React Native", level: 75 },
      { name: "Framer Motion", level: 80 },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 75 },
      { name: "Supabase", level: 80 },
      { name: "Flask", level: 70 },
      { name: "RESTful API", level: 80 },
    ]
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Docker", level: 75 },
      { name: "Git", level: 85 },
      { name: "Vercel", level: 80 },
      { name: "AWS", level: 65 },
      { name: "Nginx", level: 70 },
    ]
  },
  {
    category: "AI & Data",
    items: [
      { name: "PyTorch", level: 70 },
      { name: "OpenCV", level: 75 },
      { name: "MediaPipe", level: 70 },
      { name: "Python", level: 80 },
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "신체 불균형 탐지 프로젝트",
    period: "2024.05 ~ 2024.07",
    description: "딥러닝과 컴퓨터 비전 기술을 활용하여 사람의 신체 불균형을 자동으로 탐지하고 분석하는 AI 기반 헬스케어 프로젝트입니다.",
    tech: ["Python", "PyTorch", "OpenCV", "MediaPipe", "NumPy", "Matplotlib"],
    highlights: [
      "OpenCV와 MediaPipe를 활용한 실시간 자세 인식",
      "CNN 기반 딥러닝 모델 설계 및 학습",
      "신체 불균형 지표 계산 알고리즘 구현",
      "Matplotlib을 활용한 분석 결과 시각화",
      "학술 논문 작성 완료"
    ],
    image: "/projects/posture.png"
  },
  {
    id: 2,
    title: "(주)에이리스 홈페이지",
    period: "2025.07 ~ 2025.08",
    description: "Next.js 15와 최신 웹 기술을 활용한 풀스택 포트폴리오 웹사이트로, 실시간 데이터 관리와 반응형 디자인을 통해 전문적인 비즈니스 소개 플랫폼을 구축했습니다.",
    link: "https://www.aeriis.kr/",
    tech: ["Next.js 15", "React 18", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion"],
    highlights: [
      "Feature-Sliced Design 아키텍처 기반 프론트엔드 구조 설계",
      "Supabase를 활용한 실시간 CRUD 및 이미지 스토리지 관리",
      "Framer Motion과 fullpage.js를 결합한 부드러운 애니메이션 구현",
      "FSD 아키텍처로 코드 재사용성 30% 이상 향상"
    ],
    image: "/projects/aeriis.png"
  },
  {
    id: 3,
    title: "풀스택 웹앱 PrayNote",
    period: "2025.06 ~ 2025.08",
    description: "개인의 기도 생활을 체계적으로 관리하고 영적 성장을 추적할 수 있는 풀스택 웹 애플리케이션입니다.",
    link: "https://praynote.vercel.app",
    github: "https://github.com/hajun13/Praynote",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Supabase", "Vercel", "Docker"],
    highlights: [
      "Next.js 15의 App Router와 Server Components 활용",
      "Supabase RLS 기반 보안 시스템 구현",
      "Recharts를 활용한 통계 대시보드 개발",
      "Lighthouse 성능 점수 90점 이상 달성",
      "Docker 컨테이너화 및 GitHub Actions 자동 배포"
    ],
    image: "/projects/praynote.png"
  },
  {
    id: 4,
    title: "ECOTRA 기업 웹사이트",
    period: "2025.02 ~ 2025.03",
    description: "친환경 에너지 솔루션 전문 기업의 공식 웹사이트로, 관리자가 콘텐츠를 직접 관리할 수 있는 풀스택 웹 애플리케이션입니다.",
    link: "https://www.ecotra.kr",
    github: "https://github.com/hajun13/ecotra",
    tech: ["React", "Node.js", "Express", "Styled Components", "Docker"],
    highlights: [
      "기획부터 디자인, 개발, 배포까지 1인 개발 완수",
      "Express 기반 RESTful API 서버 구축",
      "관리자 인증 시스템 구현",
      "7개 이상의 주요 페이지와 20개 이상의 재사용 가능한 컴포넌트",
      "모바일 퍼스트 반응형 디자인"
    ],
    image: "/projects/ecotra.png"
  },
  {
    id: 5,
    title: "UCON ENERGY 기업 웹사이트",
    period: "2025.05 ~ 2025.06",
    description: "에너지 솔루션 기업의 브랜드 이미지와 사업 영역을 효과적으로 전달하기 위한 다국어 지원 기업형 웹 애플리케이션입니다.",
    link: "https://www.uconenergy.com",
    github: "https://github.com/hajun13/uconenergy",
    tech: ["React", "Docker", "Nginx", "AWS", "Framer Motion"],
    highlights: [
      "한국어/영어 다국어 지원 시스템 구현",
      "Framer Motion 기반 페이지 전환 애니메이션",
      "Docker와 Nginx를 활용한 컨테이너화 및 배포",
      "React Helmet Async를 활용한 SEO 최적화",
      "Lighthouse 성능 점수 90점 이상"
    ],
    image: "/projects/ucon.png"
  },
  {
    id: 6,
    title: "미니 나스 EasyCloud",
    period: "2025.04 ~ 2025.05",
    description: "라즈베리파이를 개인 클라우드 서버로 활용하여 P2P 기술로 파일을 안전하게 공유할 수 있는 크로스 플랫폼 모바일 애플리케이션입니다.",
    github: "https://github.com/hajun13/EasyCloud",
    tech: ["React Native", "Expo", "TypeScript", "Flask", "WebRTC", "Socket.io"],
    highlights: [
      "단일 코드베이스로 iOS, Android, Web 3개 플랫폼 동시 지원",
      "WebRTC와 Socket.io를 활용한 P2P 파일 전송",
      "파일 청킹 기법으로 메모리 사용량 80% 절감",
      "JWT 기반 보안 인증 시스템"
    ],
    image: "/projects/easycloud.png"
  }
];

