// 剑指 Offer 35. 复杂链表的复制
// 请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，
// 还有一个 random 指针指向链表中的任意节点或者 null。
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(head === null)return head;
    for(let p = head; p !== null; p = p.next.next){
        let nodeNew = new Node(p.val, p.next, null);
        p.next = nodeNew;
    }
    for(let p = head; p !== null; p = p.next.next){
        let nodeNew = p.next;
        nodeNew.random = (p.random !== null) ? p.random.next : null;
    }
    let newHead = head.next;// 这里赋值为head.next，否则会返回原链表
    for(let p = head; p !== null; p = p.next){
        let nodeNew = p.next;
        p.next = p.next.next;// 这里直接将p.next.next赋值给p.next，这样就可以直接迭代
        nodeNew.next = (nodeNew.next !== null) ? nodeNew.next.next : null;
    }
    return newHead;
}


// 输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// 输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]