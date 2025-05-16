/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        // optional: add pathname if needed
      },
      {
        protocol: "https",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/v0/b/projects-2025-71366.firebasestorage.app/o/**",
      },
      {
        protocol: "https",
        hostname: "projects-2025-71366.firebaseapp.com",
      },
    ],
  },
};

export default nextConfig;
