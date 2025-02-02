"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useThemeColor } from "@/app/context/ThemeContext";
import { useState } from "react";

interface NavLinkProps {
  label: string;
  href: string;
}

const NavLink = ({ label, href }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);
  const themeColor = useThemeColor();
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href}>
      <div
        className={`text-[16px] font-roboto transition-colors duration-300 ease-in-out border-[2px] px-3 py-1 rounded-full ${
          isActive ? "font-[900]" : "text-secondary font-[500]"
        }`}
        style={{
          color: isActive ? themeColor : undefined,
          borderColor: isActive
            ? themeColor
            : hovered
            ? themeColor
            : "transparent",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span>{label}</span>
      </div>
    </Link>
  );
};

export default NavLink;
