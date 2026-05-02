class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //get array of strings ["act", "pots", "tops",...]
        //group all anagrams together into sublists [["act", "cat"],["pots", "tops"],...]
        //return output in any order

        //use an array of size(26) since the character set is a-z, to count the frequency of each character in a string
        // {
        //     a->1,
        //     b->2,
        //     c->3,
        //     ...
        // }
        // then use this array as the key in the hash map to group the strings

        let sorted = strs.map((str) => str.split("").sort().join(""))
        //map through the strings, turning each one into an array, sorting it and then joining it
        let map = {}
        //loop through the sorted array
        //check if the map contains the value. if not, add it to the map, and map it to the string values
        //if map already has those values, we just push the values into it
        for(let i = 0; i < sorted.length; i++){
            if(!map[sorted[i]]){
                map[sorted[i]] = [strs[i]]
            }else{
                map[sorted[i]].push(strs[i])
            }
        }
        //at this point we have an object that has key/value pairs
        //where the key is the sorted pairs and the values are the strings
        return Object.values(map)
    }
}
