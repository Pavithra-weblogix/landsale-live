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
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.landsales.com.au",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
