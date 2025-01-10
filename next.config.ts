import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'du9gmflrz1.ufs.sh',
        port: '',
      },
    ],
  },
}

export default nextConfig
