"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Work", "/projects"],
  ["Services", "/skills"],
  ["Notes", "/writing"],
] as const;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand" href="/">
        AKBAR<span>_</span>
      </Link>
      <button
        className={`mobile-menu-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav
        aria-label="Primary navigation"
        className={`site-nav ${isOpen ? "open" : ""}`}
      >
        {links.map(([label, href]) => (
          <Link key={href} href={href} onClick={() => setIsOpen(false)}>
            {label}
          </Link>
        ))}
        <Link className="nav-cta" href="/contact" onClick={() => setIsOpen(false)}>
          Start a project <span>↗</span>
        </Link>
      </nav>
    </header>
  );
}
