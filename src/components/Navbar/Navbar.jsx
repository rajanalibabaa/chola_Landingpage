"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Project", href: "/project" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-gray-900 px-8 py-4 flex justify-between items-center shadow-md z-50">
      {/* Logo */}
      <Link
        href="/"
        className="text-2xl font-extrabold tracking-wide text-orange-600 hover:text-orange-700 transition-colors"
      >
        MySite
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-lg font-medium">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`relative transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full
                ${isActive ? "text-orange-600 after:w-full font-semibold" : "hover:text-orange-600"}`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl z-50 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white text-gray-900 shadow-lg transform 
        ${isOpen ? "translate-x-0 opacity-95" : "-translate-x-full opacity-0"} 
        transition-all duration-300 ease-out md:hidden z-40`}
      >
        <div className="flex flex-col items-start p-6 space-y-6 text-lg font-medium">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`transition-colors ${
                  isActive
                    ? "text-orange-600 font-semibold"
                    : "hover:text-orange-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
  className="fixed inset-0  bg-opacity-60 md:hidden z-30"
  onClick={() => setIsOpen(false)}
></div>

      )}
    </nav>
  );
}
