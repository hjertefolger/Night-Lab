import type { MetadataRoute } from "next";
import { liveBuilds } from "@/lib/builds";

export default function sitemap(): MetadataRoute.Sitemap {
  const buildUrls = liveBuilds.map((build) => ({
    url: `https://nightlab.a2n.run/b/${build.id}`,
    lastModified: new Date(build.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://nightlab.a2n.run",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...buildUrls,
  ];
}
