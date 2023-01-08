// 226. 翻转二叉树
// 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root === null) return null;
    const traverse = function(root){
        if(root === null) return;
        let left = root.left;
        root.left = root.right;
        root.right = left;
        traverse(root.left);
        traverse(root.right);
    }
    traverse(root);
    return root;
}

const root = {
    val:4,
    left:{
        val:2,
        left:{
            val:1,
            left:null,
            right:null,
        },
        right:{
            val:3,
            left:null,
            right:null,
        },
    },
    right:{
        val:7,
        left:{
            val:6,
            left:null,
            right:null,
        },
        right:{
            val:9,
            left:null,
            right:null,
        }
    }
}
console.log(invertTree(root));
// 输入：root = [4,2,7,1,3,6,9]
// 输出：[4,7,2,9,6,3,1]
// 输入：root = [2,1,3]
// 输出：[2,3,1]