"use client";
import "../../styles/netflix/browser.css";
import React, { useEffect, useState } from "react";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
import Header from "../../components/nextflix/Header";
import Footer from "../../components/nextflix/Footer";

export const metadata = {
  title: {
    default: "Thiago Miguel",
    template: "%s | Thiago Miguel",
  },
  robots: {
    index: true,
    follow: true,
  },
  description: "Thiago Miguel.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [blackHeader, setBlackHeader] = useState<Boolean>(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  return (
    <html lang="en">
      <head />
      <body className="bg-[#7F7FD5] bg-app">
        <div className="page">
          <Header black={blackHeader} />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
