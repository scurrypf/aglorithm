// 316. 去除重复字母
// 给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。
// 需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let stack = [],map = new Map(),isHas = new Map();
    for(let i=0;i<s.length;i++){
        let c = s.charAt(i)
        if(map.has(c)){
            map.set(c,map.get(c)+1);
        }else{
            map.set(c,1);
        }
    }
    for(let i=0;i<s.length;i++){
        let c = s.charAt(i);
        if(!isHas.has(c)){
            isHas.set(c,false);
        }
    }
    for(let i=0;i<s.length;i++){
        let c = s.charAt(i);
        if(map.get(c)>0){
            map.set(c,map.get(c)-1);
        }
        if(isHas.get(c)===true){
            continue;
        }
        while(stack.length!==0 && c<stack[stack.length-1]){
            //注意这个if的条件
            if(map.get(stack[stack.length-1])===0){
                break;
            }
            isHas.set(stack.pop(),false)
        }
        stack.push(c);
        isHas.set(c,true);
    }
    return stack.join('');
};

const s = "cbacdcbc";
console.log(removeDuplicateLetters(s));

// 输入：s = "bcabc"
// 输出："abc"
// 输入：s = "cbacdcbc"
// 输出："acdb"