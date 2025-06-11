import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.alias["@" as string] = path.resolve(__dirname);
    return config;
  },
};

export default nextConfig;
