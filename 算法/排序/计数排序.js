let arra  = [1,1,1,3,3,3,2,2,5,3,8,5]

function countSort(arr){
    let maxValue = 0;
    for(let i = 0; i< arr.length; i++){
        if(maxValue < arr[i]){
            maxValue = arr[i]
        }
    }

    let bucket = new Array(maxValue + 1)
    for(let i = 0; i < arr.length; i++){
        let num = arr[i]
        if(bucket[num] ==null){
            bucket[num] = 1
        }else{
            bucket[num] += 1
        }
    }

    let arrCurrIndex = 0;
    for(let i=0; i<bucket.length;i++){
        while(bucket[i]>0){
            let num =i 
            arr[arrCurrIndex++] = num;
            bucket[i] -= 1
        }
    }
    console.log(arr)
}
countSort(arra)