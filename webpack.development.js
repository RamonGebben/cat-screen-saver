var path = require('path');
var ROOT_PATH = path.resolve(__dirname);


module.exports = {
  entry: [
    'webpack/hot/dev-server',
    path.resolve(ROOT_PATH, 'app/main')
  ],

  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  }
};
