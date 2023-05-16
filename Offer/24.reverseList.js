// 剑指 Offer II 024. 反转链表
// 给定单链表的头节点 head ，请反转链表，并返回反转后的链表的头节点。
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let pre = null, cur = head;
    while(cur !== null){
        let tmp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = tmp;
    }
    return pre;
}


// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]