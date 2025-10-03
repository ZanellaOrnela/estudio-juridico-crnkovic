import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  const routes: Array<{ path: string; priority: number; changefreq: MetadataRoute.Sitemap[number]["changeFrequency"] }>
    = [
      { path: "/", priority: 1.0, changefreq: "weekly" },
      { path: "/gracias", priority: 0.5, changefreq: "yearly" },
    ];

  const now = new Date();

  return routes.map(({ path, priority, changefreq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: changefreq,
    priority,
  }));
}


