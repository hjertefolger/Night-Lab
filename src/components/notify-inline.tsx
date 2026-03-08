"use client";

import { Plus } from "lucide-react";
import { useRef } from "react";

function useSpinOnHover() {
  const iconRef = useRef<HTMLSpanElement>(null);
  const animRef = useRef<Animation | null>(null);

  const onMouseEnter = () => {
    if (!iconRef.current) return;
    animRef.current?.cancel();
    animRef.current = iconRef.current.animate(
      [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
      { duration: 800, iterations: Infinity, easing: "linear" },
    );
  };

  const onMouseLeave = () => {
    const anim = animRef.current;
    const el = iconRef.current;
    if (!anim || !el) return;

    const matrix = getComputedStyle(el).transform;
    anim.cancel();

    let angle = 0;
    if (matrix && matrix !== "none") {
      const m = matrix.match(/matrix\(([^)]+)\)/);
      if (m) {
        const [a, b] = m[1].split(",").map(Number);
        angle = Math.atan2(b, a) * (180 / Math.PI);
        if (angle < 0) angle += 360;
      }
    }

    const target = angle < 10 ? 0 : 360;
    const remaining = target - angle;
    const duration = Math.max(200, (remaining / 360) * 800);

    animRef.current = el.animate(
      [
        { transform: `rotate(${angle}deg)` },
        { transform: `rotate(${target}deg)` },
      ],
      { duration, easing: "ease-out", fill: "forwards" },
    );
    animRef.current.onfinish = () => animRef.current?.cancel();
  };

  return { iconRef, onMouseEnter, onMouseLeave };
}

export function NotifyInline() {
  const spin = useSpinOnHover();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center h-10 border-b border-[#cccccc] pb-2 transition-colors duration-300 focus-within:border-[#111111]">
        <input
          type="email"
          placeholder="your@email.com"
          className="w-full bg-transparent text-[14px] text-[#0d0d0d] placeholder:text-[#666666] outline-none"
          style={{ fontFamily: "'Geist', sans-serif" }}
        />
      </div>

      <button
        type="button"
        className="flex items-center gap-1.5 h-10 w-fit px-0 bg-transparent cursor-pointer"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
        onMouseEnter={spin.onMouseEnter}
        onMouseLeave={spin.onMouseLeave}
      >
        <span ref={spin.iconRef} className="inline-flex">
          <Plus size={24} strokeWidth={1.5} className="text-[#111111]" />
        </span>
        <span className="text-[14px] font-medium text-[#111111]">Notify me on new builds</span>
      </button>

      <p
        className="text-[14px] text-[#666666]"
        style={{ fontFamily: "'Geist', sans-serif", letterSpacing: "-0.24px" }}
      >
        No spam, just signal.
      </p>
    </div>
  );
}
