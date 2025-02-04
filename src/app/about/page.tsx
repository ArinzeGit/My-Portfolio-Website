"use client";
import Image from "next/image";
import { useThemeColor } from "@/app/context/ThemeContext";

const About = () => {
  const themeColor = useThemeColor();
  return (
    <div className="  bg-[url('/images/about-page-background.jpg')] bg-cover bg-center min-h-full pt-[85px]">
      <div
        className="w-[max(80vw,870px)] sm:h-[max(calc(35vw-85px),500px)] overflow-auto scrollbar-thin"
        style={{
          scrollbarColor: `${themeColor} #1F1F1F`, // Set thumb color and track color
        }}
      >
        <Image
          src={"/images/arinze in suit.jpg"}
          alt="Professional image"
          width={516}
          height={458}
        />
        <p>
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
        <br />
        <br />
        <h2>Technologies I excel in</h2>
        <ul>
          <li>
            JavaScript (ES6+): Building dynamic and interactive web features
          </li>
          <li>React.js: Developing modular, reusable UI components</li>
          <li>
            Next.js: Building SEO-friendly, server-side rendered, and static web
            applications
          </li>
          <li>TypeScript: Ensuring type safety and reducing runtime errors.</li>
          <li>
            Tailwind CSS: Crafting sleek and modern designs with utility-first
            styling
          </li>
          <li>
            D3.js: Visualizing complex data with custom, interactive charts
          </li>
          <li>Chart.js and Recharts: Creating intuitive data visualizations</li>
          <li>
            MongoDB: Working with NoSQL databases for scalable backend
            integration
          </li>
          <li>
            Microsoft Azure: Deploying and managing applications in the cloud.
          </li>
          <li>
            Testing Tools: Writing unit and integration tests using React
            Testing Library (RTL), Jest and Vitest to ensure code quality and
            reliability
          </li>
        </ul>
        <h2>Achievements</h2>
        <p>
          In addition to my development work, I have excelled in national
          mathematics and speedcubing competitions, earning several national
          awards. I secured first place in the Annual National Mathematics
          Competition (ANMC), Nigeria, in 2010, first place in Senior
          Mathematics at the National Mathematics and Science Olympiad, Nigeria,
          in 2016, first place in the Edu-Learn ARIS Ghana Championships 2020,
          and second place in the Nigeria Open 2019, where I set two national
          records.
        </p>
      </div>
    </div>
  );
};

export default About;
