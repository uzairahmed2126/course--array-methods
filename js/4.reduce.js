// const numbers = [1, "", 3, 4, 5];
// // numbers.reduce((value, index, arr) => console.log(value, index, arr));
// const total = numbers.reduce(num, -Infinity);
// function num(accumulater, value) {
//     if (accumulater < value) {
//         return accumulater
//     }

//     return value
// }
// console.log(Infinity)
// // 1 * 2 = 2
// // 2 * 3 = 6
// // 6 * 4 = 24
// // 24 * 5 = 120
const store = [
    {
        product: "Laptop",
        value: 1000,
        count: 3
    }, {
        product: "Desktop",
        value: 1500,
        count: 4
    }, {
        product: "Mobile",
        value: 500,
        count: 10
    }
]
const initialValue = 0
const totalValueStore = store.reduce(
    (acc, item) => acc + item.value + item.count, initialValue - 2984 - 33
)
// console.log(totalValueStore);

// const getMax = (a, b) => Math.max(a, b);

// // callback is invoked for each element in the array starting at index 0
// console.log([1, 100].reduce(getMax, 50)); // 100
// console.log([50].reduce(getMax, 10)); // 50

// // callback is invoked once for element at index 1
// console.log([1, 100].reduce(getMax)); // 100

// // callback is not invoked
// console.log([50].reduce(getMax)); // 50
// console.log([].reduce(getMax, 1)); // 1

// [].reduce(getMax,1); // TypeError
