import Link from "next/link";
import { getAllBuildSlots } from "@/lib/builds";

const statusClass: Record<string, string> = {
  live: "border-[#cccccc] bg-white text-[#111111] hover:border-[#111111]",
  iterated: "border-[#cccccc] bg-white text-[#111111] hover:border-[#111111]",
  candidate: "border-[#111111] bg-white text-[#111111] hover:bg-[#111111] hover:text-white",
  future: "border-[#e5e5e5] bg-white text-[#c4c4c4] cursor-default",
};

const latestClass = "border-[#111111] bg-[#111111] text-white hover:bg-white hover:text-[#111111]";

export function BuildGrid() {
  const slots = getAllBuildSlots();

  return (
    <div className="grid grid-cols-5 gap-3 sm:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
      {slots.map((slot) => {
        const appearance = slot.latest ? latestClass : statusClass[slot.status];
        const cls = `flex aspect-square items-center justify-center border text-[13px] transition ${appearance}`;
        const style = { fontFamily: "'JetBrains Mono', monospace" };
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
          </Link>
        );
      })}
    </div>
  );
}
