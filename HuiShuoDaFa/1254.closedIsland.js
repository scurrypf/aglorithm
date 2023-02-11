// 1254. 统计封闭岛屿的数目
// 二维矩阵 grid 由 0 （土地）和 1 （水）组成。岛是由最大的4个方向连通的 0 组成的群，
// 封闭岛是一个 完全 由1包围（左、上、右、下）的岛。
// 请返回 封闭岛屿 的数目。
/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    const toSea = function(grid,i,j){
        let m = grid.length,n = grid[0].length;
        if(i < 0 || j < 0 || i >= m || j >= n)return;
        if(grid[i][j] == '1')return;
        grid[i][j] = '1';
        toSea(grid,i - 1,j);
        toSea(grid,i + 1,j);
        toSea(grid,i,j - 1);
        toSea(grid,i,j + 1);
    }
    let m = grid.length,n = grid[0].length;
    let res = 0;
    for(let i = 0 ; i < m ;i++){
        toSea(grid,i,0);
        toSea(grid,i,n - 1);
    }
    for(let j = 0 ; j < n ;j++){
        toSea(grid,0,j);
        toSea(grid,m - 1,j);
    }
    for(let i = 0 ; i < m ;i++){
        for(let j = 0 ; j < n ;j++){
            if(grid[i][j] == 0){
                res++;
                toSea(grid,i,j)
            }
        }
    }
    return res;
}

const grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]];
console.log(closedIsland(grid));

// 输入：grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
// 输出：2
// 解释：
// 灰色区域的岛屿是封闭岛屿，因为这座岛屿完全被水域包围（即被 1 区域包围）。
// 输入：grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
// 输出：1