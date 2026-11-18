import type { NextConfig } from "next";

const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "/KinshimaWeb" : "");

const nextConfig: NextConfig = {
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  trailingSlash: true,
  basePath: basePath === "" ? undefined : basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
