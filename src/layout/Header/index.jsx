"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Auto-close sidebar when the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-[#ffff]  z-50 shadow-lg">
        <nav className="relative max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold cursor-pointer flex gap-2 items-center"
          >
            <img src="/icons/casino-logo.png" alt="logo" className="w-15 lg:w-20" />
          </Link>

          {/* Desktop Nav */}
          <ul className=" hidden lg:flex space-x-8 font-bold">
            <li><Link href="/top-casinos" className="hover:text-[#FFD600]">Top Casinos</Link></li>
            <li><Link href="/about-us" className="hover:text-[#FFD600]">About Us</Link></li>
            <li><Link href="/terms" className="hover:text-[#FFD600]">Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-[#FFD600]">Privacy Policy</Link></li>
            <li><Link href="/responsible-gaming" className="hover:text-[#FFD600]">Responsible Gaming</Link></li>
          </ul>

          {/* Burger / X button for mobile */}
          <button
            className="lg:hidden z-50 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <img src="/icons/close.png" alt="close" className="w-4 h-4" />
            ) : (
              <img src="/icons/menu.png" alt="burger-menu" className="w-6 h-6" />
            )}
          </button>
        </nav>
      </header>

      {/* SIDE MENU */}
      <div
        className={`fixed z-40 pt-12 top-0 right-0 h-full w-64 bg-[#fff] p-6 transform transition-transform duration-300 shadow-lg ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="mt-12 space-y-4 font-bold">
          <li><Link href="/top-casinos">Top Casinos</Link></li>
          <li><Link href="/about-us">About Us</Link></li>
          <li><Link href="/terms">Terms & Conditions</Link></li>
          <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          <li><Link href="/responsible-gaming">Responsible Gaming</Link></li>
        </ul>
      </div>
    </>
  );
}