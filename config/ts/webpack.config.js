const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const entry = (file) => path.resolve(__dirname, `../../src/ts/${file}`);
const output = (folder) => path.resolve(__dirname, `../../${folder}`);

const cleanOptions = { allowExternal: true }

module.exports = {
  entry: entry('index.ts'),
  output: {
    filename: 'index.js',
    path: output('lib/ts'),
    library: 'functional-lib',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.ts|\.tsx)$/,
        exclude: /(node_modules|bower_modules)/,
        loader: 'babel-loader?presets[]=env!ts-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx']
  },
  plugins: [
    new CleanWebpackPlugin([output('lib/ts')], cleanOptions)
  ]
}