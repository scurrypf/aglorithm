// 给定一个整数x，请你构造一个仅由'r'、'e'、'd'三种字符组成的字符串，其中回文子串的数量恰好为x。
// 字符串的长度不得超过105。
// 输入描述
// 一个正整数工。
// 1< x ≤109
// 输出描述
// 输出一个仅由'r'、 'e '、 'd'三种字符组成的字符串，长度不得超过105。有多解时输出任意即可。
function findStr(x){
    let len,num;
    let sum = 0;
    let res = [];
    for(let i = 1 ; i <= x ; i++){
        sum += i;
        if(sum === x){
            for(let j = 0 ; j < i ; j++){
                res.push('d');
            }
            return res.join('')
        }
        if(sum > x){
            num = i - 1;
            len = x + i - sum;
            for(let a = 0 ; a < num ; a++){
                res.push('d');
            }
            for(let j = len ; j > 0 ; j--){
                if(j % 3 == 1){
                    res.push('r')
                }
                if(j % 3 == 2){
                    res.push('e')
                }
                if(j % 3 == 0){
                    res.push('d')
                }
            }
            return res.join('')
        }
    }
}

let x = 100;
console.log(findStr(x))

// 接下来的t行，每行输入一个仅包含英文字母的字符串。所有字符串的长度之和保证不超过200000。
// 输出描述
// 对于每次询问，输出一行答案。如果可以通过重新排列组成"Baidu"，则输出"Yes"，否则输出"No"。
// 示例1
// 输入输出示例仅供调试,后台判题教据一般不包含示例
function isBD(s){
    if(s.length !== 5){
        return 'No'
    }
    for(let i =  0 ; i < s.length ; i++){
        if(s.charAt(i) !== 'B' && s.charAt(i) !== 'a' && s.charAt(i) !== 'd' && 
           s.charAt(i) !== 'i' && s.charAt(i) !== 'u'){
           return 'No'
         }
    }
    return 'Yes'
}

let str = 'BaiDu'
console.log(isBD(str))

// 小红拿到了一个数组a和一个正整数k。她想让你找到两个正整数l和r(l ≤r)，满足在[l,r]区间的元素恰好有k个。
// 用数学语言描述，即恰好有k个i满足l≤ai ≤r。你能帮帮她吗?
// 共有t组询问。
// 输入描述
// 第一行输入一个正整数t、代表询问的次数。
// 每组询问输入两行，第一行输入两个正整数n和.代表数组大小和满足条件的元素数量，第二行输入n个正整数ai.
// 1<t≤ 10
// 1 ≤k ≤n ≤ 10"1≤ai ≤109
// 输出描述
// 对于每组询问，输出一行答案。如果答案不存在，则直接输出-1。
// 否则输出两个正整数1和T，代表满足l≤ai≤r的元素恰好有k个。有多解时输出任意即可。
function findNum(k,nums){
    let map = new Map()
    for(let i = 0 ; i < nums.length ; i++){
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i]) + 1);
        }else{
            map.set(nums[i], 1)
        }
    }
    nums.sort((a,b)=>a - b)
    let left = 0, right = 0;
    let l = 0, r = 0;
    let sum = 0;
    while(right < nums.length){
        right++;
        let c = map.get(nums[right]);
        sum += c;
        while(sum >= k){
            let d = nums[left];
            if(sum === k){
                l = nums[left];
                r = nums[right];
            }
            left++;
            sum -= map.get(d);
        }
    }
    if(l === 0 && r === 0){
        return -1
    }else{
        return l + ' ' + r
    }
}

const k = 4, arr = [1, 1, 2, 2, 5, 6, 8];
console.log(findNum(k,arr))