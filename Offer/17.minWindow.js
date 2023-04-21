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

}

let s = "ADOBECODEBANC", t = "ABC";
console.log(minWindow(s, t));
// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC" 
// 解释：最短子字符串 "BANC" 包含了字符串 t 的所有字符 'A'、'B'、'C'