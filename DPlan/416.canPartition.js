// 416. 分割等和子集
// 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let n = nums.length;
    let sum = 0;
    for(let a of nums){
        sum += a;
    }
    if(sum%2 !== 0)return false;
    sum = sum/2;
    let dp = new Array(n + 1).fill(0).map(()=>new Array(sum + 1).fill(false));
    for(let i = 0 ;i < n + 1; i++){
        dp[i][0] = true;
    }
    for(let i = 1 ;i < n + 1; i++){
        for(let j = 1 ;j < sum + 1; j++){
            if(j - nums[i - 1] < 0){
                dp[i][j] = dp[i - 1][j];
            }else{
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
            }

        }
    }
    return dp[n][sum];
}

const nums = [1,5,11,5];
console.log(canPartition(nums))

// 输入：nums = [1,5,11,5]
// 输出：true
// 解释：数组可以分割成 [1, 5, 5] 和 [11] 。
// 输入：nums = [1,2,3,5]
// 输出：false
// 解释：数组不能分割成两个元素和相等的子集。