// 23. 合并K个升序链表
// 给你一个链表数组，每个链表都已经按升序排列。
// 请你将所有链表合并到一个升序链表中，返回合并后的链表。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length===0){
        return null;
    }
    let dummy = new ListNode(-10000);
    dummy.next=lists[0];
    let l=dummy;
    for(let i=1;i<lists.length;i++){
        let ll=l;
        l=merge(lists[i],ll);
    }
    return dummy.next;
}
function merge(l1,l2){
    let dummy = new ListNode(-10000);
    dummy.next=lists[0];
    let l=dummy;
    while(l1!==null && l2!==null){
        if(l2.val<l1.val){
            l.next=l2;
            l2=l2.next;
        }else{
            l.next=l1;
            l1=l1.next;
        }
        l=l.next;
    }
    if(l1!==null)l.next=l1;
    if(l2!==null)l.next=l2;
    return dummy.next;
}


// 输入：lists = [[1,4,5],[1,3,4],[2,6]]
// 输出：[1,1,2,3,4,4,5,6]
// 解释：链表数组如下：
// [   1->4->5,
//     1->3->4,
//     2->6    ]
// 将它们合并到一个有序链表中得到。
// 1->1->2->3->4->4->5->6
// 输入：lists = []
// 输出：[]
// 输入：lists = [[]]
// 输出：[]