class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

      const map=new Map();

      for(let word of strs){
        let current=word.split('').sort().join('');

        if(!map.has(current)){
          map.set(current,[]);
        }

        map.get(current).push(word);
      }

      return Array.from(map.values());

    }
}
