// 64. 最小路径和
// 给定一个包含非负整数的 m x n 网格 grid ，
// 请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
// 说明：每次只能向下或者向右移动一步。
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length, n = grid[0].length;
    let meno = new Array(m + 1).fill(0).map(()=>new Array(n + 1).fill(-1))
    let dp = function(grid, i, j){
        if(i == 0 && j == 0)return grid[0][0];
        if(i < 0 || j < 0)return Infinity;
        if(meno[i][j] !== -1)return meno[i][j];
        let res = Math.min(dp(grid, i - 1, j), dp(grid, i, j - 1)) + grid[i][j];
        meno[i][j] = res;
        return meno[i][j];
    }
    return dp(grid, m - 1, n - 1);
}

const grid = [[1,3,1],[1,5,1],[4,2,1]];
console.log(minPathSum(grid));

// 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
// 输出：7
// 解释：因为路径 1→3→1→1→1 的总和最小。
// 输入：grid = [[1,2,3],[4,5,6]]
// 输出：12