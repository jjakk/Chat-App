const express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
let bodyParser = require('body-parser');
var port = process.env.PORT || 8000;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

/* Routing */

app.get('/', function(req, res){
  res.render('index');
});

app.post('/goto', (req, res) => {
  res.redirect('/' + req.body.location);
});

app.get('/:id', function(req, res){
  res.render('messaging');
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
