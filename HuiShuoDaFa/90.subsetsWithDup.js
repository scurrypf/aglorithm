// 90. 子集 II
// 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
// 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = [],track = [];
    nums.sort((a,b)=>a-b);
    const BST = function(nums,track,start){
        res.push(track.slice());
        for(let i = start ; i < nums.length ; i++){
            if(i > start && nums[i] === nums[i - 1])continue;
            track.push(nums[i]);
            BST(nums,track,i + 1);
            track.pop()
        }
    }
    BST(nums,track,0);
    return res;
}

const nums = [1,2,2];
console.log(subsetsWithDup(nums));

// 输入：nums = [1,2,2]
// 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
// 输入：nums = [0]
// 输出：[[],[0]]