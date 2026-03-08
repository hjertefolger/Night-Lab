"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { NightLabSymbol } from "@/components/night-lab-symbol";

type State = "idle" | "processing" | "done" | "error";

function UnsubscribeForm() {
  const params = useSearchParams();
  const email = params.get("email") ?? "";
  const [state, setState] = useState<State>("idle");

  const handleUnsubscribe = async () => {
    setState("processing");
    const res = await fetch("/api/unsubscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setState(res.ok ? "done" : "error");
  };

  if (!email) {
    return (
      <main className="flex h-screen items-center justify-center bg-white px-6">
        <p className="text-[14px] text-[#666666]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          No email provided.
        </p>
      </main>
    );
  }

  return (
    <main className="flex h-screen items-center justify-center bg-white px-6">
      <div className="flex flex-col items-center gap-6 max-w-[400px] text-center">
        <NightLabSymbol />

        {state === "done" ? (
          <>
            <p
              className="text-[18px] font-medium text-black leading-[1.3]"
              style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "-0.36px" }}
            >
              You've been unsubscribed.
            </p>
            <p className="text-[14px] text-[#666666]" style={{ fontFamily: "'Geist', sans-serif" }}>
              No more builds. Thanks for watching.
            </p>
          </>
        ) : state === "error" ? (
          <>
            <p
              className="text-[18px] font-medium text-black leading-[1.3]"
              style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "-0.36px" }}
            >
              Something went wrong.
            </p>
            <p className="text-[14px] text-[#666666]" style={{ fontFamily: "'Geist', sans-serif" }}>
              Try again or contact us.
            </p>
          </>
        ) : (
          <>
            <p
              className="text-[18px] font-medium text-black leading-[1.3]"
              style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "-0.36px" }}
            >
              Unsubscribe
            </p>
            <p className="text-[14px] text-[#666666]" style={{ fontFamily: "'Geist', sans-serif" }}>
              {email}
            </p>
            <button
              onClick={handleUnsubscribe}
              disabled={state === "processing"}
              className="text-[14px] font-medium text-black underline underline-offset-4 disabled:text-[#666666] disabled:no-underline"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {state === "processing" ? "Processing..." : "Confirm unsubscribe"}
            </button>
          </>
        )}

        <p
          className="text-[14px] text-[#666666]"
          style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "-0.22px" }}
        >
          &copy;2026 Night Lab / Field work in public
        </p>
      </div>
    </main>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense>
      <UnsubscribeForm />
    </Suspense>
  );
}
