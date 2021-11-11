// 最长子序和
var maxSubArray = function(nums) {
  let len = nums.length
  let maxSum = 0
  let count = 0
  for(let i=0; i<len; i++){
      count  = Math.max(count + nums[i],nums[i])
      maxSum = Math.max(maxSum,count)
  }
  return maxSum
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])