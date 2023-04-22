// 剑指 Offer II 016. 不含重复字符的最长子字符串
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长连续子字符串 的长度。
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let window = new Map();
    let maxLen = 0, left = 0, right = 0, start = 0;
    while(right < s.length){
        let c = s.charAt(right);
        right++;
        if(window.has(c)){
            window.set(c, window.get(c) + 1);
        }else{
            window.set(c, 1);
        }
        while(window.get(c) > 1){
            let d = s.charAt(left);
            left++;
            window.set(d, window.get(d) - 1);
        }
        maxLen = Math.max(maxLen, right - left)
    }
    return maxLen;
}

let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s))
// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子字符串是 "abc"，所以其长度为 3。