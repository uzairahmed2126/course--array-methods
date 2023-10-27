// // foreach method
// const numbers = [1, 2, 3, 4, 5];
// // it is a callback function and it have 3 parameters
// numbers.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

// const numbers1 = [1, 2, 3, 4, 5];
// numbers1.forEach((item, index, arr) => console.log(item, index, arr));

const letter = ['a', 'b', 'c', 'd', 'a', 'b'];
let count = {}
letter.forEach((item, index, arr) => {
    console.log(count[item] ? count[item]++ : count[item] = 1)
})
console.log(count)