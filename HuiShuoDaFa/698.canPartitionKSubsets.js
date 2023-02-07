// 698. 划分为k个相等的子集
// 给定一个整数数组  nums 和一个正整数 k，找出是否有可能把这个数组分成 k 个非空子集，其总和都相等。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    if(nums.length < k)return false;
    let sum = 0;
    for(let i = 0 ; i < nums.length ; i++){
        sum +=nums[i]
    };
    if(sum % k !== 0)return false;
    let target = sum / k;
    let use = 0;
    let map = new Map()
    const BST = function(nums,k,start,bucket,use,target){
        if(k === 0){
            return true;
        }
        if(bucket === target){
            let res = BST(nums,k - 1,0,0,use,target)
            map.set(use,res);
            return res;
        }
        if(map.has(use))return map.get(use);
        for(let i = start ; i < nums.length ; i++){
            if(((use >> i) & 1) === 1)continue;
            if(bucket + nums[i] > target)continue;
            use |= 1 << i;
            bucket += nums[i];
            if(BST(nums,k,start + 1,bucket,use,target)){
                return true;
            }
            bucket -= nums[i];
            use ^= 1 << i;
        }
        return false;
    }
    return BST(nums,k,0,0,use,target)
}

const nums = [1,2,3,4], k = 3;
console.log(canPartitionKSubsets(nums,k));

// 输入： nums = [4, 3, 2, 3, 5, 2, 1], k = 4
// 输出： True
// 说明： 有可能将其分成 4 个子集（5），（1,4），（2,3），（2,3）等于总和。
// 输入: nums = [1,2,3,4], k = 3
// 输出: false