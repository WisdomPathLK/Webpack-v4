var path = require('path');

const OUT_DIR_ABS = path.resolve('./dist');
const IS_PROD = (process.env.NODE_ENV === 'prod') ? true : false;

module.exports = {
  name: 'js-files',
  watch: !IS_PROD,
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: OUT_DIR_ABS,
    filename: './js/[name].bundle.js'
  }
};