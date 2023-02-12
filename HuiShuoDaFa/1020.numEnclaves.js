// 1020. 飞地的数量
// 给你一个大小为 m x n 的二进制矩阵 grid ，其中 0 表示一个海洋单元格、1 表示一个陆地单元格。
// 一次 移动 是指从一个陆地单元格走到另一个相邻（上、下、左、右）的陆地单元格或跨过 grid 的边界。
// 返回网格中 无法 在任意次数的移动中离开网格边界的陆地单元格的数量。
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    const toSea = function(grid,i,j){
        let m = grid.length , n = grid[0].length;
        if(i < 0 || j < 0 || i >= m || j >= n)return;
        if(grid[i][j] == 0)return;
        grid[i][j] = 0;
        toSea(grid,i - 1,j)
        toSea(grid,i + 1,j)
        toSea(grid,i,j - 1)
        toSea(grid,i,j + 1)
    }
    let m = grid.length , n = grid[0].length;
    let res = 0;
    for(let i = 0 ; i < m ; i++){
        toSea(grid,i,0);
        toSea(grid,i,n - 1);
    }
    for(let j = 0 ; j < n ; j++){
        toSea(grid,0,j);
        toSea(grid,m - 1,j);
    }
    for(let i = 0 ; i < m ; i++){
        for(let j = 0 ; j < n ; j++){
            if(grid[i][j] == 1){
                res++;
            }
        }
    }
    return res;
}

const grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]];
console.log(numEnclaves(grid));

// 输入：grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
// 输出：3
// 解释：有三个 1 被 0 包围。一个 1 没有被包围，因为它在边界上。
// 输入：grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
// 输出：0
// 解释：所有 1 都在边界上或可以到达边界。