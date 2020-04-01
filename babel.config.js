const babelConfig = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
          chrome: '60',
          firefox: '60',
          safari: '11.1',
          edge: '17',
          ie: '11',
        },
      },
    ],
  ],
};

module.exports = babelConfig;
