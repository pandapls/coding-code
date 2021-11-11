// 合并两个有序数组
var merge = function(nums1, m, nums2, n) {
   while(m>0&&n>0){
    if(nums1[m-1]>nums2[n-1]){
      nums1[n+m-1] = nums1[m-1]
      m--
    }else{
      nums1[n+m-1] = nums2[n-1]
      n--
    }
   }
   console.log(nums1,nums2,n)
   for(let i = 0; i<n; i++){
     nums1[i] = nums2[i]
   }
   console.log(nums1)
};
merge([1],
 1,
  [0],
  0)
// merge(
//   [1,2,3,0,0,0],
// 3,
// [2,5,6],
// 3
// )