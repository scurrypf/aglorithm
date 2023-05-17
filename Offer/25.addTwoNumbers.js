// 剑指 Offer II 025. 链表中的两数相加
// 给定两个 非空链表 l1和 l2 来代表两个非负整数。数字最高位位于链表开始位置。
// 它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。
// 可以假设除了数字 0 之外，这两个数字都不会以零开头。
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let arr1 = [], arr2 = [];
    while(l1 !== null){
        arr1.push(l1.val);
        l1 = l1.next;
    }
    while(l2 !== null){
        arr2.push(l2.val);
        l2 = l2.next;
    }
    let carry = 0;
    let dummy = new ListNode(0);
    dummy.next = l1;
    while(arr1.length || arr2.length || carry > 0){
        let count = carry;
        if(arr1.length){
            count += arr1.pop();
        }
        if(arr2.length){
            count += arr2.pop();
        }
        if(count >= 10){
            count = count % 10;
            carry = 1;
        }else{
            carry = 0;
        }
        let node = new ListNode(count);
        node.next = dummy.next;
        dummy.next = node;
    }
    return dummy.next;
}


// 输入：l1 = [7,2,4,3], l2 = [5,6,4]
// 输出：[7,8,0,7]