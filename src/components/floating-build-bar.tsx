import Link from "next/link";
import { BuildMeta } from "@/lib/builds";
import { FieldNotesModal } from "@/components/field-notes-modal";

export function FloatingBuildBar({ build }: { build: BuildMeta }) {
  return (
    <div className="fixed left-3 top-3 z-40 flex items-center gap-1 rounded-full border border-zinc-200 bg-white/92 p-1 shadow-md backdrop-blur">
      <Link
        href="/"
        className="flex h-7 w-7 items-center justify-center rounded-full text-[11px] text-zinc-500 transition hover:bg-zinc-50 hover:text-black"
        aria-label={`Back from ${build.title}`}
        title="Back"
      >
        ←
      </Link>

      <FieldNotesModal build={build} />

      <a
        href={`/builds/${build.id}.zip`}
        download
        className="flex h-7 w-7 items-center justify-center rounded-full text-[11px] text-zinc-500 transition hover:bg-zinc-50 hover:text-black"
        aria-label={`Download ${build.title}`}
        title="Download build"
      >
        ↓
      </a>
    </div>
  );
}
