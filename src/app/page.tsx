import { BuildGrid } from "@/components/build-grid";
import { NightLabSymbol } from "@/components/night-lab-symbol";
import { NotifyInline } from "@/components/notify-inline";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3.5 w-3.5">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.932 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.47 11.47 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.922.435.375.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3.5 w-3.5">
      <path d="M20.447 20.452H16.89V14.87c0-1.331-.027-3.045-1.857-3.045-1.859 0-2.143 1.45-2.143 2.948v5.68H9.333V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.266 2.37 4.266 5.455zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124M7.119 20.452H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3.5 w-3.5">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.64 7.584H.473l8.6-9.83L0 1.154h7.594l5.243 6.932zM17.61 20.644h2.039L6.486 3.24H4.298z" />
    </svg>
  );
}

function SocialLinks({ mobile = false }: { mobile?: boolean }) {
  const linkClass =
    "inline-flex h-8 w-8 items-center justify-center rounded-full border border-transparent text-[#666666] transition hover:border-[#d4d4d4] hover:text-[#111111]";

  return (
    <div className={mobile ? "flex items-center gap-1" : "hidden items-center gap-1 lg:flex"}>
      <a
        href="https://github.com/hjertefolger"
        target="_blank"
        rel="noreferrer"
        className={linkClass}
        aria-label="GitHub profile"
        title="GitHub"
      >
        <GitHubIcon />
      </a>
      <a
        href="https://x.com/hjertefolger"
        target="_blank"
        rel="noreferrer"
        className={linkClass}
        aria-label="X profile"
        title="X"
      >
        <XIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/tomaskrajcik"
        target="_blank"
        rel="noreferrer"
        className={linkClass}
        aria-label="LinkedIn profile"
        title="LinkedIn"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white px-4 py-4 text-black sm:px-6 sm:py-6 lg:h-screen lg:overflow-hidden lg:px-[25px] lg:py-[24px]">
      <div className="flex min-h-full w-full flex-col gap-8 lg:h-full lg:flex-row lg:gap-6">
        <section className="flex w-full min-w-0 lg:w-[490px] lg:shrink-0">
          <div className="flex w-full min-w-0 flex-col gap-8 lg:w-[430px] lg:justify-between">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center justify-start">
                  <NightLabSymbol />
                </div>
                <div className="flex items-center lg:hidden">
                  <SocialLinks mobile />
                </div>
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

            <div className="hidden flex-col gap-8 lg:flex">
              <div
                className="flex items-center justify-between gap-4 text-[14px] text-[#666666]"
                style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "-0.22px" }}
              >
                <p>©2026 Night Lab / Field work in public</p>
                <div className="flex items-center">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="min-w-0 flex-1 pt-12 lg:overflow-y-auto lg:pt-0 lg:pr-1">
          <div className="space-y-4 pb-6 lg:pb-8">
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

            <div className="border-t border-[#e5e5e5] pt-4 lg:hidden">
              <p
                className="text-[13px] text-[#666666] sm:text-[14px]"
                style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "-0.22px" }}
              >
                ©2026 Night Lab / Field work in public
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
