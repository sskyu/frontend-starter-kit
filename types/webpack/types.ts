import webpack from "webpack";
import webpackDevServer from 'webpack-dev-server';

export interface WebpackDevConfig extends webpack.Configuration {
  devServer: webpackDevServer.Configuration;
}
