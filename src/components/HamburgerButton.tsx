interface Props {
  onClick: () => void;
  isOpen: boolean;
}

const HamburgerButton = ({ onClick, isOpen }: Props) => {
  return (
    <button
      onClick={onClick}
      type="button"
      aria-expanded={isOpen}
      className="flex flex-col justify-between w-[25px] h-[19px]"
    >
      <div
        className={`h-[3px] bg-secondary rounded-[8px] w-full transition-transform duration-300 ${
          isOpen ? "rotate-45 translate-y-[8px]" : ""
        }`}
      />
      <div
        className={`h-[3px] bg-secondary rounded-[8px] w-full transition-all duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`h-[3px] bg-secondary rounded-[8px] w-full transition-transform duration-300 ${
          isOpen ? "-rotate-45 -translate-y-[8px]" : ""
        }`}
      />
    </button>
  );
};

export default HamburgerButton;
