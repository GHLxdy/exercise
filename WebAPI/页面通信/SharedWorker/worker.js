// worker.js
const ports = []
onconnect = e => {
  const port = e.ports[0]
  ports.push(port)
  port.onmessage = evt => {
    ports.filter(v => v !== port) // 此处为了贴近其他⽅案的实现，剔除⾃⼰
      .forEach(p => p.postMessage(evt.data))
  }
}