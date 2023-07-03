// 剑指 Offer II 052. 展平二叉搜索树
// 给你一棵二叉搜索树，请 按中序遍历 将其重新排列为一棵递增顺序搜索树，
// 使树中最左边的节点成为树的根节点，并且每个节点没有左子节点，只有一个右子节点。
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let dummy = new TreeNode(-1);
    let Node = dummy;
    let flat = function(root){
        if(root === null)return;
        flat(root.left);
        Node.right = root;
        root.left = null;
        Node = root;
        flat(root.right);
    }
    flat(root);
    return dummy.right;
};



// 输入：root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
// 输出：[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]