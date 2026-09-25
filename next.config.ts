import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  async redirects() {
    return [
      {
        source: "/smart-systems/portable-appliance-testing-pat",
        destination: "/compliance/portable-appliance-testing-pat",
        permanent: true,
      },
      ...[
        "fire-systems-service-overview",
        "security-systems-service-overview",
        "emergency-systems-service-overview",
        "smart-systems-service-overview",
        "compliance-service-overview",
        "integrated-service-plan-overview",
      ].map((slug) => ({
        source: `/brochures/${slug}.pdf`,
        destination: "/brochures/all-services.pdf",
        permanent: true,
      })),
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
