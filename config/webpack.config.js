const { entry, workSpace } = require('./config');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const cleanOptions = { allowExternal: true };

module.exports = {
  entry: entry('index.ts'),
  output: {
    filename: 'index.js',
    path: workSpace('lib'),
    library: 'functional-lib',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.ts|\.tsx)$/,
        exclude: [
          workSpace('node_modules'),
          workSpace('bower_modules')
        ],
        loader: 'ts-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx']
  },
  plugins: [
    new CleanWebpackPlugin([workSpace('**/tempCodeRunnerFile.*')], cleanOptions),
    new CleanWebpackPlugin([workSpace('lib')], cleanOptions)
  ]
}
