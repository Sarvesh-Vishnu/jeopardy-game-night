import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/jeopardy-game-night",
  images: { unoptimized: true },
};

export default nextConfig;
