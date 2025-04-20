import Link from "next/link";

const HireMeButton = ({ className }: { className: string }) => {
  return (
    <Link
      href={"/contact-me"}
      className={`mt-[50px] block text-center text-white text-xl sm:text-2xl font-bold tracking-wide py-3 px-6 rounded-2xl shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-[1.05] hover:-translate-y-1 hover:shadow-xl ${className ? className : "bg-black"}`}
    >
      Hire Me
    </Link>
  );
};

export default HireMeButton;
