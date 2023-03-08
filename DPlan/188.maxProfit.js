// 188. 买卖股票的最佳时机 IV
// 给定一个整数数组 prices ，它的第 i 个元素 prices[i] 是一支给定的股票在第 i 天的价格。
// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    let n = prices.length;
    let inf = new Array(n).fill(0).map(()=>new Array(2))
    const max_inf = function(prices){
        let n = prices.length;
        for(let i = 0 ; i < n ; i++){
            if(i - 1 === -1){
                inf[i][0] = 0;
                inf[i][1] = -prices[i];
                continue;
            }
            inf[i][0] = Math.max(inf[i - 1][0], inf[i - 1][1] + prices[i]);
            inf[i][1] = Math.max(inf[i - 1][1], inf[i - 1][0] - prices[i]);
        }
        return inf[n - 1][0];
    }
    if(k > n/2){
        // k为Infinity
        return max_inf(prices)
    }
    let dp = new Array(n).fill(0).map(()=>new Array(k + 1).fill(0).map(()=>new Array(2).fill(0)));
    // k === 时的边界
    for(let i = 0 ; i < n ; i++){
        dp[i][0][0] = 0;
        dp[i][0][1] = -Infinity;
    }
    let max_k = k;
    const max = function(prices){
        for(let i = 0 ;i < n ; i++){
            for(let k = max_k ; k > 0 ;k--){
                if(i - 1 === -1){
                dp[i][k][0] = 0;
                dp[i][k][1] = -prices[i];
                continue;
            }
            dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i]);
            dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i]);
        }    
        }
        return dp[n - 1][k][0];
    }
    return max(prices);
}

const k = 2, prices = [2,4,1];
console.log(maxProfit(k, prices));

// 输入：k = 2, prices = [2,4,1]
// 输出：2
// 解释：在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。