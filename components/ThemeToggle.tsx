"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const hasNight = document.documentElement.classList.contains("night");
    setIsDark(hasNight);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("night");
      document.documentElement.classList.remove("day");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.add("day");
      document.documentElement.classList.remove("night");
      localStorage.setItem("darkMode", "false");
    }
  };

  return (
    <label className="switch" style={{ marginLeft: "12px" }}>
      <input
        type="checkbox"
        className="switch__checkbox"
        checked={isDark}
        onChange={toggleTheme}
        aria-label="Toggle dark mode"
      />
      <div className="switch__toggle" />
    </label>
  );
}
