import NavLink from "./NavLink";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="bg-[#121212] rounded-t-[12px] flex justify-between items-center p-[20px] shadow-[0_1px_1px_0_rgba(0,0,0,0.25)]">
      <div className="flex gap-[20px] items-center">
        <Image
          height={40}
          width={40}
          src={"/images/concentric-circles.svg"}
          alt="concentric circles"
        />
        <h1 className="text-[30px] text-[#C0C0C0] font-roboto">
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
