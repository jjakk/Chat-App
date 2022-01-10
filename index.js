const express = require('express');
var app = express();
var http = require('http').Server(app);
//var io = require('socket.io')(http);
let bodyParser = require('body-parser');
var port = process.env.PORT || 8000;

// App Settings

app.set('views', './views');
app.set('view engine', 'pug');

// Middleware

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// Routing

app.get('/', function(req, res){
  res.render('index');
});

app.post('/goto', (req, res) => {
  res.redirect('/' + req.body.location);
});

app.get('/:id', function(req, res){
  res.render('messaging');
});

// Messaging Sockets
/*
io.on('connection', function(socket){
  socket.on('chat message', function(username, location, msg){
    io.emit('chat message', username, location, msg);
  });
});
*/

// Port listen

http.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


