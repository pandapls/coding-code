// 桶排序

function bucketSort(arr,bucketCount){
  //bucketCount 每个桶里的元素的个数 
  let result = [],
  minValue = arr[0],
  maxValue = arr[0];

  for(let i = 0; i < arr.length; i++){
    if(arr[i] < minValue){
      minValue = arr[i]
    }
    if(arr[i] > maxValue){
      maxValue = arr[i]
    }
  }
  // bucketSize 桶整个的大小
  let bucketSize = Math.floor((maxValue - minValue)/ bucketCount) + 1
  //  创建桶数组(计数素组)
  let bucket = new Array(bucketSize)
  for(let i = 0; i<bucket.length; i++){
    bucket[i] = []
  }
    //  对每个元素进行桶分类(即将一个桶里应放buckerCount个元素)
  for(let i = 0; i<arr.length; i++){
    bucket[Math.floor((arr[i]-minValue)/bucketCount)].push(arr[i])
  }

  for(let i = 0; i<bucket.length;i++){
    //这里对每个小桶 里的元素 进行插入排序
    insetionSort(bucket[i])
    for(let j = 0; j < bucket[i].length; j++){
      result.push(bucket[i][j])
    }
  }
}
function insetionSort(arr){
  let len = arr.length,prev,current;
  for(let i = 1; i < len ; i++){ 
    prev = i - 1
    current = arr[i]
    while( prev >=0 && arr[prev]>current){
      arr[prev+1] = arr[prev]
      prev -- ;
    }
    arr[prev+1] = current
  }
}
bucketSort([2,18,3,4,5,19,60],3)
