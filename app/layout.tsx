import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";

import { Toaster } from "react-hot-toast";

import Providers from "@/src/components/Providers";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SolarLink",
  description:
    "Solar company comparison platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}

          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}