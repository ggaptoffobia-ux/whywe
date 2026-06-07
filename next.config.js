const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  pageExtensions: ['jsx', 'js', 'tsx', 'ts'],
}

module.exports = nextConfig
