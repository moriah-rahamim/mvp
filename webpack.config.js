const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'client/src');
const DIST_DIR = path.resolve(__dirname, 'client/dist');

module.exports = {
  entry: [
    path.resolve(SRC_DIR, 'index.js'),
  ],
  output: {
    path: DIST_DIR,
    publicPath: '/',
    filename: 'app.js',
  },
};
