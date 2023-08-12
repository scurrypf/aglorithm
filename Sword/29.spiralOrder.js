// 剑指 Offer 29. 顺时针打印矩阵
// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = [];
    let m = matrix.length, n = matrix[0].length;
    let up = 0, bottom = m - 1;
    let left = 0, right = n - 1;
    while(res.length !== m * n){
        if(up <= bottom){
            for(let i = left; i <= right; i++){
                res.push(matrix[up][i]);
            }
            up++;
        }
        if(left <= right){
            for(let i = up; i <= bottom; i++){
                res.push(matrix[i][right]);
            }
            right--;
        }
        if(up <= bottom){
            for(let i = right; i >= left; i--){
                res.push(matrix[bottom][i])
            }
            bottom--;
        }
        if(left <= right){
            for(let i = bottom; i >= up; i--){
                res.push(matrix[i][left])
            }
            left++;
        }
    }
    return res;
};

const matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(spiralOrder(matrix));
// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]