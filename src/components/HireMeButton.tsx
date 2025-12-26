import Link from "next/link";

const HireMeButton = ({ className }: { className: string }) => {
  return (
    <Link
      href={"/contact-me"}
      className={`mt-[50px] block text-center text-white text-xl sm:text-2xl font-bold tracking-wide py-4 px-8 rounded-xl shadow-lg shadow-current/30 transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-current/50 active:scale-95 ${className}`}
    >
      Hire Me
    </Link>
  );
};

export default HireMeButton;
