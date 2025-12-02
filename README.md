# 정하준 - Frontend Developer Portfolio

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=for-the-badge&logo=tailwindcss)

프론트엔드 개발자 정하준의 개인 포트폴리오 웹사이트입니다. 최신 웹 기술과 트렌드를 적용하여 제작했습니다.

## 🚀 라이브 데모

**개발 서버**: [http://localhost:3001](http://localhost:3001)

## ✨ 주요 기능

- **모던 디자인**: 최신 디자인 트렌드를 반영한 깔끔하고 전문적인 UI
- **다크 모드**: 라이트/다크 모드 자동 전환 지원
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 화면 크기에 최적화
- **부드러운 애니메이션**: Framer Motion을 활용한 인터랙티브한 사용자 경험
- **SEO 최적화**: 검색 엔진 최적화를 위한 메타 태그 및 시맨틱 HTML

## 🛠️ 기술 스택

### Core
- **Next.js 16** - React 프레임워크
- **TypeScript** - 타입 안정성
- **Tailwind CSS 4** - 유틸리티 CSS 프레임워크

### UI Components
- **shadcn/ui** - 재사용 가능한 컴포넌트 라이브러리
- **Radix UI** - 접근성 있는 UI 프리미티브
- **Lucide React** - 아이콘 라이브러리

### Animation
- **Framer Motion** - 부드러운 애니메이션 및 인터랙션

### Theme
- **next-themes** - 다크 모드 지원

## 📦 설치 및 실행

### 필수 요구사항
- Node.js 18.0 이상
- npm 또는 yarn

### 설치

\`\`\`bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
\`\`\`

### 개발 서버

개발 서버를 시작하려면:

\`\`\`bash
npm run dev
\`\`\`

브라우저에서 [http://localhost:3000](http://localhost:3000) 또는 [http://localhost:3001](http://localhost:3001)을 엽니다.

## 📁 프로젝트 구조

\`\`\`
about/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 메인 페이지
│   └── globals.css        # 글로벌 스타일
├── components/            # React 컴포넌트
│   ├── sections/         # 섹션 컴포넌트
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/               # shadcn/ui 컴포넌트
│   ├── Navigation.tsx    # 네비게이션 바
│   └── theme-provider.tsx
├── data/                  # 데이터 파일
│   └── portfolio.ts      # 포트폴리오 데이터
└── lib/                   # 유틸리티 함수
    └── utils.ts
\`\`\`

## 🎨 섹션

1. **Hero Section** - 메인 소개 및 CTA
2. **About Section** - 상세 자기소개 및 학력
3. **Skills Section** - 기술 스택 및 숙련도
4. **Projects Section** - 프로젝트 포트폴리오
5. **Contact Section** - 연락처 정보

## 🎯 커스터마이징

### 개인 정보 수정

`data/portfolio.ts` 파일에서 개인 정보, 프로젝트, 기술 스택 등을 수정할 수 있습니다.

### 테마 색상 변경

`app/globals.css` 파일에서 CSS 변수를 수정하여 색상 테마를 변경할 수 있습니다.

### 컴포넌트 수정

`components/sections/` 디렉토리의 각 섹션 컴포넌트를 수정하여 레이아웃과 스타일을 변경할 수 있습니다.

## 📱 반응형 브레이크포인트

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 배포

### Vercel (권장)

\`\`\`bash
# Vercel CLI 설치
npm install -g vercel

# 배포
vercel
\`\`\`

### 기타 플랫폼

Next.js는 Netlify, AWS, Azure 등 다양한 플랫폼에 배포할 수 있습니다.

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 용도로 제작되었습니다.

## 👤 작성자

**정하준**
- GitHub: [@hajun13](https://github.com/hajun13)
- Email: chhajun01@naver.com
- Phone: 010-4189-5743

## 🙏 감사의 말

- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

⭐ 이 프로젝트가 마음에 드셨다면 스타를 눌러주세요!
