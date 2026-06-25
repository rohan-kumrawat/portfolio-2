"use client";

import { useEffect, useRef } from "react";

interface Bubble {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label: string;
  rotation: number;
  rotSpeed: number;
  color: string;
}

const DEFAULT_SKILLS = [
  "Next.js", "TypeScript", "React", "Node.js",
  "PostgreSQL", "MongoDB", "Docker", "Redis",
  "NestJS", "Prisma", "GraphQL", "AWS",
];

const PASTEL_COLORS = [
  "#6fdcbf", // mint
  "#ad8fdb", // lilac
  "#ffbe9f", // peach
  "#f09bb0", // rose
  "#fff5a9", // sherbet
];

export default function PhysicsBubbles({ skills }: { skills?: string[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      init();
    };

    const init = () => {
      const skillList = skills && skills.length > 0 ? skills : DEFAULT_SKILLS;
      bubblesRef.current = skillList.map((label, i) => {
        // Calculate radius dynamically based on label length to prevent text overflow
        const r = Math.max(34, Math.min(68, label.length * 4.8 + 14));
        return {
          x: r + Math.random() * (canvas.width - 2 * r),
          y: r + Math.random() * (canvas.height - 2 * r),
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          radius: r,
          label,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.006,
          color: PASTEL_COLORS[i % PASTEL_COLORS.length],
        };
      });
    };

    const resolveCollisions = () => {
      const bs = bubblesRef.current;
      for (let i = 0; i < bs.length; i++) {
        for (let j = i + 1; j < bs.length; j++) {
          const a = bs[i], b = bs[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = a.radius + b.radius + 6; // slightly extra padding for thick borders
          if (dist < minDist && dist > 0) {
            const nx = dx / dist, ny = dy / dist;
            const overlap = (minDist - dist) / 2;
            a.x -= nx * overlap; a.y -= ny * overlap;
            b.x += nx * overlap; b.y += ny * overlap;
            const dvx = b.vx - a.vx, dvy = b.vy - a.vy;
            const dot = dvx * nx + dvy * ny;
            a.vx += dot * nx * 0.5; a.vy += dot * ny * 0.5;
            b.vx -= dot * nx * 0.5; b.vy -= dot * ny * 0.5;
          }
        }
      }
    };

    const draw = () => {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const bs = bubblesRef.current;

      // Update positions
      for (const b of bs) {
        b.x += b.vx;
        b.y += b.vy;
        b.rotation += b.rotSpeed;

        // Bounce walls
        if (b.x - b.radius < 0) { b.x = b.radius; b.vx *= -1; }
        if (b.x + b.radius > canvas.width) { b.x = canvas.width - b.radius; b.vx *= -1; }
        if (b.y - b.radius < 0) { b.y = b.radius; b.vy *= -1; }
        if (b.y + b.radius > canvas.height) { b.y = canvas.height - b.radius; b.vy *= -1; }
      }

      resolveCollisions();

      // Draw bubbles
      for (const b of bs) {
        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.rotate(b.rotation);

        // 1. Draw Flat Retro Shadow (slightly shifted down-right)
        ctx.beginPath();
        ctx.arc(3, 3, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#303145";
        ctx.fill();

        // 2. Draw Sticker Bubble
        ctx.beginPath();
        ctx.arc(0, 0, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();

        // 3. Draw Thick Outline
        ctx.strokeStyle = "#303145";
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // 4. Label
        ctx.rotate(-b.rotation); // keep text upright-ish
        ctx.fillStyle = "#303145";
        ctx.font = `bold ${Math.max(10, b.radius * 0.28)}px 'Fredoka', sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(b.label, 0, 0);

        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="bubbles-canvas"
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
