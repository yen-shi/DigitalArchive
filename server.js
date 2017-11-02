const express = require('express');
const app  = express();
const http = require('http').Server(app);
const path = require('path')

app.use('/static/html', express.static(path.join(__dirname, 'public/html')));
app.use('/static/css', express.static(path.join(__dirname, 'public/css')));
app.use('/static/img', express.static(path.join(__dirname, 'public/img')));
app.use('/static/js', express.static(path.join(__dirname, 'public/js')));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/html/index.html'));
});

http.listen(3000, function(){
  console.log('Listen on localhost:3000');
});

