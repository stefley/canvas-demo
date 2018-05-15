process.env.NODE_ENV = 'development';

import webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import baseConfig, { indexEntry } from './webpack.base';

const config: webpack.Configuration = {
  mode: 'development',
  devtool: 'inline-source-map',
  optimization: {
    splitChunks: false,
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              hmr: true,
              sourceMap: true,
            },
          },
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              minimize: false,
              importLoaders: 2,
              modules: true,
              sourceMap: true,
              namedExport: true,
              camelCase: true,
              banner: '//This file is automatically generated by typings-for-css-modules.\n// Please do not change this file!',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      chunks: [indexEntry],
      title: 'canvas demo',
    }),
  ],
};

export default merge(baseConfig, config);
