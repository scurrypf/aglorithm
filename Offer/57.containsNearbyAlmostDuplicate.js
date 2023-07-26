// 剑指 Offer II 057. 值和下标之差都在给定的范围内
// 给你一个整数数组 nums 和两个整数 k 和 t 。请你判断是否存在 两个不同下标 i 和 j，
// 使得 abs(nums[i] - nums[j]) <= t ，同时又满足 abs(i - j) <= k 。
// 如果存在则返回 true，不存在返回 false。
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    let map = new Map(), bucketSize = t + 1;
    let getBucketId = (num, bucketSize) => {
        return num > 0 ? Math.floor(num / bucketSize) : Math.floor((num + 1) / bucketSize) - 1;
    }
    for(let i = 0; i < nums.length; i++){
        let id = getBucketId(nums[i], bucketSize);
        if(map.has(id) || (map.has(id - 1) && map.get(id - 1) + t >= nums[i]) || (map.has(id + 1) && map.get(id + 1) - t <= nums[i])){
            return true;
        }
        map.set(id, nums[i]);
        if(i >= k){
            map.delete(getBucketId(nums[i - k], bucketSize));
        }
    }
    return false;
};

const nums = [1,2,3,1], k = 3, t = 0;
console.log(containsNearbyAlmostDuplicate(nums, k, t))
// 输入：nums = [1,2,3,1], k = 3, t = 0
// 输出：true
// 输入：nums = [1,0,1,1], k = 1, t = 2
// 输出：true