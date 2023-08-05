// 剑指 Offer 52. 两个链表的第一个公共节点
// 输入两个链表，找出它们的第一个公共节点。
// 如下面的两个链表：
// 在节点 c1 开始相交。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let l1 = headA, l2 = headB;
    while(l1 !== l2){
        if(l1 === null){
           l1 = headB 
        }else{
            l1 = l1.next;
        }
        if(l2 === null){
            l2 = headA
        }else{
            l2 = l2.next;
        }    
    }
    return l1;
};



// 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
// 输出：Reference of the node with value = 8
// 输入解释：相交节点的值为 8 （注意，如果两个列表相交则不能为 0）。
// 从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。
// 在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。