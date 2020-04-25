const {
  override,
  fixBabelImports,
  addLessLoader,
  addDecoratorsLegacy,
} = require('customize-cra')

module.exports = {
  webpack: override(
    addDecoratorsLegacy(),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),

    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: { '@primary-color': 'black' },
      },
    }),
  ),
}
