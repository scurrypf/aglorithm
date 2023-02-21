// 1143. 最长公共子序列
// 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。
// 一个字符串的 子序列 是指这样一个新的字符串：
// 它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
// 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
// 两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length , n = text2.length;
    let meno = new Array(m + 1).fill(0).map(()=>new Array(n + 1).fill(-1));
    const findMin = function(text1,i,text2,j){
        if(i === m || j === n)return 0;
        if(meno[i][j] !== -1)return meno[i][j];
        if(text1[i] === text2[j]){
            meno[i][j] = findMin(text1,i + 1,text2,j + 1) + 1;
        }else{
            meno[i][j] = Math.max(findMin(text1,i,text2,j + 1) , findMin(text1,i + 1,text2,j))
        }
        return meno[i][j];
    }
    return findMin(text1,0,text2,0)
}

const text1 = "abcde", text2 = "ace";
console.log(longestCommonSubsequence(text1,text2));


// 输入：text1 = "abcde", text2 = "ace" 
// 输出：3  
// 解释：最长公共子序列是 "ace" ，它的长度为 3 。
// 输入：text1 = "abc", text2 = "abc"
// 输出：3
// 解释：最长公共子序列是 "abc" ，它的长度为 3 。