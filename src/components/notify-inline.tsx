"use client";

import { Check, Plus } from "lucide-react";
import { useRef, useState } from "react";

type NotifyState = "idle" | "subscribing" | "subscribed";

function useSpinControl() {
  const iconRef = useRef<HTMLSpanElement>(null);
  const animRef = useRef<Animation | null>(null);

  const startSpin = () => {
    if (!iconRef.current) return;
    animRef.current?.cancel();
    animRef.current = iconRef.current.animate(
      [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
      { duration: 800, iterations: Infinity, easing: "linear" },
    );
  };

  const stopSpin = () => {
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

  return { iconRef, startSpin, stopSpin };
}

export function NotifyInline() {
  const spin = useSpinControl();
  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [state, setState] = useState<NotifyState>("idle");

  const disabled = state !== "idle";

  const handleMouseEnter = () => {
    if (state === "idle") spin.startSpin();
  };

  const handleMouseLeave = () => {
    if (state === "idle") spin.stopSpin();
  };

  const handleSubscribe = async () => {
    if (disabled) return;
    if (!inputRef.current?.reportValidity()) return;

    setState("subscribing");
    spin.startSpin();

    await new Promise((resolve) => setTimeout(resolve, 1200));

    spin.stopSpin();
    setState("subscribed");
  };

  const label =
    state === "subscribing"
      ? "Subscribing"
      : state === "subscribed"
        ? "Subscribed"
        : "Notify me on new builds";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center h-10 border-b border-[#cccccc] pb-2 transition-colors duration-300 focus-within:border-[#111111]">
        <input
          ref={inputRef}
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={disabled}
          required
          className="w-full bg-transparent text-[14px] text-[#0d0d0d] placeholder:text-[#666666] outline-none disabled:cursor-not-allowed disabled:text-[#666666]"
          style={{ fontFamily: "'Geist', sans-serif" }}
        />
      </div>

      <button
        type="button"
        disabled={disabled}
        className="flex items-center gap-1.5 h-10 w-fit px-0 bg-transparent cursor-pointer disabled:cursor-default"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleSubscribe}
      >
        <span ref={spin.iconRef} className="inline-flex">
          {state === "subscribed" ? (
            <Check size={24} strokeWidth={1.5} className="text-[#111111]" />
          ) : (
            <Plus size={24} strokeWidth={1.5} className="text-[#111111]" />
          )}
        </span>
        <span className="text-[14px] font-medium text-[#111111]">{label}</span>
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
