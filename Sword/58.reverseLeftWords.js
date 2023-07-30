// 剑指 Offer 58 - II. 左旋转字符串
// 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。
// 请定义一个函数实现字符串左旋转操作的功能。
// 比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    // let res = [], ans = [];
    // for(let i = 0; i < s.length; i++){
    //     if(i < n){
    //         ans.push(s[i]);
    //     }else{
    //         res.push(s[i]);
    //     }
    // }
    // return res.join('') + ans.join('');
    let res = s.split('');
    for(let i = 0; i < n; i++){
        res.push(s[i]);
    }
    return res.slice(n).join('');
};  

const s = "abcdefg", k = 2;
console.log(reverseLeftWords(s, k));
// 输入: s = "abcdefg", k = 2
// 输出: "cdefgab"