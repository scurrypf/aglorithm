// 剑指 Offer II 044. 二叉树每层的最大值
// 给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    if(root === null)return [];
    let queue = [], res = [];
    queue.push(root);
    while(queue.length !== 0){
        let size = queue.length;
        let max = -Infinity; //因为有负数，所以max要定义为-Infinity
        for(let i = 0; i < size; i++){
            let node = queue.shift();
            if(node.left !== null){
                queue.push(node.left)
            }
            if(node.right !== null){
                queue.push(node.right)
            }
            max = Math.max(max, node.val);
        }
        res.push(max);
    }
    return res;
}

const root = [1,3,2,5,3,null,9];
console.log(largestValues(root));
// 输入: root = [1,3,2,5,3,null,9]
// 输出: [1,3,9]
// 输入: root = [1,2,3]
// 输出: [1,3]