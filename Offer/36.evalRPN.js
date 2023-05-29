// 剑指 Offer II 036. 后缀表达式
// 根据 逆波兰表示法，求该后缀表达式的计算结果。
// 有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
// 说明：
// 整数除法只保留整数部分。
// 给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let res = [];
    for(i = 0; i < tokens.length; i++){
        if(tokens[i] === '+'){
            let a = parseInt(res.pop());
            let b = parseInt(res.pop());
            res.push(b + a)
        }else if(tokens[i] === '-'){
            let a = parseInt(res.pop());
            let b = parseInt(res.pop());
            res.push(b - a)
        }else if(tokens[i] === '*'){
            let a = parseInt(res.pop());
            let b = parseInt(res.pop());
            res.push(b * a)
        }else if(tokens[i] === '/'){
            let a = parseInt(res.pop());
            let b = parseInt(res.pop());
            res.push(parseInt(b / a))
        }else{
            res.push(tokens[i]);
        }
    }
    return res[0];
}

const tokens = ["2","1","+","3","*"];
console.log(evalRPN(tokens));
// 输入：tokens = ["2","1","+","3","*"]
// 输出：9
// 解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
// 输入：tokens = ["4","13","5","/","+"]
// 输出：6
// 解释：该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6