// 51. N 皇后
// 按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。
// n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
// 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
// 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let number = new Array(n).fill(0).map(()=>new Array(n).fill('.'));
    const isValid = function(number,m,n){
        for(let i = 0 ; i < m ; i++){
            if(number[i][n] === 'Q')return false;
        }
        for(let i = m - 1,j =n - 1 ;i >= 0 && j >= 0 ;i--,j--){
            if(number[i][j] === 'Q')return false;
        }
        for(let i = m - 1,j =n + 1 ;i >= 0 && j < number[0].length ;i--,j++){
            if(number[i][j] === 'Q')return false;
        }
        return true;
    }
    const BST = function(number,k,n){
        if(n === k){
            let ans = [];
            number.slice().forEach(element => {
                ans.push(element.join(""))
            });
            res.push(ans);
            return;
        }
        for(let i = 0 ; i < n ; i++){
            if(!isValid(number,k,i))continue;
            number[k][i] = 'Q';
            BST(number,k + 1,n);
            number[k][i] = '.'
        }
    }
    let res = [],k = 0;
    BST(number,k,n);
    return res;
}

const n = 4;
console.log(solveNQueens(n));

// 输入：n = 4
// 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// 解释：如上图所示，4 皇后问题存在两个不同的解法。
// 输入：n = 1
// 输出：[["Q"]]