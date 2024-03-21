"use client";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Poppins } from 'next/font/google'
import Footer from "@/Components/Footer";

const poppin = Poppins({
    weight:"400",
    subsets:["latin"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={poppin.className}>
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
