// 对输入数组进行选择排序
let arr = [2,1,3]
function selectionSort(arr){
    // minIndex 用来寻找最小元素，
    let minIndex , temp;

    for(let i = 0 ; i<arr.length-1;i++){
        minIndex = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]>arr[minIndex]){
                minIndex = j
            }
        }

        //找到最小元素后与当前元素的置换位置
        temp = arr[i]
        arr[i]  = arr[minIndex] 
        arr[minIndex] = temp 
    }
    return  arr
}

let output = selectionSort(arr)
console.log(output)