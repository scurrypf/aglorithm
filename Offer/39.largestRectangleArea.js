// 剑指 Offer II 039. 直方图最大矩形面积
// 给定非负整数数组 heights ，数组中的数字用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
// 求在该柱状图中，能够勾勒出来的矩形的最大面积。
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let res = [], max = 0;
    res.push(-1)
    for(let i = 0; i < heights.length; i++){
        while(res[res.length - 1] !== -1 && heights[i] < heights[res[res.length - 1]]){
            let height = heights[res.pop()];
            let width = i - res[res.length - 1] - 1;
            max = Math.max(max, height * width);
        }
        res.push(i);
    }
    while(res[res.length - 1] !== -1){
        let height = heights[res.pop()];
        let width = heights.length - res[res.length - 1] - 1;
        max = Math.max(max, height * width);
    }
    return max;
}

const heights = [2,1,5,6,2,3];
console.log(largestRectangleArea(heights));
// 输入：heights = [2,1,5,6,2,3]
// 输出：10
// 解释：最大的矩形为图中红色区域，面积为 10