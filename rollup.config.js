import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
    name: 'MyPackage',
    exports: 'default',
    sourcemap: true
  },
  plugins: [
    resolve({
      preferBuiltins: true
    }),
    commonjs()
  ]
};
