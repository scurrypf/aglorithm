// 958. 二叉树的完全性检验
// 给定一个二叉树的 root ，确定它是否是一个 完全二叉树 。
// 在一个 完全二叉树 中，除了最后一个关卡外，所有关卡都是完全被填满的，
// 并且最后一个关卡中的所有节点都是尽可能靠左的。它可以包含 1 到 2h 节点之间的最后一级 h 。
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function (root) {
    let queue = [], n = 0;
    queue.push({node: root, index: 1});
    while(queue.length !== 0){
        let size = queue.length;
        for(let i = 0; i < size; i++){
            let node = queue.shift();
            n++;
            if(n !== node.index)return false;
            if(node.node.left !== null)queue.push({node:node.node.left, index: (node.index) * 2});
            if(node.node.right !== null)queue.push({node:node.node.right, index: (node.index) * 2 + 1})
        }
    }
    return true;
}

let root = [1,2,3,4,5,6];
console.log(isCompleteTree(root));
// 输入：root = [1,2,3,4,5,6]
// 输出：true
// 解释：最后一层前的每一层都是满的（即，结点值为 {1} 和 {2,3} 的两层），且最后一层中的所有结点（{4,5,6}）都尽可能地向左。
// 输入：root = [1,2,3,4,5,null,7]
// 输出：false
// 解释：值为 7 的结点没有尽可能靠向左侧。