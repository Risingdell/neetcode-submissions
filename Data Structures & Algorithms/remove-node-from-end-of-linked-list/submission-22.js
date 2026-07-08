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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if(!head|| n<1){
            return 0;
        }
        let i=0;
        let h=head;
        while(h!==null){
            i++;
            h=h.next
        }
        let dp=i-n+1;

        let prev=head;
        let curr=head;
        let ne=1;
        
        while(curr!==null){
            if(dp===1){
                return head.next;
            }
            
            if(ne===dp){
                prev.next=curr.next;
                break;
            }
            prev=curr;
            curr=curr.next;
            ne++;
            
            

           
        }
        return head


    }
}
