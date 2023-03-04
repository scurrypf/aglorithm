// 494. 目标和
// 给你一个整数数组 nums 和一个整数 target 。
// 向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：
// 例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
// 返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    // 回溯算法，暴力穷举
    let track = [];
    let res = 0;
    let sum = 0;
    const findTarget = function(nums, target, track, sum, start){
        if(track.length === nums.length){
            if(target === sum){
                res++
            }
            return;
        }
        track.push(nums[start]);
        sum += nums[start];
        findTarget(nums, target, track, sum, start + 1);
        sum -= nums[start];
        track.pop();
        track.push(nums[start]);
        sum -= nums[start];
        findTarget(nums, target, track, sum, start + 1);
        sum += nums[start];
        track.pop();
    }
    findTarget(nums, target, track, sum, 0)
    return res;
}

const nums = [1,1,1,1,1], target = 3;
console.log(findTargetSumWays(nums,target));

// 输入：nums = [1,1,1,1,1], target = 3
// 输出：5
// 解释：一共有 5 种方法让最终目标和为 3 。
// -1 + 1 + 1 + 1 + 1 = 3
// +1 - 1 + 1 + 1 + 1 = 3
// +1 + 1 - 1 + 1 + 1 = 3
// +1 + 1 + 1 - 1 + 1 = 3
// +1 + 1 + 1 + 1 - 1 = 3