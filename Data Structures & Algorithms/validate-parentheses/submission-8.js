class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let stack = [];

        let map = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        for (let i = 0; i < s.length; i++) {

            let ch = s[i];

            // opening brackets
            if (ch === '(' || ch === '{' || ch === '[') {
                stack.push(ch);
            }

            // closing brackets
            else {

                // last opened bracket
                let top = stack.pop();

                if (top !== map[ch]) {
                    return false;
                }
            }
        }

        // all brackets should be matched
        return stack.length === 0;
    }
}