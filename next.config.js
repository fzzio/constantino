const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/scss')],
    prependData: `@import "main.scss";`,
  },
}

module.exports = nextConfig
