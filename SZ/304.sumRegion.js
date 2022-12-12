// 304.二维区域和检索 - 矩阵不可变
// 给定一个二维矩阵 matrix，以下类型的多个请求：
// 计算其子矩形范围内元素的总和，该子矩阵的 左上角 为 (row1, col1) ，右下角 为 (row2, col2) 。
// 实现 NumMatrix 类：
// NumMatrix(int[][] matrix) 给定整数矩阵 matrix 进行初始化
// int sumRegion(int row1, int col1, int row2, int col2) 返回 左上角 (row1, col1) 、右下角 (row2, col2) 所描述的子矩阵的元素 总和 。
 //* @param {number[][]} matrix

var NumMatrix = function(matrix) {
    this.sum1=[];
    for(let i=0 ; i<matrix.length ; i++){
        this.sum1[i]=new Array(matrix[0].length).fill(0);//遍历sum1的每一项，并初始化一个数组，使sum1成为二维数组
        for(let j=0 ; j<matrix[0].length ; j++){
            if(j===0){
                this.sum1[i][j]=matrix[i][j];
            }else {        //else！！！！important
            this.sum1[i][j]=this.sum1[i][j-1]+matrix[i][j];//每一行的加起来
            }
        }
    }
    for(let i=1 ; i<matrix.length ; i++){    //从第一行开始，第0行不用遍历
        for(let j=0 ; j<matrix[0].length ; j++){
            this.sum1[i][j]=this.sum1[i-1][j]+this.sum1[i][j];//把每一个sum1再加上前面的行
        }
    }
};
//  * @param {number} row1 
//  * @param {number} col1 
//  * @param {number} row2 
//  * @param {number} col2
//  * @return {number} 
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    if(row1===0 && col1===0){
        return this.sum1[row2][col2];
    }else if(row1===0){
        return this.sum1[row2][col2]-this.sum1[row2][col1-1];
    }else if(col1===0){
        return this.sum1[row2][col2]-this.sum1[row1-1][col2];
    }
    return this.sum1[row2][col2]-this.sum1[row2][col1-1]-this.sum1[row1-1][col2]+this.sum1[row1-1][col1-1];
};
const num=new NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]);
console.log(num.sumRegion(1, 1, 2, 2));

//  * Your NumMatrix object will be instantiated and called as such:
//  * var obj = new NumMatrix(matrix)
//  * var param_1 = obj.sumRegion(row1,col1,row2,col2)

// 输入: 
// ["NumMatrix","sumRegion","sumRegion","sumRegion"]
// [[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[1,1,2,2],[1,2,2,4]]
//矩阵：
// 3 0 1 4 2
// 5 6 2 3 1
// 1 2 0 1 5
// 4 1 0 1 7
// 1 0 3 0 5
// 输出: 
// [null, 8, 11, 12]
// 解释:
// NumMatrix numMatrix = new NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]);
// numMatrix.sumRegion(2, 1, 4, 3); // return 8 (红色矩形框的元素总和)
// numMatrix.sumRegion(1, 1, 2, 2); // return 11 (绿色矩形框的元素总和)
// numMatrix.sumRegion(1, 2, 2, 4); // return 12 (蓝色矩形框的元素总和)
