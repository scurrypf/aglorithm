// 216. 组合总和 III
// 找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：
// 只使用数字1到9
// 每个数字最多使用一次 
// 返回所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let number = [];
    for(let i = 1 ; i <= 9 ; i++){
        number.push(i);
    }
    let res = [],track = [],sum = 0;
    const findCombine = function(number,start){
        if(track.length === k && sum === n){
            res.push(track.slice());
            return;
        }
        for(let i = start ; i < number.length ; i++){
            if(sum + number[i] > n)continue;
            track.push(number[i]);
            sum += number[i];
            findCombine(number,i + 1);
            sum -= number[i];
            track.pop();
        }
    }
    findCombine(number,0);
    return res;
}

const k = 3, n = 7;
console.log(combinationSum3(k,n))

// 输入: k = 3, n = 7
// 输出: [[1,2,4]]
// 解释:
// 1 + 2 + 4 = 7
// 没有其他符合的组合了。