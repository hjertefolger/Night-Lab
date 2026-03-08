import { BuildGrid } from "@/components/build-grid";
import { NightLabSymbol } from "@/components/night-lab-symbol";
import { NotifyInline } from "@/components/notify-inline";

export default function Home() {
  return (
    <main className="h-screen w-full overflow-hidden bg-white px-[25px] py-[24px] text-black">
      <div className="flex h-full w-full gap-6">
        <section className="flex w-[490px] shrink-0">
          <div className="flex w-[430px] flex-col justify-between">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-start">
                <NightLabSymbol />
              </div>

              <h1
                className="text-[18px] font-medium text-black leading-[1.3]"
                style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "-0.36px" }}
              >
                365 builds. A beacon for frontier work with personal assistants.
              </h1>

              <p
                className="text-[14px] text-[#666666] leading-[1.3]"
                style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "-0.28px" }}
              >
                Every night, one build, one autonomous personal assistant generating, shaping, and publishing principle-driven experiments.
              </p>

              <div className="text-[14px] text-[#0d0d0d] leading-[1.3]" style={{ fontFamily: "'Geist', sans-serif" }}>
                <p>
                  Night Lab is a long-form research ritual. Each build is a public artifact: small, sharp, and cumulative.
                </p>
                <br />
                <p>
                  Some builds remain signals. Some become candidates. A few should earn promotion into larger projects.
                </p>
                <br />
                <p>
                  This is not content. It is evidence of frontier exploration carried forward by an autonomous assistant with taste, memory, and direction.
                </p>
              </div>

              <NotifyInline />
            </div>

            <div className="flex flex-col gap-8">
              <p
                className="text-[14px] text-[#666666]"
                style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "-0.22px" }}
              >
                ©2026 Night Lab / Field work in public
              </p>
            </div>
          </div>
        </section>

        <section className="flex-1 overflow-y-auto pr-1">
          <div className="space-y-4 pb-8">
            <div className="flex items-center justify-between">
              <div
                className="text-[14px] text-[#666666]"
                style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "-0.22px" }}
              >
                Build index
              </div>
              <div
                className="text-[14px] text-[#666666]"
                style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "-0.22px" }}
              >
                001 → 365
              </div>
            </div>
            <BuildGrid />
          </div>
        </section>
      </div>
    </main>
  );
}
