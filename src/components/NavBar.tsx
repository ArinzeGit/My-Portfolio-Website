import NavLink from "./NavLink";
import { useThemeColor } from "@/app/context/ThemeContext";
import Logo from "./Logo";
import HamburgerButton from "./HamburgerButton";
import { useState } from "react";

const NavBar = () => {
  const themeColor = useThemeColor();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center p-[20px] bg-[#121212] tablet:bg-transparent backdrop-blur-none tablet:backdrop-blur-3xl transition-colors duration-300 ease-in-out">
      <div className="flex gap-[20px] items-center">
        <div style={{ color: themeColor }}>
          <Logo />
        </div>
        <h1 className="text-[25px] text-secondary font-roboto">
          Dennings Owoh
        </h1>
      </div>

      <div
        className={`fixed tablet:static z-10 bg-[#121212] tablet:bg-transparent bg-opacity-70 backdrop-blur-3xl flex flex-col tablet:flex-row justify-center items-center gap-y-6 gap-x-[2.5vw] tablet:self-end transition-[clip-path,opacity] duration-[400ms] ${
          isOpen ? "opacity-100 inset-0" : "opacity-0 h-0 w-0 overflow-hidden"
        } tablet:opacity-100 tablet:h-auto tablet:w-auto`}
      >
        <NavLink
          label="HOME"
          href="/home"
          onClick={() => setTimeout(() => setIsOpen(false), 1000)}
        />
        <NavLink
          label="ABOUT"
          href="/about"
          onClick={() => setTimeout(() => setIsOpen(false), 1000)}
        />
        <NavLink
          label="PROJECTS"
          href="/projects"
          onClick={() => setTimeout(() => setIsOpen(false), 1000)}
        />
        <NavLink
          label="CONTACT ME"
          href="/contact-me"
          onClick={() => setTimeout(() => setIsOpen(false), 1000)}
        />
      </div>
      <div className="absolute top-[50%] translate-y-[-50%] right-[20px] z-[11] tablet:hidden">
        <HamburgerButton onClick={toggleMenu} isOpen={isOpen} />
      </div>
    </nav>
  );
};

export default NavBar;
