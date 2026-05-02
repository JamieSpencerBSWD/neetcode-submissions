class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //make a new map
        const map = new Map();
        //iterate through the nums array
        for (let i = 0; i < nums.length; i++) {
            //complement is the number we need to get to reach the target 
            // for example: target = 9, nums[1] = 2, complement = 9-2 -> 7
            const complement = target - nums[i];
            //if weve seen the complement already, then we return the complement, and the current index
            if (map.has(complement)) {
                return [map.get(complement), i];
            }
            //if not, we store the number were currently on in the Map
            map.set(nums[i], i);
        }
    }
}
