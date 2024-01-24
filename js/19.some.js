const arr = [1, 2, 3, 4, 5];
// let result = arr.some(even)
// function even(item) {
//     return item % 2 === 0;
// }
// console.log(result);

let result;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
        result = true;
    }
    result = false;
}
console.log(result);