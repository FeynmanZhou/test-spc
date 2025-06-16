/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['hitalkerbucket.oss-cn-beijing.aliyuncs.com', 'images.unsplash.com', 'randomuser.me'],
  },
}

module.exports = nextConfig
