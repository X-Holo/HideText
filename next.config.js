/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BUILD_TIME: new Date().toLocaleString(),
  },
  async headers() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'c',
          },
        ],
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
    ]
  },
}
