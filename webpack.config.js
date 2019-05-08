const webpack = require('webpack');
const libraryName = 'fab-ui';
const path = require('path');
const isDev = (process.env.NODE_ENV !== 'production');
const entry = [
  './src/index.ts'
];
const plugins = [
  new webpack.NoEmitOnErrorsPlugin(),
];
const rules = [{
  test: /\.ts(x?)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader'
    },
    {
      loader: 'ts-loader'
    }
  ]
}, {
  test: /\.js$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader'
    }
  ]
},
{
  test: /\.(jpe?g|png|gif)$/i,   //to support eg. background-image property
  exclude: /(node_modules)/,
  loader: "file-loader",
  query: {
    name: '[name].[ext]',
    outputPath: 'images/'
    //the images will be emmited to public/assets/images/ folder
    //the images will be put in the DOM <style> tag as eg. background: url(assets/images/image.png);
  }
},
{
  test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,    //to support @font-face rule
  exclude: /(node_modules)/,
  loader: "url-loader",
  query: {
    limit: '10000',
    name: '[name].[ext]',
    outputPath: 'fonts/'
    //the fonts will be emmited to public/assets/fonts/ folder
    //the fonts will be put in the DOM <style> tag as eg. @font-face{ src:url(assets/fonts/font.ttf); }
  }
},
{
  test: /\.css$/,
  loaders: ["style-loader", "css-loader"]
},
{
  test: /\.less$/,
  exclude: /(node_modules)/,
  use: ['css-loader', 'less-loader']
}];

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: entry,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'index.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  mode: isDev ? 'development' : 'production',
  module: {
    rules: rules
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    },
    {
      'react-spring': {
        root: 'ReactString',
        commonjs2: 'react-spring',
        commonjs: 'react-spring',
        amd: 'react-spring'
      }
    },
    {
      'styled-components': {
        amd: 'styled-components',
        commonjs: 'styled-components',
        commonjs2: 'styled-components',
      }
    }
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: plugins,
  watchOptions: {
    poll: true
  }
};
