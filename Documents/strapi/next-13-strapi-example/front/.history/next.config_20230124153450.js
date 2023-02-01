/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains:['yts.mx/']
  }
}

module.exports = nextConfig
