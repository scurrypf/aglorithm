// 752. 打开转盘锁
// 你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' 。
// 每个拨轮可以自由旋转：例如把 '9' 变为 '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。
// 锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。
// 列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。
// 字符串 target 代表可以解锁的数字，你需要给出解锁需要的最小旋转次数，如果无论如何不能解锁，返回 -1 。
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const plusOne = function(s,j){
        let char = s.split('');
        if(char[j] == '9'){
            char[j] = '0';
        }else{
            char[j] = String(+char[j] + 1);
        }
        return char.join('');
    }
    const minOne = function(s,j){
        let char = s.split('');
        if(char[j] == '0'){
            char[j] = '9';
        }else{
            char[j] = String(+char[j] - 1);
        }
        return char.join('');
    }
    let dead = new Set(deadends);
    let visit = new Set('0000');
    let queue = [];
    let step = 0;
    queue.push('0000');
    while(queue.length){
        let sz = queue.length;
        for(let i = 0 ; i < sz ; i++){
            let cur = queue.shift();
            if(dead.has(cur))continue;
            if(cur === target)return step;
            for(let j = 0 ; j < 4 ; j++){
                let plus = plusOne(cur,j);
                if(!visit.has(plus)){
                    queue.push(plus);
                    visit.add(plus);
                };
                let min = minOne(cur,j);
                if(!visit.has(min)){
                    queue.push(min);
                    visit.add(min);
                }
            }
        }
        step++;
    }
    return -1;
}

const deadends = ["0201","0101","0102","1212","2002"], target = "0202";
console.log(openLock(deadends,target));

// 输入：deadends = ["0201","0101","0102","1212","2002"], target = "0202"
// 输出：6
// 解释：
// 可能的移动序列为 "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202"。
// 注意 "0000" -> "0001" -> "0002" -> "0102" -> "0202" 这样的序列是不能解锁的，
// 因为当拨动到 "0102" 时这个锁就会被锁定。
// 输入: deadends = ["8888"], target = "0009"
// 输出：1
// 解释：把最后一位反向旋转一次即可 "0000" -> "0009"。