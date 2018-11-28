const path = require('path')
const WebpackNodeExternals = require('webpack-node-externals')
module.exports = {
  target: 'node',
  mode: 'development',
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
  },
  externals: [WebpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_module/,
        options: {
            presets: ["@babel/preset-react", [
                "@babel/preset-env", {
                  targets: {
                    browsers: ['last 2 versions']
                  }
                }
              ]],
              plugins: [
                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                ["@babel/plugin-proposal-class-properties", { "loose": true }]
              ]
        }
      }
    ]
  }
}