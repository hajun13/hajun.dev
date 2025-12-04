"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";
import { Github, Mail, Moon, Sun, Download } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// SSR/CSR 상태 체크를 위한 유틸
const emptySubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("");
  const { theme, setTheme } = useTheme();
  
  // hydration 안전한 마운트 체크
  const mounted = useSyncExternalStore(emptySubscribe, getClientSnapshot, getServerSnapshot);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionHeight = (section as HTMLElement).offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(`#${section.id}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  if (!mounted) return null;

  return (
    <aside className="hidden lg:flex lg:fixed lg:inset-y-0 lg:left-0 lg:w-96 lg:flex-col border-r bg-background z-10">
      <div className="flex-1 flex flex-col justify-between p-12">
        {/* Profile Section */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
            <p className="text-xl text-muted-foreground mb-1">{personalInfo.title}</p>
            <div className="h-0.5 w-12 bg-foreground mt-4" />
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {personalInfo.description}
          </p>

          {/* Navigation */}
          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left py-2 transition-all ${
                  activeSection === item.href
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`h-px transition-all ${
                    activeSection === item.href ? "w-16" : "w-8"
                  } bg-foreground`} />
                  {item.name}
                </div>
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="space-y-6">
          {/* Contact Links */}
          <div className="space-y-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">{personalInfo.email}</span>
            </a>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Button className="flex-1" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}
