/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains:['img.yts.mx','cnbl-cdn.bamgrid.com']
  }
}

module.exports = nextConfig
