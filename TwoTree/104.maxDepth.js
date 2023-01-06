// 104. 二叉树的最大深度
// 给定一个二叉树，找出其最大深度。
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
// 说明: 叶子节点是指没有子节点的节点。
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    //解法一：遍历二叉树
    // let myDepth = 0,depth = 0;
    // const traverse = function(root){
    //     if(root === null) return;
    //     depth++;
    //     myDepth = Math.max(myDepth,depth);
    //     traverse(root.left);
    //     traverse(root.right);
    //     depth--;
    // }
    // traverse(root);
    // return myDepth;
    //解法二：直接在遍历的后续位置进行操作
    let myDepth = 0;
    if(root === null) return 0;
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    myDepth = Math.max(leftDepth,rightDepth);
    return myDepth+1;
}

const root = {
    val:3,
    left:{
        val:9,
        left:null,
        right:null,
    },
    right:{
        val:20,
        left:{
            val:15,
            left:null,
            right:null,
        },
        right:{
            val:7,
            left:null,
            right:null,
        }
    }
}

console.log(maxDepth(root));
// 示例：
// 给定二叉树 [3,9,20,null,null,15,7]，
// 返回它的最大深度 3 。

