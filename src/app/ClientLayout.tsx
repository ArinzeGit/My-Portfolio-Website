// app/clientLayout.tsx
"use client";
import { ThemeProvider } from "@/app/context/ThemeContext";
import NavBar from "@/components/NavBar";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className="antialiased bg-[url('/images/portfolio-background.webp')] bg-cover bg-center min-h-[100vh] p-[25px] flex justify-center items-center">
          <div className="shadow-[0_0_30px_rgb(188,182,166)] relative">
            <div className="absolute w-full">
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
