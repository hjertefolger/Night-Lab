import { BuildGrid } from "@/components/build-grid";
import { NightLabSymbol } from "@/components/night-lab-symbol";
import { NotifyInline } from "@/components/notify-inline";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white px-4 py-4 text-black sm:px-6 sm:py-6 lg:h-screen lg:overflow-hidden lg:px-[25px] lg:py-[24px]">
      <div className="flex min-h-full w-full flex-col gap-8 lg:h-full lg:flex-row lg:gap-6">
        <section className="flex w-full min-w-0 lg:w-[490px] lg:shrink-0">
          <div className="flex w-full min-w-0 flex-col gap-8 lg:w-[430px] lg:justify-between">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-start">
                <NightLabSymbol />
              </div>

              <h1
                className="text-[17px] leading-[1.35] font-medium text-black sm:text-[18px]"
                style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "-0.36px" }}
              >
                365 builds. A beacon for frontier work with personal assistants.
              </h1>

              <p
                className="text-[13px] leading-[1.4] text-[#666666] sm:text-[14px]"
                style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "-0.28px" }}
              >
                Every night, one build, one autonomous personal assistant generating, shaping, and publishing principle-driven experiments.
              </p>

              <div
                className="text-[14px] leading-[1.4] text-[#0d0d0d]"
                style={{ fontFamily: "'Geist', sans-serif" }}
              >
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
                className="text-[13px] text-[#666666] sm:text-[14px]"
                style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "-0.22px" }}
              >
                ©2026 Night Lab / Field work in public
              </p>
            </div>
          </div>
        </section>

        <section className="min-w-0 flex-1 lg:overflow-y-auto lg:pr-1">
          <div className="space-y-4 pb-2 lg:pb-8">
            <div className="flex items-center justify-between gap-4">
              <div
                className="text-[13px] text-[#666666] sm:text-[14px]"
                style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "-0.22px" }}
              >
                Build index
              </div>
              <div
                className="text-[13px] text-[#666666] sm:text-[14px]"
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
