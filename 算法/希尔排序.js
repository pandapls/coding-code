function shellSort(arr){
    let len = arr.length,gap=Math.floor(len/2); 
    for(gap; gap>0 ; gap=Math.floor(gap/2)){
        for(let i = gap; i < len; i++){
            let j = i;
            let current = arr[i]
            while( j-gap >= 0 && arr[j-gap] > current ){
                arr[j] = arr[j-gap];
                j = j-gap
            }
            arr[j] = current
        }
    }

    return arr
}
console.log(shellSort([2,5,3,4,9,7]))