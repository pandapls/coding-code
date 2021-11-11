//二分查找
// var search = function(nums, target) {
//   let len = nums.length
//   let mid = Math.floor(len/2);
//   let result = -1
//   console.log(mid,nums[mid])
//   if(nums[mid]<target){
//       for(let i = mid ; i<len; i++){
//         if(nums[i] === target){
//           result =  i
//         }
//       }
//   }else if(nums[mid]===target){
//     result =  mid
//   }else{
//     for(let i = mid ; i>=0; i--){
//       console.log(i,'i')
//       if(nums[i] === target){
//         result =  i
//       }
//     }
//   }
//   return result
// };
var search = function(nums, target) {
  let low = 0, high = nums.length - 1;
  while (low <= high) {
      const mid = Math.floor((high - low) / 2) + low;
      const num = nums[mid];
      if (num === target) {
          return mid;
      } else if (num > target) {
          high = mid - 1;
      } else {
          low = mid + 1;
      }
  }
  return -1;
};
console.log(search([2,5],2))