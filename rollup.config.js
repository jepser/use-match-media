import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

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
  input: 'src/use-match-media.ts',
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
    typescript({
      tsconfig: './tsconfig.json',
      rollupCommonJSResolveHack: false,
      clean: true
    }),
    babel({
      extensions,
      exclude: 'node_modules/**'
    })
  ]
}

const buildConfig = [libConfig]

export default buildConfig
