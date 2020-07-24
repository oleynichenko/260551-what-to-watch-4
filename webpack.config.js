const path = require(`path`);
const webpack = require(`webpack`);

module.exports = {
  entry: `./src/index.jsx`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    open: true,
    port: 1337,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }
    ],
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, `src/components/`),
      '@reducer': path.resolve(__dirname, `src/reducer/`),
      '@constants': path.resolve(__dirname, `src/constants`)
    },
    extensions: [`.js`, `.jsx`],
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': `react`,
      'PropTypes': `prop-types`
    })
  ],
  devtool: `source-map`,
};
