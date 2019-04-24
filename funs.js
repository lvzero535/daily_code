const func = {
    /**
     * 利用Set成员唯一性，去掉arr重复成员。
     * @param {数组} arr 
     */
    dedupe(arr) {
        return Array.from(new Set(arr));
    },

    /**
     * 去数组一二的并集
     * @param {数组1} arr1 
     * @param {数组2} arr2 
     */
    union(arr1, arr2) {
        return [...new Set(...arr1, ...arr2)];
    },

    /**
     * 去数组一二的交集
     * @param {*} arr1 
     * @param {*} arr2 
     */
    intersect(arr1, arr2) {
        let a = new Set(arr2)
        return [...new Set(arr1.filter(x => a.has(x)))];
    }
}