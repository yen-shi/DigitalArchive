const express = require('express');
const app  = express();
const http = require('http').Server(app);
const path = require('path')

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

http.listen(3000, function(){
  console.log('Listen on localhost:3000');
});

