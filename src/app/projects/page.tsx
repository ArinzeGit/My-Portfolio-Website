"use client";
import { useThemeColor } from "@/app/context/ThemeContext";
import TranslucentCard from "@/components/TranslucentCard";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  image: string;
  description: string;
  techStack: string[];
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    title: "Bouncing Battle",
    image: "/images/BouncingBattleScreenshot.png", // Replace with a real image
    description:
      "A web-based multiplayer PC game with power-ups and obstacles.",
    techStack: ["JavaScript", "HTML5", "CSS"],
    github: "https://github.com/yourusername/bouncing-battle",
    live: "https://arinzegit.github.io/Bouncing-Battle-Game/",
  },
  {
    title: "Multi-Step Form",
    image: "/images/MultiStepFormScreenshot.png",
    description: "A React-TS multi-step form with custom hooks and unit tests.",
    techStack: ["React", "TypeScript", "Tailwind", "Vitest"],
    github: "https://github.com/yourusername/multi-step-form",
    live: "https://multi-step-form.vercel.app",
  },
  {
    title: "Bouncing Battle1",
    image: "/images/BouncingBattleScreenshot.png", // Replace with a real image
    description:
      "A web-based multiplayer PC game with power-ups and obstacles.",
    techStack: ["JavaScript", "HTML5", "CSS"],
    github: "https://github.com/yourusername/bouncing-battle",
    live: "https://bouncing-battle.vercel.app",
  },
  {
    title: "Multi-Step Form1",
    image: "/images/MultiStepFormScreenshot.png",
    description: "A React-TS multi-step form with custom hooks and unit tests.",
    techStack: ["React", "TypeScript", "Tailwind", "Vitest"],
    github: "https://github.com/yourusername/multi-step-form",
    live: "https://multi-step-form.vercel.app",
  },
  {
    title: "Bouncing Battle2",
    image: "/images/BouncingBattleScreenshot.png", // Replace with a real image
    description:
      "A web-based multiplayer PC game with power-ups and obstacles.",
    techStack: ["JavaScript", "HTML5", "CSS"],
    github: "https://github.com/yourusername/bouncing-battle",
    live: "https://bouncing-battle.vercel.app",
  },
  {
    title: "Multi-Step Form2",
    image: "/images/MultiStepFormScreenshot.png",
    description: "A React-TS multi-step form with custom hooks and unit tests.",
    techStack: ["React", "TypeScript", "Tailwind", "Vitest"],
    github: "https://github.com/yourusername/multi-step-form",
    live: "https://multi-step-form.vercel.app",
  },
  {
    title: "Bouncing Battle3",
    image: "/images/BouncingBattleScreenshot.png", // Replace with a real image
    description:
      "A web-based multiplayer PC game with power-ups and obstacles.",
    techStack: ["JavaScript", "HTML5", "CSS"],
    github: "https://github.com/yourusername/bouncing-battle",
    live: "https://bouncing-battle.vercel.app",
  },
  {
    title: "Multi-Step Form3",
    image: "/images/MultiStepFormScreenshot.png",
    description: "A React-TS multi-step form with custom hooks and unit tests.",
    techStack: ["React", "TypeScript", "Tailwind", "Vitest"],
    github: "https://github.com/yourusername/multi-step-form",
    live: "https://multi-step-form.vercel.app",
  },
  // Add more projects...
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="w-[300px] h-[260px] flex flex-col">
      <div className="w-full p-4 text-center">
        <h3 className="text-lg font-semibold">{project.title}</h3>
      </div>
      <div className="group w-full flex-1 [perspective:1000px]">
        <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front Side */}
          <div className="absolute w-full h-full overflow-hidden [backface-visibility:hidden] rounded-b-lg flex items-center">
            <Image
              src={project.image}
              alt={project.title}
              width={1920}
              height={1038}
              className="w-full shadow-lg"
            />
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
              <Link
                href={project.github}
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </Link>
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
          <TranslucentCard className="bg-projectsPrimary">
            <ProjectCard key={index} project={project} />
          </TranslucentCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
