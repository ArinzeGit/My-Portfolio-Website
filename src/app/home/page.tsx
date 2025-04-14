"use client";
import { useThemeColor } from "@/app/context/ThemeContext";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import HireMeButton from "@/components/HireMeButton";
import TranslucentCard from "@/components/TranslucentCard";

const Home = () => {
  const themeColor = useThemeColor();
  return (
    <div className="bg-[url('/images/home-page-background.webp')] bg-top bg-cover min-h-full pt-[85px]">
      <div
        className="w-[max(80vw,870px)] sm:h-[max(calc(35vw-85px),500px)] overflow-auto scrollbar-thin py-[10px] flex flex-col sm:flex-row justify-between gap-[40px] items-center"
        style={{
          scrollbarColor: `${themeColor} #1F1F1F`, // Set thumb color and track color
        }}
      >
        <TranslucentCard position="left" className="max-w-md bg-homePrimary">
          <h1 className="text-secondary text-4xl sm:text-5xl font-bold mb-4 font-montserrat">
            Hi, I&apos;m
            <span className="text-gray-400 italic"> Dennings Owoh </span>, a
            <span className="text-homePrimary italic"> Frontend </span>
            Developer and
            <span className="text-homePrimary italic"> Game </span>
            Developer
          </h1>
          {/* Icons for GitHub, Email */}
          <div className="mt-6 flex items-center gap-10">
            <Link
              href="https://github.com/ArinzeGit"
              className="text-secondary hover:text-homePrimary transition-all text-2xl"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} className="w-10 h-10" />
            </Link>
            <Link
              href="mailto:arinzeowoh@gmail.com"
              className="text-secondary hover:text-homePrimary transition-all text-2xl"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-10 h-10" />
            </Link>
          </div>
          <HireMeButton className="bg-[var(--home-primary)]" />
        </TranslucentCard>

        <TranslucentCard
          position="right"
          className="max-w-[34%] bg-homePrimary"
        >
          <p className="text-secondary text-lg sm:text-xl leading-relaxed font-montserrat">
            <span className="block text-3xl sm:text-4xl font-bold italic">
              Where imagination meets{" "}
              <span className="text-homePrimary">code,</span>
            </span>
            <span className="block text-lg sm:text-xl mt-2 text-gray-400 font-semibold tracking-wide">
              and dreams become{" "}
              <span className="text-homePrimary">reality.</span>
            </span>
          </p>
        </TranslucentCard>
      </div>
    </div>
  );
};

export default Home;
