/*
Valid Anagram
Easy
Topics
Company Tags
Hints
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: s = "racecar", t = "carrace"

Output: true
Example 2:

Input: s = "jar", t = "jam"

Output: false

*/


// studying this solution below and will do more work with hashmaps


class Solution {
    /**
     * Determines whether two strings are anagrams.
     * An anagram contains the exact same characters
     * with the same frequencies, but possibly in a different order.
     *
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        // If the strings are different lengths,
        // they cannot be anagrams.
        if (s.length !== t.length) return false;

        // Create an object to store character frequencies
        const count = {};

        // Count each character in string s
        for (let char of s) {
            // If the character already exists, increment it.
            // Otherwise, initialize it to 1.
            count[char] = (count[char] || 0) + 1;
        }

        // Decrease the count for each character in string t
        for (let char of t) {

            // If the character doesn't exist in count
            // or its frequency is already 0,
            // then t contains an extra character → not an anagram.
            if (!count[char]) return false;

            // Decrement the frequency
            count[char]--;
        }

        // If we made it here, all character counts matched
        return true;
    }
}
