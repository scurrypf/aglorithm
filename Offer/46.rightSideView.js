// 剑指 Offer II 046. 二叉树的右侧视图
// 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(root === null)return [];
    let res = [], queue = [];
    queue.push(root);
    while(queue.length !== 0){
        let size = queue.length;
        for(let i = 0; i < size; i++){
            let node = queue.shift();
            if(i === size - 1)res.push(node.val);
            if(node.left !== null)queue.push(node.left);
            if(node.right !== null)queue.push(node.right);
        }
    }
    return res;
};



// 输入: [1,2,3,null,5,null,4]
// 输出: [1,3,4]
// 输入: [1,null,3]
// 输出: [1,3]