import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
// import serve from 'rollup-plugin-serve'
// import replace from '@rollup/plugin-replace'

import pkg from './package.json'

const isDev = !!process.env.ROLLUP_WATCH

const extensions = [
  '.js', '.jsx', '.ts', '.tsx'
]

const commonJsConfig = {
  include: 'node_modules/**',
  namedExports: {
    react: [
      'useLayoutEffect',
      'useState'
    ]
  }
}

const libConfig = {
  input: 'src/index.ts',
  external: ['react'],
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'esm'
    }
  ],
  plugins: [
    commonjs(commonJsConfig),
    peerDepsExternal(),
    resolve({ extensions }),
    babel({
      extensions,
      exclude: 'node_modules/**'
    })
  ]
}

const buildConfig = [libConfig]

export default buildConfig
