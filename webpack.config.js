var path = require('path');

const OUT_DIR_ABS = path.resolve('./dist');
const IS_PROD = (process.env.NODE_ENV === 'prod') ? true : false;
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const webpack = require('webpack');

var Package = require('./package.json');
var banner = `wisdompath.lk ${Package.name} - ${Package.version}`;


module.exports = {
  name: 'js-files',
  watch: !IS_PROD,
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: OUT_DIR_ABS,
    filename: './js/[name].bundle.js'
  },
  plugins: [
    new HtmlWebPackPlugin(),
    new webpack.BannerPlugin( banner )
 ]
};