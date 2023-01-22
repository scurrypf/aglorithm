// 700. 二叉搜索树中的搜索
// 给定二叉搜索树（BST）的根节点 root 和一个整数值 val。
// 你需要在 BST 中找到节点值等于 val 的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 null 。
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let res = new TreeNode();
    res = null;
    const traverse = function(root,val){
        if(root === null)return null;
        if(root.val === val){
            res = root;
            return;
        }
        if(root.val > val)traverse(root.left,val);
        if(root.val < val)traverse(root.right,val);
    }
    traverse(root,val);
    return res;
}

// 输入：root = [4,2,7,1,3], val = 2
// 输出：[2,1,3]