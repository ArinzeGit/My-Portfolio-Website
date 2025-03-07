// context/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const ThemeContext = createContext<string | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  const rootStyles = getComputedStyle(document.documentElement);
  const [themeColor, setThemeColor] = useState<string>(
    rootStyles.getPropertyValue("--neutral").trim()
  );

  useEffect(() => {
    switch (pathname) {
      case "/home":
        setThemeColor(rootStyles.getPropertyValue("--home-primary").trim());
        break;
      case "/about":
        setThemeColor(rootStyles.getPropertyValue("--about-primary").trim());
        break;
      case "/projects":
        setThemeColor(rootStyles.getPropertyValue("--projects-primary").trim());
        break;
      case "/contact-me":
        setThemeColor(
          rootStyles.getPropertyValue("--contact-me-primary").trim()
        );
        break;
      default:
        setThemeColor(rootStyles.getPropertyValue("--neutral").trim());
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
