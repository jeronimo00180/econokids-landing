import type { MetadataRoute } from "next";

const BASE_URL = "https://www.econokids.fr";
const LAST_CONTENT_UPDATE = new Date("2026-08-18T00:00:00+02:00");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE_URL}/`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/mairies/`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact/`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE_URL}/cgu/`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/confidentialite/`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/mentions-legales/`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "yearly", priority: 0.2 },
  ];
}
