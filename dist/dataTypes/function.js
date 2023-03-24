// 1. Khai báo hàm (Function declaration)
function func1() {
    // Hoisting
    console.log("func1");
}
const func2 = function () {
    console.log("func2");
};
const func3 = () => {
    console.log("func3");
};
// 2. Function return
let num3;
// function divide(): number {
//     return;
// }
// const showName = function(): string {
//     return;
// }
const func4 = function () {
    console.log("4");
};
const showError = function () {
    const err = new Error("Something went wrong!");
    throw err;
};
// 3. Function parameter
function divide(a, b = 1) {
    return a / b;
}
console.log(divide(10));
const showName = function () {
    return "";
};
// 4. Rest parameter
function printClass(name, ...classes) {
    return `Sinh vien ${name} hoc lop ${classes.join(",")}`;
}
console.log(printClass("Thanh", "WE17307"));
// 5. Callback
// const result = numArr.map((item)=>{
//     return item*item
// })
// console.log(result);
const numArr = [1, 2, 3, 4, 5];
const WE17307_map = function (arr, callback) {
    const temp = [];
    for (let i = 0; i < arr.length; i++) {
        const newItem = callback(arr[i], i);
        temp.push(newItem);
    }
    return temp;
};
const result = WE17307_map(numArr, (item, index) => {
    return item * index;
});
console.log(result);
