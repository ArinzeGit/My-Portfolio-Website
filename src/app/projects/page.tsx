"use client";
import { useThemeColor } from "@/app/context/ThemeContext";
import HireMeButton from "@/components/HireMeButton";
import TranslucentCard from "@/components/TranslucentCard";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Project {
  title: string;
  videoDemo: string;
  description: string;
  techStack: string[];
  github?: string;
  live: string;
}

const projects: Project[] = [
  {
    title: "Hold The Line (Game)",
    videoDemo: "/videos/hold-the-line-video.webm",
    description:
      "Promotional interactive game for Manfred's 'Soldier' music album launch.",
    techStack: ["Pixi.js", "JavaScript", "Howler.js", "HTML5", "CSS"],
    github: "https://github.com/ArinzeGit/hold-the-line",
    live: "https://hold-the-line-swart.vercel.app/",
  },
  {
    title: "Student Paddy Website",
    videoDemo: "/videos/student-paddy-website-video.webm",
    description:
      "Migrated Student Paddy’s website from React to Next.js 14, improving performance, SEO, design and scalability.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Nodemailer",
      "Azure",
      "Figma",
      "Vercel",
    ],
    live: "https://student-paddy-website.vercel.app/",
  },
  {
    title: "Student Paddy Admin Dashboard",
    videoDemo: "/videos/student-paddy-admin-dashboard-video.webm",
    description:
      "An admin dashboard for universities to track student career readiness on the Student Paddy digital campus.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Chart.js",
      "D3.js",
      "Figma",
      "Vercel",
    ],
    live: "https://student-paddy-admin-dashboard.vercel.app/",
  },
  {
    title: "Bouncing Battle (Game)",
    videoDemo: "/videos/bouncing-battle-game-video.webm",
    description:
      "A web-based multiplayer PC game with immersive sound effects and complex ball-deflection logic.",
    techStack: ["JavaScript", "HTML5", "CSS"],
    github: "https://github.com/ArinzeGit/Bouncing-Battle/",
    live: "https://arinzegit.github.io/Bouncing-Battle-Game/",
  },
  {
    title: "Multi-Step Form",
    videoDemo: "/videos/multi-step-form-video.webm",
    description:
      "A dynamic multi-step form with custom hooks, unit tests, validation, and smooth navigation.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind",
      "React Testing Library",
      "Vitest",
      "Figma",
    ],
    github: "https://github.com/ArinzeGit/Multi-Step-Form",
    live: "https://arinzegit.github.io/Multi-step-Form/",
  },
  {
    title: "IP Address Tracker",
    videoDemo: "/videos/ip-address-tracker-video.webm",
    description:
      "A web tool that locates and visualizes IP addresses on an interactive map.",
    techStack: [
      "React",
      "TypeScript",
      "Leaflet.js",
      "React Leaflet",
      "IP Geolocation API by Ipify",
    ],
    github: "https://github.com/ArinzeGit/IP-Address-Tracker",
    live: "https://arinzegit.github.io/IP-Address-Tracker/",
  },
  {
    title: "My Portfolio Website",
    videoDemo: "/videos/my-portfolio-website-video.webm",
    description:
      "A sleek personal portfolio showcasing my projects, skills, and achievements.",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    github: "https://github.com/ArinzeGit/My-Portfolio-Website",
    live: "https://my-portfolio-website-silk-five.vercel.app/",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "50px", // Start loading 50px before entering viewport
      }
    );

    observer.observe(card);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    if (isHovered) {
      video.pause();
    } else {
      video.play().catch(() => {
        // Ignore play() errors (e.g., if video hasn't loaded yet)
      });
    }
  }, [isHovered, shouldLoad]);

  return (
    <div
      ref={cardRef}
      className="w-[320px] h-[380px] flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full p-4 text-center mb-2">
        <h3 className="text-xl font-bold text-secondary group-hover:text-projectsPrimary transition-colors duration-300">
          {project.title}
        </h3>
      </div>
      <div className="w-full flex-1 [perspective:1000px]">
        <div className="relative w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-[0_8px_32px_rgba(39,174,96,0.3)] rounded-xl">
          {/* Front Side */}
          <div className="absolute w-full h-full overflow-hidden [backface-visibility:hidden] rounded-xl flex items-center justify-center px-2 bg-gradient-to-br from-gray-900/50 to-gray-800/50">
            {(!shouldLoad || !isLoaded) && (
              <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/40 backdrop-blur-sm">
                <div className="w-12 h-12 border-[4px] border-projectsPrimary border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            {shouldLoad && (
              <video
                ref={videoRef}
                aria-label={`Video demo of ${project.title}`}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                width="300"
                onLoadedData={() => {
                  setIsLoaded(true);
                }}
                className={`rounded-lg shadow-2xl transition-all duration-500 ${
                  isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <source src={project.videoDemo} type="video/webm" />
                <source src={project.videoDemo.replace(".webm", ".mp4")} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          {/* Back Side */}
          <div className="absolute w-full h-full flex flex-col justify-between items-center p-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] bg-gradient-to-br from-gray-900/95 to-gray-800/95 rounded-xl">
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2 justify-center">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-projectsPrimary/20 to-projectsPrimary/10 border border-projectsPrimary/30 px-3 py-1.5 rounded-full text-xs font-medium text-projectsPrimary hover:from-projectsPrimary/30 hover:to-projectsPrimary/20 hover:border-projectsPrimary/50 transition-all duration-300 cursor-default backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 flex gap-4 justify-center">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/70 border border-gray-600/50 hover:border-blue-400/50 px-4 py-2 rounded-lg text-blue-400 font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/20"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </Link>
              )}
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-projectsPrimary/20 hover:bg-projectsPrimary/30 border border-projectsPrimary/50 hover:border-projectsPrimary px-4 py-2 rounded-lg text-green-400 font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/20"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const themeColor = useThemeColor();
  return (
    <div className="bg-[url('/images/projects-page-background.webp')] bg-cover bg-center min-h-full pt-[--nav-bar-height]">
      <div
        className="desktop:w-[--main-window-width] h-[100%] desktop:h-[--main-display-height] overflow-auto scrollbar-thin"
        style={{
          scrollbarColor: `${themeColor} #1F1F1F`, // Set thumb color and track color
        }}
      >
        <div className="py-[32px] desktop:py-[--page-padding-top] px-[16px] flex flex-col items-center">
          <TranslucentCard className="bg-projectsPrimary mb-12 animate-fade-in-up">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-secondary mb-4 font-montserrat">
                My <span className="text-projectsPrimary">Projects</span>
              </h1>
              <p className="text-gray-200 text-lg max-w-2xl mx-auto font-medium">
                A collection of my work showcasing frontend development, game development, and innovative web solutions
              </p>
            </div>
          </TranslucentCard>
          <div className="flex flex-wrap gap-10 justify-center">
            {projects.map((project, index) => (
              <TranslucentCard
                key={index}
                className="bg-projectsPrimary group animate-fade-in-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "both",
                }}
              >
                <ProjectCard project={project} />
              </TranslucentCard>
            ))}
          </div>
          <div className="mt-16 animate-fade-in">
            <HireMeButton className="bg-[var(--projects-primary)]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
