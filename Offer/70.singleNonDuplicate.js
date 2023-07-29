// 剑指 Offer II 070. 排序数组中只出现一次的数字
// 给定一个只包含整数的有序数组 nums ，每个元素都会出现两次，唯有一个数只会出现一次，请找出这个唯一的数字。
// 你设计的解决方案必须满足 O(log n) 时间复杂度和 O(1) 空间复杂度。
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let left = 0, right = Math.floor(nums.length / 2);
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let id = mid * 2;
        if(id < nums.length - 1 && nums[id] !== nums[id + 1]){
            if(mid === 0 || nums[id - 1] === nums[id - 2]){
                return nums[id]
            }
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return nums[nums.length - 1];
};

const nums = [1,1,2,3,3,4,4,8,8];
console.log(singleNonDuplicate(nums))
// 输入: nums = [1,1,2,3,3,4,4,8,8]
// 输出: 2
// 输入: nums =  [3,3,7,7,10,11,11]
// 输出: 10