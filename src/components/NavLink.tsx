"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  label: string;
  href: string;
}

const NavLink = ({ label, href }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link href={href}>
      <div
        className={`${
          isActive
            ? "text-[#3498DB] font-[900] border-[#3498DB]"
            : "text-[#C0C0C0] font-[500] border-[transparent]"
        } hover:border-[#3489DB] text-[16px] font-roboto transition-colors duration-300 ease-in-out border-[2px] px-3 py-1 rounded-full`}
      >
        <span>{label}</span>
      </div>
    </Link>
  );
};

export default NavLink;
