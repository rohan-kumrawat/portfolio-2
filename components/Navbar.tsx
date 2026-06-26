"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

function NavbarPill({ href, label, isActive, onClick }: { href: string; label: string; isActive: boolean; onClick?: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyle: React.CSSProperties = {
    fontFamily: "'Fredoka', sans-serif",
    fontSize: "14px",
    fontWeight: 600,
    padding: "6px 16px",
    borderRadius: "9999px",
    textDecoration: "none",
    transition: "all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.3s ease, color 0.3s ease, background 0.3s ease",
    cursor: "pointer",
    display: "inline-block",
    border: "var(--border-width) solid transparent",
    transform: "none",
    boxShadow: "none",
  };

  const activeStyle: React.CSSProperties = {
    background: "var(--color-mint)",
    color: "var(--color-dark)",
    borderColor: "var(--border-color)",
    boxShadow: "3px 3px 0px var(--border-color)",
    transform: "translate(-2px, -2px)",
  };

  const hoverStyle: React.CSSProperties = {
    background: "var(--color-sherbet)",
    color: "var(--color-dark)",
    borderColor: "var(--border-color)",
    boxShadow: "3px 3px 0px var(--border-color)",
    transform: "translate(-2px, -2px)",
  };

  const currentStyle = {
    ...baseStyle,
    ...isActive
      ? activeStyle
      : isHovered
      ? hoverStyle
      : { color: "var(--color-dark)" },
  };

  return (
    <Link
      href={href}
      style={currentStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <span>{label}</span>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <Link href="/" className="brand-logo" aria-label="Rohan Kumrawat">
        <svg className="logo-svg" viewBox="0 0 320 72" width="320" height="72">
          {/* Highlight trail layer */}
          <text
            x="10"
            y="52"
            className="logo-text logo-stroke1"
            fill="none"
            stroke="var(--logo-highlight)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            rohan kumrawat
          </text>
          {/* Final drawn + filled layer */}
          <text
            x="10"
            y="52"
            className="logo-text logo-stroke2"
            fill="none"
            stroke="var(--logo-mint)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            rohan kumrawat
          </text>
          {/* Bouncing dot accent (like cassie's dot on the i) */}
          <circle
            cx="295"
            cy="18"
            r="5"
            fill="var(--logo-highlight)"
            className="logo-dot"
          />
        </svg>
      </Link>

      {/* ─── Desktop Navbar ─── */}
      <nav className="navbar-desktop">
        {links.map((link) => (
          <NavbarPill
            key={link.href}
            href={link.href}
            label={link.label}
            isActive={pathname === link.href}
          />
        ))}
        <ThemeToggle />
      </nav>

      {/* ─── Mobile Hamburger Button ─── */}
      <button
        className="mobile-menu-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle mobile menu"
        aria-expanded={mobileMenuOpen}
      >
        <div className={`hamburger-icon ${mobileMenuOpen ? "open" : ""}`}>
          <span />
          <span />
          <span />
        </div>
      </button>

      {/* ─── Mobile Menu Overlay ─── */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          <nav className="mobile-menu-nav">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`mobile-menu-link ${pathname === link.href ? "active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mobile-menu-footer">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
