/**
 * 输入一个链表，按链表从尾到头的顺序返回一个 ArrayList。
 */

function printListFromTailToHead(head) {
  const list = []
  let pNode = head
  while (head) {
    list.unshift(head.value)
    pNode = pNode.next
  }
  return list
}

