import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.miguelsecades.com";

  return [
    // ── PÁGINAS PRINCIPALES ──
    {
      url: baseUrl,
      lastModified: new Date("2026-10-02"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/books`,
      lastModified: new Date("2026-09-26"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "yearly",
      priority: 0.7,
    },

    // ── BLOG ──
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-10-02"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/caballeros-templarios-historia-secretos-maldicion`,
      lastModified: new Date("2026-10-02"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/templo-de-salomon-historia-secretos-misterio`,
      lastModified: new Date("2026-09-26"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/como-nacio-el-anillo-de-salomon`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/arca-de-la-alianza-misterio-historia`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/anillo-de-salomon-historia-poderes-leyenda`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "yearly",
      priority: 0.8,
    },

    // ── PRENSA ──
    {
      url: `${baseUrl}/press`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // ── PÁGINAS LEGALES ──
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
