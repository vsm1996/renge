import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  transpilePackages: ["@renge/tokens", "@renge/react"],
};

export default nextConfig;
