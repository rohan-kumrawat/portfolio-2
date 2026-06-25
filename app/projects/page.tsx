"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const PhysicsBubbles = dynamic(() => import("@/components/PhysicsBubbles"), {
  ssr: false,
});

interface Project {
  role: string;
  company: string;
  type: string;
  duration: string;
  bullets: string[];
  skills: string[];
  demoUrl?: string;
}

const PROJECTS: Project[] = [
  {
    role: "Backend Developer (Microfinance SaaS Dashboard)",
    company: "Freelance / Deployed across 2 active centres in MP",
    type: "Project",
    duration: "Jan 2026 - Present",
    bullets: [
      "Architected a multi-tenant micro-finance SaaS platform with strict centre-level data isolation enforced via JWT payload with a 3-layer guard chain (JwtAuthGuard - CentreIsolationGuard - service-layer WHERE clause), making cross-tenant data leakage architecturally impossible.",
      "Built a complete loan lifecycle engine supporting EMI, bullet, and flexible loan types — covering disbursement, scheduled repayments, penalty tracking, pre-closure, and transaction reversal with idempotency guarantees and atomic receipt number generation.",
      "Implemented a 4-role RBAC system (Admin, Agent, Kiosk, Customer) with role-differentiated dashboards: admins see full financials and reports, agents see assigned collections only, and customers see their own loan/diary data.",
      "Designed supporting financial modules including a Saving Diary (with 365-day interest eligibility), Daily Register with auto-recalculating day-end balance, Udhar Khata ledger, and an immutable Audit Log.",
      "Enforced financial data integrity rules at DTO, service, and database levels, rounding monetary values via a centralised utility to prevent floating-point errors.",
      "Deployed on AWS Lightsail — configured the VPS instance, environment variables, PostgreSQL database setup, and production process management."
    ],
    skills: ["React 19", "Vite", "TypeScript", "NestJS", "PostgreSQL", "TanStack Query", "Zustand", "Zod", "Shadcn/UI", "Recharts", "Tailwind CSS", "AWS Lightsail"],
    demoUrl: "https://mf-demo-nine.vercel.app/",
  },
  {
    role: "Backend Developer (Branding and Appointment Website)",
    company: "Dr. Shashi's Physiotherapy Clinic, Indore",
    type: "Project",
    duration: "Jan 2025 - Jan 2026",
    bullets: [
      "Designed and built a dual-backend architecture: a public-facing NestJS gateway (public-backend) that rate-limits unauthenticated traffic and proxies to a secured clinic-backend via internal API key auth, isolating public exposure from core clinical data.",
      "Developed REST APIs for an appointment booking system with full Razorpay payment gateway integration, including webhook handling for payment verifications and a write-through logging pattern for audit traceability.",
      "Migrated Gallery and Blog modules from static files to a dynamic CMS: built admin CRUD APIs, Cloudinary upload pipelines, and Next.js ISR (5-min revalidation) on the frontend with graceful static fallbacks.",
      "Designed PostgreSQL database schemas for blog management, photo gallery (with category/ordering), appointment logs, and patient testimonials; deployed all services on Railway and Vercel."
    ],
    skills: ["Next.js 14", "NestJS", "PostgreSQL", "Cloudinary", "Razorpay", "Railway", "Vercel", "ISR"],
    demoUrl: "https://www.drshashiphysio.com/",
  },
  {
    role: "Full-Stack Developer (Clinic Management System)",
    company: "Dr. Shashi's Physiotherapy Clinic, Indore",
    type: "Project",
    duration: "March 2024 - Dec 2024",
    bullets: [
      "Architected a production-grade full-stack clinic management platform managing 7,000+ patient records, designing the complete PostgreSQL schema, 20+ REST API endpoints, and NestJS module structure from scratch.",
      "Implemented granular RBAC with three roles (Admin, Receptionist, Editor) across six core modules — Patients, Sessions, Payments, Reports, Gallery, and Blog — with per-route JWT + RolesGuard enforcement.",
      "Built a Cloudinary-backed media pipeline for patient document storage (images, PDFs), and a drag-and-drop gallery management UI (@dnd-kit) with persistent bulk-reordering via a single batch API.",
      "Integrated WhatsApp Business API for automated bulk patient messaging, reducing manual follow-up effort significantly, directly from a dedicated admin dashboard module."
    ],
    skills: ["React", "NestJS", "PostgreSQL", "TypeORM", "JWT", "RBAC", "WhatsApp API", "Cloudinary", "Railway", "@dnd-kit"],
    demoUrl: "https://physio-demo-project.vercel.app/login",
  },
];

