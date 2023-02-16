// 322. 零钱兑换
// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
// 你可以认为每种硬币的数量是无限的。
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // 暴力解法
    // const findMin = function(coins,amount){
    //     if(amount === 0)return 0;
    //     if(amount < 0)return -1;
    //     let res = Infinity;
    //     for(let coin of coins){
    //         let sub = findMin(coins,amount - coin);
    //         if(sub === -1)continue;
    //         res = Math.min(res,sub + 1);
    //     }
    //     if(res === Infinity){
    //         return -1;
    //     }
    //     return res;
    // }
    // return findMin(coins,amount);
    // dp数组备忘录
    // const findMin = function(coins,amount){
    //     if(amount === 0)return 0;
    //     if(amount < 0)return -1;
    //     if(dp[amount] !== -666)return dp[amount];
    //     let res = Infinity;
    //     for(let coin of coins){
    //         let sub = findMin(coins,amount - coin);
    //         if(sub === -1)continue;
    //         res = Math.min(res,sub + 1);
    //     }
    //     if(res === Infinity){
    //         dp[amount] = -1;
    //     }else{
    //         dp[amount] = res;
    //     }
    //     return dp[amount];
    // }
    // let dp = new Array(amount + 1).fill(-666);
    // return findMin(coins,amount);
    // 迭代
    let dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for(let i = 1 ; i <= amount ; i++){
        for(let coin of coins){
            if(i - coin < 0)continue;
            dp[i] = Math.min(dp[i],dp[i - coin] + 1);
        }
    }
    if(dp[amount] === amount + 1)return -1;
    return dp[amount];
}

const coins = [1, 2, 5], amount = 11;
console.log(coinChange(coins,amount));

// 输入：coins = [1, 2, 5], amount = 11
// 输出：3 
// 解释：11 = 5 + 5 + 1
// 输入：coins = [2], amount = 3
// 输出：-1