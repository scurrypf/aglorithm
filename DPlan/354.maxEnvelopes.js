// 354. 俄罗斯套娃信封问题
// 给你一个二维整数数组 envelopes ，其中 envelopes[i] = [wi, hi] ，表示第 i 个信封的宽度和高度。
// 当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。
// 请计算 最多能有多少个 信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。
// 注意：不允许旋转信封。
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    envelopes.sort((a,b)=>{
        if(a[0] === b[0]){
            return b[1] - a[1];
        }else{
            return a[0] - b[0];
        }
    })
    let n = envelopes.length;
    let nums = new Array(n + 1);
    for(let i = 0 ; i < n ; i++){
        nums[i] = envelopes[i][1];
    }
    let dp = new Array(n + 1).fill(1)
    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < i ; j++){
            if(nums[i] > nums[j]){
                dp[i] = Math.max(dp[i],dp[j] + 1);
            }
        }
    }
    let res = -Infinity;
    for(let i = 0 ; i < n ; i++){
        res = Math.max(res,dp[i])
    }
    return res;
}   

const envelopes = [[5,4],[6,4],[6,7],[2,3]];
console.log(maxEnvelopes(envelopes));

// 输入：envelopes = [[5,4],[6,4],[6,7],[2,3]]
// 输出：3
// 解释：最多信封的个数为 3, 组合为: [2,3] => [5,4] => [6,7]。
