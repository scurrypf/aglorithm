// 剑指 Offer II 015. 字符串中的所有变位词
// 给定两个字符串 s 和 p，找到 s 中所有 p 的 变位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
// 变位词 指字母相同，但排列不同的字符串。
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let map = new Map(), window = new Map();
    let res = [], n = 0, left = 0, right = 0;
    for(let i = 0; i < p.length; i++){
        let c = p.charAt(i);
        if(map.has(c)){ map.set(c, map.get(c) + 1) }else{ map.set(c, 1) }
    }
    while(right < s.length){
        let c = s.charAt(right);
        right++;
        if(window.has(c)){
            window.set(c, window.get(c) + 1);
        }else{
            window.set(c, 1);
        }
        if(window.get(c) == map.get(c))n++;
        while(map.size === n){
            if(right - left == p.length){
                res.push(left)
            }
            let d = s.charAt(left);
            left++;
            window.set(d, window.get(d) - 1);
            if(map.get(d) > window.get(d))n--;
        }
    }
    return res;
}

let s = "cbaebabacd", p = "abc";
console.log(findAnagrams(s, p))
// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的变位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的变位词。