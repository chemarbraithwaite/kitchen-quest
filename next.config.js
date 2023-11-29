/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "edamam-product-images.s3.amazonaws.com",
        pathname: "/web-img/**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.edamam.com",
        pathname: "/food-img/**",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
