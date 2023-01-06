// 543. 二叉树的直径
// 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。
// 这条路径可能穿过也可能不穿过根结点。
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    //解法一：遍历每个节点的最大直径
    let myDiam = 0;
    const traverse = function(root){
        if(root === null) return 0;
        let leftDepth = traverse(root.left);
        let rightDepth = traverse(root.right);
        myDiam = Math.max(myDiam,leftDepth + rightDepth);
        return Math.max(leftDepth,rightDepth) + 1;
    }
    traverse(root);
    return myDiam;
}

const root = {
    val:1,
    right:{
        val:3,
        left:null,
        right:null,
    },
    left:{
        val:2,
        left:{
            val:4,
            left:null,
            right:null,
        },
        right:{
            val:5,
            left:null,
            right:null,
        }
    }
}
console.log(diameterOfBinaryTree(root));
// 给定二叉树
//  1
// / \
// 2  3
// / \     
// 4  5  
// 返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。
// 注意：两结点之间的路径长度是以它们之间边的数目表示。