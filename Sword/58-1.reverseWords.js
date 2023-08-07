// 剑指 Offer 58 - I. 翻转单词顺序
// 输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，\
// 标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let ans = s.trim().split(' ');
    let left = 0, right = ans.length - 1;
    while(left <= right){
        let p = ans[left];
        ans[left] = ans[right];
        ans[right] = p;
        left++;
        right--;
    }
    return ans.filter(ele => ele !== '').join(' ');
};

const s = "a good   example";
console.log(reverseWords(s));
// 输入: "the sky is blue"
// 输出: "blue is sky the"