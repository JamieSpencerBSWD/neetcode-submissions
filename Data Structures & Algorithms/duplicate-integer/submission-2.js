class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set()
        let hasDuplicate = false;
        for (const num of nums) {
            if(!set.has(num)){
                set.add(num)
            }else{
                hasDuplicate = true;
                break;
            } 
        }
        return hasDuplicate;
    }
}