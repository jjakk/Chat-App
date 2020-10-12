var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 8000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/:id', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

/* Socket Stuff */

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log(`Listening on port ${port}`);
});
