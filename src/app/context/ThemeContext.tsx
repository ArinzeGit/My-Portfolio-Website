// context/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const ThemeContext = createContext<string | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  const [themeColor, setThemeColor] = useState<string>("#BCB6A6");

  useEffect(() => {
    switch (pathname) {
      case "/home":
        setThemeColor("#3498DB");
        break;
      case "/about":
        setThemeColor("#E67E22");
        break;
      case "/projects":
        setThemeColor("#27AE60");
        break;
      case "/contact-me":
        setThemeColor("#9B59B6");
        break;
      default:
        setThemeColor("#BCB6A6");
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
