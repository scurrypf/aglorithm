// 剑指 Offer II 013. 二维子矩阵的和
// 给定一个二维矩阵 matrix，以下类型的多个请求：
// 计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2) 。
// 实现 NumMatrix 类：
// NumMatrix(int[][] matrix) 给定整数矩阵 matrix 进行初始化
// int sumRegion(int row1, int col1, int row2, int col2) 返回左上角 (row1, col1) 、右下角 (row2, col2) 的子矩阵的元素总和。
/**
 * @param {number[][]} matrix
 */
let preSum;
var NumMatrix = function(matrix) {
    let m = matrix.length, n = matrix[0].length;
    preSum = new Array(m).fill(0).map(()=>new Array(n));
    for(let i = 0; i < m; i++){
        preSum[i][0] = matrix[i][0];
        for(let j = 1; j < n; j++){
            preSum[i][j] = preSum[i][j - 1] + matrix[i][j];
        }
    }
    for(let i = 1; i < m; i++){
        for(j = 0; j < n; j++){
            preSum[i][j] = preSum[i - 1][j] + preSum[i][j];
        }
    }
}

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @  return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    if(row1 == 0 && col1 == 0){
        return preSum[row2][col2];
    }else if(row1 == 0){
        return preSum[row2][col2] - preSum[row2][col1 - 1];
    }else if(col1 == 0){
        return preSum[row2][col2] - preSum[row1 - 1][col2];
    }
    return preSum[row2][col2] - preSum[row2][col1 - 1] - preSum[row1 - 1][col2] + preSum[row1 - 1][col1 - 1];
}

// 输入: 
// ["NumMatrix","sumRegion","sumRegion","sumRegion"]
// [[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[1,1,2,2],[1,2,2,4]]
// 输出: 
// [null, 8, 11, 12]
// 解释:
// NumMatrix numMatrix = new NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]]);
// numMatrix.sumRegion(2, 1, 4, 3); // return 8 (红色矩形框的元素总和)
// numMatrix.sumRegion(1, 1, 2, 2); // return 11 (绿色矩形框的元素总和)
// numMatrix.sumRegion(1, 2, 2, 4); // return 12 (蓝色矩形框的元素总和)