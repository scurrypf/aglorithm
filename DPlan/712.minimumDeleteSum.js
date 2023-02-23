// 712. 两个字符串的最小ASCII删除和
// 给定两个字符串s1 和 s2，返回 使两个字符串相等所需删除字符的 ASCII 值的最小和 。
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    let m = s1.length , n = s2.length;
    let meno = new Array(m).fill(0).map(()=>new Array(n).fill(-1));
    const findMin = (s1,i,s2,j)=>{
        let res = 0;
        if(i === m){
            for(;j < n;j++){
                res += s2.charCodeAt(j);
            }
            return res;
        }
        if(j === n){
            for(;i < m;i++){
                res += s1.charCodeAt(i);
            }
            return res;
        }
        if(meno[i][j] !== -1)return meno[i][j];
        if(s1[i] === s2[j]){
            meno[i][j] = findMin(s1,i + 1,s2,j + 1);
        }else{
            meno[i][j] = Math.min(findMin(s1,i + 1,s2,j) + s1.charCodeAt(i) , findMin(s1,i,s2,j + 1) + s2.charCodeAt(j))
        }
        return meno[i][j]
    }
    return findMin(s1,0,s2,0)
}

const s1 = "sea", s2 = "eat";
console.log(minimumDeleteSum(s1,s2));

// 输入: s1 = "sea", s2 = "eat"
// 输出: 231
// 解释: 在 "sea" 中删除 "s" 并将 "s" 的值(115)加入总和。
// 在 "eat" 中删除 "t" 并将 116 加入总和。
// 结束时，两个字符串相等，115 + 116 = 231 就是符合条件的最小和。
// 输入: s1 = "delete", s2 = "leet"
// 输出: 403
// 解释: 在 "delete" 中删除 "dee" 字符串变成 "let"，
// 将 100[d]+101[e]+101[e] 加入总和。在 "leet" 中删除 "e" 将 101[e] 加入总和。
// 结束时，两个字符串都等于 "let"，结果即为 100+101+101+101 = 403 。
// 如果改为将两个字符串转换为 "lee" 或 "eet"，我们会得到 433 或 417 的结果，比答案更大。