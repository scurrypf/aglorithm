// 518. 零钱兑换 II
// 给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。
// 请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。
// 假设每一种面额的硬币有无限个。 
// 题目数据保证结果符合 32 位带符号整数。
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    // 二维dp数组，可压缩
    let n = coins.length;
    let dp = new Array(n + 1).fill(0).map(()=>new Array(amount + 1).fill(0));
    for(let i = 0 ; i < n + 1 ;i++){
        dp[i][0] = 1;
    }
    for(let i = 1 ;i <= n ; i++){
        for(let j = 1 ;j <= amount ; j++){
            if(j - coins[i - 1] >= 0){
                dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];
            }else{
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    return dp[n][amount];
}

const amount = 5, coins = [1, 2, 5];
console.log(change(amount,coins));

// 输入：amount = 5, coins = [1, 2, 5]
// 输出：4
// 解释：有四种方式可以凑成总金额：
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1