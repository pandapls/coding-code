// 148. 排序链表
var sortList = function(head) {
    let stack = []
    while(head){
        stack.push(head.val)
        head = head.next
        
    }
    stack.sort((a,b)=>a-b)
    let node = new ListNode(0),pre = node
    stack.forEach(item=>{
        let cur = new ListNode(item)
        pre.next = cur
        pre = pre.next
    })
    return node.next
};