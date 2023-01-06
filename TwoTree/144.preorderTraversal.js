// 144. 二叉树的前序遍历
// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let res = [];
    const traverse = function(root){
        if(root === null) return;
        res.push(root.val);
        traverse(root.left);
        traverse(root.right);
    }
    traverse(root);
    return res;
}

const root = {
    val:1,
    right:{
        val:2,
        left:{
            val:3,
            left:null,
            right:null,
        },
        right:null,
    },
    left:null,
}
console.log(preorderTraversal(root));

// 输入：root = [1,null,2,3]
// 输出：[1,2,3]
// 输入：root = []
// 输出：[]