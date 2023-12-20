"use client";
import React, { useEffect, useState } from "react";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-[#7F7FD5] bg-app">
        <div className="page">A</div>
      </body>
    </html>
  );
}
