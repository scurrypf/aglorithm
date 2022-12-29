//342. 4的幂
var isPowerOfFour = function(s) {
    let f = 1;
    let n = parseInt(s);
    for(let i=0;i<100;i++){
        if(f===n){
            return true;
        };
        f=f*4;
    }
    return false;
};

const s = '64';
console.log(isPowerOfFour(s));

//125. 验证回文串
var isPalindrome = function(s) {
    let left = 0,right = s.length-1;
    s = s.toLowerCase();
    while(left<right){
        if(!isValue(s.charAt(left))){
            left++;
            continue;
        }
        if(!isValue(s.charAt(right))){
            right--;
            continue;
        }
        if(s.charAt(left)!==s.charAt(right)){
            return false;
        }
        left++;
        right--;
    }
    return true;
};
var isValue = function(c){
    return (c>='a' && c<='z') || (c>='1' && c<='9')
}

const s1 = "";
console.log(isPalindrome(s1));

//5. 最长回文子串
var longestPalindrome = function(s) {
    let len = 0;
    const findPalin = function(left,right){
        while(left>=0 && right<s.length && s.charAt(left)===s.charAt(right)){
            if(right-left+1>len){
                len = right-left+1;
            }
            left--;
            right++;
        }
    }
    for(let i=1;i<s.length;i++){
        findPalin(i-1,i);
        findPalin(i-1,i+1);
    }
    return len;
};
const str = "cbbd";
console.log(longestPalindrome(str));