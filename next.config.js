/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "encrypted-tbn0.gstatic.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
