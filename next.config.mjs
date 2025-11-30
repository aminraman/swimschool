/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images:{
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        port: "",
        pathname: "/512/**",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
