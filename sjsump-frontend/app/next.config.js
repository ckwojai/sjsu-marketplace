const withImages = require('next-images')
// module.exports = withImages()
module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/posts',
          permanent: true,
        },
      ]
    },
  }