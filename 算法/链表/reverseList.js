// 反转链表
var reverseList = function(head) {
    let pre = new ListNode(0)
    let curr = head
    pre = pre.next
    while(curr){
        let node = curr.next
        curr.next = pre
        pre = curr
        curr = node
    }
    return pre
};