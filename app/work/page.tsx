"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const PhysicsBubbles = dynamic(() => import("@/components/PhysicsBubbles"), {
  ssr: false,
});

interface Job {
  role: string;
  company: string;
  type: string;
  duration: string;
  bullets: string[];
  skills: string[];
}

const JOBS: Job[] = [
  {
    role: "Full Stack Developer (Freelance / Contract)",
    company: "Self-Employed, Indore, MP",
    type: "Contract",
    duration: "Jan 2024 - Present",
    bullets: [
      "Delivered 3 production applications end-to-end across healthcare and fintech domains — covering system design, REST API development, database schema design, third-party integrations, and cloud deployment on Railway, AWS Lightsail, and Vercel.",
      "Designed and implemented multi-tenant SaaS architecture with centre-level data isolation enforced via JWT payload and a 3-layer guard chain (Auth - Isolation - Service), ensuring zero cross-tenant data leakage across all database queries.",
      "Built and deployed backends using NestJS, PostgreSQL, and TypeORM; integrated third-party services including Razorpay (payments + webhooks), WhatsApp Business API (bulk messaging), and Cloudinary (media management).",
      "Translated client business requirements into technical specifications; managed iterative delivery with regular stakeholder reviews across all 3 engagements."
    ],
    skills: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "WhatsApp API", "Razorpay", "Cloudinary", "Railway", "AWS", "Vercel"],
  },
  {
    role: "MEAN Stack Developer Intern",
    company: "The Stepping Stone, Indore, MP",
    type: "Internship",
    duration: "Aug 2023 - Jan 2024",
    bullets: [
      "Built a full-stack e-commerce web application with product catalog, shopping cart, and user authentication as part of a 6-month training program.",
      "Developed RESTful APIs using Node.js, Express.js, and MongoDB for product management, cart operations, and JWT-based user authentication."
    ],
    skills: ["Node.js", "Express.js", "MongoDB", "Angular", "JWT", "REST API", "Git"],
  },
];

export default function WorkPage() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(JOBS.length - 1, c + 1));

  const job = JOBS[current];

  return (
    <div className="work-page-root">
      {/* Arrow buttons */}
      {current > 0 && (
        <button className="slider-arrow left" onClick={prev} aria-label="Previous">
          &#8249;
        </button>
      )}
      {current < JOBS.length - 1 && (
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
          className="slider-page-grid"
        >
          {/* ─── Left: Job Info ─── */}
          <div className="slider-page-left">
            <div>
              <h2 style={{
                fontFamily: "'Fredoka', sans-serif",
                fontSize: "clamp(24px, 2.5vw, 42px)",
                fontWeight: 700,
                color: "var(--color-dark)",
                lineHeight: 1.15,
              }}>
                {job.role}
              </h2>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(16px, 1.5vw, 20px)",
                fontWeight: 600,
                color: "var(--color-dark)",
                opacity: 0.85,
                marginTop: "8px",
              }}>
                {job.company}
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
                {job.type} &nbsp;·&nbsp; {job.duration}
              </p>
            </div>

            <div>
              <h3 style={{
                fontFamily: "'Fredoka', sans-serif",
                fontSize: "clamp(16px, 1.4vw, 22px)",
                fontWeight: 700,
                color: "var(--color-dark)",
                marginBottom: "16px",
              }}>
                Experience Details
              </h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {job.bullets.map((b, i) => (
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

          {/* ─── Divider (hidden on mobile) ─── */}
          <div className="slider-page-divider" />

          {/* ─── Right: Skill Bubbles ─── */}
          <div className="slider-page-right">
            <div className="slider-page-right-header">
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
            <div className="slider-page-right-canvas">
              <PhysicsBubbles key={current} skills={job.skills} />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ─── Dot navigation ─── */}
      <div className="slider-dots">
        {JOBS.map((_, i) => (
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

      {/* ─── Mobile prev/next row (visible only on mobile) ─── */}
      <div className="slider-mobile-nav">
        <button
          className="slider-mobile-btn"
          onClick={prev}
          disabled={current === 0}
          aria-label="Previous job"
        >
          ← Prev
        </button>
        <span className="slider-mobile-counter">
          {current + 1} / {JOBS.length}
        </span>
        <button
          className="slider-mobile-btn"
          onClick={next}
          disabled={current === JOBS.length - 1}
          aria-label="Next job"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
