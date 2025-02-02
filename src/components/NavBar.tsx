import NavLink from "./NavLink";
import { useThemeColor } from "@/app/context/ThemeContext";
import Logo from "./Logo";

const NavBar = () => {
  const themeColor = useThemeColor();
  return (
    <div className="bg-[#121212] flex justify-between items-center p-[20px]">
      <div className="flex gap-[20px] items-center">
        <div style={{ color: themeColor }}>
          <Logo />
        </div>
        <h1 className="text-[30px] text-secondary font-roboto">
          Dennings Owoh
        </h1>
      </div>
      <div className="flex gap-[2.5vw]">
        <NavLink label="HOME" href="/home" />
        <NavLink label="ABOUT" href="/about" />
        <NavLink label="PROJECTS" href="/projects" />
        <NavLink label="CONTACT ME" href="/contact-me" />
      </div>
    </div>
  );
};

export default NavBar;
