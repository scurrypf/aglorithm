// 5. 最长回文子串
// 给你一个字符串 s，找到 s 中最长的回文子串。
var longestPalindrome = function(s) {
    let start = 0,maxLength = 1;
    const find=function(left,right){
        //双指针从中心扩散寻找最长子串
        while(left>=0 && right< s.length && s.at(left)===s.at(right)){
            if(right-left+1>maxLength){
                maxLength=right-left+1;//最大子串长度
                start = left ;//子串初始索引设为left
            }
            left--;//注意别忘记控制循环
            right++;
        }
    }
    for(let i=0; i<s.length ;i++ ){
        find(i-1,i+1);//奇数字符串
        find(i,i+1)//偶数字符串
    }
    return s.substring(start,start+maxLength)
}
const s="cbbd";
console.log(longestPalindrome(s));

// eg.
// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 输入：s = "cbbd"
// 输出："bb"