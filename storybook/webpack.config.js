const jsImporter = require('node-sass-js-importer');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const path = require('path');

const resources = {
  sassResources: ['functions/**/*.scss', 'mixins/**/*.scss'],
  localResources: [
    'base.scss',
    'functions/**/*.scss',
    'data/swatches/**/*.scss',
    'data/roles/**/*.scss',
    'mixins/**/*.scss',
    'grid.scss',
    'placeholders/**/*.scss'
  ]
};

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.dirname(path.resolve(__dirname))
  };

  config.module.rules.forEach(function (data, key) {
    if (data.loader === 'vue-docgen-loader') {
      let { options } = data;
      data.options = {
        ...options,
        docgenOptions: {
          alias: {
            ...config.resolve.alias
          }
        }
      };
    }
  });

  config.plugins.push(
    new StyleLintPlugin({
      files: ['./**/*.scss'],
      syntax: 'scss',
      configFile: '.stylelintrc'
    })
  );

  config.module.rules.push({
    test: /\.js/,
    loader: 'import-glob'
  });

  config.module.rules.push({
    test: /components\/.*\.vue$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'eslint-loader'
      }
    ]
  });

  config.module.rules = config.module.rules.map((rule) => {
    if (rule.test.toString().includes('svg')) {
      const test = rule.test.toString().replace('svg|', '').replace(/\//g, '');
      return { ...rule, test: new RegExp(test) };
    } else {
      return rule;
    }
  });

  config.module.rules.push({
    test: /\.svg$/,
    loader: 'vue-svg-loader'
  });

  config.module.rules.push({
    test: /\.s?css$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'style-loader' // compiles Sass to CSS (required due to Hot Module Replacement)
      },
      {
        loader: 'css-loader', // translates CSS into CommonJS
        options: {
          sourceMap: true,
          localsConvention: 'dashes',
          modules: {
            localIdentName: '[name]__[local]__[hash:base64:5]'
          }
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            config: './storybook/postcss.config.js'
          },
          sourceMap: true
        }
      },
      {
        loader: 'sass-loader', // compiles Sass to CSS
        options: {
          sassOptions: {
            importer: [jsImporter]
          }
        }
      },
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            ...resources.sassResources.map(
              (res) => `node_modules/sass-resources/${res}`
            ),
            ...resources.localResources.map(
              (res) => `assets/styles/resources/${res}`
            )
          ]
        }
      }
    ]
  });

  return config;
};
