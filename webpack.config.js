let path = require('path');
let ROOT_PATH = path.resolve(__dirname);
let APP_PATH = path.resolve(ROOT_PATH, 'app');
let BUILD_PATH = path.resolve(ROOT_PATH, 'build');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(ROOT_PATH, 'index.html'),
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: {
    main: [
      'webpack/hot/only-dev-server',
      './app/main.js'
    ]
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'sass'],
        include: APP_PATH
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=40000'
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.json', 'jsx']
  },

  devtool: 'eval-source-map',

  devServer: {
    hot: true,
    inline: true,
    port: 4000
  },

  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin()
  ]
};