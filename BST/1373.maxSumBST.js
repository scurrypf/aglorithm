// 1373. 二叉搜索子树的最大键值和
// 给你一棵以 root 为根的 二叉树 ，请你返回 任意 二叉搜索子树的最大键值和。
// 二叉搜索树的定义如下：
// 任意节点的左子树中的键值都 小于 此节点的键值。
// 任意节点的右子树中的键值都 大于 此节点的键值。
// 任意节点的左子树和右子树都是二叉搜索树。
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxSumBST = function(root) {
    let maxSum = 0;//全局变量，返回最大键值和
    const findMax = (root)=>{
        let res = new Array(4);
        if(root === null){
            res[0] = 1;//是否是BST,1代表是，0代表不是
            res[1] = Infinity;//子树的最小值
            res[2] = -Infinity;//子树的最大值
            res[3] = 0;//BST的所有键值和
            return res;
        }
        let leftTree =  findMax(root.left);
        let rightTree = findMax(root.right);
        if(leftTree[0] === 1 && rightTree[0] === 1 && leftTree[2] < root.val && rightTree[1] > root.val){
            res[0] = 1;
            res[1] = Math.min(root.val,leftTree[1]);
            res[2] = Math.max(root.val,rightTree[2]);
            res[3] = leftTree[3] + rightTree[3] + root.val;
            maxSum = Math.max(maxSum,res[3]);//全局变量赋值
        }else{
            res[0] = 0;//不是BST直接置为0
        }
        return res;
    }
    findMax(root);
    return maxSum;
}

// 输入：root = [1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]
// 输出：20
// 解释：键值为 3 的子树是和最大的二叉搜索树。