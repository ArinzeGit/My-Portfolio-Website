"use client";
import { useThemeColor } from "@/app/context/ThemeContext";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const themeColor = useThemeColor();
  return (
    <div className="bg-[url('/images/home-page-background.webp')] bg-top bg-cover min-h-full pt-[85px]">
      <div
        className="w-[max(80vw,870px)] sm:h-[max(calc(35vw-85px),500px)] overflow-auto scrollbar-thin flex flex-col sm:flex-row justify-between gap-[40px] items-center"
        style={{
          scrollbarColor: `${themeColor} #1F1F1F`, // Set thumb color and track color
        }}
      >
        <div className="max-w-md p-[30px] bg-homePrimary bg-opacity-[20%] backdrop-blur-sm rounded-bl-[12px] rounded-br-[12px] rounded-none sm:rounded-tr-[12px] sm:rounded-br-[12px] sm:rounded-tl-none sm:rounded-bl-none">
          <h1 className="text-secondary text-4xl sm:text-5xl font-bold mb-4 font-montserrat">
            Hi, I'm Dennings Owoh, a
            <span className="text-homePrimary"> Frontend Developer</span>
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
          <Link
            href={"/contact-me"}
            className="block text-center mt-[50px] bg-homePrimary text-white text-xl sm:text-2xl font-bold tracking-wide py-3 px-6 rounded-2xl shadow-lg hover:bg-opacity-80 hover:shadow-xl transition-all duration-300"
          >
            Hire Me
          </Link>
        </div>
        <div className="w-[34%] p-6 bg-homePrimary bg-opacity-[20%] backdrop-blur-sm rounded-tl-[12px] rounded-tr-[12px] sm:rounded-tl-[12px] sm:rounded-bl-[12px] sm:rounded-none">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
