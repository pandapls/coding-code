let input = [2,1,4,5]
function sort(arr){
  let len = arr.length
    for(let i = 0 ; i<len-1;i++){
        for(let j = 0 ; j<len-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }
  return arr
}
console.log(sort(input))