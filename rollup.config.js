import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'index.js',
  plugins: [
    nodeResolve({ jsnext: true, main: true }),
    commonjs()
  ],
  dest: 'lolexing.js',
  moduleName: 'LOLEXING',
  format: 'iife'
}