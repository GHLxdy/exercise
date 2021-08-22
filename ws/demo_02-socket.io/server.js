const app = require('express')()

const http = require('http').createServer(app)

const io = require('socket.io')(http)

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/index.html')
})

io.on('connection', function (socket) {
  console.log('a socket is connection')
  socket.on('chatEvent', function (msg) {
    console.log('msg from client:' + msg)
    // 这个只能一对一
    // socket.send('server say:'+ msg)

    // 广播
    socket.broadcast.emit('ServerMsg',msg)
  })
})

http.listen(3000, function () {
    console.log('serve is running 3000')
})