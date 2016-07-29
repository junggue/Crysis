module.exports = {
  devtool: 'source-map',
  entry: [
    './src/main.js'
  ],
  output: {
    path: __dirname + '/webClient/compiled',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
       test: /\.js$/,
       exclude: /node_modules/,
       loader: "babel-loader",
       query: { presets: ['es2015', 'react'] }
     }
    ]
  }
}