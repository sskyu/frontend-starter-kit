import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: '@@/src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../../dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '~': path.resolve(__dirname, '../../src'),
      '@@': path.resolve(__dirname, '../../'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      automaticNameDelimiter: '/'
    }
  }
} as webpack.Configuration;
