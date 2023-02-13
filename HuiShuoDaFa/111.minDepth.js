// 111. 二叉树的最小深度
// 给定一个二叉树，找出其最小深度。
// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
// 说明：叶子节点是指没有子节点的节点。
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(root === null)return 0;
    let depth = 1;
    let queue = [];
    queue.push(root);
    while(queue.length){
        let sz = queue.length;
        for(let i = 0 ; i < sz ; i++){
            let root = queue.shift();
            if(root.left === null && root.right === null)return depth;
            if(root.left !== null){
                queue.push(root.left);
            }
            if(root.right !== null){
                queue.push(root.right)
            }
        }
        depth++;
    }
    return depth;
}


// 输入：root = [3,9,20,null,null,15,7]
// 输出：2
// 输入：root = [2,null,3,null,4,null,5,null,6]
// 输出：5