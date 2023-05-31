// 剑指 Offer II 038. 每日温度
// 请根据每日 气温 列表 temperatures ，重新生成一个列表，要求其对应位置的输出为：
// 要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let ans = [], res = [];
    for(let i = temperatures.length - 1; i >= 0; i--){
        let c = temperatures[i];
        while(ans.length !== 0 && temperatures[ans[ans.length - 1]] <= c){
            ans.pop();
        }
        ans.length === 0 ? res.push(0) : res.unshift(ans[ans.length - 1] - i);
        ans.push(i);
    }
    return res;
}

const temperatures = [73,74,75,71,69,72,76,73];
console.log(dailyTemperatures(temperatures));
// 输入: temperatures = [73,74,75,71,69,72,76,73]
// 输出: [1,1,4,2,1,1,0,0]
// 输入: temperatures = [30,40,50,60]
// 输出: [1,1,1,0]