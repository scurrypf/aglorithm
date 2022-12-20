// 24. 两两交换链表中的节点
// 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。
// 你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let dummy = new ListNode(-1);
    dummy.next=head;
    let l=dummy;
    while(l.next!==null && l.next.next!==null){
        let l1 = l.next,l2 = l.next.next;
        l1.next=l2.next;
        l.next=l2;
        l2.next=l1;
        l=l1;
    }
    return dummy.next;
}


// 输入：head = [1,2,3,4]
// 输出：[2,1,4,3]
// 输入：head = []
// 输出：[]
// 输入：head = [1]
// 输出：[1]