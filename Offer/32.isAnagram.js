// 剑指 Offer II 032. 有效的变位词
// 定两个字符串 s 和 t ，编写一个函数来判断它们是不是一组变位词（字母异位词）。
// 注意：若 s 和 t 中每个字符出现的次数都相同且字符顺序不完全相同，则称 s 和 t 互为变位词（字母异位词）。
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s === t)return false;
    if(s.length !== t.length)return false;
    let smap = new Map(), tmap = new Map();
    for(let i = 0; i < s.length; i++){
        smap.has(s[i]) ? smap.set(s[i], smap.get(s[i]) + 1) : smap.set(s[i], 1);
        tmap.has(t[i]) ? tmap.set(t[i], tmap.get(t[i]) + 1) : tmap.set(t[i], 1);
    }
    for(let i = 0; i < s.length; i++){
        if(smap.get(s[i]) !== tmap.get(s[i]))return false;
    }
    return true;
}

const s = "anagram", t = "nagaram";
console.log(isAnagram(s, t));
// 输入: s = "anagram", t = "nagaram"
// 输出: true
// 输入: s = "rat", t = "car"
// 输出: false