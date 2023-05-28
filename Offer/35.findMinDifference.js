// 剑指 Offer II 035. 最小时间差
// 给定一个 24 小时制（小时:分钟 "HH:MM"）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    let min = Infinity;
    let ans = timePoints.map((ele)=>{
        let arr = ele.split(':').map((ele)=>parseInt(ele));
        return arr[0] * 60 + arr[1];
    })
    ans.sort((a, b)=>a - b);
    ans.push(ans[0] + 24 * 60);
    for(let i = 1; i < ans.length; i++){
        min = Math.min(ans[i] - ans[i - 1], min);
    }
    return min;
}

const timePoints = ["23:59","00:00"];
console.log(findMinDifference(timePoints))
// 输入：timePoints = ["23:59","00:00"]
// 输出：1
// 输入：timePoints = ["00:00","23:59","00:00"]
// 输出：0