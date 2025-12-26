"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useThemeColor } from "@/app/context/ThemeContext";
import { useState } from "react";

interface NavLinkProps {
  label: string;
  href: string;
  onClick: () => void;
}

const NavLink = ({ label, href, onClick }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);
  const themeColor = useThemeColor();
  const [hovered, setHovered] = useState(false);

  return (
    <Link onClick={onClick} href={href}>
      <div
        className={`text-[16px] font-roboto transition-all duration-300 ease-in-out border-[2px] px-4 py-2 rounded-full ${
          isActive ? "font-[900]" : "text-secondary font-[500]"
        } ${hovered ? "scale-105" : ""}`}
        style={{
          color: isActive ? themeColor : undefined,
          borderColor: isActive
            ? themeColor
            : hovered
              ? themeColor
              : "transparent",
          backgroundColor: isActive
            ? `${themeColor}15`
            : hovered
              ? `${themeColor}10`
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
