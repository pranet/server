// @flow

const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

http.listen(4000, () => {
  console.log('listening on *:4000');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('send_message', msg => {io.emit('receive_message', msg); console.log(msg)});
});
