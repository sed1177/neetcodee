/*
Longest Common Prefix
Easy
Topics
Company Tags
You are given an array of strings strs. Return the longest common prefix of all the strings.

If there is no longest common prefix, return an empty string "".

Example 1:

Input: strs = ["bat","bag","bank","band"]

Output: "ba"
Example 2:

Input: strs = ["dance","dag","danger","damage"]

Output: "da"
Example 3:

Input: strs = ["neet","feet"]

Output: ""
Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] is made up of lowercase English letters if it is non-empty.



*/

// STUDIED SOLUTION from gippity


class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (strs.length === 0) return "";

        // Start with the first string as a candidate prefix
        let prefix = strs[0];

        // Compare prefix with every other string
        for (let i = 1; i < strs.length; i++) {
            // Reduce the prefix until it matches the start of strs[i]
            while (strs[i].indexOf(prefix) !== 0) {
                prefix = prefix.slice(0, -1); // remove last character
                if (prefix === "") return ""; // no common prefix
            }
        }

        return prefix;
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.longestCommonPrefix(["bat","bag","bank","band"])); // "ba"
console.log(solution.longestCommonPrefix(["dance","dag","danger","damage"])); // "da"
console.log(solution.longestCommonPrefix(["neet","feet"])); // ""