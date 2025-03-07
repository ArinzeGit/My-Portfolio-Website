// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/app/ClientLayout"; // Import the ClientLayout

export const metadata: Metadata = {
  title: "Dennings Owoh",
  description: "Portfolio to showcase my projects",
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ClientLayout>{children}</ClientLayout>;
}
