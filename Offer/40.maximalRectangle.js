// 剑指 Offer II 040. 矩阵中最大的矩形
// 给定一个由 0 和 1 组成的矩阵 matrix ，找出只包含 1 的最大矩形，并返回其面积。
// 注意：此题 matrix 输入格式为一维 01 字符串数组。
/**
 * @param {string[]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    let transTo = function(heights){
        let max = 0, stack = [];
        stack.push(-1);
        for(let i = 0; i < heights.length; i++){
            let c = heights[i];
            while(stack[stack.length - 1] !== -1 && heights[stack[stack.length - 1]] > c){
                let height = heights[stack.pop()];
                let width = i - stack[stack.length - 1] - 1;
                max = Math.max(max, height * width);
            }
            stack.push(i);
        }
        while(stack[stack.length - 1] !== -1){
            let height = heights[stack.pop()];
            let width = heights.length - stack[stack.length - 1] - 1;
            max = Math.max(max, height * width);
        }
        return max;
    }
    if(matrix.length === 0 || matrix[0].length === 0)return 0;
    let heights = new Array(matrix[0].length).fill(0), max = 0;
    let m = matrix.length, n = matrix[0].length;
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(matrix[i][j] === '0'){
                heights[j] = 0;
            }else{
                heights[j]++;
            }
        }
        max = Math.max(max, transTo(heights))
    }
    return max;
}

const matrix = ["10100","10111","11111","10010"];
console.log(maximalRectangle(matrix));
// 输入：matrix = ["10100","10111","11111","10010"]
// 输出：6
// 解释：最大矩形如上图所示。
// 输入：matrix = []
// 输出：0