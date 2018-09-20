var express = require('express');
var app = express();
var path = require('path')
var webpack = require('webpack')
var config = require('./webpack.config')
var compiler = webpack(config)

app.use('/public', express.static(__dirname + '/public'))
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
