// 删除倒数第N个节点
var removeNthFromEnd = function(head, n) {
    let alllen = 0,lenHead = head
    while(lenHead){
        lenHead = lenHead.next
        alllen++
    }
    let dummy = new ListNode(0,head),pre = dummy
    let count = alllen - n
    while(count--){
        pre = pre.next
    }
    pre.next = pre.next.next
   return dummy.next
};