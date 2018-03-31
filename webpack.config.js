const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'client/src');
const DIST_DIR = path.resolve(__dirname, 'client/dist');

module.exports = {
  entry: [
    path.resolve(SRC_DIR, 'index.jsx'),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },

  output: {
    path: DIST_DIR,
    publicPath: '/',
    filename: 'app.js',
  },
};
