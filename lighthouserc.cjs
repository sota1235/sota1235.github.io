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
        // for @astrojs/partytown
        deprecations: 'off',
      },
    },
  },
}
