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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {

        if(!lists || lists.length===0){
            return null;
        }

        //merging function
        function merge(l1,l2){
            let final=new ListNode(0);
            let tial=final;
            while(l1!=null && l2 !=null){
                if(l1.val<=l2.val){
                    tial.next=l1;
                    l1=l1.next;
                }else{
                    tial.next=l2;
                    l2=l2.next;
                }
                tial=tial.next;
            }
            tial.next=l1?l1:l2;

            return final.next;
        }

        while(lists.length>1){
            let rounded=[];
            for(let i=0;i<lists.length;i+=2){
                let l1=lists[i];
                let l2=(i+1<lists.length)?lists[i+1]:null
                rounded.push(merge(l1,l2))
            
            }
            lists=rounded;
        }
        return lists[0];
    }
    
}
