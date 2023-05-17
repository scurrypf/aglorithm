// 剑指 Offer II 026. 重排链表
// 给定一个单链表 L 的头节点 head ，单链表 L 表示为：
//  L0 → L1 → … → Ln-1 → Ln 
// 请将其重新排列后变为：
// L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …
// 不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let reverse = function(head){
        let pre = null, cur = head;
        while(cur !== null){
            let tmp = cur.next;
            cur.next = pre;
            pre = cur;
            cur = tmp;
        }
        return pre;
    }
    let dummy = new ListNode(0);
    dummy.next = head;
    let slow = dummy, fast = dummy;
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    let tmp = slow.next;
    slow.next = null;
    let l = dummy;
    let l1 = head, l2 = reverse(tmp);
    while(l1 && l2){
        let next = l1.next;
        l.next = l1;
        l1.next = l2;
        l = l2;
        l1 = next;
        l2 = l2.next;
    }
    if(l1)l.next = l1;
    return dummy.next;
}

// 输入: head = [1,2,3,4]
// 输出: [1,4,2,3]