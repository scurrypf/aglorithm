// 剑指 Offer II 050. 向下的路径节点之和
// 给定一个二叉树的根节点 root ，和一个整数 targetSum ，
// 求该二叉树里节点值之和等于 targetSum 的 路径 的数目。
// 路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let res = 0;
    let map = new Map();
    let dfs = function(root, preSum){
        if(root === null)return;
        map.set(preSum, (map.get(preSum) || 0) + 1);
        let target = preSum + root.val;
        res += map.get(target - targetSum) || 0;
        dfs(root.left, target);
        dfs(root.right, target);
        map.set(preSum, map.get(preSum) - 1);
    }
    dfs(root, 0);
    return res;
};



// 输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
// 输出：3
// 解释：和等于 8 的路径有 3 条，如图所示。