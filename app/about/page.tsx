"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div style={{
      width: "100%",
      height: "100vh",
      display: "grid",
      gridTemplateColumns: "1fr 1px 1fr",
      overflow: "hidden",
    }}>

      {/* ─── Left: Bio ─── */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          padding: "0 8% 0 9%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <div>
          <p style={{
            fontFamily: "'Oxanium', sans-serif",
            fontSize: "clamp(22px, 2.2vw, 32px)",
            fontWeight: 600,
            color: "#fff",
            marginBottom: "20px",
          }}>
            Hi, I&apos;m Rohan!
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Glad to have you here. I'm a Full Stack Developer and Software Engineer who loves building products that are fast, reliable, and a joy to use.",
              "I specialize in designing scalable systems — from high-throughput backends and real-time services to polished frontend experiences. I care deeply about the craft.",
              "I've worked across fintech, SaaS, and digital agencies, building platforms from the ground up and optimizing systems for performance and correctness.",
              "Question, Design — question Design — Build / Experience. That's how I see software. If anything out here looks interesting, feel free to reach out!",
            ].map((para, i) => (
              <p key={i} style={{
                fontFamily: "'Oxanium', sans-serif",
                fontSize: "clamp(13px, 1.35vw, 18px)",
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.65,
              }}>
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Social links */}
        <div style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
          <SocialLink href="https://github.com" label="GitHub">
            <GitHubIcon />
          </SocialLink>
          <SocialLink href="https://linkedin.com" label="LinkedIn">
            <LinkedInIcon />
          </SocialLink>
        </div>
      </motion.div>

      {/* ─── Divider ─── */}
      <div style={{
        background: "rgba(255,255,255,0.12)",
        margin: "80px 0",
      }} />

      {/* ─── Right: Brand Mark ─── */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "0 8% 0 8%",
          gap: "40px",
        }}
      >
        {/* Main brand mark */}
        <div>
          <BrandMark />
        </div>

        {/* Decorative line separator */}
        <div style={{
          width: "100%",
          height: "1px",
          background: "rgba(255,255,255,0.15)",
        }} />

        {/* Tech philosophy quote */}
        <div>
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "clamp(11px, 1vw, 14px)",
            color: "rgba(255,255,255,0.35)",
            lineHeight: 1.7,
            letterSpacing: "0.04em",
          }}>
            // STACK
          </p>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginTop: "12px",
          }}>
            {["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Docker", "Redis", "AWS", "Prisma"].map((tech) => (
              <span key={tech} style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "clamp(10px, 0.9vw, 13px)",
                color: "rgba(255,255,255,0.55)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: "4px",
                padding: "4px 10px",
                letterSpacing: "0.04em",
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

    </div>
  );
}

// ─── Brand Mark ─────────────────────────────────────────────────────
function BrandMark() {
  return (
    <div style={{
      display: "flex",
      alignItems: "flex-end",
      gap: "0px",
      lineHeight: 1,
    }}>
      {/* Arrow/slash mark */}
      <svg
        width="clamp(60px, 8vw, 110px)"
        height="clamp(60px, 8vw, 110px)"
        viewBox="0 0 100 100"
        fill="none"
        style={{ flexShrink: 0 }}
      >
        <line x1="20" y1="90" x2="70" y2="10" stroke="white" strokeWidth="7" strokeLinecap="round" />
        <line x1="55" y1="10" x2="90" y2="10" stroke="white" strokeWidth="7" strokeLinecap="round" />
        <line x1="90" y1="10" x2="90" y2="40" stroke="white" strokeWidth="7" strokeLinecap="round" />
      </svg>

      {/* # symbol */}
      <span style={{
        fontFamily: "'Oxanium', sans-serif",
        fontSize: "clamp(40px, 6vw, 90px)",
        fontWeight: 800,
        color: "#fff",
        paddingBottom: "4px",
      }}>
        #
      </span>

      {/* Orange box with number */}
      <span style={{
        display: "inline-block",
        background: "#ff6b00",
        color: "#fff",
        fontFamily: "'Oxanium', sans-serif",
        fontSize: "clamp(40px, 6vw, 90px)",
        fontWeight: 800,
        padding: "0 12px 4px",
        marginLeft: "4px",
        lineHeight: 1.1,
      }}>
        01
      </span>
    </div>
  );
}

// ─── Social Link ─────────────────────────────────────────────────────
function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        border: "1px solid rgba(255,255,255,0.25)",
        borderRadius: "8px",
        color: "rgba(255,255,255,0.7)",
        transition: "all 0.2s ease",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
        (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.6)";
        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)";
        (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.25)";
        (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
      }}
    >
      {children}
    </a>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
