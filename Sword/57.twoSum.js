// 剑指 Offer 57. 和为s的两个数字
// 输入一个递增排序的数组和一个数字s，在数组中查找两个数，
// 使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while(left < right){
        let sum = nums[left] + nums[right];
        if(sum > target){
            right--;
        }else if(sum === target){
            return [nums[left], nums[right]]
        }else{
            left++;
        }
    }
};

const nums = [2,7,11,15], target = 9;
console.log(twoSum(nums, target))
// 输入：nums = [2,7,11,15], target = 9
// 输出：[2,7] 或者 [7,2]