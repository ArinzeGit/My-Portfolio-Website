// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/app/ClientLayout"; // Import the ClientLayout

export const metadata: Metadata = {
  title: "Dennings Owoh",
  description: "Portfolio to showcase my projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        <link
          id="favicon"
          rel="icon"
          type="image/svg+xml"
          href="/favicon.svg"
        />
      </head>
      <ClientLayout>{children}</ClientLayout>
    </>
  );
}
