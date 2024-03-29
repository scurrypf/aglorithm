// 剑指 Offer II 019. 最多删除一个字符得到回文
// 给定一个非空字符串 s，请判断如果 最多 从字符串中删除一个字符能否得到一个回文字符串。
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let left = 0, right = s.length - 1;
    let deletes = function(left, right){
        while(left < right){
            if(s[left] !== s[right]){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    while(left < right){
        if(s[left] !== s[right]){
            return deletes(left + 1, right) || deletes(left, right - 1);
        }
        left++;
        right--;
    }
    return true;
}

const s = "abca";
console.log(validPalindrome(s));
// 输入: s = "aba"
// 输出: true
// 输入: s = "abca"
// 输出: true
// 解释: 可以删除 "c" 字符 或者 "b" 字符