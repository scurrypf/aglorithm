// 257. 二叉树的所有路径
// 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。
// 叶子节点 是指没有子节点的节点。
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(root === null)return [];
    let res = [], ans = [];
    let traverse = function(root){
        if(root === null)return;
        ans.push(root.val);
        if(root.left === null && root.right === null){
            res.push(ans.join('->'));
            ans.pop();
            return;
        }
        traverse(root.left);
        traverse(root.right);
        ans.pop();
    }
    traverse(root);
    return res;
};



// 输入：root = [1,2,3,null,5]
// 输出：["1->2->5","1->3"]