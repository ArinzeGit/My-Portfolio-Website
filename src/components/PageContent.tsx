import { useThemeColor } from "@/app/context/ThemeContext";

const PageContent = ({ children }: { children: React.ReactNode }) => {
  const themeColor = useThemeColor();
  return (
    <div
      className="w-[max(80vw,870px)] sm:h-[max(35vw,500px)] overflow-auto scrollbar-thin"
      style={{
        scrollbarColor: `${themeColor} #1F1F1F`, // Set thumb color and track color
      }}
    >
      {children}
    </div>
  );
};

export default PageContent;
