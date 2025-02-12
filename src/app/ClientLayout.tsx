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
    // Trigger flashing effect when the route changes
    setIsFlashing(true);
    const timer = setTimeout(() => setIsFlashing(false), 150); // Flash duration

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <html lang="en">
      <ThemeProvider>
        <body className="antialiased bg-[url('/images/portfolio-background.webp')] bg-cover bg-center min-h-[100vh] p-[25px] flex justify-center items-center text-secondary">
          {/* Flashing Horizontal Line */}
          <div
            className="absolute left-0 w-full h-[2px] top-[65vh]"
            style={{
              background: isFlashing
                ? "rgb(255,255,200)" // Flash effect
                : "transparent", // Normal color
              boxShadow: isFlashing
                ? "0 0 20px 2px rgb(255,255,200)" // Glow effect
                : "0 0", // Default glow
              transition:
                "background 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
            }}
          />
          <div
            className="relative shadow-[0_0_30px_rgb(188,182,166)]"
            style={{
              boxShadow: isFlashing
                ? "0 0 30px 1px rgb(255,255,200)" // Flash effect
                : "0 0 30px rgb(188,182,166)", // Normal shadow
              transition: "box-shadow 0.15s ease-in-out",
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
