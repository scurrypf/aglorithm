// 2. 两数相加
// 给你两个 非空 的链表，表示两个非负的整数。
// 它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // 迭代
    // let dummy = new ListNode(-1);
    // let l = dummy;
    // let add = 0;
    // while(l1 !== null || l2 !== null || add !== 0){
    //     let val = add;
    //     if(l1 !== null){
    //         val += l1.val;
    //         l1 = l1.next;
    //     }
    //     if(l2 !== null){
    //         val += l2.val;
    //         l2 = l2.next;
    //     }
    //     if(val >= 10){
    //         val = val % 10;
    //         add = 1;
    //     }else{
    //         add = 0;
    //     }
    //     l.next = new ListNode(val);
    //     l = l.next;
    // }
    // return dummy.next;
    // 递归
    let dummy  = new ListNode(-1);
    let l = dummy;
    let add = 0;
    let addTwo = function(l, l1, l2, add){
        if(l1 === null && l2 === null && add === 0)return null;
        let val = add;
        if(l1 !== null){
            val += l1.val;
            l1 = l1.next;
        }
        if(l2 !== null){
            val += l2.val;
            l2 = l2.next;
        }
        if(val >= 10){
            val = val % 10;
            add = 1;
        }else{
            add = 0;
        }
        l.next = new ListNode(val);
        l = l.next;
        l = addTwo(l, l1, l2, add);
    }
    addTwo(l, l1, l2, add)
    return dummy.next;
}

// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.
// 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// 输出：[8,9,9,9,0,0,0,1]