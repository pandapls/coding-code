// 反转链表2
var reverseBetween = function(head, left, right) {
    let dummy = new ListNode()
    dummy.next = head;
    let pre = dummy

    for(let i=0; i<left-1; i++){
        pre = pre.next
    }

    let cur = pre.next

    for(let i = 0; i<right-left; i++){
        let node = cur.next;
        cur.next = node.next;
        node.next = pre.next
        pre.next = node
    }

    return dummy.next
};