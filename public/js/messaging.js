$(function () {
    let socket = io();
    let username;

    do{
      username = prompt('Enter username');
    }while(username === '')

    $('form').submit(function(){
      if($('#m').val() !== ''){
        socket.emit('chat message', username, window.location.pathname, $('#m').val());
        $('#m').val('');
      }
      return false;
    });

    socket.on('chat message', function(usr, lctn, msg){
      if(lctn === window.location.pathname){
        $('#messages').append($('<li>').text(`${usr}: ${msg}`));
        $('#messages').append($('<br>'));
        window.scrollTo(0, document.body.scrollHeight);
      }
    });
});