// 剑指 Offer II 049. 从根节点到叶节点的路径数字之和
// 给定一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。
// 每条从根节点到叶节点的路径都代表一个数字：
// 例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。
// 计算从根节点到叶节点生成的 所有数字之和 。
// 叶节点 是指没有子节点的节点。
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    let dfs = function(root, num){
        if(root === null){
            return 0;
        }
        // 乘10 + 节点值
        num = num * 10 + root.val;
        // 当叶子结点时返回值
        if(root.left === null && root.right === null){
            return num;
        }
        // 对于root来说，要把两个子树的路径都加起来，而递归只在叶子节点时返回值
        return dfs(root.left, num) + dfs(root.right, num);
    }   
    return dfs(root, num);
};



// 输入：root = [1,2,3]
// 输出：25
// 解释：
// 从根到叶子节点路径 1->2 代表数字 12
// 从根到叶子节点路径 1->3 代表数字 13
// 因此，数字总和 = 12 + 13 = 25