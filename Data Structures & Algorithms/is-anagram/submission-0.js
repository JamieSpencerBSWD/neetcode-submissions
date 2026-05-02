class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //anagrams are strings that have the same characters (racecar, carrace). order doesnt matter.
        //check if both strings are the same length
        if (s.length !== t.length){
            return false;
        }
        //store the character counts in a map
        let charMap = new Map()
        //iterate through the letters in s, and add them to the Map.
        for (let i=0;i < s.length; i++){
            charMap.set(s[i], (charMap.get(s[i]) || 0) +1)
            //set the charmap to whatever index of string s i is at
            //then we get the index (.get(s[i])), and set it to 0 if its empty, and add one.
            //were setting the map with a key value pair (the letter in s at index i = key), 
            //and if the map has the letter we put 0, else we add 1
        }
        //then, iterate through the letters in t, and remove one from the map
        for (let i=0;i < t.length; i++){
            //if the map doesnt have the letter in t, we return false.
            if(!charMap.has(t[i])){
                return false;
            }
            charMap.set(t[i], charMap.get(t[i]) - 1);
                //if the map DOES have the letter, remove 1 from that key/value pair
            
            //were setting the map with a key value pair (the letter = key), and if the map has the letter we put 0, else we add 1
        }

        for (let value of charMap.values()) {
            if (value !== 0) {
                //iterate through the maps values. If any value doesnt equal 0, we return false.
                return false;
            }
        }

        return true;
        //if everything removes cleanly and all the map's values are empty, return true
   }
}
