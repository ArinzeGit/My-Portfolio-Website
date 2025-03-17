"use client";
import { useThemeColor } from "@/app/context/ThemeContext";
import TranslucentCard from "@/components/TranslucentCard";
import Link from "next/link";

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
    title: "Bouncing Battle Game",
    videoDemo: "/videos/bouncing-battle-gameplay.webm",
    description:
      "A web-based multiplayer PC game with immersive sound effects and complex ball-deflection logic.",
    techStack: ["JavaScript", "HTML5", "CSS"],
    github: "https://github.com/ArinzeGit/Bouncing-Battle/",
    live: "https://arinzegit.github.io/Bouncing-Battle-Game/",
  },
  {
    title: "Student Paddy Website",
    videoDemo: "/videos/bouncing-battle-gameplay.webm",
    description:
      "Migrated Student Paddy’s website from React to Next.js 14, improving performance, SEO, design and scalability.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Nodemailer",
      "Azure",
      "Figma",
    ],
    live: "https://student-paddy-website.vercel.app/",
  },
  {
    title: "Student Paddy Admin Dashboard",
    videoDemo: "/videos/bouncing-battle-gameplay.webm",
    description:
      "An admin dashboard for universities to track student career readiness on the Student Paddy digital campus.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Chart.js",
      "D3.js",
      "Figma",
    ],
    live: "https://student-paddy-admin-dashboard.vercel.app/",
  },
  {
    title: "Multi-Step Form",
    videoDemo: "/videos/bouncing-battle-gameplay.webm",
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
    videoDemo: "/videos/bouncing-battle-gameplay.webm",
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
    videoDemo: "/videos/bouncing-battle-gameplay.webm",
    description:
      "A sleek personal portfolio showcasing my projects, skills, and achievements.",
    techStack: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/ArinzeGit/My-Portfolio-Website",
    live: "https://my-portfolio-website-silk-five.vercel.app/",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="w-[300px] h-[260px] flex flex-col">
      <div className="w-full p-4 text-center">
        <h3 className="text-lg font-semibold">{project.title}</h3>
      </div>
      <div className="w-full flex-1 [perspective:1000px]">
        <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front Side */}
          <div className="absolute w-full h-full overflow-hidden [backface-visibility:hidden] rounded-b-lg flex items-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              width="300"
              height="200"
              className="rounded-md shadow-lg"
            >
              <source src={project.videoDemo} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Back Side */}
          <div className="absolute w-full h-full flex flex-col justify-center items-center px-4 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <p className="text-sm">{project.description}</p>
            <div className="mt-2 flex flex-wrap gap-2 justify-center">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-700 px-2 py-1 rounded text-xs"
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
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </Link>
              )}
              <Link
                href={project.live}
                target="_blank"
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
    <div className="bg-[url('/images/projects-page-background.webp')] bg-cover bg-center min-h-full pt-[85px]">
      <div
        className="w-[max(80vw,870px)] sm:h-[max(calc(35vw-85px),500px)] overflow-auto scrollbar-thin p-[85px] flex flex-wrap gap-8 justify-center"
        style={{
          scrollbarColor: `${themeColor} #1F1F1F`, // Set thumb color and track color
        }}
      >
        {projects.map((project, index) => (
          <TranslucentCard className="bg-projectsPrimary group" key={index}>
            <ProjectCard project={project} />
          </TranslucentCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
