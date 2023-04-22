// 剑指 Offer II 017. 含有所有字符的最短字符串
// 给定两个字符串 s 和 t 。返回 s 中包含 t 的所有字符的最短子字符串。
// 如果 s 中不存在符合条件的子字符串，则返回空字符串 "" 。
// 如果 s 中存在多个符合条件的子字符串，返回任意一个。
// 注意： 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let res = "", left = 0, right = 0, minLen = Infinity, n = 0, start = 0;
    let window = new Map(), map = new Map();
    for(let i = 0; i < t.length; i++){
        let c = t.charAt(i);
        if(map.has(c)){
            map.set(c, map.get(c) + 1)
        }else{
            map.set(c, 1);
        }
    }
    while(right < s.length){
        let c = s.charAt(right);
        right++;
        if(window.has(c)){
            window.set(c, window.get(c) + 1)
        }else{
            window.set(c, 1);
        }
        if(window.get(c) == map.get(c))n++;
        while(map.size == n){
            if(right - left < minLen){
                minLen = right - left;
                res = s.slice(left, left + minLen)
            }
            let d = s.charAt(left);
            left++;
            window.set(d, window.get(d) - 1);
            if(map.get(d) > window.get(d))n--;
        }
    }
    return res;
}

let s = "ADOBECODEBANC", t = "ABC";
console.log(minWindow(s, t));
// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC" 
// 解释：最短子字符串 "BANC" 包含了字符串 t 的所有字符 'A'、'B'、'C'