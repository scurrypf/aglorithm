// 19. 删除链表的倒数第 N 个结点
// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
// * @param {ListNode} head
// * @param {number} n
// * @return {ListNode}

var removeNthFromEnd = function(head, n) {
    let slow=head,fast=head,test=head,t = 0;
    while(test!==null){
        t++;
        test=test.next;
    }
    if(t>n){
        for(let i=0;i<n+1;i++){
            fast=fast.next;
        }
        while(fast!==null){
            slow=slow.next;
            fast=fast.next;
        }
        slow.next=slow.next.next;
    }else if(t===n){
        head=head.next;
    }
    return head;
}

const head =new ListNode([1,2,3,4,5]), n = 2;
console.log(removeNthFromEnd(head,n));

// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]
// 输入：head = [1], n = 1
// 输出：[]
// 输入：head = [1,2], n = 1
// 输出：[1]