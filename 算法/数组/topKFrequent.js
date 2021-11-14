// 前K个高频元素
var topKFrequent = function(nums, k) {
    let map = new Map()
    for(let i=0; i<nums.length; i++){
       if(map.has(nums[i])){
           map.set(nums[i],map.get(nums[i])+1)
       }else{
           map.set(nums[i],1)

       }
    }
    if(map.size < k){
        return [...map.keys()]
    }
    let arr = [],res = []
    map.forEach((value,key)=>{
        if(!arr[value]){
            arr[value] = [key]
        }else{
            arr[value].push(key)
        }
    })

    for(let i = arr.length -1; i >= 0&& res.length < k; i--){
        if(arr[i]){
            res.push(...arr[i])
        }
    }
    return res
};
console.log(topKFrequent([1,1,1,2,2,3],
    2))