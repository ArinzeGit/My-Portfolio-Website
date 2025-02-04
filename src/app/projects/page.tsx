"use client";
import { useThemeColor } from "@/app/context/ThemeContext";

const Projects = () => {
  const themeColor = useThemeColor();
  return (
    <div className="bg-[url('/images/home-page-background.png')] bg-cover bg-center min-h-full pt-[85px]">
      <div
        className="w-[max(80vw,870px)] sm:h-[max(calc(35vw-85px),500px)] overflow-auto scrollbar-thin"
        style={{
          scrollbarColor: `${themeColor} #1F1F1F`, // Set thumb color and track color
        }}
      >
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
      </div>
    </div>
  );
};

export default Projects;
