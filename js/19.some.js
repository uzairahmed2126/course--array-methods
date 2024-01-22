const arr = [1, 2, 3, 4, 5];
let result = arr.some(even)
function even(item) {
    return item % 2 === 0;
}
console.log(result);



