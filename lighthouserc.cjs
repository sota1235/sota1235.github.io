const { readFileSync } = require('node:fs')

const pa11y = JSON.parse(readFileSync('./.pa11yci').toString())

const paths = pa11y.urls.map((path) =>
  path.replace('http://localhost:4321', '')
)

module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      numberOfRuns: 1,
      paths,
    },
    assert: {
      preset: 'lighthouse:no-pwa',
    },
  },
}
