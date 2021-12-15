// 最小的k个数
var getLeastNumbers = function(arr, k) {
    quickSort(arr,0,arr.length-1)
    return arr.slice(0,k)
};
let quickSort = (arr,l,r)=>{
    if(l >= r)return;

    let i = l,j = r;
    while(i < j){
        while(i < j && arr[j] >= arr[l]) j--;
        while(i < j && arr[i] <= arr[l]) i++;
        swap(arr,i,j)
    }
    swap(arr,l,i)
    quickSort(arr,l,i-1)
    quickSort(arr,i+1,r)

}

let swap = (arr,i,j)=>{
    let temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp
}