"use client";

import Image from "next/image";
import { useState } from "react";
import { useNavbarScroll } from "@/hooks/useNavbarScroll";

const NAV_LINKS = [
  { href: "#education", label: "Education" },
  { href: "#organization", label: "Organization" },
  { href: "#internship", label: "Internship" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { scrolled } = useNavbarScroll();
  const [open, setOpen] = useState(false);

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <a
        href="#home"
        className="nav-logo"
        onClick={(e) => handleNavClick(e, "#home")}
      >
        <Image
          src="/Maison de Chesia.png"
          alt="Chesia Julian Pratiwi"
          className="nav-logo-img"
          width={160}
          height={60}
        />
      </a>

      <ul className={`nav-links ${open ? "open" : ""}`} id="navLinks">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="nav-toggle"
        id="navToggle"
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
