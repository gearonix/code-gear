const grnx = require('@grnx-utils/eslint')

module.exports = grnx({
  root: __dirname,
  tsconfig: 'tsconfig.base.json',
  // monorepo: true,
  ignore: [
    'dist',
    'node_modules',
    '.idea',
    '.yarn',
    'build',
    'tmp',
    'coverage'
  ],
  ext: {
    'import/export': 'off'
  }
})
