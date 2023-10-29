const numbers1 = [1, 2, 3, 4, 5];
numbers1.map((val, ind, arr) => {
    return val*2
})
console.log(numbers1)


const numbers2 = [1, 2, 3, 4, 5];

numbers2.map((val, ind, arr) => {
    return val*2
})
console.log(numbers2)



const numbers3 = [1, 2, 3, 4, 5];

let a = numbers3.map((val, ind, arr) => {
    return val*2
})
console.log(a)


const numbers4 = [1, 2, 3, 4, 5];

numbers4.map((val, ind, arr) => {
    console.log(val*2)
    // return val*10
})
// console.log(numbers4)



// const products = [{
//     name: 'laptop',
//     price: 21000,
//     count: 2,
// }, {
//     name: 'desktop',
//     price: 30000,
//     count: 4,
// }, {
//     name: 'phone',
//     price: 10000,
//     count: 10,
// }]

// const totalProductValue = products.map(item => ({
//     name: item.name,
//     totalValue: item.price * item.count
// }));
// console.log(totalProductValue)

