import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// Required for static export (`output: "export"`) since this route
// generates a file at build time rather than on each request.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
}
