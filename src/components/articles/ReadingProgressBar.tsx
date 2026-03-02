"use client";

import { useEffect, useState } from "react";

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      setProgress(Math.min(100, (scrollTop / docHeight) * 100));
    }

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      className="fixed left-0 right-0 z-[200] h-[3px] pointer-events-none"
      style={{
        top: "var(--desktop-nav-height, 88px)",
        background: "rgba(0,0,0,0.15)",
      }}
    >
      <div
        className="h-full transition-[width] duration-75 ease-out"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #c8a84b 0%, #e0c068 100%)",
          boxShadow: "0 0 8px rgba(200,168,75,0.6)",
        }}
      />
    </div>
  );
}
