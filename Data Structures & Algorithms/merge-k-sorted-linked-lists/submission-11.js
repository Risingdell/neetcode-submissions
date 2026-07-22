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
        if(!lists|| lists.length===0){return null}

        //merge function
        function mergeList(l1,l2){
            
            let final=new ListNode(0);
            let tail=final;
            while(l1!=null && l2!=null){
                if(l1.val<=l2.val){
                    tail.next=l1;
                    l1=l1.next;
                }else{
                    tail.next=l2;
                    l2=l2.next;
                }
                tail=tail.next;
            }
            tail.next= l1 ?l1 : l2;
            return final.next;
        }
        //recursion to return the updated meged list

        while(lists.length>1){
            let rounded=[];
            for(let i=0;i<lists.length;i+=2){
                let l1=lists[i];
                let l2=(i+1<lists.length)?lists[i+1]:null;
                rounded.push(mergeList(l1,l2))
            }
            lists=rounded
        }

        return lists[0];

    }
}
