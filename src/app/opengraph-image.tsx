import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

/**
 * Default Open Graph / Twitter card image for the whole site. Generated at
 * build time (via `next/og`'s ImageResponse, powered by Satori) so it works
 * with `output: "export"` — no server runtime needed, the PNG is emitted
 * as a static file alongside the rest of the export.
 *
 * Route segments that don't define their own `opengraph-image`/metadata
 * images (about, contact, projects listing, home) fall back to this one.
 */
export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// Required for `output: "export"` — this route has no dynamic params, so it
// can (and must) be fully generated at build time.
export const dynamic = "force-static";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #020617 0%, #1e1b4b 55%, #1e1b4b 100%)",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Decorative color spots, echoing the site's animated background */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "-100px",
            width: "420px",
            height: "420px",
            borderRadius: "999px",
            background: "#6366f1",
            opacity: 0.35,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-140px",
            right: "-80px",
            width: "460px",
            height: "460px",
            borderRadius: "999px",
            background: "#a855f7",
            opacity: 0.3,
            display: "flex",
          }}
        />

        <p
          style={{
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#a5b4fc",
            margin: "0 0 20px 0",
          }}
        >
          {siteConfig.role}
        </p>
        <h1
          style={{
            fontSize: 96,
            fontWeight: 700,
            color: "#ffffff",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          {siteConfig.name}
        </h1>
        <p
          style={{
            fontSize: 32,
            color: "#cbd5e1",
            marginTop: 32,
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          {siteConfig.shortBio}
        </p>
      </div>
    ),
    size,
  );
}
