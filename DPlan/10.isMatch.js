// 10. 正则表达式匹配
// 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
// '.' 匹配任意单个字符
// '*' 匹配零个或多个前面的那一个元素
// 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p){
    let m = s.length , n = p.length;
    const dp = function(s,i,p,j){
        if(i === m){
            if((n - j)%2 == 1)return false;
            for(;j < n - 1;j += 2){
                if(p[j + 1] !== '*'){
                    return false;
                }
            }
            return true;
        }
        if(j === n){
            return i === m;
        }
        let res = false
        if(s[i] === p[j] || p[j] === '.'){
            if(j < n - 1 && p[j + 1] == '*'){
                // 注：这里是j + 2，因为p[j+1]是*，所以要跨两个
                res = dp(s,i,p,j + 2) || dp(s,i + 1,p,j);
            }else{
                res = dp(s,i + 1,p,j + 1);
            }
        }else{
            if(j < n - 1 && p[j + 1] == '*'){
                res = dp(s,i,p,j + 2);
            }else{
                res = false;
            }
        }
        return res;
    }
    return dp(s,0,p,0)
}

const s = "aa", p = "a*";
console.log(isMatch(s,p))

// 输入：s = "aa", p = "a"
// 输出：false
// 解释："a" 无法匹配 "aa" 整个字符串。
// 输入：s = "aa", p = "a*"
// 输出：true
// 解释：因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。