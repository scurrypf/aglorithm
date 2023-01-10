// 889. 根据前序和后序遍历构造二叉树
// 给定两个整数数组，preorder 和 postorder ，其中 preorder 是一个具有 无重复 值的二叉树的前序遍历,
// postorder 是同一棵树的后序遍历，重构并返回二叉树。
// 如果存在多个答案，您可以返回其中 任何 一个。
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
    let map = new Map();
    for(let i = 0;i<postorder.length;i++){
        map.set(postorder[i],i)
    }
    const build = function(preorder,preStart,preEnd,postorder,postSart,postEnd){
        if(preStart > preEnd)return null;
        if(preStart == preEnd){
            return new TreeNode(preorder[preStart]);
        }
        let rootVal = preorder[preStart];
        let index = map.get(preorder[preStart + 1]);
        let leftSize = index - postSart + 1;
        let root = new TreeNode(rootVal);
        root.left = build(preorder,preStart + 1,preStart + leftSize,
                        postorder,postSart,index);
        root.right = build(preorder,preStart + leftSize + 1,preEnd,
                        postorder,index + 1,postEnd);
        return root;
    }
    return build(preorder,0,preorder.length - 1,postorder,0,postorder.length - 1)
}
// 输入：preorder = [1,2,4,5,3,6,7], postorder = [4,5,2,6,7,3,1]
// 输出：[1,2,3,4,5,6,7]