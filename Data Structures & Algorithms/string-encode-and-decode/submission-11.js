class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str="";
        for(let i=0;i<strs.length;i++){
            let word=strs[i].length+"#"+strs[i];
            str+=word;
        }
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res=new Array();
        let i=0;
        while(i<str.length){
            let j=i;

            while(str[j]!=="#"){
                j++
            }

            let length=Number(str.slice(i,j));
            j++
            let word=str.slice(j,j+length)
            res.push(word);
            i=j+length;
        }
        return res

    }
}
