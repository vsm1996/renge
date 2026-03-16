import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  transpilePackages: ["@renge-ui/tokens", "@renge-ui/react"],
};

export default nextConfig;
