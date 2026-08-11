import type { NextConfig } from "next";

/**
 * GitHub Pages deployment configuration.
 *
 * - `output: "export"` produces a fully static site (no Node server needed),
 *   which is required because GitHub Pages only serves static files.
 * - `basePath` / `assetPrefix` are needed because this repo is served at
 *   https://ramirezmorac2.github.io/portfolio (a subpath), not at the domain
 *   root. If you later add a custom domain via a CNAME file, set
 *   NEXT_PUBLIC_BASE_PATH to an empty string (see .github/workflows/deploy.yml)
 *   and these will resolve to "".
 * - `images.unoptimized: true` is required because next/image's optimizer
 *   needs a server; GitHub Pages can't run one.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/portfolio";

const nextConfig: NextConfig = {
  output: "export",
  // Every route is emitted as /route/index.html, which plays nicely with
  // GitHub Pages' static file server (no server-side rewrites available).
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
