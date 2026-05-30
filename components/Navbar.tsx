"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        position: "fixed",
        top: 24,
        right: 36,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        gap: "4px",
      }}
    >
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-pill ${isActive ? "active" : "inactive"}`}
            style={{ position: "relative" }}
          >
            {isActive && (
              <motion.span
                layoutId="nav-active-pill"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "#fff",
                  borderRadius: "100px",
                  zIndex: -1,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
              />
            )}
            <span style={{ color: isActive ? "#000" : undefined }}>
              {link.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
