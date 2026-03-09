"use client";

import { Info } from "lucide-react";
import { useState } from "react";
import { BuildMeta } from "@/lib/builds";

export function FieldNotesModal({
  build,
  buttonClassName,
}: {
  build: BuildMeta;
  buttonClassName?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={buttonClassName ?? "flex h-7 w-7 items-center justify-center rounded-full border border-zinc-200 bg-white/96 text-[11px] text-zinc-500 shadow-sm transition hover:border-black hover:text-black"}
        aria-label={`Open field notes for ${build.title}`}
        title="Field Notes"
      >
        <Info size={14} strokeWidth={1.6} />
      </button>

      {open && (
        <div className="absolute right-0 top-9 z-[60] w-[min(360px,calc(100vw-2rem))] rounded-[20px] border border-zinc-200 bg-white/98 p-4 shadow-2xl">
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">Field Notes</div>
              <div className="mt-1.5 text-base font-medium tracking-[-0.04em] text-black">{build.id} — {build.title}</div>
            </div>
            <button onClick={() => setOpen(false)} className="font-mono text-[11px] text-zinc-500 hover:text-black">Close</button>
          </div>

          <div className="space-y-3.5 text-[13px] text-zinc-700">
            <section>
              <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">Why this exists</div>
              <p className="leading-5">{build.fieldNotes.whyThisExists}</p>
            </section>

            {build.fieldNotes.whatChanged?.length ? (
              <section>
                <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">What shifted</div>
                <ul className="space-y-1">
                  {build.fieldNotes.whatChanged.map((item) => (
                    <li key={item}>— {item}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {build.fieldNotes.artDirection ? (
              <section>
                <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">Art direction</div>
                <p className="leading-5">{build.fieldNotes.artDirection}</p>
              </section>
            ) : null}

            {build.fieldNotes.nextMove ? (
              <section>
                <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">Next move</div>
                <p className="leading-5">{build.fieldNotes.nextMove}</p>
              </section>
            ) : null}

            {build.fieldNotes.promotionRead ? (
              <section>
                <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">Promotion read</div>
                <p className="leading-5">{build.fieldNotes.promotionRead}</p>
              </section>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
