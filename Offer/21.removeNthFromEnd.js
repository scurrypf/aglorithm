// 剑指 Offer II 021. 删除链表的倒数第 n 个结点
// 给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let slow = head, fast = head, test = head, t = 0;
    while(test !== null){
        test = test.next;
        t++;
    }
    if(t < n){
        for(let i = 0; i < n + 1; i++){
            fast = fast.next;
        }
        while(fast !== null){
            slow = slow.next;
            fast = fast.next;
        }
        slow.next = slow.next.next;
    }else if(t == n){
        head = head.next;
    }
    return head;
}

const head = [1,2,3,4,5], n = 2;
console.log(removeNthFromEnd(head, n));
// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]
// 输入：head = [1], n = 1
// 输出：[] 