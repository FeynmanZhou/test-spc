/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['hitalkerbucket.oss-cn-beijing.aliyuncs.com'],
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'md', 'ts', 'tsx'],
}

module.exports = nextConfig
