// // foreach method
// const numbers = [1, 2, 3, 4, 5];
// // it is a callback function and it have 3 parameters
// numbers.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

// const numbers1 = [1, 2, 3, 4, 5];
// numbers1.forEach((item, index, arr) => console.log(item, index, arr));

const letter = ['a', 'b', 'c', 'd', 'a', 'b'];
const obj = {a:['a', 'b', 'c', 'd', 'a', 'b'],b:[1,2,3,4,5]}
let count = {}
letter.forEach((item, index, arr) => {
    // count[item] ? count[item]++ : count[item] = 1
    count[item] ? count[item]++ : count[item]=1;
})
console.log(count);


obj.a.forEach(item => {
    count[item] ? count[item]++ : count[item]=1;
    // console.log(item);
});
console.log(count)