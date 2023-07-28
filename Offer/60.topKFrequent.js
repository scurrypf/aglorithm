// 剑指 Offer II 060. 出现频率最高的 k 个数字
// 给定一个整数数组 nums 和一个整数 k ，请返回其中出现频率前 k 高的元素。可以按 任意顺序 返回答案。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        map.has(nums[i]) ? map.set(nums[i], map.get(nums[i]) + 1) : map.set(nums[i], 1);
    }
    let ans = Array.from(map);// 对map使用Array.from会得到一个二维数组
    ans.sort((a, b) => b[1] - a[1]);
    let res = [];
    for(let i = 0; i < k; i++){
        res.push(ans[i][0]);
    }
    return res;
};

const nums = [1,1,1,2,2,3], k = 2;
console.log(topKFrequent(nums, k));
// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]
// 输入: nums = [1], k = 1
// 输出: [1]