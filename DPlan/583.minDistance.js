// 583. 两个字符串的删除操作
// 给定两个单词 word1 和 word2 ，返回使得 word1 和  word2 相同所需的最小步数。
// 每步 可以删除任意一个字符串中的一个字符。
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let m = word1.length , n = word2.length;
    let meno = new Array(m + 1).fill(0).map(()=>new Array(n + 1).fill(-1));
    const findMin = function(word1,i,word2,j){
        if(i === m || j === n)return 0;
        if(meno[i][j] !== -1)return meno[i][j];
        if(word1[i] === word2[j]){
            meno[i][j] = findMin(word1,i + 1,word2,j + 1) + 1;
        }else{
            meno[i][j] = Math.max(findMin(word1,i + 1,word2,j), findMin(word1,i,word2,j + 1))
        };
        return meno[i][j]
    }
    let LCS = findMin(word1,0,word2,0);
    return m - LCS + n - LCS;
}

const word1 = "sea", word2 = "eat";
console.log(minDistance(word1,word2))

// 输入: word1 = "sea", word2 = "eat"
// 输出: 2
// 解释: 第一步将 "sea" 变为 "ea" ，第二步将 "eat "变为 "ea"
// 输入：word1 = "leetcode", word2 = "etco"
// 输出：4