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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
       let first=head;
       let second=head;

       while(second.next && second.next.next){
        first=first.next;
        second=second.next.next;
       }

       second=first.next;
       first.next=null;


       let prev=null;

       while(second){
        let next=second.next;
        second.next=prev;
        prev=second
        second=next;
       }


       first=head;
       while(prev){
        let nextfirst=first.next;
        let nextprev= prev.next;

        first.next=prev;
        prev.next=nextfirst;

        first=nextfirst;
        prev=nextprev
       }
       return first;
   
    }
}
