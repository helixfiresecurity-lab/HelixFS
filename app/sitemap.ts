import type { MetadataRoute } from "next";
import { collections } from "./content-pages/content";
import { siteUrl } from "./lib/site-config";
import { serviceGroups } from "./service-groups";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/book-now",
    "/terms",
    "/privacy",
    "/customer-portal",
    "/about",
    "/resources",
    "/our-company",
  ];

  const serviceRoutes = Object.values(serviceGroups).flatMap((group) => [
    group.route,
    ...group.pages.map((page) => `${group.route}/${page.slug}`),
  ]);

  const infoRoutes = Object.values(collections).flatMap((collection) => [
    `/${collection.section}`,
    ...collection.pages.map((page) => `/${collection.section}/${page.slug}`),
  ]);

  const uniquePaths = [...new Set([...staticRoutes, ...serviceRoutes, ...infoRoutes])];

  return uniquePaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
