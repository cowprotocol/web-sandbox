const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const ANALYZE_BUNDLE = process.env.REACT_APP_ANALYZE_BUNDLE

const plugins = []

if (ANALYZE_BUNDLE) {
  plugins.push(new BundleAnalyzerPlugin())
}

module.exports = {
  webpack: {
    plugins
  }
}