// context/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const ThemeContext = createContext<string | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  const [themeColor, setThemeColor] = useState<string>("rgb(188, 182, 166)");

  useEffect(() => {
    switch (pathname) {
      case "/home":
        setThemeColor("rgb(52, 152, 219)");
        break;
      case "/about":
        setThemeColor("rgb(230, 126, 34)");
        break;
      case "/projects":
        setThemeColor("rgb(39, 174, 96)");
        break;
      case "/contact-me":
        setThemeColor("rgb(155, 89, 182)");
        break;
      default:
        setThemeColor("rgb(188, 182, 166)");
        break;
    }
  }, [pathname]);

  return (
    <ThemeContext.Provider value={themeColor}>{children}</ThemeContext.Provider>
  );
};

export const useThemeColor = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeColor must be used within a ThemeProvider");
  }
  return context;
};
