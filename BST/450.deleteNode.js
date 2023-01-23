// 450. 删除二叉搜索树中的节点
// 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，
// 并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。
// 一般来说，删除节点可分为两个步骤：
// 首先找到需要删除的节点；
// 如果找到了，删除它。
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    const getMax = (root) => {
        //这里是while循环！！！！
        while(root.right !== null)root = root.right;
        return root;
    }
    if(root === null)return null;
    if(root.val === key){
        if(root.left === null && root.right === null)return null;
        if(root.left === null)return root.right;
        if(root.right === null)return root.left;
        let Node = new TreeNode();
        //左子树中最大的节点(也可以是右子树中的最小节点)
        Node = getMax(root.left);
        //注意这里将节点删除之后需要返回
        root.left = deleteNode(root.left,Node.val);
        //由Node节点来接管root
        Node.right = root.right;
        Node.left = root.left;
        //返回这个节点
        return Node;
    }
    if(root.val > key)root.left = deleteNode(root.left,key);
    if(root.val < key)root.right = deleteNode(root.right,key);
    return root;
}
//删除节点时考虑四种情况：
//1.左右孩子皆为空，直接删掉这个节点(将其值为null)
//2.左孩子为空，直接返回右子树
//3.右孩子为空，直接返回左子树
//4.左右都不为空时，寻找左子树中的(right最大节点，由他来接管删除节点后的子树)  
//or 寻找右子树中的(left最小节点，由他来接管删除节点后的子树)

// 输入：root = [5,3,6,2,4,null,7], key = 3
// 输出：[5,4,6,2,null,null,7]
// 解释：给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。
// 一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。
// 另一个正确答案是 [5,2,6,null,4,null,7]。
