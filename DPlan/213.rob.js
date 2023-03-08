// 213. 打家劫舍 II
// 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，
// 这意味着第一个房屋和最后一个房屋是紧挨着的。
// 同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
// 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // 注意这个不要脸的用例，我直接面向测试用例编程
    if(nums.length === 1)return nums[0];
    let meno1 = new Array(nums.length + 1).fill(-1);
    let meno2 = new Array(nums.length + 1).fill(-1);
    const dp = function(nums, start, end, meno){
        if(start > end)return 0;
        if(meno[start] !== -1)return meno[start];
        let res = Math.max(dp(nums, start + 1, end, meno), dp(nums, start + 2, end, meno) + nums[start]);
        meno[start] = res;
        return res;
    }
    return Math.max(dp(nums, 0, nums.length - 2, meno1), dp(nums, 1, nums.length - 1, meno2));
}

const nums = [2,3,2];
console.log(rob(nums));

// 输入：nums = [2,3,2]
// 输出：3
// 解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。