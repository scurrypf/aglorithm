// 剑指 Offer II 018. 有效的回文
// 给定一个字符串 s ，验证 s 是否是 回文串 ，只考虑字母和数字字符，可以忽略字母的大小写。
// 本题中，将空字符串定义为有效的 回文串 。
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let ans = [];
    for(let i = 0; i < s.length; i++){
        let c = s.charAt(i);
        // 正则判断字符再a-z，0-9，A-Z之间
        if(/[a-z0-9A-Z]/.test(c)){
            ans.push(c.toLocaleLowerCase())
        }
    }
    let left = 0, right = ans.length - 1;
    while(left < right){
        if(ans[left] !== ans[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

let s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
// 输入: s = "A man, a plan, a canal: Panama"
// 输出: true
// 解释："amanaplanacanalpanama" 是回文串
// 输入: s = "race a car"
// 输出: false
// 解释："raceacar" 不是回文串