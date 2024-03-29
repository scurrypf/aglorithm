// 剑指 Offer 67. 把字符串转换成整数
// 写一个函数 StrToInt，实现把字符串转换成整数这个功能。不能使用 atoi 或者其他类似的库函数。
// 首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。
// 当我们寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来，
// 作为该整数的正负号；假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。
// 该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数不应该造成影响。
// 注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换。
// 在任何情况下，若函数不能进行有效的转换时，请返回 0。
// 说明：
// 假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−231,  231 − 1]。如果数值超过这个范围，
// 请返回  INT_MAX (231 − 1) 或 INT_MIN (−231) 。
/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(str) {
    str = str.trim();
    let n = 1, num = 0;
    for(let i = 0; i < str.length; i++){
        if(i === 0 && str[i] === '-'){
            n = -1;
            continue;
        }else if(i === 0 && str[i] === '+'){
            n = 1;
            continue;
        }
        if((str[i] >= '0' && str[i] <= '9')){
            num = num * 10 + parseInt(str[i]);
            if(n * num < -2147483648){
                return -2147483648;
            }else if(n * num > 2147483647){
                return 2147483647
            }
        }else{
            break;
        }
    }
    return n * num;
}

const str = "-91283472332";
console.log(strToInt(str))
// 输入: "42"
// 输出: 42
// 输入: "4193 with words"
// 输出: 4193
// 解释: 转换截止于数字 '3' ，因为它的下一个字符不为数字。
// 示例 4:
// 输入: "-91283472332"
// 输出: -2147483648
// 解释: 数字 "-91283472332" 超过 32 位有符号整数范围。 
//      因此返回 INT_MIN (−231) 。