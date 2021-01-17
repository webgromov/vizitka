const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const DEST_DIR = path.resolve(__dirname, 'dist/'),
      SRC_DIR = path.resolve(__dirname, 'src/')

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    target: 'node',
    node: {
      __dirname: false,
      __filename: false
    },
    entry: {
        server: path.resolve(SRC_DIR, 'server.js'),
        app: {
          import: path.resolve(SRC_DIR, 'app.js'),
          filename: 'assets/[name].bundle.js'
        }
    },
    output: {
        path: DEST_DIR,
        filename: '[name].bundle.js',
        publicPath: '/',
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
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader"
            ],
          }
        ]
      },
      plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
          patterns: [
            { from: path.resolve(SRC_DIR, 'routes'), to: path.resolve(DEST_DIR, 'routes'), noErrorOnMissing: true},
            { from: path.resolve(SRC_DIR, 'views'), to: path.resolve(DEST_DIR, 'views'), noErrorOnMissing: true},
            { from: path.resolve(SRC_DIR, 'assets'), to: path.resolve(DEST_DIR, 'assets'), noErrorOnMissing: true},
          ],
        }),
        new CssMinimizerPlugin(),
      ]
}