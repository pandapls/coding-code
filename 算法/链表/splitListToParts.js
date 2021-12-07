// 分隔链表
var splitListToParts = function(head, k) {
    let countHead= head,allCount = 0,len = 0
    while(countHead){
        allCount++;
        countHead = countHead.next
    }
    len = Math.floor(allCount/k)
    let res = new Array(k).fill(null),remain = allCount % k;
    console.log(remain)
    let curr = head
    for(let i = 0; i<k && curr !== null ;i++){
        res[i] = curr
        let partSize = len + (i< remain ? 1 : 0)
        for(let j = 1; j <partSize; j++){
            curr = curr.next
        }
        let next = curr.next
        curr.next = null
        curr = next
    }
    return res
};