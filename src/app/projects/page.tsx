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
    title: "Bouncing Battle Game",
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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video && video.readyState >= 3) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className="w-[300px] h-[280px] flex flex-col">
      <div className="w-full p-4 text-center">
        <h3 className="text-lg font-semibold">{project.title}</h3>
      </div>
      <div className="w-full flex-1 [perspective:1000px]">
        <div className="relative w-full h-full transition-transform duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-hover:[transition-delay:100ms] shadow-[inset_0_0_20px] shadow-projectsPrimary rounded-lg">
          {/* Front Side */}
          <div className="absolute w-full h-full overflow-hidden [backface-visibility:hidden] rounded-lg flex items-center px-2">
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-30">
                <div className="w-12 h-12 border-[6px] border-white border-y-transparent rounded-full animate-spin" />
              </div>
            )}
            <video
              ref={videoRef}
              aria-label={`Video demo of ${project.title}`}
              autoPlay
              loop
              muted
              playsInline
              width="300"
              onLoadedData={() => {
                setIsLoaded(true);
                console.log("Video loaded:", project.title);
              }}
              className={`rounded-md shadow-lg transition-opacity duration-300 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              <source src={project.videoDemo} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Back Side */}
          <div className="absolute w-full h-full flex flex-col justify-center items-center p-5 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <p className="text-sm">{project.description}</p>
            <div className="mt-2 flex flex-wrap gap-2 justify-center">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-700 px-2 py-1 rounded text-xs hover:bg-gray-600 transition cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </Link>
              )}
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
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
        className="w-[max(80vw,870px)] sm:h-[max(calc(35vw-85px),500px)] overflow-auto scrollbar-thin py-[--page-padding-top] px-[85px] flex flex-col items-center"
        style={{
          scrollbarColor: `${themeColor} #1F1F1F`, // Set thumb color and track color
        }}
      >
        <div className="flex flex-wrap gap-8 justify-center">
          {projects.map((project, index) => (
            <TranslucentCard className="bg-projectsPrimary group" key={index}>
              <ProjectCard project={project} />
            </TranslucentCard>
          ))}
        </div>
        <HireMeButton className="bg-[var(--projects-primary)]" />
      </div>
    </div>
  );
};

export default Projects;
