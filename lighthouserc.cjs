const { readFileSync } = require('node:fs')

const paths = ['/', '/biography', '/blog']

module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      numberOfRuns: 1,
      paths,
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        // TODO
        'bf-cache': 'off',
        'network-dependency-tree-insight': 'off',
        'color-contrast': 'off',
        'image-delivery-insight': 'off',
        'lcp-discovery-insight': 'off',
        // for @astrojs/partytown
        deprecations: 'off',
      },
    },
  },
}
