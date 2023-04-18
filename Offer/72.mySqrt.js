// 剑指 Offer II 072. 求平方根
// 给定一个非负整数 x ，计算并返回 x 的平方根，即实现 int sqrt(int x) 函数。
// 正数的平方根有两个，只输出其中的正数平方根。
// 如果平方根不是整数，输出只保留整数的部分，小数部分将被舍去。
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let left = 1, right = x;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(mid <= x / mid){
            if(mid + 1 > x / (mid + 1)){
                return mid;
            }
            left = mid + 1;
        }else{
            right = mid - 1; 
        }
    }
    return 0;
}

let x = 8;
console.log(mySqrt(x))
// 输入: x = 4
// 输出: 2
// 输入: x = 8
// 输出: 2
// 解释: 8 的平方根是 2.82842...，由于小数部分将被舍去，所以返回 2