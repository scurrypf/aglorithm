// 102. 二叉树的层序遍历
// 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if(root.length === 0)return null;
    let queue = [];
    let res = [];
    queue.push(root);
    while(queue.length !== 0){
        let size = queue.length;
        let ans = [];
        for(let i = 0; i < size; i++){
            let node = queue.shift();
            ans.push(node.val)
            if(node.left !== null)queue.push(node.left);
            if(node.right !== null)queue.push(node.right);
        }
        res.push(ans)
    }
    return res;
}


// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[3],[9,20],[15,7]]