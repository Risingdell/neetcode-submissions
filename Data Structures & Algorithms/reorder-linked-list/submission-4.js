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
        if(head==null){return null}

        let slow=head;
        let fast=head;
        let first=head;
        
        while(fast.next && fast.next.next){
            slow=slow.next;
            fast=fast.next.next;
        }
        let second= slow.next;
        slow.next=null;

        let prev =null;
        let curr=second
        while(curr !==null){
            let next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next
        }
        

        
        while(prev !== null){
            let temp1=first.next;
            let temp2=prev.next;

            first.next=prev;
            prev.next=temp1;

            first= temp1;
            prev=temp2;

            

        }
        return first;

        



        
    }
}
