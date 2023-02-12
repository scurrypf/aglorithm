// 695. 岛屿的最大面积
// 给你一个大小为 m x n 的二进制矩阵 grid 。
// 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在 水平或者竖直的四个方向上 相邻。
// 你可以假设 grid 的四个边缘都被 0（代表水）包围着。
// 岛屿的面积是岛上值为 1 的单元格的数目。
// 计算并返回 grid 中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const toSea = function(grid,i,j){
        let m = grid.length , n = grid[0].length;
        if(i < 0 || j < 0 || i >= m || j >= n)return 0;
        if(grid[i][j] == 0)return 0;
        grid[i][j] = 0;
        return toSea(grid,i - 1,j)+
        toSea(grid,i + 1,j)+
        toSea(grid,i,j - 1)+
        toSea(grid,i,j + 1)+1
    }
    let m = grid.length , n = grid[0].length;
    let maxArea = 0;
    for(let i = 0 ; i < m ; i++){
        for(let j = 0 ; j < n ; j++){
            if(grid[i][j] == 1){
                maxArea = Math.max(maxArea,toSea(grid,i,j))
            }
        }
    }
    return maxArea;
}

const grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]];
console.log(maxAreaOfIsland(grid))

// 输入：grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// 输出：6
// 解释：答案不应该是 11 ，因为岛屿只能包含水平或垂直这四个方向上的 1 。
