function showData<T>(a: T): T {
    return a
}
showData<number>(10)
const stringArr = ["Thanh", "Duc"]
const WE17307 = <T>(stringArr: T[], callback:(item: T, index: number) => T): T[]=> {
    let temp:T[] = []
    for (let i = 0; i < stringArr.length; i++) {
        const newItem = callback(stringArr[i], i);
        temp.push(newItem)
    }
    return temp
}
const results = WE17307(stringArr, (item, index)=> {
    return item + index
})
console.log(results);
