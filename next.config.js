module.exports = {
  reactStrictMode: true,
  experimental: { css: true },
  images: {
    domains: ['api.sofimaroc.ma'],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.node = {
      fs: 'empty', // This is required
    }
    return config
  }
}

