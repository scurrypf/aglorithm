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