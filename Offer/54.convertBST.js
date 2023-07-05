// 剑指 Offer II 054. 所有大于等于节点的值之和
// 给定一个二叉搜索树，请将它的每个节点的值替换成树中大于或者等于该节点值的所有节点值之和。

// 提醒一下，二叉搜索树满足下列约束条件：
// 节点的左子树仅包含键 小于 节点键的节点。
// 节点的右子树仅包含键 大于 节点键的节点。
// 左右子树也必须是二叉搜索树。
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let sum = 0;
    let inoder = function(root){
        if(root === null)return;
        inoder(root.right);
        sum += root.val;
        root.val = sum;
        inoder(root.left);
    }
    inoder(root);
    return root;
};


// 输入：root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
// 输出：[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]