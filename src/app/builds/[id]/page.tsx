import { notFound } from "next/navigation";
import { FloatingBuildBar } from "@/components/floating-build-bar";
import { getBuildById } from "@/lib/builds";

export default async function BuildPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const build = getBuildById(id);

  if (!build) notFound();

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-transparent">
      <FloatingBuildBar build={build} />
      <iframe
        title={build.title}
        src={`/builds/${build.id}/app.html`}
        className="h-screen w-screen border-0"
      />
    </main>
  );
}
