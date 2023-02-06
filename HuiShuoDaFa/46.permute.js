// 46. 全排列
// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let track = [];
    let res = [];
    let use = new Array(nums.length).fill(false);
    const BST = function(nums,track,use){
        if(nums.length === track.length){
            res.push(track.slice());
            return;
        }
        for(let i = 0 ; i < nums.length ; i++){
            if(use[i])continue;
            use[i] = true;
            track.push(nums[i]);
            BST(nums,track,use);
            use[i] = false;
            track.pop()
        }
    }
    BST(nums,track,use);
    return res;
}

const nums = [0,1];
console.log(permute(nums));

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]
// 输入：nums = [1]
// 输出：[[1]]
