import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "정하준 | Frontend Developer Portfolio",
  description: "어려움 속에서도 방법을 찾는 신입 개발자 정하준의 포트폴리오입니다. React, Next.js, TypeScript를 활용한 다양한 프로젝트를 확인해보세요.",
  keywords: ["정하준", "프론트엔드", "개발자", "포트폴리오", "React", "Next.js", "TypeScript"],
  authors: [{ name: "정하준", url: "https://github.com/hajun13" }],
  openGraph: {
    title: "정하준 | Frontend Developer Portfolio",
    description: "어려움 속에서도 방법을 찾는 신입 개발자 정하준의 포트폴리오",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
