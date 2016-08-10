const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.ts',
  output: {
    filename: './lib/index.js'
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
    }],
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
  ],
};
