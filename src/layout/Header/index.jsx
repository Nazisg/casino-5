"use client";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#ffff] shadow-lg">
        <nav className="relative max-w-7xl mx-auto flex items-center justify-between py-3 px-3">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src="/icons/casino-logo.png" alt="logo" className="lg:w-25 w-15" />
          </a>
          {/* Desktop Nav */}
          <ul className="absolute left-1/2 -translate-x-1/2 hidden md:flex space-x-8 font-bold">
            <li><a href="#top-casinos">Top Casinos</a></li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
          </ul>

          {/* Burger / X button for mobile */}
          <button className="md:hidden z-50 cursor-pointer" onClick={() => setOpen(!open)}>
            {open ? (
              <img
                src="/icons/close.png"
                alt="close"
                className="w-4 h-4"
              />
            ) : (
              <img
                src="/icons/menu.png"
                alt="burger-menu"
                className="w-6 h-6"
              />
            )}
          </button>
        </nav>
      </header>

      {/* SIDE MENU */}
      <div
        className={`fixed z-40 top-0 right-0 h-full w-64 bg-[#fff]  p-6 transform transition-transform duration-300 shadow-lg ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Menu Items */}
        <ul className="mt-18 space-y-4 font-bold">
          <li>
            <a href="#top-casinos" onClick={() => setOpen(false)}>
              Top Casinos
            </a>
          </li>
          <li>
            <a href="#about-us" onClick={() => setOpen(false)}>
              About Us
            </a>
          </li>
          <li>
            <a href="#terms" onClick={() => setOpen(false)}>
              Terms & Conditions
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
