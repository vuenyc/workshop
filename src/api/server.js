import express from 'express';
import socket_io from 'socket.io';
import Game from './game';
import http from 'http';
import path from 'path';
import pkgDir from 'pkg-dir';

const app = express();
const server = http.createServer(app);
const io = socket_io(server);
const PORT = 3000;

console.log(path.join(pkgDir.sync(__dirname), 'dist'));

app.use(express.static(path.join(pkgDir.sync(__dirname), 'dist')));
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));

let game = new Game();

io.on('connection', socket => {

  socket.on(PLAYER_JOINED, username => {
    if (!game.addPlayer({ username })) {
      socket.broadcast.emit(PLAYER_EXISTS);
    }
  });

  socket.on(START_GAME, () => {
    console.log('game started');
  });

});
