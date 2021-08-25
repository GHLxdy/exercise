/**
 *  输入一个链表，反转链表后，输出新链表的表头。
 */

 /* function ListNode(x){
 this.val = x;
 this.next = null;
 }*/

function ReverseList(pHead) {
  let pPre = null
  let pNext = null
  while (pHead) {
    // 存储下一个节点
    pNext = pHead.next

    // 将当前节点的next 指向上一个节点
    pHead.next = pPre
    // 存储当前节点
    pPre = pHead

    // 继续向下一个节点走
    pHead = pNext
  }
  
  return pPre
}