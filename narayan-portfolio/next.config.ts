import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // You could also use:
    // domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;