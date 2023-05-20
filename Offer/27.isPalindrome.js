// 剑指 Offer II 027. 回文链表
// 给定一个链表的 头节点 head ，请判断其是否为回文链表。
// 如果一个链表是回文，那么链表节点序列从前往后看和从后往前看是相同的。
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
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
    let slow = head, fast = head;
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    let tmp = fast === null ? slow : slow.next;
    let l1 = head, l2 = reverse(tmp);
    while(l1 && l2){
        if(l1.val !== l2.val)return false;
        l1 = l1.next;
        l2 = l2.next;
    }
    return true;
}


// 输入: head = [1,2,3,3,2,1]
// 输出: true
// 输入: head = [1,2]
// 输出: false