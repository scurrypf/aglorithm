// 567. 字符串的排列
// 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。
// 换句话说，s1 的排列之一是 s2 的 子串 。
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let right = 0,left = 0,num = 0,len = Infinity;
    let need = new Map(),window = new Map();
    for(let i = 0 ; i<s1.length ; i++){
        if(need.has(s1.charAt(i))){
            need.set(s1.charAt(i),need.get(s1.charAt(i))+1);
        }else{
            need.set(s1.charAt(i),1);
        }
    }
    while(right<s2.length){
        let c = s2.charAt(right);
        right++;
        if(need.has(c)){
            if(window.has(c)){
                window.set(c,window.get(c)+1);
            }else{
                window.set(c,1)
            }
            if(window.get(c)===need.get(c)){
                num++;
            }
        }
        while(num===need.size){
            if(right-left<len){
                len=right-left;
            }
            let d = s2.charAt(left);
            left++;
            if(need.has(d)){
                if(need.get(d)===window.get(d)){
                    num--;
                }
                window.set(d,window.get(d)-1);
            }
        }
    }
    if(len===s1.length){
        return true;
    }else{
        return false;
    }
}

const s1= "ab" ,s2 = "eidboaoo";
console.log(checkInclusion(s1,s2));

// 输入：s1 = "ab" s2 = "eidbaooo"
// 输出：true
// 解释：s2 包含 s1 的排列之一 ("ba").
// 输入：s1= "ab" s2 = "eidboaoo"
// 输出：false