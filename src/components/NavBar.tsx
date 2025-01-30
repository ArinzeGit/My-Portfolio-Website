import NavLink from "./NavLink";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="bg-[#121212] flex justify-between items-center p-[20px]">
      <div className="flex gap-[20px] items-center">
        <Image
          height={40}
          width={40}
          src={"/images/concentric-circles.svg"}
          alt="concentric circles"
        />
        <h1 className="text-[30px] text-homeSecondary font-roboto">
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
