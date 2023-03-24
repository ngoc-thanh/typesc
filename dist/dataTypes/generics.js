function showData(a) {
    return a;
}
showData(10);
const stringArr = ["Thanh", "Duc"];
const WE17307 = (stringArr, callback) => {
    let temp = [];
    for (let i = 0; i < stringArr.length; i++) {
        const newItem = callback(stringArr[i], i);
        temp.push(newItem);
    }
    return temp;
};
const results = WE17307(stringArr, (item, index) => {
    return item + index;
});
console.log(results);
