module.exports = {
  swcMinify: true,
  images: {
    domains: ['i.ytimg.com'],
  },
  async headers() {
    return [
      {
        source: '/api/contact',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
        ],
      },
    ];
  },
};
