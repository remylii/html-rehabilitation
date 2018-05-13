const path = require('path');

module.exports = {
  mode: "development",

  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, 'src/assets/js'),
    filename: "main.js",
    publicPath: "/assets/"
  },

  context: __dirname,
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
  target: "web",

  resolve: {
    modules: [
      "node_modules", path.resolve(__dirname, "src/js")
    ]
  }
}
