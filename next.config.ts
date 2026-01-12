import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler:
    process.env.NODE_ENV === "production"
      ? {
          removeConsole: {
            exclude: ["error", "warn"],
          },
        }
      : {},
};

export default nextConfig;
