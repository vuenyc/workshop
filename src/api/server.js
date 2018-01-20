import socket_io from 'socket.io';
import Game from './game';

const io = socket_io(3000, {
  path: '/',
  serveClient: false,
  // below are engine.IO options
});

let game = new Game();

io.on('connection', socket => {

  socket.on(PLAYER_JOINED, username => {
    if (!game.addPlayer({ username })) {
      socket.broadcast.emit(ERR_PLAYER_EXISTS);
    }
  });

  socket.on(START_GAME, () => {
    console.log('game started');
  });

});
