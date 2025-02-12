import Link from "next/link";

const HireMeButton = ({ style }: { style: React.CSSProperties }) => {
  return (
    <Link
      href={"/contact-me"}
      className="block text-center text-white text-xl sm:text-2xl font-bold tracking-wide py-3 px-6 rounded-2xl shadow-lg hover:bg-opacity-80 hover:shadow-xl transition-all duration-300"
      style={style}
    >
      Hire Me
    </Link>
  );
};

export default HireMeButton;
