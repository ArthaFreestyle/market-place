/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aawzdzczalzqofdegbqt.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/belanja/**",
      },
      {
        protocol:'https',
        hostname:'www.w3.org'
      }
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
