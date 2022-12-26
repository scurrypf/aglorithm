// 92. 反转链表 II
// 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。
// 请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let dummy = new ListNode(-1);
    dummy.next=head;
    let pre = dummy;
    for(let i=0;i<left-1;i++){
        pre = pre.next;
    }
    let rightNode = pre;
    for(let i=left-1;i<right;i++){
        rightNode = rightNode.next;
    }
    let leftList = pre.next;
    let cur = rightNode.next;
    pre.next = null;
    rightNode.next=null;
    reverse(leftList);
    leftList.next = cur;
    pre.next = rightNode;
    return dummy.next;
}
const reverse = function(head){
    let pre = null,cur = head;
    while(cur!==null){
        let tmp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = tmp;
    }
}

// 输入：head = [1,2,3,4,5], left = 2, right = 4
// 输出：[1,4,3,2,5]
// 输入：head = [5], left = 1, right = 1
// 输出：[5]