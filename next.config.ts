import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns : [
      {
        protocol: 'https',
        // hostname: 'images.pexels.com'     //allow images from a particular source
        hostname: '*'     //allow images from all the sources
      }
    ]
  }
};

export default nextConfig;
