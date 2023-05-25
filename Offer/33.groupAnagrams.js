// 剑指 Offer II 033. 变位词组
// 给定一个字符串数组 strs ，将 变位词 组合在一起。 可以按任意顺序返回结果列表。
// 注意：若两个字符串中每个字符出现的次数都相同，则称它们互为变位词。
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = new Map(), res = [];
    for(let str of strs){
        let arr = str.split('');
        arr.sort();
        let val = arr.join('')
        map.has(val) ? map.get(val).push(str) : map.set(val, [str])
    }
    for(let val of map){
        res.push(val[1])
    }
    return res;
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
// 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]