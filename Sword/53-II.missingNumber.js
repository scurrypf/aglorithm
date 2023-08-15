// 剑指 Offer 53 - II. 0～n-1中缺失的数字
// 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。
// 在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
/**
 * @param {number[]} nums
 * @return {number}
 */
// 看到递增排序数组首先想到二分法
var missingNumber = function(nums) {
    let left = 0, right = nums.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] === mid){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return left;
}

const nums = [0,1,3];
console.log(missingNumber(nums));
// 输入: [0,1,3]
// 输出: 2