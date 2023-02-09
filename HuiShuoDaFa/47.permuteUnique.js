// 47. 全排列 II
// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = [],track = [];
    nums.sort((a,b)=>a-b);
    let use = new Array(nums.length).fill(false);
    const findSort = function(nums,start,track){
        if(nums.length === track.length){
            res.push(track.slice());
            return;
        }
        for(let i = 0 ; i < nums.length ; i++){
            // 注意这里的剪枝逻辑，保持相同元素的队形
            // 即：如果前一个相等元素没有使用，那么后面的也不会使用
            if(i > 0 && nums[i] === nums[i - 1] && !use[i - 1])continue;
            if(use[i])continue;
            track.push(nums[i]);
            use[i] = true;
            findSort(nums,i + 1,track)
            track.pop();
            use[i] = false;
        }
    }
    findSort(nums,0,track);
    return res;
}

const nums = [1,1,2];
console.log(permuteUnique(nums));

// 输入：nums = [1,1,2]
// 输出：
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
//  输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]