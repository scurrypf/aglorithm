// 剑指 Offer II 045. 二叉树最底层最左边的值
// 给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。
// 假设二叉树中至少有一个节点。
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    if(root === null)return null;
    let res = [], queue = [];
    queue.push(root);
    while(queue.length !== 0){
        let size = queue.length;
        res.push(queue[0].val)
        for(let i = 0; i < size; i++){
            let node = queue.shift();
            if(node.left !== null)queue.push(node.left);
            if(node.right !== null)queue.push(node.right);
        }
    }
    return res.pop();
}


// 输入: root = [2,1,3]
// 输出: 1
// 输入: [1,2,3,4,null,5,6,null,null,7]
// 输出: 7