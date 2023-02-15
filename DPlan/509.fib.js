// 509. 斐波那契数
// 斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。
// 该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
// F(0) = 0，F(1) = 1
// F(n) = F(n - 1) + F(n - 2)，其中 n > 1
// 给定 n ，请计算 F(n) 。
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n === 0)return 0;
    let dp = new Array(n + 1);
    dp[1] = 1,dp[2] = 1;
    for(let i = 3 ; i <= n ; i++){
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

const n = 2;
console.log(fib(n));

// 输入：n = 2
// 输出：1
// 解释：F(2) = F(1) + F(0) = 1 + 0 = 1
