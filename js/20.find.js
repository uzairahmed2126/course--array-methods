const arr = [1, 2, 3, 4, 5];
let result = arr.find(findEven);
function findEven(e) {
    return e % 2 === 0;
}
console.log(result);