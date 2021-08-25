/**
 * 输入一个链表，输出该链表中倒数第 k 个结点。
 */

// 使用双指针法
// 一个指针先跑到第k位,这时两个指针间隔k-1
// 然后两个指针同时跑，当第一个指针指向最后一个节点结束，这时第二个指针指向倒数 k-1

function FindKthToTail(head, k) {
  if (head == null || k == 0) return null
  
  let pNode1 = head, pNode2 = head
  while (--k){
    if (pNode2.next != null) {
      pNode2 = pNode2.next
    } else {
      return null
    }
  }

  while (pNode2.next != null) {
    pNode2 = pNode2.next
    pNode1 = pNode1.next
  }
  return pNode1
}