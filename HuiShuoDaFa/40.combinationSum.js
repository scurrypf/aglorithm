// 40. 组合总和 II
// 给定一个候选人编号的集合 candidates 和一个目标数 target ，
// 找出 candidates 中所有可以使数字和为 target 的组合。
// candidates 中的每个数字在每个组合中只能使用 一次 。
// 注意：解集不能包含重复的组合。
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = [],track = [],sum = 0;
    candidates.sort((a,b)=>a-b);
    const findCombine = (candidates,target,start)=>{
        if(sum === target){
            res.push(track.slice());
            return;
        }
        for(let i = start ; i < candidates.length ; i++){
            if(i > start && candidates[i] === candidates[i - 1])continue;
            if(sum + candidates[i] > target)continue;
            track.push(candidates[i]);
            sum += candidates[i];
            findCombine(candidates,target,i + 1);
            sum -= candidates[i];
            track.pop();
        }
    }
    findCombine(candidates,target,0);
    return res;
}

const candidates = [2,5,2,1,2], target = 5;
console.log(combinationSum2(candidates,target))

// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
// 输出:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// 输入: candidates = [2,5,2,1,2], target = 5,
// 输出:
// [
// [1,2,2],
// [5]
// ]