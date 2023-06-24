/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "links.papareact.com",

      }, 
      {
        protocol: "https",
        hostname: "scontent.fdiy1-1.fna.fbcdn.net"
      }
    ]
  }
}

module.exports = nextConfig
