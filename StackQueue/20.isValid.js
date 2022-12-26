// 20. 有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let map = new Map();
    map.set(']','['),map.set(')','('),map.set('}','{');
    for(let i=0;i<s.length;i++){
        let c = s.charAt(i);
        if(map.get(c)){
            if(stack.length!==0 && stack[stack.length-1]===map.get(c)){
                stack.pop();
            }else{
                return false;
            }
        }else{
            stack.push(c);
        }
    }
    return stack.length===0;
}

const s = "]";
console.log(isValid(s));

// 输入：s = "()"
// 输出：true
// 输入：s = "(]"
// 输出：false