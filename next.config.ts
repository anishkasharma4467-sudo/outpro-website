import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.wac.co",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "99designs-blog.imgix.net",
      },
    ],
  },

  // ✅ ADD THIS
  allowedDevOrigins: ["192.168.1.5"],
};

export default nextConfig;