console.log(quickSort([1,3,6,8,4,2]))
function quickSort(arr,L,R){
    let len = arr.length;
    let partitionIndex //基准点下标
    let left = L ? L : 0
    let right = R ? R : len-1

    if( left < right ){
        partitionIndex = partition(arr, left, right)
        quickSort(arr, left , partitionIndex-1)
        quickSort(arr, partitionIndex+1 , right)

    }
    return arr
}

// 获取基准点
function partition(arr, left, right){
    let pivot = left; //选取以left为基准点
    let index = pivot+1;
    for(let i = index; i <= right ; i++){
        // 遍历的元素与基准点相比较 
        if(arr[i] < arr[pivot]){
            swap(arr, i, index)
            index ++;
        }
    }
    swap(arr,pivot,index-1)
    return index - 1

}

// 置换元素位置
function swap(arr,i,j){
    console.log(i,j,'i,j')
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}