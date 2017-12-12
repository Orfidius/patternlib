var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
var react = {
    entry: {
      react: './app/js/imods.react.js'
  },
    output: {
      filename: '.tmp/js/imods.[name].js',
      library: 'app'
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_Modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }] 
    }
    // plugins: [
    //   new HardSourceWebpackPlugin({
    //     // Either an absolute path or relative to output.path.
    //     cacheDirectory: 'node_modules/.cache/hard-source/[confighash]',
    //     // Either an absolute path or relative to output.path. Sets webpack's
    //     // recordsPath if not already set.
    //     recordsPath: 'node_modules/.cache/hard-source/[confighash]/records.json',
    //     // Either a string value or function that returns a string value.
    //     configHash: function(webpackConfig) {
    //       // Build a string value used by HardSource to determine which cache to
    //       // use if [confighash] is in cacheDirectory or if the cache should be
    //       // replaced if [confighash] does not appear in cacheDirectory.
    //       //
    //       // node-object-hash on npm can be used to build this.
    //       return require('node-object-hash')({sort: false}).hash(webpackConfig);
    //     },
    //     // This field determines when to throw away the whole cache if for
    //     // example npm modules were updated.
    //     environmentHash: {
    //       root: process.cwd(),
    //       directories: ['node_modules'],
    //       files: ['package.json'],
    //     },
    //   }),
    // ],

  };



  module.exports.react = react;
