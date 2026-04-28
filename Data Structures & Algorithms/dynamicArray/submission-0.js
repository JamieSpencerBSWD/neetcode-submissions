class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.array = new Array(this.capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.array[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.array[i] = n
        return this.array[i]
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if(this.size === this.capacity){
            this.resize()
        }
        //Insert (n) at index = size
        this.array[this.size] = n
        this.size = this.size + 1
    }

    /**
     * @returns {number}
     */
    popback() {
        let index = this.size - 1
        this.size = this.size - 1
        return this.array[index]
    }

    /**
     * @returns {void}
     */
    resize() {
        //Double capacity:

        // newCapacity = capacity * 2
        let newCapacity = this.capacity * 2
        
        // Create a NEW array with that size
        let tempArray = new Array(newCapacity)
        // Copy elements from old array → new array (only up to size)
        tempArray = [...this.array]
        // Replace old array
        this.array = tempArray
        // Update capacity
        this.capacity = newCapacity
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity
    }
}
