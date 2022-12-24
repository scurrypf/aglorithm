// 3. 无重复字符的最长子串
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0,right = 0,len = 0;
    let window = new Map();
    while(right<s.length){
        let c = s.charAt(right);
        right++;
        if(window.has(c)){
            window.set(c,window.get(c)+1);
        }else{
            window.set(c,1);
        }
        while(window.get(c)>1){
            let d = s.charAt(left);
            left++;
            window.set(d,window.get(d)-1);
        }
        if(right-left>len){
            len=right-left;
        }
    }
    return len;
};

const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
