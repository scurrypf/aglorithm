// 剑指 Offer 20. 表示数值的字符串
// 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
// 数值（按顺序）可以分成以下几个部分：
// 若干空格
// 一个 小数 或者 整数
// （可选）一个 'e' 或 'E' ，后面跟着一个 整数
// 若干空格
// 小数（按顺序）可以分成以下几个部分：
// （可选）一个符号字符（'+' 或 '-'）
// 下述格式之一：
// 至少一位数字，后面跟着一个点 '.'
// 至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字
// 一个点 '.' ，后面跟着至少一位数字
// 整数（按顺序）可以分成以下几个部分：
// （可选）一个符号字符（'+' 或 '-'）
// 至少一位数字
// 部分数值列举如下：
// ["+100", "5e2", "-123", "3.1416", "-1E-16", "0123"]
// 部分非数值列举如下：
// ["12e", "1a3.14", "1.2.3", "+-5", "12e+5.4"]
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    let numFlag = false, eFlag = false, dotFlag = false;
    s = s.trim();
    for(let i = 0; i < s.length; i++){
        if(s[i] >= '0' && s[i] <= '9'){
            numFlag = true;
        }else if(s[i] === '.' && !eFlag && !dotFlag){
            dotFlag = true;
        }else if((s[i] === 'e' || s[i] === 'E') && !eFlag && numFlag){
            eFlag = true;
            numFlag = false; // 用于判断e后是否含有数字
        }else if((s[i] === '+' || s[i] === '-') && (i === 0 || (eFlag && !numFlag))){

        }else{
            return false;
        }
    }
    return numFlag;
};

const s = "e9";
console.log(isNumber(s));
// 输入：s = "    .1  "
// 输出：true