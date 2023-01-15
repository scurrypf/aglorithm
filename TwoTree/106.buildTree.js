// 106. 从中序与后序遍历序列构造二叉树
// 给定两个整数数组 inorder 和 postorder ，
// 其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let map = new Map();
    for(let i = 0;i<inorder.length;i++){
        map.set(inorder[i],i)
    }
    const build = function(inorder,inStart,inEnd,postorder,postStart,postEnd){
        if(inStart > inEnd) return null;
        let rootVal = postorder[postEnd];
        let index = map.get(rootVal);
        let leftSize = index - inStart;
        let root = new TreeNode(rootVal);
        root.left = build(inorder,inStart,index - 1,
                        postorder,postStart,postStart + leftSize - 1);
        root.right = build(inorder,index + 1,inEnd,
                        postorder,postStart + leftSize,postEnd - 1);
        return root;
    }
    return build(inorder,0,inorder.length - 1,postorder,0,postorder.length - 1);
}

// 输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// 输出：[3,9,20,null,null,15,7]
