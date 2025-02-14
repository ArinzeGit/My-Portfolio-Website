"use client";
import Image from "next/image";
import { useThemeColor } from "@/app/context/ThemeContext";
import { FaMedal } from "react-icons/fa";
import HireMeButton from "@/components/HireMeButton";
import Link from "next/link";

const About = () => {
  const themeColor = useThemeColor();
  return (
    <div className="  bg-[url('/images/about-page-background.webp')] bg-cover bg-center min-h-full pt-[85px]">
      <div
        className="w-[max(80vw,870px)] sm:h-[max(calc(35vw-85px),500px)] overflow-auto scrollbar-thin flex flex-col sm:flex-row justify-between gap-[40px] items-start py-[85px] text-secondary text-xl leading-loose"
        style={
          {
            "--theme-color": themeColor, // Inject theme color as a CSS variable which will be used in globals.css to set thumb color and track color for safari
            scrollbarColor: `${themeColor} #1F1F1F`, // Set thumb color and track color for browsers except safari
          } as React.CSSProperties // Fix TypeScript error
        }
      >
        <div className="max-w-md p-[30px] overflow-hidden bg-aboutPrimary bg-opacity-[20%] backdrop-blur-3xl rounded-bl-[12px] rounded-br-[12px] rounded-none sm:rounded-tr-[12px] sm:rounded-br-[12px] sm:rounded-tl-none sm:rounded-bl-none">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto overflow-hidden rounded-full border-[4px] border-aboutPrimary shadow-lg transition-all duration-500 ease-out hover:shadow-2xl">
            <Image
              src="/images/arinze in suit.jpg"
              alt="Professional image"
              fill
              className="object-cover transition-transform duration-500 ease-out hover:scale-110"
              priority
            />
          </div>
          <p className="mt-[30px]">
            From solving complex mathematical problems to crafting sleek,
            interactive web applications, I thrive on turning challenges into
            opportunities. Whether it's building a multiplayer game in Vanilla
            JavaScript or developing tested, scalable applications in Next.js, I
            specialize in creating user-friendly solutions that bring ideas to
            life. As a national mathematics and speedcubing champion, my
            problem-solving skills are matched by a knack for precision and
            speed—qualities I now channel into delivering high-quality code and
            innovative designs.
          </p>
          <a
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
          </a>
        </div>

        <div className="max-w-md p-[30px] bg-aboutPrimary bg-opacity-[20%] backdrop-blur-3xl rounded-tl-[12px] rounded-tr-[12px] sm:rounded-tl-[12px] sm:rounded-bl-[12px] sm:rounded-none">
          <h2 className="text-aboutPrimary text-3xl font-bold mb-4">
            Technologies I Excel In
          </h2>
          <ul className="list-disc list-inside space-y-2 font-semibold">
            <li className="group relative">
              JavaScript (ES6+)
              <span className="absolute left-0 bg-gray-800 text-white text-sm p-2 rounded shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out delay-100">
                Building dynamic and interactive web features
              </span>
            </li>
            <li className="group relative">
              React.js
              <span className="absolute left-0 bg-gray-800 text-white text-sm p-2 rounded shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out delay-100">
                Developing modular, reusable UI components
              </span>
            </li>
            <li className="group relative">
              Next.js
              <span className="absolute left-0 bg-gray-800 text-white text-sm p-2 rounded shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out delay-100">
                Building SEO-friendly, server-side rendered, and static web
                applications
              </span>
            </li>
            <li className="group relative">
              TypeScript
              <span className="absolute left-0 bg-gray-800 text-white text-sm p-2 rounded shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out delay-100">
                Ensuring type safety and reducing runtime errors.
              </span>
            </li>
            <li className="group relative">
              Tailwind CSS
              <span className="absolute left-0 bg-gray-800 text-white text-sm p-2 rounded shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out delay-100">
                Crafting sleek and modern designs with utility-first styling
              </span>
            </li>
            <li className="group relative">
              D3.js
              <span className="absolute left-0 bg-gray-800 text-white text-sm p-2 rounded shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out delay-100">
                Visualizing complex data with custom, interactive charts
              </span>
            </li>
            <li className="group relative">
              Chart.js and Recharts
              <span className="absolute left-0 bg-gray-800 text-white text-sm p-2 rounded shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out delay-100">
                Creating intuitive data visualizations
              </span>
            </li>
            <li className="group relative">
              MongoDB
              <span className="absolute left-0 bg-gray-800 text-white text-sm p-2 rounded shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out delay-100">
                Working with NoSQL databases for scalable backend integration
              </span>
            </li>
            <li className="group relative">
              Microsoft Azure
              <span className="absolute left-0 bg-gray-800 text-white text-sm p-2 rounded shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out delay-100">
                Deploying and managing applications in the cloud.
              </span>
            </li>
            <li className="group relative">
              Testing Tools
              <span className="absolute left-0 bg-gray-800 text-white text-sm p-2 rounded shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out delay-100">
                Writing unit and integration tests using React Testing Library
                (RTL), Jest and Vitest to ensure code quality and reliability
              </span>
            </li>
          </ul>
          <h2 className="text-aboutPrimary text-3xl font-bold flex items-center gap-3 mt-8 mb-4">
            <FaMedal className="text-yellow-400" /> Achievements
          </h2>
          <p>
            In addition to my development work, I have excelled in national
            mathematics and speedcubing competitions, earning several national
            awards. I secured{" "}
            <Link
              href="https://allafrica.com/stories/201003240496.html"
              className="text-aboutPrimary underline hover:text-opacity-80 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              first place
            </Link>{" "}
            in the Annual National Mathematics Competition (ANMC), Nigeria, in
            2010,{" "}
            <Link
              href="https://www.facebook.com/nticedung/photos/a.687528794698680/856882367763321/?_rdr"
              className="text-aboutPrimary underline hover:text-opacity-80 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              first place
            </Link>{" "}
            in Senior Mathematics at the National Mathematics and Science
            Olympiad, Nigeria, in 2016,{" "}
            <Link
              href="https://www.worldcubeassociation.org/competitions/GhanaChampionship2020"
              className="text-aboutPrimary underline hover:text-opacity-80 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              first place
            </Link>{" "}
            in the Edu-Learn ARIS Ghana Championships 2020, and{" "}
            <Link
              href="https://www.worldcubeassociation.org/competitions/NigeriaOpen2019"
              className="text-aboutPrimary underline hover:text-opacity-80 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              second place
            </Link>{" "}
            in the Nigeria Open 2019, where I set two national records.
          </p>
          <HireMeButton
            style={{
              backgroundColor: "var(--about-primary)",
              marginTop: "50px",
            }}
          ></HireMeButton>
        </div>
      </div>
    </div>
  );
};

export default About;
