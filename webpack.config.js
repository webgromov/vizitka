const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const DEST_DIR = path.resolve(__dirname, 'dist/'),
      SRC_DIR = path.resolve(__dirname, 'src/')

module.exports = {
    mode: 'development',
    target: 'node',
    entry: {
        server: path.resolve(SRC_DIR, 'server.js')
    },
    output: {
        path: DEST_DIR,
        filename: '[name].bundle.js'
    },
    externals: [nodeExternals()],
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      },
      plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
          patterns: [
            { from: path.resolve(SRC_DIR, 'routes'), to: path.resolve(DEST_DIR, 'routes')},
            { from: path.resolve(SRC_DIR, 'views'), to: path.resolve(DEST_DIR, 'views')},
          ],
        }),
      ],
}