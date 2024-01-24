// const arr = [1, 2, 3, 4, 5];
// let result = arr.find(findEven);
// function findEven(e) {
//     return e % 2 === 0;
// }
// console.log(result);

const numbers = [1, 2, 3, 4, 5];
let ans = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 3) {
        ans.push(numbers[i]);
    }
}
console.log(ans)

