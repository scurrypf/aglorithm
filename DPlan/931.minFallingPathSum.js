// 931. 下降路径最小和
// 给你一个 n x n 的 方形 整数数组 matrix ，请你找出并返回通过 matrix 的下降路径 的 最小和 。
// 下降路径 可以从第一行中的任何元素开始，并从每一行中选择一个元素。
// 在下一行选择的元素和当前行所选元素最多相隔一列（即位于正下方或者沿对角线向左或者向右的第一个元素）。
// 具体来说，位置 (row, col) 的下一个元素应当是 (row + 1, col - 1)、(row + 1, col) 或者 (row + 1, col + 1) 。
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    // 从下开始
    // let n = matrix.length;
    // let dp = new Array(n + 1).fill(0).map(()=>new Array(n + 1).fill(666666))
    // const findMin = function(matrix,i,j){
    //     if(i < 0 || j < 0 || j >= n)return Infinity;
    //     if(i == 0)return matrix[i][j];
    //     if(dp[i][j] !== 666666)return dp[i][j];
    //     dp[i][j] = matrix[i][j] + Math.min(findMin(matrix,i - 1,j - 1),Math.min(findMin(matrix,i - 1,j),findMin(matrix,i - 1,j + 1)))
    //     return dp[i][j];
    // }
    // let res = 9999999;
    // for(let i = 0 ; i < n ; i++){
    //     res = Math.min(res,findMin(matrix,n - 1,i))
    // }
    // return res;
    // 从上开始
    let n = matrix.length;
    let dp = new Array(n + 1).fill(0).map(()=>new Array(n + 1).fill(666666))
    const findMin = function(matrix,i,j){
        if(i > n || j < 0 || j >= n)return Infinity;
        if(i === n - 1)return matrix[i][j];
        if(dp[i][j] !== 666666)return dp[i][j]
        dp[i][j] = matrix[i][j] + Math.min(findMin(matrix,i + 1 ,j + 1) ,Math.min(findMin(matrix,i + 1,j)) ,findMin(matrix,i + 1, j - 1) )
        return dp[i][j] 
    }
    let res = 99999;
    for(let i = 0 ; i < n ; i++){
        res = Math.min(res,findMin(matrix,0,i));
    }
    return res;
}

const matrix = [[2,1,3],[6,5,4],[7,8,9]];
console.log(minFallingPathSum(matrix));

// 输入：matrix = [[2,1,3],[6,5,4],[7,8,9]]
// 输出：13
// 解释：如图所示，为和最小的两条下降路径
// 输入：matrix = [[-19,57],[-40,-5]]
// 输出：-59
// 解释：如图所示，为和最小的下降路径