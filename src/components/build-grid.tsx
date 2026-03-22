import Link from "next/link";
import { getAllBuildSlots } from "@/lib/builds";

const statusClass: Record<string, string> = {
  live: "border-[#cccccc] bg-white text-[#111111] hover:border-[#111111]",
  iterated: "border-[#cccccc] bg-white text-[#111111] hover:border-[#111111]",
  candidate: "border-[#cccccc] bg-white text-[#111111] hover:border-[#111111]",
  future: "border-[#e5e5e5] bg-white text-[#c4c4c4] cursor-default",
};

const latestClass = "border-[#111111] bg-[#111111] text-white hover:bg-white hover:text-[#111111]";

function OpenAIIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
    </svg>
  );
}

function ClaudeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z" />
    </svg>
  );
}

function ProviderIcon({ number, isLatest }: { number: number; isLatest: boolean }) {
  const isOpenAI = number <= 14;
  const Icon = isOpenAI ? OpenAIIcon : ClaudeIcon;
  return (
    <Icon
      className={`absolute bottom-1 right-1 w-[10px] h-[10px] ${
        isLatest ? "opacity-40" : "opacity-20"
      }`}
    />
  );
}

export function BuildGrid() {
  const slots = getAllBuildSlots();

  return (
    <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 sm:gap-3 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8">
      {slots.map((slot) => {
        const appearance = slot.latest ? latestClass : statusClass[slot.status];
        const cls = `relative flex aspect-square items-center justify-center border text-[13px] transition ${appearance}`;
        const style = { fontFamily: "'JetBrains Mono', monospace" };
        const icon = slot.live ? <ProviderIcon number={slot.number} isLatest={slot.latest} /> : null;
        if (!slot.live) {
          return (
            <div key={slot.id} className={cls} style={style} title={slot.title}>
              {slot.id}
            </div>
          );
        }
        return (
          <Link key={slot.id} href={`/builds/${slot.id}`} className={cls} style={style} title={slot.title}>
            {slot.id}
            {icon}
          </Link>
        );
      })}
    </div>
  );
}
