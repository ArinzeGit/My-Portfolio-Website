// app/clientLayout.tsx
"use client";
import { ThemeProvider } from "@/app/context/ThemeContext";
import NavBar from "@/components/NavBar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    setIsFlashing(true);
    const timeout = setTimeout(() => setIsFlashing(false), 300);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <html lang="en">
      <ThemeProvider>
        <body className="antialiased bg-[url('/images/portfolio-background.webp')] bg-cover bg-center min-h-[100vh] p-[25px] flex justify-center items-center text-secondary">
          {/* Flashing Horizontal Line */}
          <div
            className={`absolute left-0 w-full h-[2px] top-[65vh] transition-shadow duration-500 bg-[rgb(255,255,200)] ${
              isFlashing
                ? "shadow-[0_0_20px_6px_rgb(255,255,200)]"
                : "shadow-[0_0_20px_rgb(188,182,166)]"
            }`}
          />
          <div
            className="relative transition-shadow duration-500 shadow-[0_0_30px_rgb(188,182,166)]"
            style={{
              boxShadow: isFlashing
                ? "0 0 30px 3px rgb(255,255,200)"
                : "0 0 30px rgb(188,182,166)", // Default glow
            }}
          >
            <div className="absolute w-full z-10">
              <NavBar />
            </div>
            {children}
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
};

export default ClientLayout;
