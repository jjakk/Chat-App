$(function () {
    let socket = io();
    let username;

    do{
      username = prompt('Enter username');
    }while(username === '')

    $('form').submit(function(){
      socket.emit('chat message', username, window.location.pathname, $('#m').val());
      $('#m').val('');
      return false;
    });

    socket.on('chat message', function(usr, msg){
      $('#messages').append($('<li>').text(`${usr}: ${msg}`));
      $('#messages').append($('<br>'));
      window.scrollTo(0, document.body.scrollHeight);
    });
});