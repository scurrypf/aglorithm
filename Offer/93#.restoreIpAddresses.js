// 93. 复原 IP 地址
// 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
// 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，
// 但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
// 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，
// 这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let track = [], res = [];
    let isValid = function(s, start, end){
        let len = end - start + 1;
        if(len <= 0 || len > 3)return false;
        if(len === 1)return true;
        if(s[start] === '0')return false;
        if(len === 2)return true;
        if(len === 3 && parseInt(s.slice(start, start + len)) <= 255){
            return true;
        }else{
           return false; 
        }  
    }
    let BST = function(track, start){
        if(track.length === 4 && start === s.length){
            res.push(track.join('.'))
        }
        for(let i = start; i < s.length; i++){
            if(!isValid(s, start, i))continue;
            if(track.length > 4)break;
            track.push(s.slice(start, i + 1));
            BST(track, i + 1);
            track.pop();
        }
    }
    BST(track, 0);
    return res;
}

let s = "25525511135";
console.log(restoreIpAddresses(s));
// 输入：s = "25525511135"
// 输出：["255.255.11.135","255.255.111.35"]
// 输入：s = "0000"
// 输出：["0.0.0.0"]