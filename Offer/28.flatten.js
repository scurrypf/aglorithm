// 剑指 Offer II 028. 展平多级双向链表
// 多级双向链表中，除了指向下一个节点和前一个节点指针之外，它还有一个子链表指针，
// 可能指向单独的双向链表。这些子列表也可能会有一个或多个自己的子项，
// 依此类推，生成多级数据结构，如下面的示例所示。
// 给定位于列表第一级的头节点，请扁平化列表，即将这样的多级双向链表展平成普通的双向链表，使所有结点出现在单级双链表中。
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    let flat = (head)=>{
        let l1 = head;
        let tail = null;
        while(l1 !== null){
            let next = l1.next;
            if(l1.child){
                let child = l1.child;
                let childTail = flat(l1.child);
                // 打平之后将child置为null
                l1.child = null;
                l1.next = child;
                child.prev = l1;
                childTail.next = next;
                if(next)next.prev = childTail;
                tail = childTail;
            }else{
                tail = l1;
            }
            l1 = next;
        }
        return tail;
    }
    flat(head);
    return head;
}


// 输入：head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
// 输出：[1,2,3,7,8,11,12,9,10,4,5,6]