// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Google font for professional typography
import "./globals.css";
import Navbar from "@/src/components/Navbar"; // We will create this in the next step
import { Toaster } from "react-hot-toast"; // For those success/error popups

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SolarLink | Connect with Solar Experts",
  description: "The premier marketplace for solar energy solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Deliverable #2: Sticky Navigation placed here so it stays on top of every page */}
        
        
        {/* This "children" represents the content of whatever page you are visiting */}
        <main>{children}</main>
        

        {/* Global popup notifications */}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}