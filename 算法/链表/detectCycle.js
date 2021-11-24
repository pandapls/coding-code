// 环形链表2
var detectCycle = function(head) {
    
    let set = new Set()
    while(head){
        if(set.has(head)){
            return head
        }
        set.add(head)
        head =head.next
    }
    return null
};