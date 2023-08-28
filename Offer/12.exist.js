// 剑指 Offer 12. 矩阵中的路径
// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。
// 同一个单元格内的字母不允许被重复使用。
// 例如，在下面的 3×4 的矩阵中包含单词 "ABCCED"（单词中的字母已标出）。
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let m = board.length, n = board[0].length;
    let search = function(i, j, k){
        if(i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[k]){
            return false;
        }
        if(k === word.length - 1)return true;
        let tmp = board[i][j];
        board[i][j] = 0;
        let flag = false;
        let find = [[0, -1], [1, 0],[-1, 0], [0, 1]];
        for(let cal of find){
            x = i + cal[0];
            y = j + cal[1];
            flag = flag || search(x, y, k + 1);
            if(flag){
                break;
            }
        }
        board[i][j] = tmp;
        return flag;
    }
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(search(i, j, 0)){
                return true;
            }
        }
    }
    return false;
};

const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED";
console.log(exist(board, word));
// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// 输出：true
// 示例 2：
// 输入：board = [["a","b"],["c","d"]], word = "abcd"
// 输出：false