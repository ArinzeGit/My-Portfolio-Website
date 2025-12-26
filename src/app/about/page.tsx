"use client";
import Image from "next/image";
import { useThemeColor } from "@/app/context/ThemeContext";
import { FaMedal } from "react-icons/fa";
import HireMeButton from "@/components/HireMeButton";
import Link from "next/link";
import TranslucentCard from "@/components/TranslucentCard";

const About = () => {
  const themeColor = useThemeColor();
  return (
    <div className="  bg-[url('/images/about-page-background.webp')] bg-cover bg-center min-h-full pt-[--nav-bar-height]">
      <div
        className="desktop:w-[--main-window-width] h-[100%] desktop:h-[--main-display-height] overflow-x-hidden overflow-y-auto scrollbar-thin text-secondary text-xl leading-loose"
        style={
          {
            "--theme-color": themeColor, // Inject theme color as a CSS variable which will be used in globals.css to set thumb color and track color for safari
            scrollbarColor: `${themeColor} #1F1F1F`, // Set thumb color and track color for browsers except safari
          } as React.CSSProperties // Fix TypeScript error
        }
      >
        <div className="flex flex-col desktop:flex-row justify-around desktop:justify-between gap-[40px] items-center desktop:items-start desktop:py-[--page-padding-top] py-[32px] px-[16px] desktop:px-0">
          <TranslucentCard
            position="left"
            className="w-full tablet:w-[90%] desktop:w-[580px] bg-aboutPrimary animate-fade-in-up"
          >
            <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full border-[4px] border-aboutPrimary shadow-2xl transition-all duration-500 ease-out hover:shadow-aboutPrimary/50 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-aboutPrimary/20 to-transparent rounded-full z-10 pointer-events-none" />
              <Image
                src="/images/game-dev-ari.jpeg"
                alt="Professional image"
                fill
                sizes="(max-width: 640px) 100vw, 256px"
                className="object-cover object-center transition-transform duration-500 ease-out hover:scale-110"
                priority
              />
            </div>
            <p className="mt-[30px] text-gray-200 leading-relaxed text-lg">
              From solving complex mathematical problems to crafting sleek,
              interactive web applications, I thrive on turning challenges into
              opportunities. Whether it&apos;s building a multiplayer game in
              Vanilla JavaScript or developing tested, scalable applications in
              Next.js, I specialize in creating user-friendly solutions that
              bring ideas to life. As a national mathematics and speedcubing
              champion, my problem-solving skills are matched by a knack for
              precision and speed—qualities I now channel into delivering
              high-quality code and innovative designs.
            </p>
            <Link
              href="https://github.com/ArinzeGit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-aboutPrimary underline hover:text-opacity-80 transition"
              aria-label="Visit my GitHub profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.49v-1.73c-2.78.61-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.91-.62.07-.61.07-.61 1.01.07 1.54 1.03 1.54 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.02-2.69-.1-.25-.44-1.27.1-2.64 0 0 .83-.27 2.73 1.02a9.55 9.55 0 0 1 4.96 0c1.9-1.29 2.73-1.02 2.73-1.02.54 1.37.2 2.39.1 2.64.63.7 1.02 1.6 1.02 2.69 0 3.85-2.35 4.7-4.58 4.94.36.31.69.93.69 1.88v2.8c0 .27.16.58.67.48C19.13 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10z"
                  clipRule="evenodd"
                />
              </svg>
              Visit my GitHub
            </Link>
          </TranslucentCard>
          <div className="flex flex-col items-center gap-[32px] desktop:w-[580px] desktop:items-stretch">
            <TranslucentCard position="right" className="bg-aboutPrimary overflow-visible animate-fade-in-up">
              <h2 className="text-aboutPrimary text-3xl font-bold mb-6 text-center desktop:text-left font-montserrat">
                Technologies I Use
              </h2>
              <ul className="space-y-3">
                {[
                  {
                    tech: "JavaScript (ES6+)",
                    desc: "Building dynamic and interactive web features",
                  },
                  {
                    tech: "React.js",
                    desc: "Developing modular, reusable UI components",
                  },
                  {
                    tech: "Next.js",
                    desc: "Building SEO-friendly, server-side rendered, and static web applications",
                  },
                  {
                    tech: "TypeScript",
                    desc: "Ensuring type safety and reducing runtime errors",
                  },
                  {
                    tech: "Tailwind CSS",
                    desc: "Crafting sleek and modern designs with utility-first styling",
                  },
                  {
                    tech: "Pixi.js",
                    desc: "Building high-performance 2D games and interactive animations on the web",
                  },
                  {
                    tech: "D3.js",
                    desc: "Visualizing complex data with custom, interactive charts",
                  },
                  {
                    tech: "Chart.js and Recharts",
                    desc: "Creating intuitive data visualizations",
                  },
                  {
                    tech: "MongoDB",
                    desc: "Working with NoSQL databases for scalable backend integration",
                  },
                  {
                    tech: "Microsoft Azure",
                    desc: "Deploying and managing applications in the cloud",
                  },
                  {
                    tech: "Testing Tools",
                    desc: "Writing unit and integration tests using React Testing Library (RTL), Jest and Vitest to ensure code quality and reliability",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="group relative bg-gradient-to-r from-aboutPrimary/10 to-transparent border border-aboutPrimary/20 rounded-lg p-3 hover:from-aboutPrimary/20 hover:border-aboutPrimary/40 transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-secondary font-semibold text-lg">
                      {item.tech}
                    </span>
                    <span className="absolute left-0 bottom-full mb-2 bg-gray-900/95 backdrop-blur-sm text-white text-sm p-3 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 w-64 border border-aboutPrimary/30 pointer-events-none">
                      {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </TranslucentCard>
            <TranslucentCard
              position="right"
              className="w-full tablet:w-[90%] bg-aboutPrimary animate-fade-in-up"
            >
              <div className="flex items-center justify-center desktop:justify-start gap-3 mb-6">
                <FaMedal className="text-yellow-400 text-3xl drop-shadow-lg" />
                <h2 className="text-aboutPrimary text-3xl font-bold font-montserrat">
                  Achievements
                </h2>
              </div>
              <p className="text-gray-200 leading-relaxed text-lg">
                In addition to my development work, I have excelled in national
                mathematics and speedcubing competitions, earning several
                national awards. I secured{" "}
                <Link
                  href="https://allafrica.com/stories/201003240496.html"
                  className="text-aboutPrimary font-semibold underline hover:text-yellow-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  first place
                </Link>{" "}
                in the Annual National Mathematics Competition (ANMC), Nigeria,
                in 2010,{" "}
                <Link
                  href="https://www.facebook.com/nticedung/photos/a.687528794698680/856882367763321/?_rdr"
                  className="text-aboutPrimary font-semibold underline hover:text-yellow-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  first place
                </Link>{" "}
                in Senior Mathematics at the National Mathematics and Science
                Olympiad, Nigeria, in 2016,{" "}
                <Link
                  href="https://www.worldcubeassociation.org/competitions/GhanaChampionship2020"
                  className="text-aboutPrimary font-semibold underline hover:text-yellow-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  first place
                </Link>{" "}
                in the Edu-Learn ARIS Ghana Championships 2020, and{" "}
                <Link
                  href="https://www.worldcubeassociation.org/competitions/NigeriaOpen2019"
                  className="text-aboutPrimary font-semibold underline hover:text-yellow-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  second place
                </Link>{" "}
                in the Nigeria Open 2019, where I set two national records.
              </p>
              <HireMeButton className="bg-[var(--about-primary)] mt-8" />
            </TranslucentCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
