// 删除链表的节点
var deleteNode = function(head, val) {
    let dummy = new ListNode(0,head),cur = dummy;
    while(cur&&cur.next){
        if(cur.next.val === val){
            cur.next = cur.next.next
        }
        cur = cur.next
    }
    return dummy.next
};