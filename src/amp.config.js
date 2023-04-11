const withOptimizedImages = require('@ampproject/toolbox-optimizer').default;

module.exports = withOptimizedImages({
  optimizeFonts: true,
  autoAddUrlPrefix: true,
  fontMetricsTarget: 'google',
  ampRuntimeVersion: 'latest',
  imageBasePath: 'https://amerfathullah.com',
  imageOptimizer: {
    maxConcurrency: 10,
    quality: 70,
    type: 'mozjpeg',
    pathPrefix: '/images/',
    imageMagick: {
      convertPath: '/usr/bin/convert',
    },
  },
  cssTransformer: {
    presetOptions: {
      autoprefixer: {
        overrideBrowserslist: ['last 2 versions'],
      },
    },
  },
  jsTransformer: {
    babelConfig: {
      presets: ['@babel/preset-env'],
    },
  },
  esbuildLoaderOptions: {
    loader: 'tsx',
    target: 'esnext',
    tsconfigRaw: {
      compilerOptions: {
        jsx: 'react',
        target: 'esnext',
        module: 'esnext',
        moduleResolution: 'node',
        noEmit: true,
        removeComments: true,
        isolatedModules: true,
        allowSyntheticDefaultImports: true,
        importHelpers: true,
      },
    },
  },
});