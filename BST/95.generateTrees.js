// 95. 不同的二叉搜索树 II
// 给你一个整数 n ，请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。
// 可以按 任意顺序 返回答案。
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    //n = 0时,返回空数组
    if(n === 0)return[];
    const buidTree = function(start,end){
        //每轮返回一个新的res数组
        let res = []
        if(start > end){
            res.push(null);
            return res;
        }
        for(let i = start ; i <= end ; i++){
            let leftTree = buidTree(start,i - 1);
            let rightTree = buidTree(i + 1,end);
            //通过双重for循环来生成BST
            for(let left of leftTree){
                for(let right of rightTree){
                    let root = new TreeNode(i);
                    root.left = left;
                    root.right = right;
                    res.push(root);
                }
            }
        }
        return res;
    }
    return buidTree(1,n);
}

// 输入：n = 3
// 输出：[[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
// 输入：n = 1
// 输出：[[1]]