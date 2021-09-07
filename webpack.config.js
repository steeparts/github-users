const path = require('path')

// variables
const isProduction = process.env.NODE_ENV === 'production'
const sourcePath = path.resolve(__dirname, 'src')
const buildPath = path.resolve(__dirname, 'build')

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const styleLoaders = (extra) => {
  const loaders = [
    isProduction
      ? {
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: true,
          reloadAll: true,
        },
      }
      : 'style-loader',
    {
      loader: 'css-loader',
      options: {
        sourceMap: !isProduction,
        importLoaders: 0,
        modules: {
          localIdentName: isProduction
            ? '[hash:base64:5]'
            : '[local]__[hash:base64:5]',
          auto: true,
        },
      },
    },
  ]

  if (extra) {
    loaders.push(extra)
  }

  return loaders
}

module.exports = {
  context: sourcePath,
  entry: {
    app: ['@babel/polyfill', './main.tsx'],
  },

  output: {
    path: buildPath,
    publicPath: 'auto',
    environment: {
      arrowFunction: false,
      bigIntLiteral: false,
      const: false,
      destructuring: false,
      dynamicImport: false,
      forOf: false,
      module: false,
    },
  },
  target: 'web',
  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx', '.sass', '.scss'],
    mainFields: ['module', 'browser', 'main'],
    alias: {
      '@userstory': path.resolve(__dirname, 'src/app/'),
      config: path.resolve(__dirname, 'src/config.ts'),
      ...(!isProduction ? { 'react-dom': '@hot-loader/react-dom' } : {}),
    },
    fallback: {
      stream: false,
      http: false,
      https: false,
      zlib: false,
      util: false,
      assert: false,
    },
  },
  module: {
    rules: [
      // ts, tsx
      {
        test: /\.tsx?$/,

        use: [
          !isProduction && {
            loader: 'babel-loader',
            options: {
              plugins: ['react-hot-loader/babel'],
            },
          },
          'ts-loader',
        ].filter(Boolean),
      },
      // styles
      {
        test: /\.css$/,
        use: styleLoaders(),
      },
      {
        test: /\.s[ac]ss$/,
        use: styleLoaders('sass-loader'),
      },
      // static
      {
        test: /\.(a?png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
            },
          },
        ],
      },
      {
        test: /\.(ttf|woff2?|eot)$/,
        use: ['file-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './assets/index.html',
      minify: isProduction
        ? {
          minifyJS: true,
          minifyCSS: true,
          removeComments: true,
          useShortDoctype: true,
          collapseWhitespace: true,
          collapseInlineTagWhitespace: true,
        }
        : false,
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      disabled: !isProduction,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'static'),
          to: path.resolve(__dirname, 'build'),
        },
      ],
    }),
  ],
  devServer: {
    contentBase: sourcePath,
    hot: true,
    inline: true,
    historyApiFallback: true,
    stats: 'minimal',
    clientLogLevel: 'warning',
    port: 3001,
  },
  devtool: isProduction ? 'hidden-source-map' : 'eval-cheap-module-source-map',
}
