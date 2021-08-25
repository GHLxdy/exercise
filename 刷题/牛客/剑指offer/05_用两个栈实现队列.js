// 用两个栈来实现一个队列，完成队列的 Push 和 Pop 操作。 队列中的元素为 int 类型。

const outStack = []
const inStack = []
function push(node) {
  inStack.push(node)
}
function pop() {
  if (outStack.length === 0) {
    while (inStack.length) {
      outStack.push(inStack.pop())
    }
  }
  return outStack.pop()
}