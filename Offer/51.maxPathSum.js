// 剑指 Offer II 051. 节点之和最大的路径
// 路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。
// 同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。
// 路径和 是路径中各节点值的总和。
// 给定一个二叉树的根节点 root ，返回其 最大路径和，即所有路径上节点值之和的最大值。
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = -Infinity;
    let dfs = function(root){
        if(root === null)return 0;
        let left = dfs(root.left);
        let right = dfs(root.right);
        max = Math.max(max, root.val + left + right);
        return (Math.max(left, right) + root.val) < 0 ? 0 : (Math.max(left, right) + root.val);
    }
    dfs(root)
    return max;
};  



// 输入：root = [1,2,3]
// 输出：6
// 解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6