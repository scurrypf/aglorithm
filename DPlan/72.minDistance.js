// 72. 编辑距离
// 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。
// 你可以对一个单词进行如下三种操作：
// 插入一个字符
// 删除一个字符
// 替换一个字符
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let m = word1.length , n = word2.length;
    let dp = new Array(m + 1).fill(0).map(()=>new Array(n + 1).fill(0));
    for(let i = 1 ; i <= m ; i++){
        dp[i][0] = i;
    }
    for(let i = 1 ; i <= n ; i++){
        dp[0][i] = i;
    }
    for(let i = 1 ; i <= m ; i++){
        for(let j = 1 ; j <= n ; j++){
            if(word1[i - 1] === word2[j - 1]){
                dp[i][j] = dp[i - 1][j - 1];
            }else{
                dp[i][j] = Math.min(dp[i - 1][j - 1] + 1,Math.min(dp[i - 1][j] + 1,dp[i][j - 1] + 1));
            }
        }
    }
    return dp[m][n];
}

const word1 = "horse", word2 = "ros";
console.log(minDistance(word1,word2))

// 输入：word1 = "horse", word2 = "ros"
// 输出：3
// 解释：
// horse -> rorse (将 'h' 替换为 'r')
// rorse -> rose (删除 'r')
// rose -> ros (删除 'e')