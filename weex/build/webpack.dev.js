const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var configs = require('./webpack.common.js')

var webConfig = configs[0]

module.exports = merge(webConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        removeAttributeQuotes: false,
      },
      hash: true,
      template: './index.html',
    }),
  ],
  devServer: {
    //设置基本目录结构
    contentBase: [path.resolve(__dirname, '../')],
    //服务器的IP地址，可以使用IP也可以使用localhost
    host: '0.0.0.0',
    useLocalIp: true,
    //服务端压缩是否开启
    compress: true,
    //配置服务端口号
    port: '2000',
    // proxy: {
    //   '/refacmob': {
    //     target: 'https://api.myjson.com/bins',
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/refacmob': '', //代理的路径
    //     },
    //   },
    // },
    proxy: {
      '/process': {
        target: "http://30.114.90.53:8089", //发财
        // target: "http://30.114.89.117:8089", //玉哲
        changeOrigin: true,
      }
    },
  },
})