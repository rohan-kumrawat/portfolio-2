"use client";

import dynamic from "next/dynamic";
import TypewriterText from "@/components/TypewriterText";
import Link from "next/link";

// Dynamic imports to avoid SSR issues with Three.js
const WireframeFunnel = dynamic(
  () => import("@/components/three/WireframeFunnel"),
  { ssr: false }
);
const ParticleSphere = dynamic(
  () => import("@/components/three/ParticleSphere"),
  { ssr: false }
);
const SineWaveGrid = dynamic(
  () => import("@/components/three/SineWaveGrid"),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="scroll-container">

      {/* ── Section 1: Particle Sphere Hero ── */}
      <section className="snap-section" style={{ display: "flex", flexDirection: "column" }}>
        {/* Top-left: Name + title */}
        <div style={{
          position: "absolute",
          top: "14%",
          left: "6%",
          zIndex: 10,
        }}>
          <h1 style={{
            fontFamily: "'Oxanium', sans-serif",
            fontSize: "clamp(32px, 4vw, 64px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            color: "#fff",
          }}>
            ROHAN SHARMA
          </h1>
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "clamp(12px, 1.2vw, 16px)",
            color: "rgba(255,255,255,0.5)",
            marginTop: "6px",
            letterSpacing: "0.12em",
          }}>
            FULL STACK DEVELOPER
          </p>
        </div>

        {/* Center 3D Scene */}
        <div style={{
          position: "absolute",
          top: "5%",
          left: "25%",
          right: "25%",
          bottom: "15%",
        }}>
          <ParticleSphere />
        </div>

        {/* Bottom tagline */}
        <div style={{
          position: "absolute",
          bottom: "8%",
          left: "6%",
          right: "6%",
        }}>
          <p className="hero-tagline">
            Percieve. Design. Develop
          </p>
        </div>
      </section>

      {/* ── Section 2: Sine Wave Philosophy ── */}
      <section className="snap-section" style={{ position: "relative" }}>
        {/* Code tab header */}
        <div className="section-code-tab">
          <span style={{ color: "rgba(255,255,255,0.3)" }}>page.tsx</span>
          {" "}&mdash;{" "}
          <span style={{ color: "rgba(255,255,255,0.5)" }}>
            &quot;Asking the right questions is half the answer&quot;
          </span>
        </div>

        {/* Left capsule sidebar */}
        <div style={{ position: "absolute", left: "4%", top: "50%", transform: "translateY(-50%)", zIndex: 5 }}>
          <div style={{
            width: "52px",
            height: "200px",
            background: "rgba(30,40,70,0.5)",
            border: "1px solid rgba(100,150,255,0.3)",
            borderRadius: "26px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(8px)",
          }}>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "13px",
              color: "rgba(255,255,255,0.45)",
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)",
              letterSpacing: "0.15em",
            }}>
              ?.::**
            </span>
          </div>
        </div>

        {/* Center 3D scene */}
        <div style={{
          position: "absolute",
          top: "10%",
          left: "12%",
          right: "12%",
          bottom: "20%",
        }}>
          <SineWaveGrid />
        </div>

        {/* Bottom statements */}
        <div style={{
          position: "absolute",
          bottom: "8%",
          left: "6%",
          right: "6%",
        }}>
          <p style={{
            fontFamily: "'Oxanium', sans-serif",
            fontSize: "clamp(18px, 2.5vw, 36px)",
            fontWeight: 600,
            color: "#fff",
            lineHeight: 1.4,
          }}>
            Consistency comes from clarity
          </p>
          <p style={{
            fontFamily: "'Oxanium', sans-serif",
            fontSize: "clamp(18px, 2.5vw, 36px)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.5)",
          }}>
            Reliability comes from consistency
          </p>
        </div>
      </section>

      {/* ── Section 3: Wireframe Funnel ── */}
      <section className="snap-section" style={{ position: "relative" }}>
        {/* Top-right tagline */}
        <div style={{
          position: "absolute",
          top: "12%",
          right: "6%",
          maxWidth: "340px",
          textAlign: "right",
          zIndex: 10,
        }}>
          <p style={{
            fontFamily: "'Oxanium', sans-serif",
            fontSize: "clamp(13px, 1.4vw, 18px)",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.6,
            marginBottom: "6px",
          }}>
            Adapting to pace of development environments.
          </p>
          <p style={{
            fontFamily: "'Oxanium', sans-serif",
            fontSize: "clamp(13px, 1.4vw, 18px)",
          }}>
            Sounds Interesting?{" "}
            <Link href="/about" className="connect-link">
              Let&apos;s connect..
            </Link>
          </p>
        </div>

        {/* Left speed widget */}
        <SpeedWidget />

        {/* Center 3D scene */}
        <div style={{
          position: "absolute",
          top: "5%",
          left: "20%",
          right: "20%",
          bottom: "18%",
        }}>
          <WireframeFunnel />
        </div>

        {/* Bottom typewriter */}
        <div style={{
          position: "absolute",
          bottom: "7%",
          left: "4%",
          right: "4%",
        }}>
          <p style={{
            fontFamily: "'Oxanium', sans-serif",
            fontSize: "clamp(28px, 5vw, 78px)",
            fontWeight: 700,
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            color: "#fff",
          }}>
            <TypewriterText />
          </p>
        </div>
      </section>

    </div>
  );
}

// ─── Speed Widget ───────────────────────────────────────────────────
function SpeedWidget() {
  const marks = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div style={{
      position: "absolute",
      left: "2.5%",
      top: "50%",
      transform: "translateY(-50%)",
      width: "52px",
      height: "280px",
      background: "rgba(15, 25, 55, 0.55)",
      border: "1px solid rgba(0, 80, 200, 0.35)",
      borderRadius: "26px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 0 12px",
      backdropFilter: "blur(8px)",
      zIndex: 5,
    }}>
      {/* Faster label */}
      <span style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: "8px",
        color: "rgba(255,255,255,0.4)",
        letterSpacing: "0.08em",
      }}>Faster</span>

      {/* Display value */}
      <span style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: "11px",
        color: "rgba(255,255,255,0.75)",
        fontWeight: 700,
      }}>11.0</span>

      {/* Track */}
      <div style={{
        position: "relative",
        width: "2px",
        height: "130px",
        background: "rgba(255,255,255,0.15)",
        borderRadius: "1px",
      }}>
        {/* Tick marks */}
        {marks.map((_, i) => (
          <div key={i} style={{
            position: "absolute",
            right: "4px",
            top: `${(i / (marks.length - 1)) * 100}%`,
            width: "6px",
            height: "1px",
            background: "rgba(255,255,255,0.25)",
          }} />
        ))}
        {/* Thumb */}
        <div style={{
          position: "absolute",
          left: "-8px",
          top: "35%",
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          background: "#fff",
          border: "2px solid rgba(0,0,0,0.3)",
          boxShadow: "0 0 8px rgba(100,150,255,0.5)",
        }} />
      </div>

      {/* Steady label */}
      <span style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: "8px",
        color: "rgba(255,255,255,0.4)",
        letterSpacing: "0.08em",
      }}>Steady</span>
    </div>
  );
}
