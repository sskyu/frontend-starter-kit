import path from 'path';
import merge from 'webpack-merge';
import sharedConfig from './shared';
import { WebpackDevConfig } from '@@/types/webpack/types';

export default merge(sharedConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist')
  }
} as WebpackDevConfig);
