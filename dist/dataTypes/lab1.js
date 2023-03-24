const numArray = [1, 3, 5, 2, 7, 0];
const bubbleSort = (numArray, callback) => {
    for (let i = 0; i < numArray.length; i++) {
        for (let j = 0; j < numArray.length - i; j++) {
            if (callback(numArray[j], j) > callback(numArray[j + 1], j + 1)) {
                const temp = numArray[j];
                numArray[j] = numArray[j + 1];
                numArray[j + 1] = temp;
            }
        }
    }
    return numArray;
};
const sortedNumArray = bubbleSort(numArray, (item, index) => {
    return item;
});
console.log(sortedNumArray);
