/*
Two Sum
Easy
Topics
Company Tags
Hints
Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first.

Example 1:

Input: 
nums = [3,4,5,6], target = 7

Output: [0,1]
Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

*/
// studied solution below


class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        // Loop through each number
        for (let i = 0; i < nums.length; i++) {

            // Check every number after i
            for (let j = i + 1; j < nums.length; j++) {

                // If the pair adds up to target, return indices
                if (nums[i] + nums[j] === target) {
                    return [i, j]; // i is always smaller since j > i
                }
            }
        }
    }
}
