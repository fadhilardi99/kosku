"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideNavFooter =
    pathname === "/auth/signin" || pathname === "/auth/signup";
  return (
    <>
      {!hideNavFooter && <Navbar />}
      <main className="flex-1">{children}</main>
      {!hideNavFooter && <Footer />}
    </>
  );
}
