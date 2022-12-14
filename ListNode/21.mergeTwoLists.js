// 21. 合并两个有序链表
// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
// /**
//  * @param {ListNode} list1
//  * @param {ListNode} list2
//  * @return {ListNode}
//  */
var mergeTwoLists = function(list1, list2) {
    let l1=list1,l2=list2;
    let dummy=new ListNode(-1),l=dummy;
    while(l1!=null && l2!=null){
        if(l1.val>l2.val){
            l.next=l2;
            l2=l2.next;
        }else{
            l.next=l1;
            l1=l1.next;
        }
        l=l.next;
    }
    if(l1!==null){
        l.next=l1;
    }
    if(l2!==null){
        l.next=l2;
    }
    return dummy.next;
};
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const l1=new ListNode([1,2,4]), l2 =new ListNode([1,3,4]);
console.log(mergeTwoLists(l1,l2))


// 输入：l1 = [1,2,4], l2 = [1,3,4]
// 输出：[1,1,2,3,4,4]
// 输入：l1 = [], l2 = []
// 输出：[]
// 输入：l1 = [], l2 = [0]
// 输出：[0]