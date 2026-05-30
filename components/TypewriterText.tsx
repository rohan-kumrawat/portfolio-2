"use client";

import { useEffect, useRef, useState } from "react";

const FULL_TEXT = "Build fast. Think deep. Ship fearlessly.";

export default function TypewriterText() {
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0);
  const forwardRef = useRef(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwardRef.current) {
        if (indexRef.current < FULL_TEXT.length) {
          setDisplayed(FULL_TEXT.slice(0, ++indexRef.current));
        } else {
          // Pause then erase
          setTimeout(() => {
            forwardRef.current = false;
          }, 2500);
        }
      } else {
        if (indexRef.current > 0) {
          setDisplayed(FULL_TEXT.slice(0, --indexRef.current));
        } else {
          forwardRef.current = true;
        }
      }
    }, 55);

    return () => clearInterval(interval);
  }, []);

  return (
    <span style={{ fontFamily: "'Oxanium', sans-serif" }}>
      {displayed}
      <span className="typewriter-cursor" />
    </span>
  );
}
