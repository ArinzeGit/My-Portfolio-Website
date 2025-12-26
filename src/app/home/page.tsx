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
            className="w-full tablet:w-[70%] desktop:w-[min(580px,45%)] bg-homePrimary animate-fade-in-up"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-secondary text-[32px] sm:text-[48px] leading-[1.1] font-bold font-montserrat">
                  Hi, I&apos;m{" "}
                  <span className="text-gray-300 italic font-black">
                    Dennings Owoh
                  </span>
                </h1>
                <div className="text-secondary text-[28px] sm:text-[36px] leading-[1.2] font-bold font-montserrat">
                  <span className="text-homePrimary italic">Frontend</span>{" "}
                  Developer
                  <br />
                  <span className="text-homePrimary italic">&</span>{" "}
                  <span className="text-homePrimary italic">Game</span> Developer
                </div>
              </div>
              {/* Icons for GitHub, Email */}
              <div className="mt-8 flex items-center gap-6">
                <Link
                  href="https://github.com/ArinzeGit"
                  className="text-secondary hover:text-homePrimary transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                  target="_blank"
                  aria-label="GitHub Profile"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-10 h-10" />
                </Link>
                <Link
                  href="mailto:arinzeowoh@gmail.com"
                  className="text-secondary hover:text-homePrimary transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                  aria-label="Email"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="w-10 h-10" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/dennings-owoh/"
                  className="text-secondary hover:text-homePrimary transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                  target="_blank"
                  aria-label="LinkedIn Profile"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="w-10 h-10" />
                </Link>
              </div>
              <HireMeButton className="bg-[var(--home-primary)] mt-8" />
            </div>
          </TranslucentCard>
          <TranslucentCard
            position="right"
            className="w-full tablet:w-[70%] desktop:w-[min(580px,45%)] bg-homePrimary animate-fade-in-up"
          >
            <div className="space-y-4">
              <p className="text-secondary text-xl sm:text-2xl leading-relaxed font-montserrat">
                <span className="block text-[32px] sm:text-[40px] leading-[1.2] font-black italic mb-3">
                  Where imagination meets{" "}
                  <span className="text-homePrimary drop-shadow-lg">code,</span>
                </span>
                <span className="block text-lg sm:text-xl text-gray-300 font-semibold tracking-wide">
                  and dreams become{" "}
                  <span className="text-homePrimary font-bold">reality.</span>
                </span>
              </p>
              <div className="mt-6 pt-6 border-t border-homePrimary/20">
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Crafting beautiful, performant web experiences and engaging
                  interactive games with modern technologies.
                </p>
              </div>
            </div>
          </TranslucentCard>
        </div>
      </div>
    </div>
  );
};

export default Home;
