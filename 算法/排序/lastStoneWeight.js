// 最后一块石头的重量
var lastStoneWeight = function(stones) {
    let arr = stones.sort((a,b)=>b-a)
    let i = 0,j = 1
    while(arr[i]&&arr[j]){
        if(arr[i]-arr[j]!==0){
            arr.push(arr[i]-arr[j])
        }
        arr.shift()
        arr.shift()
        let k = arr.length -1
        while(k>0){
            if(arr[k] > arr[k-1]){
                let temp = arr[k]
                arr[k] = arr[k-1]
                arr[k-1] = temp
            }
            k--
        }
    }
    return arr[0] ? arr[0] : 0
};