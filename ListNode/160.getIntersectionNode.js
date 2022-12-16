// 160. 相交链表
// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。
// 图示两个链表在节点 c1 开始相交：
// a1->a2->c1->c2->c3
// b1->b2->b3->c1->c2->c3
// 题目数据 保证 整个链式结构中不存在环。
// 注意，函数返回结果后，链表必须 保持其原始结构 。
//Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}
// /**
//  * @param {ListNode} headA
//  * @param {ListNode} headB
//  * @return {ListNode}
//  */
var getIntersectionNode = function(headA, headB) {
    let l1=headA,l2=headB;
    while(l1!==l2){
        if(l1===null){
            l1=headB;
        }else{
            l1=l1.next;
        }
        if(l2===null){
            l2=headA;
        }else{
        l2=l2.next;
        }
    }
    return l1;
}