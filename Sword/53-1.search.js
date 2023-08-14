// 剑指 Offer 53 - I. 在排序数组中查找数字 I
// 统计一个数字在排序数组中出现的次数。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let check = function(isLeft){
        let left = 0, right = nums.length - 1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(nums[mid] > target){
                right = mid - 1;
            }else if(nums[mid] < target){
                left = mid + 1;
            }else{
                // 这里并没有一直向前或向后找到第一个不等于target的值，因为这样时间复杂度会退化到O(n)
                if(isLeft){
                    if(nums[mid - 1] === nums[mid]){
                        right = mid - 1;
                    }else{
                        return mid;
                    }
                }else{
                    if(nums[mid] === nums[mid + 1]){
                        left = mid + 1;
                    }else{
                        return mid;
                    }
                }
            }
        }
        return -1;
    }
    let right = check(false), left = check(true);
    return right === -1 && left === -1 ? 0 : right - left + 1;
};

const nums = [5,7,7,8,8,10], target = 8;
console.log(search(nums, target))
// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: 2 