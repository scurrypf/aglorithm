// 130. 被围绕的区域
// 给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，
// 找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
//方法一——并查集
var solve = function(board) {
    //如果为0，直接return
    if(board.length === 0)return;
    let m = board.length;
    let n = board[0].length;
    let uf = new UF(m*n + 1);
    let mn = m*n;
    //检查首尾两行
    for(let i = 0 ; i < n ; i++){
        let x = board[0][i],y = board[m - 1][i];
        if(x === 'O'){
            uf.union(mn,i)
        }
        if(y === 'O'){
            uf.union(mn,(m - 1)*n + i)
        }
    }
    //检查首尾两列
    for(let i = 0 ; i < m ; i++){
        let x = board[i][0],y = board[i][n - 1];
        if(x === 'O'){
            uf.union(mn,i*n)
        }
        if(y === 'O'){
            uf.union(mn,n*i + (n - 1))
        }
    }
    let sxzy = [[0,1],[1,0],[0,-1],[-1,0]];
    for(let i = 1 ; i < m - 1 ; i++){
        for(let j = 1 ; j < n - 1 ; j++){
            if(board[i][j] === 'O'){
                for(let v of sxzy){
                    if(board[i - v[0]][j - v[1]] === 'O'){
                        uf.union(n*i+j,n*(i - v[0])+(j - v[1]))
                    }
                }
            }
            
        }
    }
    for(let i = 1 ; i < m - 1 ; i++){
        for(let j = 1 ; j < n - 1 ; j++){
            if(!uf.isConnected(mn,n*i + j))board[i][j] = 'X'
        }
    }
    return board;
}
//union-find
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

const board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]];
console.log(solve(board));

// 输入：board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// 输出：[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// 解释：被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 
// 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
// 输入：board = [["X"]]
// 输出：[["X"]]