// 438. 找到字符串中所有字母异位词
// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
// 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let right = 0,left = 0,sum = [],num = 0;
    let need = new Map(),window = new Map();
    for(let i=0 ; i<p.length ; i++){
        if(need.has(p.charAt(i))){
            need.set(p.charAt(i),need.get(p.charAt(i))+1);
        }else{
            need.set(p.charAt(i),1);
        }
    }
    while(right<s.length){
        let c = s.charAt(right);
        right++;
        if(need.has(c)){
            if(window.has(c)){
                window.set(c,window.get(c)+1);
            }else{
                window.set(c,1);
            }
            if(window.get(c)===need.get(c)){
                num++;
            }
        }
        while(num===need.size){
            if(right-left===p.length){
                sum.push(left);
            }
            let d = s.charAt(left);
            left++;
            if(need.has(d)){
                if(need.get(d)===window.get(d)){
                    num--;
                }
                window.set(d,window.get(d)-1);
            }
        }
    }
    return sum;
};

const s = "abab", p = "ab";
console.log(findAnagrams(s,p))

// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
// 输入: s = "abab", p = "ab"
// 输出: [0,1,2]
// 解释:
// 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
// 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
// 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。