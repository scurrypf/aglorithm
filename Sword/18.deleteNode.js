// 剑指 Offer 18. 删除链表的节点
// 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
// 返回删除后的链表的头节点。
// 注意：此题对比原题有改动
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    let n = 0, pre = head;
    while(pre !== null){
        if(pre.val === val){
            break;
        }
        n++;
        pre = pre.next;
    }
    if(n !== 0){
        let cur = head;
        for(let i = 0; i < n - 1; i++){
            cur = cur.next;
        }
        cur.next = cur.next.next;
    }else{
        return head.next;
    }
    return head;
}

const head = [4,5,1,9], val = 5;
console.log(deleteNode(head, val));
// 输入: head = [4,5,1,9], val = 5
// 输出: [4,1,9]
// 解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.