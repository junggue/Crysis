module.exports = {
  devtool: 'source-map',
  entry: [
    './src/main.jsx'
  ],
  output: {
    path: __dirname + '/webClient/compiled',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
       test: /\.jsx$/,
       exclude: /node_modules/,
       loader: "babel-loader",
       query: { presets: ['es2015', 'react'] }
     }
    ]
  }
}