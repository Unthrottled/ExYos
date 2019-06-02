const path = require('path');
const slsw = require('serverless-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const outputDirectory = path.join(__dirname, '.webpack');

module.exports = {
  entry: slsw.lib.entries,
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.ts',
      '.tsx'
    ]
  },
  output: {
    libraryTarget: 'commonjs2',
    path: outputDirectory,
    filename: '[name].js'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ],
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'node_modules/figlet/fonts', to: 'fonts/' },
      { from: 'node_modules/figlet/importable-fonts', to: 'importable-fonts/' },
    ]),
  ],
  node: {
    __dirname: false,
  }
};
