// 25. K 个一组翻转链表
// 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。
// k 是一个正整数，它的值小于或等于链表的长度。
// 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
// 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(head == null)return head;
    let reverse = function(left, right){
        let pre = null, cur = left;
        // 反转时终止条件为right而非null
        while(cur !== right){
            let tmp = cur.next;
            cur.next = pre;
            pre = cur;
            cur = tmp;
        }
        return pre;
    }
    let left = head, right = head;
    for(let i = 0; i < k; i++){
        // 最后不足k个直接返回头结点
        if(right == null)return head;
        right = right.next;
    }
    let newHead = reverse(left, right);
    // 将原头结点的next接到后k个反转链表
    left.next = reverseKGroup(right, k);
    return newHead;
}


// 输入：head = [1,2,3,4,5], k = 2
// 输出：[2,1,4,3,5]