import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const ThemeContext = createContext<string | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  const [themeColor, setThemeColor] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure it's running on the client

    const rootStyles = getComputedStyle(document.documentElement);
    let color = rootStyles.getPropertyValue("--neutral").trim();

    switch (pathname) {
      case "/home":
        color = rootStyles.getPropertyValue("--home-primary").trim();
        break;
      case "/about":
        color = rootStyles.getPropertyValue("--about-primary").trim();
        break;
      case "/projects":
        color = rootStyles.getPropertyValue("--projects-primary").trim();
        break;
      case "/contact-me":
        color = rootStyles.getPropertyValue("--contact-me-primary").trim();
        break;
    }

    setThemeColor(color);
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
