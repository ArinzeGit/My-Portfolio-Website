import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Dennings' Portfolio",
  description: "Porfolio to showcase my projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[url('/images/portfolio-background.webp')] bg-cover bg-center min-h-[100vh] p-[25px] flex justify-center items-center">
        <div className="shadow-[0_0_30px_rgb(188,182,166)]">
          <NavBar />
          <div className="w-[max(80vw,870px)] sm:h-[max(35vw,500px)]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
