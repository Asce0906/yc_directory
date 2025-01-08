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
  },
  experimental: {
    ppr: 'incremental'
  },

  // Indicators
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: 'bottom-right'
  }
};

export default nextConfig;
