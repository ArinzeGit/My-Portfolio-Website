// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/app/ClientLayout"; // Import the ClientLayout

export const metadata: Metadata = {
  title: "Dennings' Portfolio",
  description: "Portfolio to showcase my projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ClientLayout>{children}</ClientLayout>;
}
