// 剑指 Offer II 020. 回文子字符串的个数
// 给定一个字符串 s ，请计算这个字符串中有多少个回文子字符串。
// 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0;
    let isPalind = function(s, left, right){
        let count = 0;
        while(left >= 0 && right < s.length && s[left] === s[right]){
            count++;
            left--;
            right++;
        }
        return count;
    }
    for(let i = 0; i < s.length; i++){
        count += isPalind(s, i, i);
        count += isPalind(s, i, i + 1)
    }
    return count;
}

const s = "abc";
console.log(countSubstrings(s));
// 输入：s = "abc"
// 输出：3
// 解释：三个回文子串: "a", "b", "c"
// 输入：s = "aaa"
// 输出：6
// 解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"