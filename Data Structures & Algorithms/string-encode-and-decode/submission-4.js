class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str="";
        for(let i=0;i<strs.length;i++){
            str += strs[i].length+ "#"+strs[i];

        }
        return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        let i=0;
        let res=[];
        while(i<str.length){
            let j=i;
            while(str[j]!='#'){
                j++
            }
            let length=Number(str.slice(i,j));
            res.push(str.slice(j+1,length+j+1));
            i= length+j+1;
        }
        return res;
        
    }
}
