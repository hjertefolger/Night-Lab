import Link from "next/link";
import { BuildMeta } from "@/lib/builds";
import { FieldNotesModal } from "@/components/field-notes-modal";

const controlButtonClass =
  "flex h-7 w-7 items-center justify-center rounded-full border border-transparent bg-transparent text-[11px] text-zinc-500 transition hover:border-zinc-200 hover:bg-zinc-50 hover:text-black";

export function FloatingBuildBar({ build }: { build: BuildMeta }) {
  return (
    <div className="fixed right-3 top-3 z-40 flex items-center gap-0.5 rounded-full border border-zinc-200 bg-white/92 p-1 shadow-md backdrop-blur sm:right-4 sm:top-4">
      <Link
        href="/"
        className={controlButtonClass}
        aria-label={`Back from ${build.title}`}
        title="Back"
      >
        ←
      </Link>

      <FieldNotesModal build={build} buttonClassName={controlButtonClass} />

      <a
        href={`/builds/${build.id}.zip`}
        download
        className={controlButtonClass}
        aria-label={`Download ${build.title}`}
        title="Download build"
      >
        ↓
      </a>
    </div>
  );
}
