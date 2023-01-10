// 105. 从前序与中序遍历序列构造二叉树
// 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历,
// 请构造二叉树并返回其根节点。
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let map = new Map();
    for(let i = 0;i<inorder.length;i++){
        map.set(inorder[i],i)
    }
    const build = function(preorder,preStart,preEnd,inorder,inStart,inEnd){
        if(preStart > preEnd)return null;
        let rootVal = preorder[preStart];
        let index = map.get(rootVal);
        let leftSize = index - inStart;
        let root = new TreeNode(rootVal);
        root.left = build(preorder,preStart + 1,preStart + leftSize,
                        inorder,inStart,index - 1);
        root.right = build(preorder,preStart + leftSize + 1,preEnd,
                        inorder,index + 1,inEnd);
        return root;
    }
    return build(preorder,0,preorder.length - 1,inorder,0,inorder.length - 1);
}

// 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// 输出: [3,9,20,null,null,15,7]
