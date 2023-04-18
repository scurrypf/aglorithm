// 剑指 Offer II 011. 0 和 1 个数相同的子数组
// 给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。
/**
 * @param {number[]} nums
 * @return {number}
 */
// 注：本题将0转换为-1，然后直接求前缀和为0的长度
var findMaxLength = function (nums) {
    let preSum = 0,maxLen = 0;
    let map = new Map();
    map.set(0, -1)
    for(let i = 0; i < nums.length; i++){
        preSum += nums[i] === 0 ? -1 : 1;
        if(map.has(preSum)){
            maxLen = Math.max(maxLen,  i - map.get(preSum))
        }else{
            map.set(preSum, i)
        }
    }
    return maxLen;
}

let nums = [0,1,0];
console.log(findMaxLength(nums))
// 输入: nums = [0,1]
// 输出: 2
// 说明: [0, 1] 是具有相同数量 0 和 1 的最长连续子数组。
// 输入: nums = [0,1,0]
// 输出: 2
// 说明: [0, 1] (或 [1, 0]) 是具有相同数量 0 和 1 的最长连续子数组。