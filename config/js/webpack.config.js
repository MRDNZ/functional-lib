const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const entry = (file) => path.resolve(__dirname, `../../src/js/${file}`);
const output = (folder) => path.resolve(__dirname, `../../${folder}`);

const cleanOptions = { allowExternal: true }

module.exports = {
  entry: entry('index.js'),
  output: {
    filename: 'index.js',
    path: output('lib/js'),
    library: 'functional-lib',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /(node_modules|bower_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        },
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin([output('lib/js')], cleanOptions)
  ]
}