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
      <body className="antialiased bg-[url('/images/portfolio-background.jpg')] bg-cover bg-center min-h-[100vh] p-[25px] flex justify-center items-center">
        <div>
          <NavBar />
          <div className="w-[80vw] h-[35vw]">{children}</div>
        </div>
      </body>
    </html>
  );
}
