import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postCss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';
import { getFiles } from './scripts/buildUtils';

const extensions = ['.js', '.ts', '.jsx', '.tsx'];

export default {
  input: [
    ...getFiles('./src/common', extensions),
    ...getFiles('./src/components', extensions),
    ...getFiles('./src/hooks', extensions),
    ...getFiles('./src/utils', extensions),
  ],
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.build.json',
      declaration: true,
      declarationDir: 'dist',
    }),
    postCss(),
    terser(),
    visualizer(),
  ],
  external: ['react', 'react-dom'],
};