// 77. 组合
// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
// 你可以按 任何顺序 返回答案。
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [],track = [];
    const BST = function(n,start){
        if(track.length === k){
            res.push(track.slice())
            return;
        }
        for(let i = start ; i <= n ; i++){
            track.push(i)
            BST(n,i + 1);
            track.pop();
        }
    }
    BST(n,1);
    return res;
}

const n = 4, k = 2;
console.log(combine(n,k))

// 输入：n = 4, k = 2
// 输出：
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]