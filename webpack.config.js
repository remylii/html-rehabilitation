const path = require('path');

module.exports = {
  mode: "production",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  devtool: "source-map",
  context: __dirname,
  target: "web",

  devServer: {
    contentBase: path.join(__dirname, 'src/assets'),
    compress: true,
    historyApiFallback: true,
    hot: true
  }
}
