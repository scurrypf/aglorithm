// 739. 每日温度
// 给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，
// 其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = [],res= [];
    let n = temperatures.length;
    for(let i=n-1;i>=0;i--){
        while(stack.length!==0 && temperatures[stack[stack.length-1]]<=temperatures[i]){
            stack.pop();
        }
        if(stack.length!==0){
            res[i]=stack[stack.length-1]-i;
        }else{
            res[i] = 0;
        }
        stack.push(i);
    }
    return res;
}

const temperatures = [30,40,50,60];
console.log(dailyTemperatures(temperatures));

// 输入: temperatures = [73,74,75,71,69,72,76,73]
// 输出: [1,1,4,2,1,1,0,0]
// 输入: temperatures = [30,40,50,60]
// 输出: [1,1,1,0]
// 输入: temperatures = [30,60,90]
// 输出: [1,1,0]