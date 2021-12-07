// 反转链表
var reverseList = function(head) {
    let cur  = null;

    while(head){
        let node = head.next
        head.next = cur
        cur = head
        head = node
    }
    return cur
};