export default function ProjectsPage() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(PROJECTS.length - 1, c + 1));

  const project = PROJECTS[current];

  return (
    <div className="work-page-root">
      {/* Arrow buttons */}
      {current > 0 && (
        <button className="slider-arrow left" onClick={prev} aria-label="Previous">
          &#8249;
        </button>
      )}
      {current < PROJECTS.length - 1 && (
        <button className="slider-arrow right" onClick={next} aria-label="Next">
          &#8250;
        </button>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          style={{
            width: "100%",
            height: "100vh",
            display: "grid",
            gridTemplateColumns: "1fr var(--border-width) 1fr",
          }}
        >
          {/* ─── Left: Project Info ─── */}
          <div style={{
            padding: "10vh 7% 12vh 9%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "24px",
          }}>
            <div>
              <h2 style={{
                fontFamily: "'Fredoka', sans-serif",
                fontSize: "clamp(24px, 2.5vw, 42px)",
                fontWeight: 700,
                color: "var(--color-dark)",
                lineHeight: 1.15,
              }}>
                {project.role}
              </h2>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(16px, 1.5vw, 20px)",
                fontWeight: 600,
                color: "var(--color-dark)",
                opacity: 0.85,
                marginTop: "8px",
              }}>
                {project.company}
              </p>
              <p style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "12px",
                fontWeight: 700,
                color: "var(--color-dark)",
                opacity: 0.5,
                marginTop: "6px",
                letterSpacing: "0.05em",
              }}>
                {project.type} &nbsp;·&nbsp; {project.duration}
              </p>

              {project.demoUrl && (
                <div style={{ marginTop: "16px" }}>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-pill active"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "13px",
                      padding: "8px 20px",
                      textDecoration: "none",
                      fontFamily: "'Fredoka', sans-serif",
                    }}
                  >
                    {current === 1 ? "Visit Website" : "View Live Demo"}
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      height="14"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              )}
            </div>

            <div>
              <h3 style={{
                fontFamily: "'Fredoka', sans-serif",
                fontSize: "clamp(16px, 1.4vw, 22px)",
                fontWeight: 700,
                color: "var(--color-dark)",
                marginBottom: "16px",
              }}>
                Project Details
              </h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {project.bullets.map((b, i) => (
                  <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{
                      display: "inline-block",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "var(--color-rose)",
                      border: "1.5px solid var(--color-dark)",
                      marginTop: "7px",
                      flexShrink: 0
                    }} />
                    <span style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "clamp(13px, 1.25vw, 17px)",
                      color: "var(--color-dark)",
                      opacity: 0.85,
                      lineHeight: 1.55,
                    }}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ─── Divider ─── */}
          <div style={{
            background: "var(--border-color)",
            margin: "80px 0",
          }} />

          {/* ─── Right: Skill Bubbles ─── */}
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            background: "var(--color-light-down)",
          }}>
            <div style={{
              padding: "10vh 7% 0 8%",
            }}>
              <h3 style={{
                fontFamily: "'Fredoka', sans-serif",
                fontSize: "clamp(15px, 1.5vw, 22px)",
                fontWeight: 700,
                color: "var(--color-dark)",
                letterSpacing: "0.02em",
              }}>
                Technical Skills Canvas
              </h3>
            </div>
            <div style={{ flex: 1, position: "relative", minHeight: 0 }}>
              <PhysicsBubbles key={current} skills={project.skills} />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ─── Dot navigation ─── */}
      <div style={{
        position: "absolute",
        bottom: "5%",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "12px",
        alignItems: "center",
      }}>
        {PROJECTS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === current ? "42px" : "28px",
              height: "12px",
              borderRadius: "9999px",
              background: i === current ? "var(--color-mint)" : "var(--color-light-down)",
              border: "var(--border-width) solid var(--color-dark)",
              boxShadow: i === current ? "2px 2px 0px var(--color-dark)" : "1px 1px 0px var(--color-dark)",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.25s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
