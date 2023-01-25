// 96. 不同的二叉搜索树
// 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？
// 返回满足题意的二叉搜索树的种数。
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let msg = new Array(n + 1).fill(0).map(()=>new Array(n+1).fill(0))
    const sum = function(start,end){
        let res = 0;
        if(start > end)return 1;
        if(msg[start][end] !== 0)return msg[start][end];
        for(let i = start ; i <= end ; i++){
            let left = sum(start,i - 1);
            let right = sum(i + 1,end);
            res += left * right;
        }
        msg[start][end] = res;
        return res;
    }
    return sum(1,n);
}

// 输入：n = 3
// 输出：5
// 输入：n = 1
// 输出：1
