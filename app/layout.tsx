// ABOUTME: Root layout component for the Zed9 portfolio site
// ABOUTME: Includes global styles, metadata, and navigation structure
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Zed9 - Custom Woodworking & Furniture",
  description: "Custom woodworking, furniture, and cabinetry",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
