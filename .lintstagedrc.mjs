export default {
  '*.{md,json,yml,astro,ts,js,cjs,mjs}': ['pnpm run format'],
  'aqua.yml': ['aqua update-checksum'],
}
