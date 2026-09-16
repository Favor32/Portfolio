"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Toolkit", href: "/toolkit" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b-2 border-border w-full px-6 md:px-8 py-4 flex items-center justify-between sticky top-0 bg-background/90 backdrop-blur z-50">
      <Link href="/" className="font-serif font-semibold text-lg text-foreground">
        Social Media Management
      </Link>

      <div className="hidden md:flex gap-6 text-sm">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-medium text-foreground hover:text-accent transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-foreground text-2xl"
        aria-label="Open menu"
      >
        <FaBars />
      </button>

      {open && (
        <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center gap-8">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-foreground text-2xl"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-serif text-2xl font-bold text-foreground hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}