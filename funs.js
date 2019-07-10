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
    },

    /**
     * 
     * @param {Array} arr 对象数组
     * @param {any} label 对象的要去重的字段
     */
    unqiue(arr, label) {
        let temp = [], tempLabel = [];
        for(var i=0; i<arr.length; i++) {
            if(!tempLabel.includes(arr[i][label])) {
                temp.push(arr[i]);
                tempLabel.push(arr[i][label]);
            }
        }
        return temp;
    }
}