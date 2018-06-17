module.exports = {
  entry: "./index.js",
  output: {
  	filename: "./lib/bundle.js"
  },
  module: {
  rules: [
    {
      test: [/\.jsx?$/, /\.js?$/],
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['env']
      }
    }
  ]
},
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
