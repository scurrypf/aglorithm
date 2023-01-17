// 652. 寻找重复的子树
// 给你一棵二叉树的根节点 root ，返回所有 重复的子树 。
// 对于同一类的重复子树，你只需要返回其中任意 一棵 的根结点即可。
// 如果两棵树具有 相同的结构 和 相同的结点值 ，则认为二者是 重复 的。
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let map = new Map();
    let ans = [];
    const traverse = function(root){
        if(root === null)return 'null';
        let left = traverse(root.left);
        let right = traverse(root.right);
        let res = [];
        res.push(root.val);
        res.push(left);
        res.push(right);
        let subTree = res.toString();
        if(map.has(subTree)){
            map.set(subTree,map.get(subTree)+1);
        }else{
            map.set(subTree,0)
        }
        if(map.get(subTree) === 1){
            ans.push(root);
        }
        return subTree;
    }
    traverse(root);
    return ans;
}

// 输入：root = [1,2,3,4,null,2,4,null,null,4]
// 输出：[[2,4],[4]]
// 输入：root = [2,1,1]
// 输出：[[1]]