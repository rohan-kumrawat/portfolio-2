"use client";

export default function DeskIllustration() {
  return (
    <svg
      viewBox="0 0 600 600"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style={{ display: "block", flex: 1 }}
    >
      <defs>
        <linearGradient id="lamp-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff5a9" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#fff5a9" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#fff5a9" stopOpacity="0.0" />
        </linearGradient>
      </defs>

      {/* ─── Light Beam (Visible in Night Mode) ─── */}
      <polygon
        className="lamp-beam"
        points="200,195 20,600 500,600"
        fill="url(#lamp-gradient)"
        style={{ mixBlendMode: "screen" }}
      />

      {/* ─── Hanging Lamp ─── */}
      {/* Cord */}
      <line
        x1="200"
        y1="0"
        x2="200"
        y2="140"
        stroke="var(--border-color)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Shade */}
      <path
        d="M150,180 L250,180 C256,180 256,170 242,140 L158,140 C144,170 144,180 150,180 Z"
        fill="var(--color-lilac)"
        stroke="var(--border-color)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Bulb */}
      <circle
        cx="200"
        cy="188"
        r="14"
        fill="#fff5a9"
        stroke="var(--border-color)"
        strokeWidth="3"
      />

      {/* ─── Shelf (Left) ─── */}
      <line
        x1="20"
        y1="280"
        x2="220"
        y2="280"
        stroke="var(--border-color)"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Shelf Plant */}
      {/* Leaves */}
      <path
        d="M50,280 C36,230 60,190 70,195 C80,190 104,230 90,280 Z"
        fill="var(--color-mint)"
        stroke="var(--border-color)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M70,280 C58,220 74,180 80,185 C86,180 102,220 90,280 Z"
        fill="var(--color-mint)"
        stroke="var(--border-color)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M38,280 C26,240 50,220 58,225 Z"
        fill="var(--color-mint)"
        stroke="var(--border-color)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M102,280 C114,240 90,220 82,225 Z"
        fill="var(--color-mint)"
        stroke="var(--border-color)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Pot */}
      <polygon
        points="52,280 88,280 82,230 58,230"
        fill="var(--color-peach)"
        stroke="var(--border-color)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Shelf Books */}
      <rect
        x="130"
        y="190"
        width="16"
        height="90"
        fill="var(--color-rose)"
        stroke="var(--border-color)"
        strokeWidth="3"
        rx="2"
      />
      <rect
        x="150"
        y="205"
        width="18"
        height="75"
        fill="var(--color-sea)"
        stroke="var(--border-color)"
        strokeWidth="3"
        rx="2"
      />
      <rect
        x="172"
        y="180"
        width="15"
        height="100"
        fill="var(--color-lilac)"
        stroke="var(--border-color)"
        strokeWidth="3"
        rx="2"
      />

      {/* ─── Main Desk Table ─── */}
      <line
        x1="40"
        y1="490"
        x2="560"
        y2="490"
        stroke="var(--border-color)"
        strokeWidth="12"
        strokeLinecap="round"
      />

      {/* Coffee Cup */}
      <path
        d="M110,445 L135,445 C140,445 142,450 142,455 L140,482 C140,487 135,490 130,490 L115,490 C110,490 105,487 105,482 L103,455 C103,450 105,445 110,445 Z"
        fill="var(--color-rose)"
        stroke="var(--border-color)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M105,453 C95,453 95,477 105,477"
        fill="none"
        stroke="var(--border-color)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Computer Monitor */}
      {/* Base / Stand */}
      <path
        d="M320,490 L380,490 C380,490 375,475 365,450 L335,450 C325,475 320,490 320,490 Z"
        fill="var(--color-light)"
        stroke="var(--border-color)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect
        x="340"
        y="435"
        width="20"
        height="20"
        fill="var(--color-light)"
        stroke="var(--border-color)"
        strokeWidth="3"
      />
      {/* Outer Monitor Frame */}
      <rect
        x="230"
        y="270"
        width="240"
        height="170"
        fill="var(--color-light)"
        stroke="var(--border-color)"
        strokeWidth="4.5"
        rx="14"
      />
      {/* Inner Screen */}
      <rect
        x="242"
        y="282"
        width="216"
        height="130"
        fill="#303145"
        stroke="var(--border-color)"
        strokeWidth="3"
        rx="6"
      />
      {/* Screen Camera */}
      <circle cx="350" cy="276" r="3" fill="var(--border-color)" />

      {/* Code Editor Windows Content */}
      {/* Sidebar */}
      <rect x="247" y="287" width="45" height="120" fill="#242235" rx="3" />
      {/* Mini dots */}
      <circle cx="254" cy="294" r="2.5" fill="#ef4444" />
      <circle cx="261" cy="294" r="2.5" fill="#eab308" />
      <circle cx="268" cy="294" r="2.5" fill="#22c55e" />
      
      {/* Code Editor lines */}
      <rect x="300" y="300" width="80" height="6" rx="2" fill="var(--color-mint)" />
      <rect x="300" y="312" width="110" height="6" rx="2" fill="var(--color-lilac)" />
      <rect x="312" y="324" width="70" height="6" rx="2" fill="var(--color-rose)" />
      <rect x="312" y="336" width="95" height="6" rx="2" fill="var(--color-sherbet)" />
      <rect x="300" y="348" width="65" height="6" rx="2" fill="var(--color-sea)" />
      <rect x="300" y="360" width="120" height="6" rx="2" fill="var(--color-mint)" />
      <rect x="312" y="372" width="50" height="6" rx="2" fill="var(--color-peach)" />

      {/* Screen bottom bar logo dot */}
      <circle cx="350" cy="426" r="4.5" fill="var(--border-color)" />
    </svg>
  );
}
