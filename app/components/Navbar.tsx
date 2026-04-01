"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  
  if (pathname === "/start") return null;

  return (
    <nav className="flex gap-6 p-5 bg-black text-white items-center">
      <h2 className="font-bold text-xl">Outpro</h2>

      <Link href="/">Home</Link>
      <Link href="/about">About Us</Link>
      <Link href="/services">Services</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/testimonials">Testimonials</Link>
    </nav>
  );
}