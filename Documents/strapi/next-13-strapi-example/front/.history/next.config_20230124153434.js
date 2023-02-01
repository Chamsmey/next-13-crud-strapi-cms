/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains:['https://yts.mx/']
  }
}

module.exports = nextConfig
