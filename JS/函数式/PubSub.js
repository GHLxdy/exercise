/**
 * 发布订阅模式
 */
class PubSub {
  constructor() {
    this.handler = {}
  }
  on(event, fn) {
    if (!this.handler[event]) {
      this.handler[event] = []
    }
    this.handler[event].push(fn)
  }
  emit(event, ...args) {
    if (!this.handler[event]) {
      reutrn
    }
    this.handler[event].forEach(fn => {
      fn(...args)
    })
  }
  off(event, fn) {
    if (!this.handler[event]) {
      reutrn
    }
    this.handler = this.handler.filter(item => item !== fn)
  }
  clear(event) {
    if (event) {
      this.handler[event] = []
    } else {
      this.handler = {}
    }
  }
}
