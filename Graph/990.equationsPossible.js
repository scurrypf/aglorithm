// 990. 等式方程的可满足性
// 给定一个由表示变量之间关系的字符串方程组成的数组，每个字符串方程 equations[i] 的长度为 4，
// 并采用两种不同的形式之一："a==b" 或 "a!=b"。在这里，a 和 b 是小写字母（不一定不同），表示单字母变量名。
// 只有当可以将整数分配给变量名，以便满足所有给定的方程时才返回 true，否则返回 false。 
/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    let uf = new UF(26);
    for(let v of equations){
        if(v[1] === '='){
            //注意这里必须charCodeAt，然后减去a的charCodeAt
            uf.union(v[0].charCodeAt() - 'a'.charCodeAt(),v[3].charCodeAt() - 'a'.charCodeAt());
        }
    }
    for(let v of equations){
        if(v[1] === '!'){
            if(uf.isConnected(v[0].charCodeAt() - 'a'.charCodeAt(),v[3].charCodeAt() - 'a'.charCodeAt())){
                return false;
            }
        }
    }
    return true;
}
class UF{
    constructor(n){
        this.count = n;
        this.parent = new Array(n);
        for(let i = 0 ; i < n ; i++){
            this.parent[i] = i;
        }
    }
    find(x){
        while(this.parent[x] !== x){
            this.parent[x] = this.parent[this.parent[x]];
            x = this.parent[x];
        }
        return x;
    }
    union(p,q){
        let uq = this.find(q);
        let up = this.find(p);
        if(uq === up)return;
        this.parent[uq] = up;
        this.count--;
        return;
    }
    isConnected(p,q){
        let uq = this.find(q);
        let up = this.find(p);
        return uq === up;
    }
    count(){
        return this.count;
    }
}

const equations = ["b==a","a==b"];
console.log(equationsPossible(equations));

// 输入：["a==b","b!=a"]
// 输出：false
// 解释：如果我们指定，a = 1 且 b = 1，那么可以满足第一个方程，但无法满足第二个方程。没有办法分配变量同时满足这两个方程。
// 输入：["b==a","a==b"]
// 输出：true
// 解释：我们可以指定 a = 1 且 b = 1 以满足满足这两个方程。
// 输入：["a==b","b==c","a==c"]
// 输出：true