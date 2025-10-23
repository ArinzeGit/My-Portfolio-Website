"use client";
import { useThemeColor } from "@/app/context/ThemeContext";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import HireMeButton from "@/components/HireMeButton";
import TranslucentCard from "@/components/TranslucentCard";

const Home = () => {
  const themeColor = useThemeColor();
  return (
    <div className="bg-[url('/images/home-page-background.webp')] bg-top bg-cover min-h-full pt-[--nav-bar-height]">
      <div
        className="desktop:w-[--main-window-width] h-[100%] desktop:h-[--main-display-height] overflow-auto scrollbar-thin"
        style={{
          scrollbarColor: `${themeColor} #1F1F1F`, // Set thumb color and track color
        }}
      >
        <div className="min-h-full flex flex-col desktop:flex-row justify-around desktop:justify-between gap-[40px] items-center py-[32px] desktop:py-[16px] px-[16px] desktop:px-0">
          <TranslucentCard
            position="left"
            className="w-full tablet:w-[70%] desktop:w-[min(580px,45%)] bg-homePrimary"
          >
            <span className="text-secondary text-[36px] sm:text-[42px] leading-[1.1] font-bold mb-4 font-montserrat">
              Hi, I&apos;m
              <span className="text-gray-400 italic"> Dennings Owoh</span>, a
              <span className="text-homePrimary italic"> Frontend </span>
              Developer and
              <span className="text-homePrimary italic"> Game </span>
              Developer
            </span>
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
              <Link
                href="https://www.linkedin.com/in/dennings-owoh/"
                className="text-secondary hover:text-homePrimary transition-all text-2xl"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="w-10 h-10" />
              </Link>
            </div>
            <HireMeButton className="bg-[var(--home-primary)]" />
          </TranslucentCard>
          <TranslucentCard
            position="right"
            className="w-full tablet:w-[70%] desktop:w-[min(580px,45%)] bg-homePrimary"
          >
            <p className="text-secondary text-lg sm:text-xl leading-relaxed font-montserrat">
              <span className="block text-[30px] sm:text-[30px] leading-[1] font-bold italic">
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
    </div>
  );
};

export default Home;
