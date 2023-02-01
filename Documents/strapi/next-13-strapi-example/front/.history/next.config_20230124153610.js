/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains:['img.yts.mx']
  }
}

module.exports = nextConfig
