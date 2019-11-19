const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.config')
const compiler = webpack(config)

// Tell express to use the webpack-dev-middleware and use the webpack.config.js configuration file as a base
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

const port = process.env.PORT || 3000
app.listen(port, () => `Listening on port ${port}`)