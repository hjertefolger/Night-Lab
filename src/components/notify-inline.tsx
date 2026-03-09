"use client";

import { Check, Plus } from "lucide-react";
import { useRef, useState } from "react";

type NotifyState = "idle" | "subscribing" | "subscribed";

export function NotifyInline() {
  const iconRef = useRef<HTMLSpanElement>(null);
  const animRef = useRef<Animation | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [state, setState] = useState<NotifyState>("idle");

  const disabled = state !== "idle";

  const startSpin = () => {
    if (!iconRef.current) return;
    animRef.current?.cancel();
    animRef.current = iconRef.current.animate(
      [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
      { duration: 800, iterations: Infinity, easing: "linear" },
    );
  };

  const stopSpin = () => {
    animRef.current?.cancel();
    animRef.current = null;
  };

  const handleMouseEnter = () => {
    if (state === "idle") startSpin();
  };

  const handleMouseLeave = () => {
    if (state === "idle") stopSpin();
  };

  const handleSubscribe = async () => {
    if (disabled) return;
    if (!inputRef.current?.reportValidity()) return;

    setState("subscribing");
    startSpin();

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
      stopSpin();
      setState("idle");
      return;
    }

    stopSpin();
    setState("subscribed");
  };

  const label =
    state === "subscribing"
      ? "Subscribing"
      : state === "subscribed"
        ? "Subscribed"
        : "Ask the assistant to notify me";

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
        <span ref={iconRef} className="inline-flex">
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
        No spam. Just new builds. Pure signal.
      </p>
    </div>
  );
}
