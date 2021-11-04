function ListNode(val){
    this.val = val;
    this.next = null;
}
// arr -> list
function generateList(array){
    const fakeHead = new ListNode(0);
    let current = fakeHead
    for(let i = 0; i < array.length; i++){
        current.next = { val : array[i] , next : null}
        current = current.next
    }
    return fakeHead.next
}

// list -> arr
function generateArray(list){
    let res = []
    while(list){
        res.push(list.val);
        list = list.next
    }

    return res
}
function mergeTwoLists(l1, l2) {
    let head = new ListNode(0)
    let pre = head
    while(l1 !== null && l2 !== null){
        if(l1.val <= l2.val){
            pre.next = l1
            l1  = l1.next
        }else{
            pre.next = l2
            l2 = l2.next
        }
        pre = pre.next
    }
    pre.next = l1 ===null ? l2 : l1
    return generateArray(head.next)
};
let arr1 = generateList([1,2,3,4,5])
let arr2 = generateList([1,4,6,8,9])
console.log(mergeTwoLists(arr1,arr2))