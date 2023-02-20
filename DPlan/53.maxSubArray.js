// 53. 最大子数组和
// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组 是数组中的一个连续部分。
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // 动态规划迭代
    let n = nums.length;
    // let dp = new Array(n + 1).fill(0);
    // dp[0] = nums[0];
    // for(let i = 1 ; i <= n ; i++){
    //     dp[i] = Math.max(nums[i] , dp[i - 1] + nums[i]);
    // }
    // let res = -Infinity;
    // for(let i = 0 ;i < n ; i++){
    //     res = Math.max(res,dp[i]);
    // }
    // return res;
    // 前缀和数组
    let preNum = new Array(n + 1);
    preNum[0] = 0;
    for(let i = 1 ; i <= n ; i++){
        preNum[i] = preNum[i - 1] + nums[i - 1];
    }
    let res = -Infinity;
    let minVal = Infinity;
    for(let i = 0 ; i < n ; i++){
            minVal = Math.min(minVal , preNum[i]);
            res = Math.max(res , preNum[i + 1] - minVal); 
    }
    return res;
}

const nums = [5,4,-1,7,8];
console.log(maxSubArray(nums));

// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
// 输入：nums = [1]
// 输出：1