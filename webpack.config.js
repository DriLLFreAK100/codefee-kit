/* eslint-disable global-require */
const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
  const prod = env === 'prod';

  const devConfigurations = {
    devtool: 'source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public/'),
      port: 3000,
      publicPath: 'http://localhost:3000/dist/',
      hot: true,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  };

  const commonConfigurations = {
    entry: './src/index.ts',
    externals: {
      lodash: {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_',
      },
      react: {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'React',
        root: 'React',
      },
      'react-dom': {
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'ReactDOM',
        root: 'ReactDOM',
      },
    },
    output: {
      path: path.resolve(__dirname, 'dist/'),
      publicPath: '/dist/',
      filename: 'index.js',
      library: 'codefee-kit',
      libraryTarget: 'commonjs2',
    },
    devtool: 'inline-source-map',
    mode: prod ? 'production' : 'development',
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        common: path.resolve(__dirname, 'src', 'common'),
        components: path.resolve(__dirname, 'src', 'components'),
        hooks: path.resolve(__dirname, 'src', 'hooks'),
        utils: path.resolve(__dirname, 'src', 'utils'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            // 'babel-loader',
            'awesome-typescript-loader',
            'eslint-loader',
          ],
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: '[local]-[hash:base64:5]',
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
              },
            },
          ],
          include: /\.module\.css$/,
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
              },
            },
          ],
          exclude: /\.module\.css$/,
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
  };

  let finalConfigurations = commonConfigurations;

  if (!prod) {
    finalConfigurations = {
      ...finalConfigurations,
      ...devConfigurations,
    };
  }

  return finalConfigurations;
};
