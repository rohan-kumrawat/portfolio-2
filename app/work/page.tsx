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
    role: "Full Stack Engineer",
    company: "TechStartup Inc.",
    type: "Full-time",
    duration: "Jan 2024 - Present",
    bullets: [
      "Architected and shipped a microfinance SaaS platform serving 10,000+ daily active users across 50+ centers.",
      "Designed RESTful APIs with NestJS and TypeORM, achieving sub-100ms p95 latency for core financial operations.",
      "Built real-time dashboards with Next.js 14 App Router, React Query, and WebSocket integrations.",
      "Implemented role-based access control (RBAC) with JWT, reducing unauthorized access incidents by 100%.",
    ],
    skills: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker"],
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency Co.",
    type: "Contract",
    duration: "Jun 2022 - Dec 2023",
    bullets: [
      "Delivered 12+ high-performance web applications for enterprise clients in fintech and e-commerce sectors.",
      "Reduced bundle size by 45% through code-splitting, tree-shaking, and lazy loading strategies.",
      "Established a component library with 60+ reusable components, cutting development time by 30%.",
      "Led a team of 4 developers, conducting daily standups and weekly code reviews.",
    ],
    skills: ["React", "Vue.js", "GraphQL", "Figma", "Webpack", "Storybook"],
  },
  {
    role: "Backend Engineer",
    company: "DataFlow Systems",
    type: "Full-time",
    duration: "Mar 2021 - May 2022",
    bullets: [
      "Built data ingestion pipelines processing 5M+ records/day using Node.js workers and Bull queues.",
      "Designed a multi-tenant architecture supporting 200+ clients with isolated data partitioning.",
      "Optimized Mongo aggregation pipelines, improving report generation speed by 8x.",
      "Containerized all microservices with Docker and set up CI/CD on GitHub Actions.",
    ],
    skills: ["Node.js", "MongoDB", "RabbitMQ", "AWS", "Docker", "Kubernetes"],
  },
  {
    role: "Software Developer Intern",
    company: "InnovateLabs",
    type: "Internship",
    duration: "Aug 2020 - Feb 2021",
    bullets: [
      "Developed a internal analytics dashboard that tracked 25+ KPIs for the product team.",
      "Contributed to an open-source authentication SDK, which now has 2k+ GitHub stars.",
      "Wrote unit and integration tests achieving 85% code coverage.",
    ],
    skills: ["React", "Python", "Django", "MySQL", "Jest", "Git"],
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
          style={{
            width: "100%",
            height: "100vh",
            display: "grid",
            gridTemplateColumns: "1fr 1px 1fr",
          }}
        >
          {/* ─── Left: Job Info ─── */}
          <div style={{
            padding: "10vh 7% 12vh 8%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "20px",
          }}>
            <div>
              <h2 style={{
                fontFamily: "'Oxanium', sans-serif",
                fontSize: "clamp(24px, 3.2vw, 48px)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.1,
              }}>
                {job.role}
              </h2>
              <p style={{
                fontFamily: "'Oxanium', sans-serif",
                fontSize: "clamp(16px, 1.8vw, 22px)",
                fontWeight: 400,
                color: "rgba(255,255,255,0.75)",
                marginTop: "8px",
              }}>
                {job.company}
              </p>
              <p style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "12px",
                color: "rgba(255,255,255,0.4)",
                marginTop: "4px",
                letterSpacing: "0.06em",
              }}>
                {job.type} &nbsp;·&nbsp; {job.duration}
              </p>
            </div>

            <div>
              <h3 style={{
                fontFamily: "'Oxanium', sans-serif",
                fontSize: "clamp(16px, 1.6vw, 22px)",
                fontWeight: 600,
                color: "#fff",
                marginBottom: "16px",
              }}>
                Experience
              </h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {job.bullets.map((b, i) => (
                  <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: "rgba(255,255,255,0.5)", marginTop: "2px", flexShrink: 0 }}>›</span>
                    <span style={{
                      fontFamily: "'Oxanium', sans-serif",
                      fontSize: "clamp(13px, 1.3vw, 17px)",
                      color: "rgba(255,255,255,0.8)",
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
            background: "rgba(255,255,255,0.12)",
            margin: "80px 0",
          }} />

          {/* ─── Right: Skill Bubbles ─── */}
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}>
            <div style={{
              padding: "10vh 7% 0 6%",
            }}>
              <h3 style={{
                fontFamily: "'Oxanium', sans-serif",
                fontSize: "clamp(14px, 1.4vw, 20px)",
                fontWeight: 600,
                color: "#fff",
                letterSpacing: "0.04em",
              }}>
                Technical Skills
              </h3>
            </div>
            <div style={{ flex: 1, position: "relative", minHeight: 0 }}>
              <PhysicsBubbles key={current} />
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
        gap: "10px",
        alignItems: "center",
      }}>
        {JOBS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === current ? "40px" : "28px",
              height: "8px",
              borderRadius: "4px",
              background: i === current ? "#fff" : "rgba(255,255,255,0.35)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
