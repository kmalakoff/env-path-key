var path = require('path');
var externals = require('rollup-plugin-node-externals').default;
var resolve = require('@rollup/plugin-node-resolve');
var commonjs = require('@rollup/plugin-commonjs');
var getBabelOutputPlugin = require('@rollup/plugin-babel').getBabelOutputPlugin;

module.exports = {
  input: path.resolve(__dirname, 'node_modules', 'path-key'),
  output: {
    file: 'lib/path-key.js',
    format: 'cjs',
    exports: 'named',
  },
  plugins: [
    externals(),
    resolve.nodeResolve(),
    commonjs(),
    getBabelOutputPlugin({
      presets: [['@babel/preset-env', { modules: 'cjs' }]],
    }),
  ],
};
