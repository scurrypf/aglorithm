// 剑指 Offer II 014. 字符串中的变位词
// 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的某个变位词。
// 换句话说，第一个字符串的排列之一是第二个字符串的 子串 。
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let map = new Map(), window = new Map();
    let left = 0, right = 0, n = 0;
    for(let i = 0; i < s1.length; i++){
        let c = s1.charAt(i);
        if(map.has(c)){map.set(c, map.get(c) + 1)}else{map.set(c, 1)}
    }
    while(right < s2.length){
        let c = s2.charAt(right);
        right++;
        if(window.has(c)){
            window.set(c, window.get(c) + 1)
        }else{
            window.set(c, 1)
        }
        if(window.get(c) == map.get(c))n++;
        while(map.size === n){
            if(right - left == s1.length)return true;
            let d = s2.charAt(left);
            left++;
            window.set(d, window.get(d) - 1);
            if(map.get(d) > window.get(d))n--;
        }
    }
    return false;
}   

const s1 = "ab", s2 = "eidbaooo";
console.log(checkInclusion(s1, s2))
// 输入: s1 = "ab" s2 = "eidbaooo"
// 输出: True
// 解释: s2 包含 s1 的排列之一 ("ba").