const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ['file-loader']
      },
      {
        test: /\.(csv|tsv)$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          skipEmptyLines: true
        }
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      }
    ]
  }
}