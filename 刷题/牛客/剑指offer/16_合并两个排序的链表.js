/**
 * 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
 */



// function Merge(pHead1, pHead2) {
//   let pMergeHead = null;
//   // write code here
//   if (pHead1 === null) return pHead2;
//   if (pHead2 === null) return pHead1;
//   if (pHead1.val < pHead2.val) {
//     pMergeHead = pHead1;
//     pMergeHead.next = Merge(pHead1.next, pHead2);
//   } else {
//     pMergeHead = pHead2;
//     pMergeHead.next = Merge(pHead1, pHead2.next);
//   }
//   return pMergeHead;
// }

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2){
  // write code here
  if (!pHead1) return pHead2
  if (!pHead2) return pHead1
  let now = new ListNode(0)
  const root = now
  while (pHead1 && pHead2){
    if (pHead1.val > pHead2.val){
      now.next = pHead2
      now = now.next
      pHead2 = pHead2.next
    }else{
      now.next = pHead1
      now = now.next
      pHead1 = pHead1.next
    }
  }
  if (pHead1) {
    now.next = pHead1
  }else{
    now.next = pHead2
  }
  return root.next
}