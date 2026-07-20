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
        //initialize the   linked list sfirst ands second

        let first=head;
        let second=head;

        while(second.next !== null && second.next.next !==null){
            second=second.next.next;
            first=first.next
        }
         second=first.next;
         first.next=null;
        //revers ethe secod list
        let prev=null;
        while(second ){
            let next=second.next;
            second.next=prev;
            prev=second;
            second=next;
        }
        // takde the first and replace in place 
        //we'll take the seconfd i,e prev while prev not end the 

        first=head
        while(prev){
            let firstNext=first.next;
            let secondNext=prev.next;

            first.next=prev;
            prev.next=firstNext;


            first= firstNext;
            prev=secondNext;
        }
        return first
    }
}
