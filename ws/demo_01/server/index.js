const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 3000 })

let group={}
// roomid -> 对应相同的roomid广播消息
wss.on('connection', function connection(ws) {
  console.log('one client is connected')
  // 主动发送消息给客户端
  // ws.send('hello from server')

  // 接受客户端消息
  ws.on('message', function (msg) {
    console.log(msg.toString())
    const msgObj = JSON.parse(msg.toString())
    if (msgObj.event === 'enter') {
      ws.roomid = msgObj.message.roomid
      if (!group[ws.roomid]) {
        group[ws.roomid] = 0
      }
      group[ws.roomid]++
      ws.name = msgObj.message.name
    }
    // 主动发送消息给客户端
    // ws.send('server:'+msg)

    // 广播消息
    wss.clients.forEach(client => {
      // if (client != ws && client.readyState === WebSocket.OPEN) {
      //   msgObj.name = ws.name
      //   msgObj.num = wss.clients.size
      //   client.send(JSON.stringify(msgObj))
      // }
      if (client.readyState === WebSocket.OPEN && client.roomid === ws.roomid) {
        msgObj.name = ws.name
        msgObj.num = group[ws.roomid]
        client.send(JSON.stringify(msgObj))
      }
    })
  })

  ws.on('close', function () {
    if (ws.name) {
      group[ws.roomid]--
    }
    const msgObj = {
      event:'out'
    }
    // 广播消息
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN && client.roomid === ws.roomid) {
        msgObj.name = ws.name
        msgObj.num = group[ws.roomid]
        client.send(JSON.stringify(msgObj))
      }
    })
  })
})
