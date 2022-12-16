// 142. 环形链表 II
// 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 
// 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
// 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
// 不允许修改 链表。
//Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
//思路：如果有环，则在fast追上slow是必然为2*slow,设slow走k步，则fast走2k步
//然后设环起点距slow距离为m，而环长又为fast-slow为k，而k-m正好为slow走环一圈到达起点
//这时，从head到达环起点也为k-m，所以另fast=head，然后一起向前，再相遇点即为环起点
var detectCycle = function(head) {
    let slow = head,fast = head;
    while(fast!==null && fast.next!==null){
        slow=slow.next;
        fast=fast.next.next;
        if(fast===slow){//判断是否有环
            fast=head;
            while(fast!==slow){
                fast=fast.next;
                slow=slow.next;
            }
            if(fast===slow){
                return slow;
            }
        }
    }
    return null;
}

const head = new ListNode([3,2,0,-4]);
console.log(detectCycle(head));

// 输入：head = [3,2,0,-4], pos = 1
// 输出：返回索引为 1 的链表节点
// 解释：链表中有一个环，其尾部连接到第二个节点。
// 输入：head = [1,2], pos = 0
// 输出：返回索引为 0 的链表节点
// 解释：链表中有一个环，其尾部连接到第一个节点。
// 输入：head = [1], pos = -1
// 输出：返回 null
// 解释：链表中没有环。