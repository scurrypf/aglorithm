// 剑指 Offer 05. 替换空格
// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    let res = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] === ' '){
            res.push('%20');
        }else{
            res.push(s[i]);
        }
    }
    return res.join('');
};
 
const s = "We are happy.";
console.log(replaceSpace(s));
// 输入：s = "We are happy."
// 输出："We%20are%20happy."