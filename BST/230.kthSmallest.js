// 230. 二叉搜索树中第K小的元素
// 给定一个二叉搜索树的根节点 root ，和一个整数 k ，
// 请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let id = 0,res;
    // res = null;
    const traverse = (root,k)=>{
        if(root === null)return;
        traverse(root.left,k);
        id++;
        if(id === k){
            res = root.val;
            return;
        }
        traverse(root.right,k);
    }
    traverse(root,k);
    return res;
}

// 输入：root = [3,1,4,null,2], k = 1
// 输出：1
// 输入：root = [5,3,6,2,4,null,null,1], k = 3
// 输出：3