var lengthOfLIS = function(nums) {

    //记录最长子序列的大小的数组，因为每个元素自身就算是长度为一的子序列所以填充为1
    let dp=new Array(nums.length).fill(1)
    for(let i=0;i<nums.length;i++){
        // i 固定一个元素，j再次遍历整个nums 与 下标为i的进行对比
        for(let j=0;j<i;j++){
            console.log("nums[i]>nums[j]",nums[i],nums[j])
            // 如果nums[i]大于nums[j]的 说明该下标为j的 能与i构成子序列
            if(nums[i]>nums[j]){
                // 下标为j 的元素加上自身的可以构成子序列的长度加上一 则为当前i下标的子序列长度
                dp[i] = Math.max(dp[i],dp[j]+1)
                console.log(dp)
            }
        }
    }
    return Math.max(...dp)
};

console.log(lengthOfLIS( [10,9,2,5,3,7,101,18]))