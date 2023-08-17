// 剑指 Offer 04. 二维数组中的查找
// 在一个 n * m 的二维数组中，每一行都按照从左到右 非递减 的顺序排序，
// 每一列都按照从上到下 非递减 的顺序排序。请完成一个高效的函数，
// 输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    if(matrix.length === 0)return false; 
    let m = matrix.length, n = matrix[0].length;
    let left = 0, right = n - 1;
    while(left < m && right >= 0){
      if(matrix[left][right] === target){
        return true;
      }else if(matrix[left][right] > target){
        right--;
      }else{
        left++;
      }
    } 
    return false;
};

const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ],
  target = 20;
console.log(findNumberIn2DArray(matrix, target));
// [
//     [1,   4,  7, 11, 15],
//     [2,   5,  8, 12, 19],
//     [3,   6,  9, 16, 22],
//     [10, 13, 14, 17, 24],
//     [18, 21, 23, 26, 30]
//   ]
//   给定 target = 5，返回 true。

//   给定 target = 20，返回 false。
