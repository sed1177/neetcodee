/*

Group Anagrams
Solved 
Medium
Topics
Company Tags
Hints
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
Example 2:

Input: strs = ["x"]

Output: [["x"]]
Example 3:

Input: strs = [""]

Output: [[""]]
Constraints:

1 <= strs.length <= 1000.
0 <= strs[i].length <= 100
strs[i] is made up of lowercase English letters.


*/

// neetcode

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        
        for (let str of strs) {

            // Sort characters to form the key
            const key = str.split('').sort().join('');
            
            // if the hashmap doesn't have a key
            if (!map.has(key)) {
                // set a new key
                map.set(key, []);
            }
            // push the original string into the group!
            map.get(key).push(str);
        }

        // return the values
        return Array.from(map.values());
    }
}