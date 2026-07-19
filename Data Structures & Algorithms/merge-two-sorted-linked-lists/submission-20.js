/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {

        let head1=list1;
        let head2=list2;
        let One=new ListNode(0);
        let curr=One;
        while(head1 && head2){
            if(head1.val<=head2.val){
                curr.next=head1;
                head1= head1.next
                
            }else{
                curr.next=head2;
                head2=head2.next;
            }
            curr=curr.next;

        }
        curr.next= head1? head1 : head2;

        return One.next;
    }
}
